import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { submitQuoteForm } from "@/lib/formSubmission";
import { useToast } from "@/hooks/use-toast";

type QuickQuoteCampaign = "C1" | "C2";

interface QuickQuoteFormProps {
  campaign: QuickQuoteCampaign;
  variant?: "hero" | "section";
  redirectTo?: string;
}

const initialState = {
  name: "",
  phone: "",
  email: "",
  location: "",
};

export const QuickQuoteForm = ({
  campaign,
  variant = "section",
  redirectTo = "/thank-you?type=quick-quote",
}: QuickQuoteFormProps) => {
  const [form, setForm] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (field: keyof typeof initialState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.location) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await submitQuoteForm({
        name: form.name,
        phone: form.phone,
        email: form.email,
        pickupLocation: form.location,
        dropoffLocation: "",
        vehicleType: "",
        serviceType: campaign === "C2" ? "heavy-duty" : "light-medium",
        notes: "",
        urgency: "",
      });

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "quote_submit", {
          send_to: "AW-17927335103",
          campaign,
          source: "landing_page",
        });
      }

      toast({
        title: "Request received",
        description: "We will contact you shortly with a quick quote.",
      });
      setForm(initialState);

      // Slight delay to give analytics a moment before navigation
      setTimeout(() => {
        navigate(redirectTo);
      }, 200);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again or call 650-881-2400.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const wrapperClasses =
    variant === "hero"
      ? "bg-card/95 border border-border rounded-2xl p-6 md:p-7 shadow-lg backdrop-blur max-w-md w-full mx-auto"
      : "bg-card border border-border rounded-2xl p-5 md:p-6 shadow-sm max-w-md w-full mx-auto";

  return (
    <section aria-label="Quick quote form" className="w-full">
      <div className={wrapperClasses}>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          {campaign === "C2" ? "Fleet & Heavy-Duty Quick Quote" : "60-Second Quick Tow Quote"}
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Share a few details and we will call or email you back with pricing. No obligation.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <div>
              <Label htmlFor={`qq-name-${campaign}`}>Name *</Label>
              <Input
                id={`qq-name-${campaign}`}
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your name"
                className="h-11 md:h-12"
                required
              />
            </div>
            <div>
              <Label htmlFor={`qq-phone-${campaign}`}>Phone Number *</Label>
              <Input
                id={`qq-phone-${campaign}`}
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="(650) 881-2400"
                className="h-11 md:h-12"
                required
              />
            </div>
            <div>
              <Label htmlFor={`qq-email-${campaign}`}>Email *</Label>
              <Input
                id={`qq-email-${campaign}`}
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@example.com"
                className="h-11 md:h-12"
                required
              />
            </div>
            <div>
              <Label htmlFor={`qq-location-${campaign}`}>Location *</Label>
              <Input
                id={`qq-location-${campaign}`}
                value={form.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="City or city + ZIP"
                className="h-11 md:h-12"
                required
              />
            </div>
          </div>
          <Button
            type="submit"
            variant="hero"
            className="w-full mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Request Quick Quote"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default QuickQuoteForm;


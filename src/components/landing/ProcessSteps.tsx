import { Phone, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const C1_STEPS = [
  {
    step: 1,
    title: "Call Our 24/7 Dispatch",
    desc: "One call connects you to a live dispatcher — not a machine, not an app. Tell us your location and vehicle type. We find the closest available rig and dispatch immediately.",
    phone: true,
  },
  {
    step: 2,
    title: "We Confirm & Dispatch",
    desc: "You'll receive your ETA within 60 seconds. Our dispatcher stays on standby until the driver arrives. Real-time location updates available on request. You are never left wondering.",
  },
  {
    step: 3,
    title: "Expert Driver Arrives",
    desc: "Experienced, uniformed driver on the right rig for your vehicle. Secure loading, walkthrough on arrival, transparent pricing before anything moves. No surprises.",
    icon: Truck,
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            3 Steps. 15 Minutes. You&apos;re Moving Again.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No guessing. No waiting on hold. Just one call.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-4 relative">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-primary/40 pointer-events-none" aria-hidden />
          {C1_STEPS.map((item, index) => (
            <div
              key={index}
              className="flex flex-row md:flex-col items-start md:items-center md:text-center w-full md:w-1/3 relative z-10 gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center md:mb-4 shadow-lg">
                {item.icon ? (
                  <item.icon className="w-7 h-7 md:w-9 md:h-9" aria-hidden />
                ) : (
                  <span className="text-2xl md:text-3xl font-bold">{item.step}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground text-lg md:text-xl mb-1 md:mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground md:max-w-xs md:mx-auto">{item.desc}</p>
                {item.phone && (
                  <a href="tel:+16508812400" className="mt-2 inline-block text-primary font-semibold hover:underline">
                    650-881-2400
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-xl bg-muted/50 border border-border text-center">
          <p className="text-foreground font-semibold text-lg mb-4">Ready to get started?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="tel:+16508812400">
                <Phone className="w-4 h-4 mr-2" />
                CALL NOW
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/get-a-quote">Get a Fast Quote Online</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

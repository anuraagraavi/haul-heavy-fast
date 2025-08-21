import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle, FileText, Upload, Clock, Shield, DollarSign } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitQuoteForm } from "@/lib/formSubmission";
import { useNavigate } from "react-router-dom";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupLocation: "",
    dropoffLocation: "",
    vehicleType: "",
    serviceType: "",
    notes: "",
    urgency: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitQuoteForm(formData);
      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 15 minutes with your quote.",
      });
      navigate('/thank-you?type=quote');
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at 650-881-2400.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise charges. You'll know the exact cost upfront."
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "Most quotes processed within 15 minutes during business hours."
    },
    {
      icon: Shield,
      title: "No Obligation",
      description: "Get your quote with no commitment. Compare and decide what's best for you."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Get Your
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Free Quote
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Get transparent, upfront pricing for your towing needs. Our team will provide 
                a detailed quote based on your specific situation - no hidden fees, no surprises.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="text-center">
                      <IconComponent className="w-8 h-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Quote Request Form</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(415) 555-0123"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Location Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="pickup">Pickup Location *</Label>
                        <Input
                          id="pickup"
                          value={formData.pickupLocation}
                          onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                          placeholder="Street address or intersection"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="dropoff">Drop-off Location</Label>
                        <Input
                          id="dropoff"
                          value={formData.dropoffLocation}
                          onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                          placeholder="Destination address (optional)"
                        />
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="vehicle-type">Vehicle Type *</Label>
                        <Select onValueChange={(value) => handleInputChange("vehicleType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="car">Car / Sedan</SelectItem>
                            <SelectItem value="suv">SUV / Crossover</SelectItem>
                            <SelectItem value="motorcycle">Motorcycle</SelectItem>
                            <SelectItem value="van">Van / Cargo Vehicle</SelectItem>
                            <SelectItem value="truck">Pickup Truck</SelectItem>
                            <SelectItem value="box-truck">Box Truck</SelectItem>
                            <SelectItem value="rv">RV / Motorhome</SelectItem>
                            <SelectItem value="semi">Semi-truck / Tractor-trailer</SelectItem>
                            <SelectItem value="bus">Bus / Coach</SelectItem>
                            <SelectItem value="equipment">Heavy Equipment</SelectItem>
                            <SelectItem value="other">Other (specify in notes)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="service-type">Service Type *</Label>
                        <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service needed" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard-tow">Standard Towing</SelectItem>
                            <SelectItem value="flatbed">Flatbed Service</SelectItem>
                            <SelectItem value="wheel-lift">Wheel Lift Towing</SelectItem>
                            <SelectItem value="heavy-duty">Heavy-Duty Hauling</SelectItem>
                            <SelectItem value="recovery">Recovery / Winch-out</SelectItem>
                            <SelectItem value="transport">Vehicle Transport</SelectItem>
                            <SelectItem value="private-property">Private Property Removal</SelectItem>
                            <SelectItem value="not-sure">Not Sure (help me choose)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="urgency">When do you need service?</Label>
                      <Select onValueChange={(value) => handleInputChange("urgency", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (ASAP)</SelectItem>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="tomorrow">Tomorrow</SelectItem>
                          <SelectItem value="this-week">This Week</SelectItem>
                          <SelectItem value="next-week">Next Week</SelectItem>
                          <SelectItem value="flexible">Flexible / Planning Ahead</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="notes">Additional Details</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => handleInputChange("notes", e.target.value)}
                        placeholder="Any special circumstances, vehicle conditions, or additional information that would help us provide an accurate quote..."
                        rows={4}
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <Label htmlFor="images">Photos (Optional)</Label>
                      <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Upload photos of your vehicle or situation to help us provide a more accurate quote
                        </p>
                        <Button variant="outline" size="sm" type="button">
                          Choose Files
                        </Button>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button type="submit" variant="hero" size="lg" className="flex-1" disabled={isSubmitting}>
                        <FileText className="w-5 h-5 mr-2" />
                        {isSubmitting ? "Submitting..." : "Get My Quote"}
                      </Button>
                      <Button type="button" variant="outline" size="lg">
                        <Phone className="w-5 h-5 mr-2" />
                        Call Instead
                      </Button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Emergency Contact */}
                <div className="bg-gradient-primary rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Need Help Right Now?</h3>
                  <p className="mb-4 text-white/90">
                    For immediate assistance or emergency situations, skip the form and call us directly.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full bg-white text-primary border-white hover:bg-gray-100" asChild>
                      <a href='tel:650-881-2400'>
                        <Phone className='w-4 h-4 mr-2' />
                        650-881-2400
                      </a>
                    </Button>
                    <Button variant="secondary" className="w-full" asChild>
                      <a href="/contact">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Contact Form
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Quote Process */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Submit Details</p>
                        <p className="text-xs text-muted-foreground">Fill out the form with your situation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Quick Review</p>
                        <p className="text-xs text-muted-foreground">Our team reviews and prepares your quote</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Receive Quote</p>
                        <p className="text-xs text-muted-foreground">Get your detailed quote within 15 minutes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Promise */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Our Pricing Promise</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">No hidden fees or charges</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Transparent, upfront pricing</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Quote valid for 7 days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetQuote;
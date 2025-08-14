import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/formSubmission";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
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
      await submitContactForm(formData);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      navigate('/thank-you?type=contact');
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

  const contactMethods = [
    {
      icon: Phone,
      title: "Emergency Dispatch",
      description: "24/7 emergency towing and recovery",
      action: "650-881-2400",
      urgent: true
    },
    {
      icon: MessageCircle,
      title: "Contact Form",
      description: "Quick responses for non-emergency inquiries",
      action: "Send Message",
      urgent: false
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "General inquiries and fleet contracts",
      action: "dispatch@heavyhaulerssf.com",
      urgent: false
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
    { day: "Emergency Dispatch", hours: "24/7 Available" }
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
                Contact
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Heavy Haulers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Need immediate help? Call our 24/7 emergency dispatch. For general inquiries, 
                fleet contracts, or to schedule non-emergency services, we're here to help.
              </p>
              <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium text-foreground">24/7 Emergency Dispatch Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the best way to reach us based on your needs. For emergencies, 
                always call our dispatch line for the fastest response.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className={`bg-card border rounded-2xl p-8 text-center hover:shadow-elevated transition-all duration-300 ${method.urgent ? 'border-primary bg-primary/5' : 'border-border'}`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${method.urgent ? 'bg-gradient-primary' : 'bg-secondary'}`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{method.title}</h3>
                    <p className="text-muted-foreground mb-6">{method.description}</p>
                    <Button variant={method.urgent ? "hero" : "outline"} className="w-full">
                      {method.action}
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* Quick Emergency Banner */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white mb-16">
              <h3 className="text-2xl font-bold mb-4">Emergency Towing Right Now?</h3>
              <p className="text-white/90 mb-6">
                Don't wait - if you're stranded or in an emergency situation, call immediately for priority dispatch.
              </p>
              <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Call 650-881-2400
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Use this form for general inquiries, fleet contracts, or to schedule non-emergency services. 
                  For immediate assistance, please call our dispatch line.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        placeholder="650-881-2400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Office Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Office Hours</h2>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="space-y-4">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className={`flex justify-between items-center pb-4 ${index < officeHours.length - 1 ? 'border-b border-border' : ''} ${schedule.day === 'Emergency Dispatch' ? 'bg-primary/10 -mx-6 -mb-6 px-6 pt-4 pb-6 rounded-b-xl' : ''}`}>
                          <span className={`font-medium ${schedule.day === 'Emergency Dispatch' ? 'text-primary' : 'text-foreground'}`}>
                            {schedule.day}
                          </span>
                          <span className={`${schedule.day === 'Emergency Dispatch' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Service Area</h3>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">San Francisco Bay Area</h4>
                        <p className="text-muted-foreground text-sm">
                          Serving all of San Francisco, San Mateo, Alameda, and Santa Clara counties
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• San Francisco County - All districts</p>
                      <p>• San Mateo County - Peninsula communities</p>
                      <p>• Alameda County - East Bay areas</p>
                      <p>• Santa Clara County - Silicon Valley & South Bay</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Fleet Inquiries - Full Width Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Fleet Inquiries</h2>
              <div className="bg-card border border-border rounded-xl p-8">
                <p className="text-muted-foreground mb-6 text-center">
                  Looking for fleet contracts or commercial towing agreements? We offer:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Priority dispatch for business vehicles</li>
                    <li>• Volume pricing for fleet operations</li>
                  </ul>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Service level agreements (SLAs)</li>
                    <li>• Dedicated account management</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Button variant="outline" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    fleet@heavyhaulerssf.com
                  </Button>
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

export default Contact;
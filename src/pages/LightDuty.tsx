import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Car, Bike, Crown, Building, CheckCircle, Clock, Shield, Star } from "lucide-react";

const LightDuty = () => {
  const services = [
    {
      id: "flatbed",
      icon: Car,
      title: "Flatbed Tow Service",
      description: "Secure flatbed transport for vehicles that can't be towed traditionally or need extra protection during transport.",
      benefits: ["No wheel lift damage", "Secure tie-down points", "Weather protection", "Safe for low-clearance vehicles"]
    },
    {
      id: "motorcycle", 
      icon: Bike,
      title: "Motorcycle Towing",
      description: "Specialized motorcycle transport with proper tie-down equipment and experienced operators who understand bike handling.",
      benefits: ["Specialized bike restraints", "Experienced operators", "No scratches or damage", "Quick pickup times"]
    },
    {
      id: "exotic",
      icon: Crown,
      title: "Luxury & Exotic Car Transport",
      description: "Premium handling for high-value vehicles with soft-tie systems and specialized equipment for low-clearance supercars.",
      benefits: ["Soft-tie protection", "Low-clearance expertise", "Premium insurance", "White-glove service"]
    },
    {
      id: "private-property",
      icon: Building,
      title: "Private Property Vehicle Removal", 
      description: "Professional removal services for property managers, HOAs, and business owners dealing with unauthorized parking.",
      benefits: ["Legal compliance", "Property manager contracts", "Quick response", "Professional documentation"]
    }
  ];

  const steps = [
    { step: "1", title: "Call or Contact", description: "Reach out via phone, app, or website" },
    { step: "2", title: "Dispatch", description: "We locate the nearest available operator" },
    { step: "3", title: "Arrival", description: "Professional operator arrives with proper equipment" },
    { step: "4", title: "Transport", description: "Safe, secure transport to your destination" }
  ];

  const faqs = [
    {
      question: "How quickly can you respond to light-duty calls?",
      answer: "Most light-duty calls receive response within 15-30 minutes in our primary service areas. Emergency situations get priority dispatch."
    },
    {
      question: "Do you handle exotic and luxury vehicles?",
      answer: "Yes, we specialize in high-value vehicle transport with specialized equipment, soft-tie systems, and operators trained in luxury car handling."
    },
    {
      question: "What's included in flatbed service?",
      answer: "Complete vehicle loading, secure tie-down, weather protection during transport, and safe unloading at destination."
    },
    {
      question: "Can you help with private property towing?",
      answer: "Absolutely. We work with property managers, HOAs, and businesses to provide legal, professional vehicle removal services."
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
                Light-Duty Vehicle
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Towing
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Professional towing for cars, SUVs, motorcycles, and specialty vehicles. Whether you're 
                dealing with a breakdown, accident, or need transport for a luxury vehicle, we handle 
                every light-duty job with care and expertise.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 650-881-2400
                </Button>
                <Button variant="secondary" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Light-Duty Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From everyday breakdowns to specialty vehicle transport, we have the right 
                equipment and expertise for every light-duty towing need.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} id={service.id} className="scroll-mt-24">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-5 h-5 text-success" />
                              <span className="text-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline">
                          Request This Service
                        </Button>
                      </div>
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className="bg-card border border-border rounded-2xl p-8 h-64 flex items-center justify-center">
                          <IconComponent className="w-32 h-32 text-muted-foreground/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Light-Duty Towing Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our streamlined process gets you back on the road quickly and safely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Choose Heavy Haulers for Light-Duty?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Fast Response</h3>
                  <p className="text-muted-foreground">Average 15-30 minute response time in primary service areas</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Safe Handling</h3>
                  <p className="text-muted-foreground">Specialized equipment and trained operators for every vehicle type</p>
                </div>
                <div className="text-center">
                  <Star className="w-12 h-12 text-warning mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Premium Service</h3>
                  <p className="text-muted-foreground">White-glove treatment for luxury and exotic vehicles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Need Light-Duty Towing Right Now?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Don't wait - our dispatch team is standing by 24/7 for emergency situations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 650-881-2400
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="/get-a-quote">Get a Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-card border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Serving All Bay Area Counties
            </h3>
            <p className="text-muted-foreground mb-6">
              San Francisco • San Mateo • Alameda • Santa Clara
            </p>
            <Button variant="secondary" asChild>
              <a href="/locations">View Full Coverage Areas</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LightDuty;
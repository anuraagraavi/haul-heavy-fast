import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, TruckIcon, Settings, Building, Users, CheckCircle, Clock, Shield, Award, Wrench } from "lucide-react";
import { getMediaUrl } from "@/lib/utils";
const HeavyDuty = () => {
  const services = [
    {
      id: "equipment",
      icon: Settings,
      image: getMediaUrl(
        "media",
        "Heavy - Equipment & Machinery Transport.jpg"
      ),
      title: "Equipment & Machinery Transport",
      description: "Professional transport of construction equipment, forklifts, industrial machinery, and other heavy equipment that requires specialized handling.",
      capabilities: ["Construction equipment", "Forklifts & warehouse equipment", "Industrial machinery", "Agricultural equipment", "Generator sets"]
    },
    {
      id: "recovery",
      icon: Wrench,
      image: getMediaUrl("media", "Heavy Recovery Operations.jpg"),
      title: "Heavy Recovery Operations", 
      description: "Complex recovery situations including rollovers, off-road extraction, and accident recovery using rotators and specialized heavy-duty equipment.",
      capabilities: ["Rollover recovery", "Winch-out operations", "Off-road extraction", "Accident scene recovery", "Multi-axle vehicle recovery"]
    },
    {
      id: "fleet",
      icon: Building,
      image: getMediaUrl("media", "Heavy - Fleet & Commercial Accounts.jpg"),
      title: "Fleet & Commercial Accounts",
      description: "Comprehensive B2B towing programs with service level agreements, priority dispatch, and volume pricing for commercial fleets and logistics companies.",
      capabilities: ["Corporate contracts", "Priority SLA agreements", "Volume pricing", "Fleet management support", "Interstate hauling"]
    }
  ];

  const vehicleTypes = [
    "Class 7-8 commercial trucks",
    "Semi-trucks and tractor-trailers", 
    "City buses and motor coaches",
    "Heavy construction equipment",
    "Mobile homes and manufactured housing",
    "Industrial equipment and machinery",
    "Emergency vehicles and fire trucks",
    "Military and government vehicles"
  ];

  const capabilities = [
    {
      icon: TruckIcon,
      title: "Rotator Fleet",
      description: "Heavy-duty rotators capable of handling the largest commercial vehicles and complex recovery operations."
    },
    {
      icon: Users,
      title: "Trained Operators",
      description: "Certified operators with specialized training in heavy vehicle recovery and complex rigging operations."
    },
    {
      icon: Shield,
      title: "Commercial Insurance",
      description: "Comprehensive coverage for high-value commercial vehicles and cargo protection during transport."
    },
    {
      icon: Clock,
      title: "24/7 Dispatch",
      description: "Round-the-clock availability for emergency situations and scheduled commercial operations."
    }
  ];

  const faqs = [
    {
      question: "What's the maximum weight capacity for heavy-duty towing?",
      answer: "Our rotator fleet can handle vehicles and equipment up to 75+ tons, including loaded semi-trucks, buses, and heavy construction equipment."
    },
    {
      question: "Do you offer interstate hauling services?",
      answer: "Yes, we provide long-distance heavy-duty transport across state lines with proper permits and route planning for oversized loads."
    },
    {
      question: "How do fleet contracts work?",
      answer: "Fleet agreements include priority dispatch, volume pricing, dedicated account management, and customized service level agreements based on your business needs."
    },
    {
      question: "Can you handle complex recovery operations?",
      answer: "Our operators are trained in complex rigging, rollover recovery, and multi-vehicle extractions using specialized rotator equipment and winch systems."
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
                Heavy-Duty Hauling &
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Recovery
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Professional heavy-duty towing and recovery for commercial vehicles, industrial equipment, 
                and complex situations requiring rotators and specialized expertise. When size and complexity matter, 
                Heavy Haulers delivers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 650-881-2400
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="/get-a-quote">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Heavy-Duty Specialized Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From equipment transport to complex recovery operations and fleet management, 
                our heavy-duty division handles the most challenging hauling situations.
              </p>
            </div>

            <div className="space-y-20">
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
                        <div className="space-y-3 mb-6">
                          {service.capabilities.map((capability, capIndex) => (
                            <div key={capIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                              <span className="text-foreground">{capability}</span>
                            </div>
                          ))}
                        </div>
                        <Button variant="outline">
                          Request Service Quote
                        </Button>
                      </div>
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <div className="bg-card border border-border rounded-2xl overflow-hidden">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-80 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vehicle Types */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Heavy-Duty Vehicle Types
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our rotator fleet and specialized equipment can handle the largest commercial vehicles and industrial equipment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {vehicleTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card border border-border rounded-lg p-4">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Heavy-Duty Capabilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced equipment and expert operators make complex heavy-duty operations look routine.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Business Ready Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Business Ready Solutions
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Heavy Haulers partners with businesses, fleet operators, and logistics companies 
                to provide reliable heavy-duty towing with the speed and professionalism your operations demand.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-card border border-border rounded-xl p-6">
                  <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Corporate Contracts</h3>
                  <p className="text-muted-foreground">Dedicated service agreements with priority dispatch for your fleet operations.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">SLA Guarantees</h3>
                  <p className="text-muted-foreground">Service level agreements with guaranteed response times for critical operations.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <TruckIcon className="w-12 h-12 text-warning mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Interstate Hauling</h3>
                  <p className="text-muted-foreground">Long-distance heavy-duty transport with proper permits and route planning.</p>
                </div>
              </div>

              <Button variant="hero" size="lg">
                <Building className="w-5 h-5 mr-2" />
                Request Fleet Partnership
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Heavy-Duty Questions
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

        {/* Emergency CTA */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Heavy-Duty Emergency?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Complex situations require immediate expertise. Our heavy-duty team is available 24/7 
                for emergency recovery and commercial breakdowns.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 650-881-2400
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="/get-a-quote">Commercial Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HeavyDuty;
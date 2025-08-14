import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Truck, Building2, Caravan, CheckCircle, Clock, Shield, Wrench } from "lucide-react";

const MediumDuty = () => {
  const vehicleTypes = [
    {
      category: "Commercial Vehicles",
      vehicles: ["Box trucks (up to 26,000 lbs)", "Delivery vans", "Work trucks", "Cargo vans", "Food trucks"]
    },
    {
      category: "Recreational Vehicles", 
      vehicles: ["Small RVs & motorhomes", "Travel trailers", "Camper vans", "Toy haulers"]
    },
    {
      category: "Specialty Vehicles",
      vehicles: ["Emergency vehicles", "Municipal trucks", "Utility vehicles", "Medium construction equipment"]
    }
  ];

  const scenarios = [
    {
      icon: Wrench,
      title: "Mechanical Breakdowns",
      description: "Engine failure, transmission problems, or other mechanical issues that leave your medium-duty vehicle stranded."
    },
    {
      icon: Building2,
      title: "Commercial Relocations", 
      description: "Business vehicle relocations, fleet repositioning, or moving vehicles between job sites."
    },
    {
      icon: Shield,
      title: "Accident Recovery",
      description: "Professional recovery services for medium-duty vehicles involved in accidents or off-road situations."
    }
  ];

  const benefits = [
    "Specialized medium-duty equipment",
    "Experienced commercial operators", 
    "Fast response for business vehicles",
    "Flexible scheduling for fleet needs",
    "Comprehensive insurance coverage",
    "24/7 emergency availability"
  ];

  const faqs = [
    {
      question: "What's the weight limit for medium-duty towing?",
      answer: "We handle vehicles from 10,000 to 26,000 lbs GVWR, including box trucks, delivery vehicles, small RVs, and commercial equipment."
    },
    {
      question: "Do you offer fleet service contracts?", 
      answer: "Yes, we provide commercial contracts for businesses with multiple medium-duty vehicles, including priority dispatch and volume pricing."
    },
    {
      question: "Can you tow vehicles with commercial cargo?",
      answer: "We can tow loaded commercial vehicles, though we'll need details about cargo type and weight for proper equipment selection."
    },
    {
      question: "How quickly can you respond to commercial breakdowns?",
      answer: "Priority response for commercial vehicles typically within 20-45 minutes, understanding that business downtime costs money."
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
                Medium-Duty Towing
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Professional towing for commercial vehicles, delivery trucks, RVs, and work vehicles. 
                When your business vehicle breaks down, we understand that time is money and respond accordingly.
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

        {/* Vehicle Types */}
        <section className="py-20" id="vehicles">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Medium-Duty Vehicle Types We Handle
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From commercial delivery trucks to recreational vehicles, our medium-duty fleet 
                is equipped to handle vehicles between 10,000 and 26,000 lbs GVWR.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vehicleTypes.map((type, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{type.category}</h3>
                  <ul className="space-y-2">
                    {type.vehicles.map((vehicle, vehicleIndex) => (
                      <li key={vehicleIndex} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {vehicle}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Scenarios */}
        <section className="py-20 bg-muted/20" id="cases">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Common Medium-Duty Scenarios
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether it's an unexpected breakdown or planned relocation, we're equipped 
                to handle the unique challenges of medium-duty vehicle transport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {scenarios.map((scenario, index) => {
                const IconComponent = scenario.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-elevated transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{scenario.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{scenario.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  How Medium-Duty Towing Works
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our process is designed for efficiency, especially when dealing with commercial vehicles where downtime affects your business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Assessment Call</h3>
                        <p className="text-muted-foreground">We gather vehicle details, location, and specific requirements for your medium-duty vehicle.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Equipment Dispatch</h3>
                        <p className="text-muted-foreground">We dispatch the appropriate medium-duty tow truck with the right capacity and equipment.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Professional Loading</h3>
                        <p className="text-muted-foreground">Experienced operators use proper techniques to safely load and secure your vehicle.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Secure Transport</h3>
                        <p className="text-muted-foreground">Safe transport to your destination with real-time updates on delivery status.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8 h-80 flex items-center justify-center">
                  <Truck className="w-40 h-40 text-muted-foreground/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Medium-Duty Towing Benefits
                </h2>
                <p className="text-xl text-muted-foreground">
                  Why businesses and RV owners choose Heavy Haulers for their medium-duty needs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card border border-border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Medium-Duty Towing Questions
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
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Need Medium-Duty Towing Now?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Commercial breakdowns can't wait. Our priority dispatch understands that your business vehicle downtime costs money.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="hero" size="xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 650-881-2400
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="/get-a-quote">Fleet Quote</a>
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

export default MediumDuty;
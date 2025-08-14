import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Truck, TruckIcon, Phone } from "lucide-react";

const Services = () => {
  const serviceTypes = [
    {
      icon: Car,
      title: "Light-Duty Vehicle Towing",
      description: "Cars, SUVs, motorcycles, and specialty vehicles with professional care",
      href: "/services/light-duty",
      color: "from-success to-secondary",
      features: ["Flatbed Service", "Motorcycle Towing", "Luxury Car Transport", "Private Property Removal"]
    },
    {
      icon: Truck,
      title: "Medium-Duty Towing Solutions", 
      description: "Vans, box trucks, small RVs, and work vehicles",
      href: "/services/medium-duty",
      color: "from-warning to-primary",
      features: ["Box Trucks", "Vans & Cargo Vehicles", "Small RVs", "Work Truck Recovery"]
    },
    {
      icon: TruckIcon,
      title: "Heavy-Duty Hauling & Recovery",
      description: "Semi-trucks, buses, heavy equipment, and commercial fleet services",
      href: "/services/heavy-duty", 
      color: "from-primary to-destructive",
      features: ["Equipment Transport", "Heavy Recovery", "Fleet Contracts", "Industrial Hauling"]
    }
  ];

  const quickServices = [
    { name: "Flatbed Tow Service", link: "/services/light-duty#flatbed" },
    { name: "Motorcycle Towing", link: "/services/light-duty#motorcycle" },
    { name: "Luxury & Exotic Transport", link: "/services/light-duty#exotic" },
    { name: "Private Property Vehicle Removal", link: "/services/light-duty#private-property" },
    { name: "Equipment & Machinery Transport", link: "/services/heavy-duty#equipment" },
    { name: "Fleet & Commercial Accounts", link: "/services/heavy-duty#fleet" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Towing Services - Light, Medium & Heavy-Duty | Heavy Haulers San Francisco</title>
        <meta name="description" content="Complete towing services in San Francisco Bay Area: light-duty car towing, medium-duty truck recovery, heavy-duty equipment transport. Professional fleet with 24/7 availability." />
        <link rel="canonical" href="https://heavytowpro.com/services" />
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional Towing
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  For Every Weight Class
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                From everyday vehicles to heavy industrial equipment, Heavy Haulers has the 
                expertise and equipment to handle your towing and recovery needs safely and efficiently.
              </p>
              <Button variant="hero" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Get Emergency Help Now
              </Button>
            </div>
          </div>
        </section>

        {/* Main Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-down">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built for Every Weight Class
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose your service category below, or call us if you're not sure what you need. 
                Our dispatch team can help determine the right solution for your situation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-scale-in">
              {serviceTypes.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="group bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white" asChild>
                      <a href={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* Quick Access Links */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Quick Service Access
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                Jump directly to specific services for faster access to what you need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickServices.map((service, index) => (
                  <a 
                    key={index}
                    href={service.link}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-300 group"
                  >
                    <span className="text-foreground group-hover:text-primary">{service.name}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Not Sure What You Need?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our experienced dispatch team can help you determine the right service for your situation. 
                We'll ask the right questions to ensure you get exactly what you need.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 650-881-2400
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/get-a-quote">Get a Quote Online</a>
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

export default Services;
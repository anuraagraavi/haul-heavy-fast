import { Button } from "@/components/ui/button";
import { Car, Truck, TruckIcon, Phone, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesOverview = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  
  const services = [
    {
      icon: Car,
      title: "Light-Duty Towing",
      description: "Cars, SUVs, motorcycles, and luxury vehicles with specialized flatbed and soft-tie systems.",
      features: ["Flatbed service", "Motorcycle towing", "Luxury car transport", "Private property removal"],
      link: "/services/light-duty",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Truck,
      title: "Medium-Duty Towing", 
      description: "Commercial vehicles, delivery trucks, RVs, and work vehicles up to 26,000 lbs GVWR.",
      features: ["Box trucks", "RVs & motorhomes", "Commercial vans", "Fleet services"],
      link: "/services/medium-duty",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TruckIcon,
      title: "Heavy-Duty Hauling",
      description: "Semi-trucks, buses, construction equipment, and complex recovery operations.",
      features: ["Rotator recovery", "Equipment transport", "Fleet contracts", "Interstate hauling"],
      link: "/services/heavy-duty",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-down' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Towing
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From everyday breakdowns to complex industrial recovery, we have the right 
            equipment and expertise for every towing situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className={`bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-500 group hover-scale hover-glow ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200 + 300}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors" 
                  onClick={() => window.location.href = service.link}
                  asChild
                >
                  <a href={service.link}>
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Emergency CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Immediate Towing?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Don't wait - our 24/7 dispatch team is ready to help with fast, professional service across the Bay Area.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-primary border-white hover:bg-gray-100"
            asChild
          >
            <a href='tel:650-881-2400'>
              <Phone className='w-5 h-5 mr-2' />
              Call 650-881-2400
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
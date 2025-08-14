import { Clock, DollarSign, Users, Truck, Shield, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Clock,
      title: "Fastest Response Time",
      description: "One of the quickest dispatch times in the Bay Area. We understand emergencies can't wait.",
      gradient: "from-warning to-primary"
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Fair, upfront pricing with no hidden charges. You'll know the cost before we start.",
      gradient: "from-success to-secondary"
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Well-trained, courteous operators and dispatchers who treat your vehicle with care.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: Truck,
      title: "Complete Fleet Coverage",
      description: "From sedans to semi-trucks and industrial equipment - our fleet handles everything.",
      gradient: "from-primary to-destructive"
    },
    {
      icon: Shield,
      title: "Fully Licensed & Insured",
      description: "Complete insurance coverage and proper licensing for your peace of mind.",
      gradient: "from-secondary to-warning"
    },
    {
      icon: Award,
      title: "Business Ready",
      description: "Corporate contracts, fleet partnerships, and interstate hauling capabilities.",
      gradient: "from-warning to-secondary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Heavy Haulers?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've built our reputation on speed, transparency, and professionalism. 
            Here's what sets us apart from other towing companies in the Bay Area.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* What We Don't Do Section */}
        <div className="bg-muted/50 border border-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            What We <span className="text-destructive">Don't</span> Do
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            We deliberately avoid low-value roadside services like battery jumpstarts or tire changes. 
            Instead, we focus on what we do best: professional towing, recovery, and hauling services 
            that require skill, equipment, and expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Battery Jumpstarts", "Tire Changes", "Lockout Services", "Gas Delivery"].map((service, index) => (
              <span 
                key={index}
                className="bg-destructive/10 text-destructive border border-destructive/20 rounded-full px-4 py-2 text-sm"
              >
                ✗ {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
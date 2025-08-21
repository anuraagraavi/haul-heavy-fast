import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Clock, DollarSign, Shield, Users, Truck, Phone, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import corporateFleetBanner from "@/assets/corporate-fleet-banner.jpg";
const CorporateFleet = () => {
  const {
    ref: sectionRef,
    isVisible
  } = useScrollAnimation();
  const benefits = [{
    icon: Clock,
    title: "Priority Dispatch",
    description: "Dedicated service with guaranteed response times to minimize your business downtime."
  }, {
    icon: DollarSign,
    title: "Volume Pricing",
    description: "Competitive fleet rates and transparent billing designed for business budgets."
  }, {
    icon: Shield,
    title: "Service Level Agreements",
    description: "Customized SLAs with performance guarantees tailored to your operational needs."
  }, {
    icon: Users,
    title: "Account Management",
    description: "Dedicated account manager who understands your fleet and business requirements."
  }];
  const industries = ["Construction & Equipment", "Logistics & Transportation", "Municipal & Government", "Emergency Services", "Rental Car Companies", "Auto Dealerships", "Property Management", "Utility Companies"];
  return <section ref={sectionRef} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Corporate Fleet
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with Heavy Haulers for comprehensive B2B towing services designed 
            to keep your fleet operations running smoothly and efficiently.
          </p>
        </div>

        {/* Corporate Fleet Banner */}
        <div className={`relative mb-16 rounded-2xl overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <img src={corporateFleetBanner} alt="Corporate Fleet Towing Services" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              
              
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
          const IconComponent = benefit.icon;
          return <Card key={index} className={`bg-card border border-border text-center hover:shadow-elevated transition-all duration-500 hover-scale ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{
            animationDelay: `${index * 150 + 600}ms`
          }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Fleet Services Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">What We Offer</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Emergency Response</h4>
                  <p className="text-muted-foreground">24/7 priority dispatch for fleet emergencies with guaranteed response times.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Scheduled Transport</h4>
                  <p className="text-muted-foreground">Planned vehicle relocations, fleet repositioning, and maintenance transport.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Interstate Hauling</h4>
                  <p className="text-muted-foreground">Long-distance transport with proper permits and route optimization.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Fleet Analytics</h4>
                  <p className="text-muted-foreground">Detailed reporting and analytics to help optimize your fleet operations.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Industries We Serve</h3>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, index) => <div key={index} className="bg-card border border-border rounded-lg p-4 text-center">
                  <span className="text-foreground font-medium">{industry}</span>
                </div>)}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <Truck className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Partner with Heavy Haulers?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how our fleet services can reduce your downtime, lower costs, 
              and provide the reliability your business demands.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
            <Button variant='hero' size='lg' asChild>
              <a href='tel:650-881-2400'>
                <Phone className='w-5 h-5 mr-2' />
                Call 650-881-2400
              </a>
            </Button>
            <Button variant='outline' size='lg' asChild>
              <a href='mailto:dispatch@heavytowpro.com'>
                <Mail className='w-5 h-5 mr-2' />
                dispatch@heavytowpro.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CorporateFleet;
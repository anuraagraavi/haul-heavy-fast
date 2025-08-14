import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, FileText, Clock, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-tow-truck.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Heavy Haulers Professional Towing Service" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-warning" />
            <span className="text-sm font-medium text-foreground">24/7 Emergency Dispatch</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 px-0 py-[37px]">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Heavy Haulers
            </span>
            <br />
            Professional Towing
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto px-[10px]">
            Fast, transparent, and professional towing services across the San Francisco Bay Area. 
            From light-duty to heavy-duty hauling - we handle it all.
          </p>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 bg-card/20 backdrop-blur-sm rounded-lg p-4">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Fastest Response</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-card/20 backdrop-blur-sm rounded-lg p-4">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-foreground font-medium">Transparent Pricing</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-card/20 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-5 h-5 text-warning" />
              <span className="text-foreground font-medium">24/7 Available</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.location.href = 'tel:650-881-2400'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 650-881-2400
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => window.location.href = '/get-a-quote'}
            >
              <FileText className="w-5 h-5 mr-2" />
              Get Free Quote
            </Button>
          </div>

          {/* Service Types Quick Selector */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-4">What do you need to tow?</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="/services/light-duty" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:bg-card/50 transition-all duration-300 group">
                <h3 className="font-semibold text-foreground group-hover:text-primary">Light-Duty</h3>
                <p className="text-sm text-muted-foreground">Cars, SUVs, Motorcycles</p>
              </a>
              <a href="/services/medium-duty" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:bg-card/50 transition-all duration-300 group">
                <h3 className="font-semibold text-foreground group-hover:text-primary">Medium-Duty</h3>
                <p className="text-sm text-muted-foreground">Vans, Box Trucks, RVs</p>
              </a>
              <a href="/services/heavy-duty" className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:bg-card/50 transition-all duration-300 group">
                <h3 className="font-semibold text-foreground group-hover:text-primary">Heavy-Duty</h3>
                <p className="text-sm text-muted-foreground">Semi-trucks, Buses, Equipment</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
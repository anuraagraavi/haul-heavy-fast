import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png" 
              alt="Heavy Haulers Transport Co." 
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground">
              Professional towing and recovery services across the San Francisco Bay Area. 
              Available 24/7 for all your hauling needs.
            </p>
            <div className="flex space-x-4">
              <Button variant="hero" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button variant="secondary" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/services/light-duty" className="hover:text-primary transition-colors">Light-Duty Towing</a></li>
              <li><a href="/services/medium-duty" className="hover:text-primary transition-colors">Medium-Duty Towing</a></li>
              <li><a href="/services/heavy-duty" className="hover:text-primary transition-colors">Heavy-Duty Hauling</a></li>
              <li><a href="/services/light-duty#flatbed" className="hover:text-primary transition-colors">Flatbed Service</a></li>
              <li><a href="/services/light-duty#motorcycle" className="hover:text-primary transition-colors">Motorcycle Towing</a></li>
              <li><a href="/services/heavy-duty#fleet" className="hover:text-primary transition-colors">Fleet Contracts</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Service Areas</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/locations#san-francisco" className="hover:text-primary transition-colors">San Francisco County</a></li>
              <li><a href="/locations#san-mateo" className="hover:text-primary transition-colors">San Mateo County</a></li>
              <li><a href="/locations#alameda" className="hover:text-primary transition-colors">Alameda County</a></li>
              <li><a href="/locations#santa-clara" className="hover:text-primary transition-colors">Santa Clara County</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">(415) 555-HAUL</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">dispatch@heavyhaulerssf.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">San Francisco Bay Area</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">24/7 Emergency Dispatch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency CTA Bar */}
        <div className="mt-12 bg-gradient-primary rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need Emergency Towing Right Now?</h3>
          <p className="text-white/90 mb-4">Don't wait - our dispatch team is standing by 24/7</p>
          <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-gray-100">
            <Phone className="w-5 h-5 mr-2" />
            Call (415) 555-HAUL
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Heavy Haulers Transport Co. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
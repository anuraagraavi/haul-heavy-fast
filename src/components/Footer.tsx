import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import { useLocation } from "react-router-dom";
import { resolveShellDispatchFromPathname } from "@/lib/shellDispatchPhone";

const Footer = () => {
  const { pathname } = useLocation();
  const { phoneDisplay, phoneHref, addressLine } = resolveShellDispatchFromPathname(pathname);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <img
              src="/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png"
              alt="Heavy Haulers San Francisco Bay Area towing company logo"
              className="h-12 w-auto"
              width={160}
              height={48}
              loading="lazy"
              decoding="async"
            />
            <p className="text-muted-foreground">
              Flatbed towing specialists. 5 Bay Area counties. Real dispatch. 24/7.
            </p>
            <p className="text-sm text-muted-foreground flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{addressLine}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              <a href="/services/heavy-duty#fleet" className="hover:text-primary transition-colors">Fleet and commercial accounts</a> — call for contract rates.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="hero" 
                size="sm"
                asChild
              >
                <a href={phoneHref}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
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
              <li><a href="/locations/san-mateo-county" className="hover:text-primary transition-colors">San Mateo County Hub</a></li>
              <li><a href="/locations/alameda-county" className="hover:text-primary transition-colors">Alameda County Hub</a></li>
              <li><a href="/locations/santa-clara-county" className="hover:text-primary transition-colors">Santa Clara County Hub</a></li>
              <li><a href="/locations/contra-costa-county" className="hover:text-primary transition-colors">Contra Costa County Hub</a></li>
              <li><a href="/locations" className="hover:text-primary transition-colors">All Locations Index</a></li>
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground mb-6">
              <li><a href="/towing-oakland" className="hover:text-primary transition-colors">Oakland Towing</a></li>
              <li><a href="/towing-san-jose" className="hover:text-primary transition-colors">San Jose Towing</a></li>
              <li><a href="/towing-san-francisco" className="hover:text-primary transition-colors">San Francisco Towing</a></li>
              <li><a href="/towing-stockton" className="hover:text-primary transition-colors">Stockton Towing</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog & Guides</a></li>
              <li><a href="/get-a-quote" className="hover:text-primary transition-colors">Get a Quote</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
            
            <h4 className="font-semibold text-foreground mb-3 text-sm">Quick Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-primary" />
                <span className="text-muted-foreground text-sm">
                  <a href={phoneHref} className="hover:text-primary transition-colors">
                    {phoneDisplay}
                  </a>
                </span>
              </div>
              <p className="text-xs">
                <a href="/locations" className="text-muted-foreground hover:text-primary transition-colors underline">
                  All dispatch hub numbers
                </a>
              </p>
              <div className="flex items-center space-x-2">
                <Clock className="w-3 h-3 text-primary" />
                <span className="text-muted-foreground text-sm">24/7 Dispatch</span>
              </div>
            </div>
          </div>
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
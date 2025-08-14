import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png" 
              alt="Heavy Haulers Transport Co." 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <div className="relative group">
              <a href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <div className="absolute top-full left-0 w-80 bg-card border border-border rounded-lg shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 z-50">
                <div className="p-6 space-y-4">
                  {/* Main Service Categories */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Service Categories</h4>
                    <a href="/services/light-duty" className="block text-sm text-foreground hover:text-primary transition-colors py-1">
                      Light-Duty Towing
                    </a>
                    <a href="/services/medium-duty" className="block text-sm text-foreground hover:text-primary transition-colors py-1">
                      Medium-Duty Towing
                    </a>
                    <a href="/services/heavy-duty" className="block text-sm text-foreground hover:text-primary transition-colors py-1">
                      Heavy-Duty Hauling
                    </a>
                  </div>
                  
                  {/* Separator */}
                  <div className="border-t border-border"></div>
                  
                  {/* Specific Services */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Specific Services</h4>
                    <a href="/services/light-duty#flatbed" className="block text-xs text-muted-foreground hover:text-primary transition-colors py-1">
                      Flatbed Tow Service
                    </a>
                    <a href="/services/light-duty#motorcycle" className="block text-xs text-muted-foreground hover:text-primary transition-colors py-1">
                      Motorcycle Towing
                    </a>
                    <a href="/services/light-duty#exotic" className="block text-xs text-muted-foreground hover:text-primary transition-colors py-1">
                      Luxury & Exotic Transport
                    </a>
                    <a href="/services/light-duty#private-property" className="block text-xs text-muted-foreground hover:text-primary transition-colors py-1">
                      Private Property Vehicle Removal
                    </a>
                    <a href="/services/heavy-duty#equipment" className="block text-xs text-muted-foreground hover:text-primary transition-colors py-1">
                      Equipment & Machinery Transport
                    </a>
                    <a href="/services/heavy-duty#fleet" className="block text-xs text-muted-foreground hover:text-primary transition-colors py-1">
                      Fleet & Commercial Accounts
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/locations" className="text-foreground hover:text-primary transition-colors">
              Locations
            </a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="/get-a-quote" className="text-foreground hover:text-primary transition-colors">
              Get a Quote
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="hero" size="default">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <div className="space-y-2">
                <a href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                  Services
                </a>
                <div className="ml-4 space-y-2">
                  <a href="/services/light-duty" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Light-Duty Towing
                  </a>
                  <a href="/services/medium-duty" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Medium-Duty Towing
                  </a>
                  <a href="/services/heavy-duty" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    Heavy-Duty Hauling
                  </a>
                </div>
              </div>
              <a href="/locations" className="text-foreground hover:text-primary transition-colors">
                Locations
              </a>
              <a href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/get-a-quote" className="text-foreground hover:text-primary transition-colors">
                Get a Quote
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <div className="pt-4">
                <Button variant="hero" size="default" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
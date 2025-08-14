import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const businessPhone = "650-881-2400";
  const businessAddress = "308 Industrial Way Brisbane, CA 94005";
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png" alt="Heavy Haulers Transport Co." className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>

            {/* Services Mega Menu */}
            <div className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-card border border-border rounded-lg shadow-elevated mt-2 z-50">
                  <div className="grid grid-cols-12 gap-6 p-8">
                    {/* Left Column - Main Services */}
                    <div className="col-span-4 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Service Categories</h3>
                      <div className="space-y-3">
                        <a href="/services/light-duty" className="group flex items-start space-x-3 p-3 hover:bg-accent rounded-lg transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-medium text-foreground group-hover:text-primary">Light-Duty Towing</h4>
                            <p className="text-sm text-muted-foreground">Cars, motorcycles, luxury vehicles</p>
                          </div>
                        </a>
                        <a href="/services/medium-duty" className="group flex items-start space-x-3 p-3 hover:bg-accent rounded-lg transition-colors">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-medium text-foreground group-hover:text-primary">Medium-Duty Towing</h4>
                            <p className="text-sm text-muted-foreground">Vans, box trucks, small RVs</p>
                          </div>
                        </a>
                        <a href="/services/heavy-duty" className="group flex items-start space-x-3 p-3 hover:bg-accent rounded-lg transition-colors">
                          <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-medium text-foreground group-hover:text-primary">Heavy-Duty Hauling</h4>
                            <p className="text-sm text-muted-foreground">Commercial trucks, equipment, recovery</p>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Middle Column - Specific Services */}
                    <div className="col-span-4 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Specialized Services</h3>
                      <div className="space-y-2">
                        <a href="/services/light-duty#flatbed" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Flatbed Tow Service
                        </a>
                        <a href="/services/light-duty#motorcycle" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Motorcycle Towing
                        </a>
                        <a href="/services/light-duty#exotic" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Luxury & Exotic Transport
                        </a>
                        <a href="/services/light-duty#private-property" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Private Property Removal
                        </a>
                        <a href="/services/heavy-duty#equipment" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Equipment & Machinery
                        </a>
                        <a href="/services/heavy-duty#fleet" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Fleet & Commercial Accounts
                        </a>
                      </div>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="col-span-4 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Get Help Now</h3>
                      <div className="bg-gradient-primary p-4 rounded-lg text-black">
                        <div className="space-y-2">
                          <p className="font-semibold">24/7 Emergency Service</p>
                          <p className="text-sm">{businessAddress}</p>
                          <div className="flex items-center space-x-2 mt-3">
                            <Phone className="h-4 w-4" />
                            <span className="font-medium">{businessPhone}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="hero" className="w-full" onClick={() => window.location.href = `tel:${businessPhone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>}
            </div>

            {/* Locations Mega Menu */}
            <div className="relative group" onMouseEnter={() => setIsLocationsOpen(true)} onMouseLeave={() => setIsLocationsOpen(false)}>
              <button className="flex items-center text-foreground hover:text-primary transition-colors">
                Locations
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isLocationsOpen && <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-4xl bg-card border border-border rounded-lg shadow-elevated mt-2 z-50">
                  <div className="grid grid-cols-12 gap-6 p-8">
                    {/* Left Column - San Francisco County */}
                    <div className="col-span-3 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">San Francisco County</h3>
                      <div className="space-y-2">
                        <a href="/locations#san-francisco" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          San Francisco
                        </a>
                        <a href="/locations#daly-city" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Daly City
                        </a>
                        <a href="/locations#south-sf" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          South San Francisco
                        </a>
                      </div>
                    </div>

                    {/* Second Column - San Mateo County */}
                    <div className="col-span-3 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">San Mateo County</h3>
                      <div className="space-y-2">
                        <a href="/locations#san-mateo" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          San Mateo
                        </a>
                        <a href="/locations#redwood-city" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Redwood City
                        </a>
                        <a href="/locations#palo-alto" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Palo Alto
                        </a>
                        <a href="/locations#fremont" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Fremont
                        </a>
                      </div>
                    </div>

                    {/* Third Column - Alameda County */}
                    <div className="col-span-3 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Alameda County</h3>
                      <div className="space-y-2">
                        <a href="/locations#oakland" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Oakland
                        </a>
                        <a href="/locations#berkeley" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Berkeley
                        </a>
                        <a href="/locations#hayward" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 hover:bg-accent/50 px-2 rounded">
                          Hayward
                        </a>
                      </div>
                    </div>

                    {/* Right Column - Contact Info */}
                    <div className="col-span-3 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground mb-4">Need Help Now?</h3>
                      <div className="bg-gradient-primary p-4 rounded-lg text-black">
                        <div className="space-y-2">
                          <p className="font-semibold">24/7 Bay Area Coverage</p>
                          <p className="text-sm">{businessAddress}</p>
                          <div className="flex items-center space-x-2 mt-3">
                            <Phone className="h-4 w-4" />
                            <span className="font-medium">{businessPhone}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="hero" className="w-full" onClick={() => window.location.href = `tel:${businessPhone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>}
            </div>

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
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="hero" size="default" asChild>
              <a href={`tel:${businessPhone}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-foreground hover:text-primary">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <SheetHeader className="p-6 border-b border-border">
                <SheetTitle className="flex items-center space-x-3">
                  <img src="/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png" alt="Heavy Haulers Transport Co." className="h-8 w-auto" />
                  
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col h-full">
                <nav className="flex-1 px-6 py-4 space-y-4">
                  <a href="/" className="block text-foreground hover:text-primary transition-colors py-2">
                    Home
                  </a>
                  <a href="/about" className="block text-foreground hover:text-primary transition-colors py-2">
                    About Us
                  </a>
                  
                  <div className="space-y-2">
                    <a href="/services" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
                      Services
                    </a>
                    <div className="ml-4 space-y-2 pl-4 border-l border-border">
                      <a href="/services/light-duty" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        Light-Duty Towing
                      </a>
                      <a href="/services/medium-duty" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        Medium-Duty Towing
                      </a>
                      <a href="/services/heavy-duty" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        Heavy-Duty Hauling
                      </a>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a href="/locations" className="block text-foreground hover:text-primary transition-colors font-medium py-2">
                      Locations
                    </a>
                    <div className="ml-4 space-y-2 pl-4 border-l border-border">
                      <a href="/locations#san-francisco" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        San Francisco County
                      </a>
                      <a href="/locations#san-mateo" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        San Mateo County
                      </a>
                      <a href="/locations#alameda" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        Alameda County
                      </a>
                      <a href="/locations#santa-clara" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        Santa Clara County
                      </a>
                    </div>
                  </div>

                  <a href="/blog" className="block text-foreground hover:text-primary transition-colors py-2">
                    Blog
                  </a>
                  <a href="/get-a-quote" className="block text-foreground hover:text-primary transition-colors py-2">
                    Get a Quote
                  </a>
                  <a href="/contact" className="block text-foreground hover:text-primary transition-colors py-2">
                    Contact
                  </a>
                </nav>

                {/* Mobile Footer */}
                <div className="p-6 border-t border-border space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium text-foreground mb-1">24/7 Emergency Service</p>
                    <p>{businessAddress}</p>
                  </div>
                  <Button variant="hero" size="default" className="w-full" asChild>
                    <a href={`tel:${businessPhone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call {businessPhone}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>;
};
export default Header;
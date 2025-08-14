import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Phone, MessageCircle, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found (404) | Heavy Haulers San Francisco</title>
        <meta name="description" content="The page you're looking for doesn't exist. Contact Heavy Haulers for emergency towing services or browse our main pages." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              {/* 404 Hero */}
              <div className="mb-12">
                <div className="text-8xl md:text-9xl font-bold text-warning/20 mb-4">
                  404
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Page Not Found
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  The page you're looking for doesn't exist, but our towing services are always available. 
                  Need emergency help? We're here 24/7.
                </p>
              </div>

              {/* Emergency CTA */}
              <Card className="bg-gradient-primary mb-12">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Emergency Towing? We're Ready!
                  </h2>
                  <p className="text-white/90 mb-6">
                    Don't let a broken link stop you from getting the help you need. 
                    Our dispatch team is standing by.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      variant="hero" 
                      className="text-lg px-8"
                      onClick={() => window.location.href = 'tel:650-881-2400'}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call 650-881-2400
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Navigation */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <Card className="bg-card hover:shadow-orange transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-warning/20 transition-colors">
                      <Home className="w-6 h-6 text-warning" />
                    </div>
                    <h3 className="font-semibold mb-2">Home</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Return to our homepage
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.location.href = '/'}
                    >
                      Go Home
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card hover:shadow-blue transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Search className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Services</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Browse our towing services
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.location.href = '/services'}
                    >
                      View Services
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card hover:shadow-elevated transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-success" />
                    </div>
                    <h3 className="font-semibold mb-2">Get Quote</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Request a free quote
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.location.href = '/get-a-quote'}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card hover:shadow-orange transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get in touch with us
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Service Areas Quick Links */}
              <Card className="bg-muted/30">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Our Service Areas</h2>
                  <div className="grid md:grid-cols-4 gap-4">
                    <Button 
                      variant="ghost" 
                      className="h-auto p-4 flex flex-col"
                      onClick={() => window.location.href = '/locations#san-francisco'}
                    >
                      <div className="font-semibold">San Francisco</div>
                      <div className="text-sm text-muted-foreground">County</div>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="h-auto p-4 flex flex-col"
                      onClick={() => window.location.href = '/locations#san-mateo'}
                    >
                      <div className="font-semibold">San Mateo</div>
                      <div className="text-sm text-muted-foreground">County</div>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="h-auto p-4 flex flex-col"
                      onClick={() => window.location.href = '/locations#alameda'}
                    >
                      <div className="font-semibold">Alameda</div>
                      <div className="text-sm text-muted-foreground">County</div>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="h-auto p-4 flex flex-col"
                      onClick={() => window.location.href = '/locations#santa-clara'}
                    >
                      <div className="font-semibold">Santa Clara</div>
                      <div className="text-sm text-muted-foreground">County</div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NotFound;

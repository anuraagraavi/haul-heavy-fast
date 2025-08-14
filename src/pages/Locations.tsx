import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Star, CheckCircle } from "lucide-react";

const Locations = () => {
  const counties = [
    {
      id: "san-francisco",
      name: "San Francisco County",
      phone: "650-881-2400",
      description: "Serving all San Francisco districts with priority dispatch from our main hub.",
      districts: [
        "Mission District", "SOMA (South of Market)", "Financial District", "North Beach",
        "Richmond District", "Tenderloin", "Pacific Heights", "Nob Hill", 
        "Sunset District", "Excelsior", "Bayview", "Visitacion Valley",
        "Castro District", "Haight-Ashbury", "Marina District", "Chinatown"
      ],
      testimonial: {
        text: "Heavy Haulers got to my broken down delivery truck in SOMA in under 20 minutes. Professional service!",
        author: "Mike Chen, Delivery Business Owner"
      }
    },
    {
      id: "san-mateo", 
      name: "San Mateo County",
      phone: "650-881-2400",
      description: "Comprehensive coverage throughout San Mateo County with specialized equipment for all vehicle types.",
      districts: [
        "San Mateo", "Redwood City", "Daly City", "South San Francisco",
        "Menlo Park", "Burlingame", "San Bruno", "Millbrae",
        "Foster City", "Belmont", "San Carlos", "Half Moon Bay",
        "Pacifica", "Brisbane", "Colma", "Hillsborough"
      ],
      testimonial: {
        text: "Needed my RV towed from Redwood City to storage. The team handled it perfectly - no damage and fair pricing.",
        author: "Sarah Rodriguez, RV Owner"
      }
    },
    {
      id: "alameda",
      name: "Alameda County", 
      phone: "650-881-2400",
      description: "Fast response across Alameda County including Oakland, Berkeley, and all East Bay communities.",
      districts: [
        "Oakland", "Hayward", "Berkeley", "Fremont", "San Leandro",
        "Alameda", "Union City", "Pleasanton", "Livermore", "Newark",
        "Albany", "Emeryville", "Piedmont", "Dublin", "Castro Valley"
      ],
      testimonial: {
        text: "My semi broke down on 880 near Oakland. Heavy Haulers had a rotator there fast and got me back on schedule.",
        author: "James Wilson, Commercial Driver"
      }
    },
    {
      id: "santa-clara",
      name: "Santa Clara County",
      phone: "650-881-2400", 
      description: "Serving Silicon Valley and South Bay with 24/7 dispatch and specialized tech industry vehicle handling.",
      districts: [
        "San Jose", "Santa Clara", "Sunnyvale", "Mountain View", "Palo Alto",
        "Cupertino", "Milpitas", "Campbell", "Los Gatos", "Saratoga",
        "Morgan Hill", "Gilroy", "Los Altos", "Los Altos Hills", "Monte Sereno"
      ],
      testimonial: {
        text: "Excellent service for our company fleet vehicles. They understand business urgency and respond accordingly.",
        author: "Lisa Park, Fleet Manager, Tech Company"
      }
    }
  ];

  const stats = [
    { number: "4", label: "Counties Served" },
    { number: "15min", label: "Avg Response Time" },
    { number: "24/7", label: "Emergency Dispatch" },
    { number: "50+", label: "Cities & Districts" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Service Areas Across the
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Bay Area
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Heavy Haulers provides 24/7 emergency towing and recovery services across 4 California counties. 
                Local dispatch means faster response times and better service for your community.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Counties Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Complete Bay Area Coverage
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From San Francisco to San Jose, from Berkeley to Daly City - we're your local 
                towing professionals with deep knowledge of Bay Area roads and communities.
              </p>
            </div>

            <div className="space-y-16">
              {counties.map((county, index) => (
                <div key={index} id={county.id} className="scroll-mt-24">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center space-x-3 mb-6">
                        <MapPin className="w-8 h-8 text-primary" />
                        <h3 className="text-3xl font-bold text-foreground">{county.name}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {county.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-foreground mb-3">Areas We Serve:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {county.districts.map((district, districtIndex) => (
                            <div key={districtIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{district}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button variant="hero">
                          <Phone className="w-4 h-4 mr-2" />
                          {county.phone}
                        </Button>
                        <Button variant="outline">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </Button>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="bg-card border border-border rounded-2xl p-8">
                        <div className="flex items-center space-x-2 mb-4">
                          <Star className="w-5 h-5 text-warning fill-current" />
                          <Star className="w-5 h-5 text-warning fill-current" />
                          <Star className="w-5 h-5 text-warning fill-current" />
                          <Star className="w-5 h-5 text-warning fill-current" />
                          <Star className="w-5 h-5 text-warning fill-current" />
                        </div>
                        <blockquote className="text-lg text-foreground mb-4 italic">
                          "{county.testimonial.text}"
                        </blockquote>
                        <cite className="text-muted-foreground font-medium">
                          — {county.testimonial.author}
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Benefits */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Local Coverage Matters
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our extensive Bay Area presence means better service for you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Faster Response</h3>
                  <p className="text-muted-foreground">Local dispatch means we're always closer to your emergency situation.</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Local Knowledge</h3>
                  <p className="text-muted-foreground">Our operators know Bay Area roads, traffic patterns, and best routes.</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Community Trust</h3>
                  <p className="text-muted-foreground">We're part of your community with a reputation built on reliable service.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Emergency Towing Available Now
              </h2>
              <p className="text-xl text-white/90 mb-8">
                No matter where you are in the Bay Area, Heavy Haulers has local dispatch 
                ready to respond to your emergency.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Dispatch
                </Button>
                <Button variant="secondary" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Map CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Not Sure If We Serve Your Area?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're constantly expanding our coverage. Call us and we'll let you know 
                if we can help with your specific location.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="hero" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Check Coverage
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/get-a-quote">Get Area Quote</a>
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

export default Locations;
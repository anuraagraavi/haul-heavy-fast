import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin, Clock, Star, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet";

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
    { value: "4", label: "Counties Served" },
    { value: "15min", label: "Avg Response Time" },
    { value: "24/7", label: "Emergency Dispatch" },
    { value: "50+", label: "Cities & Districts" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Bay Area Towing Coverage - Heavy Haulers | 4 Counties Served</title>
        <meta name="description" content="Professional towing services across San Francisco, San Mateo, Alameda, and Santa Clara counties. 24/7 emergency dispatch with 15-minute average response time." />
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Bay Area
                    <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                      Coverage
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Professional towing and recovery services across all major Bay Area counties. 
                    Local dispatch, rapid response, and comprehensive coverage from San Francisco to Silicon Valley.
                  </p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((stat, index) => (
                      <div key={index} className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button variant="hero" size="lg" asChild>
                      <a href="tel:650-881-2400">
                        <Phone className="w-5 h-5 mr-2" />
                        Call 650-881-2400
                      </a>
                    </Button>
                    <Button variant="secondary" size="lg" asChild>
                      <a href="/get-a-quote">Get Coverage Quote</a>
                    </Button>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <img 
                    src="/src/assets/bay-area-coverage.jpg" 
                    alt="Bay Area coverage map showing all service areas"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Counties Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                County-by-County Coverage
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dedicated local dispatch for each county ensures faster response times and 
                better service. Our operators know the local roads, traffic patterns, and best routes.
              </p>
            </div>

            <div className="space-y-16">
              {counties.map((county, index) => (
                <div key={county.id} className="scroll-mt-24" id={county.id}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{county.name}</h3>
                          <p className="text-primary font-medium">{county.phone}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {county.description}
                      </p>

                      {/* Testimonial */}
                      <div className="bg-card border border-border rounded-xl p-6 mb-6">
                        <div className="flex items-center space-x-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                          ))}
                        </div>
                        <p className="text-foreground italic mb-3">"{county.testimonial.text}"</p>
                        <p className="text-sm text-muted-foreground">— {county.testimonial.author}</p>
                      </div>

                      <Button variant="outline" asChild>
                        <a href="/get-a-quote">Get Quote for {county.name}</a>
                      </Button>
                    </div>

                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="bg-card border border-border rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-4">
                          Areas We Serve in {county.name}
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {county.districts.map((district, districtIndex) => (
                            <div key={districtIndex} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                              <span className="text-muted-foreground">{district}</span>
                            </div>
                          ))}
                        </div>
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
                  Our county-based dispatch system delivers faster, more reliable service than regional competitors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Faster Response</h3>
                  <p className="text-muted-foreground">
                    Local operators know shortcuts and can navigate traffic patterns for quicker arrival times.
                  </p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Local Knowledge</h3>
                  <p className="text-muted-foreground">
                    Our operators understand local roads, parking restrictions, and area-specific challenges.
                  </p>
                </div>
                <div className="text-center">
                  <Phone className="w-12 h-12 text-warning mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">Direct Dispatch</h3>
                  <p className="text-muted-foreground">
                    County-specific phone routing connects you directly to the nearest available team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Towing Anywhere in the Bay Area?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Don't worry about which county you're in - our unified dispatch system 
                will route you to the closest available team automatically.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-gray-100" asChild>
                  <a href="tel:650-881-2400">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency: 650-881-2400
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="/get-a-quote">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Coverage Quote
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Check Coverage */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Not Sure If We Cover Your Area?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Heavy Haulers serves over 50 cities and districts across the Bay Area. 
                If you're unsure about coverage in your specific location, just give us a call.
              </p>
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Quick Coverage Check</h3>
                <p className="text-muted-foreground mb-6">
                  Call our dispatch line and we'll confirm coverage and provide an estimated response time for your location.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="tel:650-881-2400">
                    <Phone className="w-5 h-5 mr-2" />
                    Check Coverage: 650-881-2400
                  </a>
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
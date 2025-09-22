import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Truck, TruckIcon, Phone } from "lucide-react";
import InternalLinkOptimizer from "@/components/InternalLinkOptimizer";

const Services = () => {
  const serviceTypes = [
    {
      icon: Car,
      title: "Light-Duty Vehicle Towing",
      description: "Cars, SUVs, motorcycles, and specialty vehicles with professional care",
      href: "/services/light-duty",
      color: "from-success to-secondary",
      features: ["Flatbed Service", "Motorcycle Towing", "Luxury Car Transport", "Private Property Removal"]
    },
    {
      icon: Truck,
      title: "Medium-Duty Towing Solutions", 
      description: "Vans, box trucks, small RVs, and work vehicles",
      href: "/services/medium-duty",
      color: "from-warning to-primary",
      features: ["Box Trucks", "Vans & Cargo Vehicles", "Small RVs", "Work Truck Recovery"]
    },
    {
      icon: TruckIcon,
      title: "Heavy-Duty Hauling & Recovery",
      description: "Semi-trucks, buses, heavy equipment, and commercial fleet services",
      href: "/services/heavy-duty", 
      color: "from-primary to-destructive",
      features: ["Equipment Transport", "Heavy Recovery", "Fleet Contracts", "Industrial Hauling"]
    }
  ];

  const quickServices = [
    { name: "Flatbed Tow Service", link: "/services/light-duty#flatbed" },
    { name: "Motorcycle Towing", link: "/services/light-duty#motorcycle" },
    { name: "Luxury & Exotic Transport", link: "/services/light-duty#exotic" },
    { name: "Private Property Vehicle Removal", link: "/services/light-duty#private-property" },
    { name: "Equipment & Machinery Transport", link: "/services/heavy-duty#equipment" },
    { name: "Fleet & Commercial Accounts", link: "/services/heavy-duty#fleet" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Professional Towing Services San Francisco - Light, Medium & Heavy-Duty | Bay Area</title>
        <meta name="description" content="Complete towing services in San Francisco Bay Area: light-duty car towing, medium-duty truck recovery, heavy-duty equipment transport. Professional fleet with 24/7 availability. Call 650-881-2400." />
        <meta name="keywords" content="towing services San Francisco, light duty towing, medium duty towing, heavy duty towing, car towing Bay Area, commercial towing services, emergency towing SF" />
        <link rel="canonical" href="https://heavytowpro.com/services" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Professional Towing Services San Francisco - Light, Medium & Heavy-Duty" />
        <meta property="og:description" content="Complete towing services in San Francisco Bay Area. Professional fleet covering all vehicle types with 24/7 availability." />
        <meta property="og:url" content="https://heavytowpro.com/services" />
        <meta property="og:type" content="website" />
        
        {/* Enhanced Schema.org JSON-LD with Service Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Professional Towing Services San Francisco",
            "description": "Complete towing services in San Francisco Bay Area: light-duty car towing, medium-duty truck recovery, heavy-duty equipment transport",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Heavy Haulers San Francisco",
              "telephone": "+1-650-881-2400",
              "url": "https://heavytowpro.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.7749",
                "longitude": "-122.4194"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            },
            "serviceType": ["Light Duty Towing", "Medium Duty Towing", "Heavy Duty Towing", "Emergency Towing", "Flatbed Service"],
            "areaServed": [
              {
                "@type": "Place",
                "name": "San Francisco County, CA"
              },
              {
                "@type": "Place", 
                "name": "San Mateo County, CA"
              },
              {
                "@type": "Place",
                "name": "Alameda County, CA"
              },
              {
                "@type": "Place",
                "name": "Santa Clara County, CA"
              }
            ],
            "availableChannel": {
              "@type": "ServiceChannel",
              "servicePhone": "+1-650-881-2400",
              "serviceUrl": "https://heavytowpro.com/get-quote",
              "availableLanguage": "English"
            },
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Towing Services Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Light Duty Towing",
                    "description": "Car towing, flatbed service, motorcycle transport, luxury vehicle handling"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Medium Duty Towing",
                    "description": "Commercial vehicles, box trucks, RVs, delivery vehicles up to 26,000 lbs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Heavy Duty Towing", 
                    "description": "Semi-trucks, heavy equipment, industrial machinery, rotator services"
                  }
                }
              ]
            }
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@id": "https://heavytowpro.com",
                  "name": "Heavy Haulers San Francisco"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://heavytowpro.com/services",
                  "name": "Towing Services"
                }
              }
            ]
          })}
        </script>

        {/* HowTo Schema for Emergency Towing */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Get Emergency Towing in San Francisco",
            "description": "Step-by-step guide to getting professional towing services when stranded in San Francisco Bay Area",
            "image": "https://heavytowpro.com/src/assets/hero-tow-truck.jpg",
            "totalTime": "PT30M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "150"
            },
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Vehicle information (year, make, model)"
              },
              {
                "@type": "HowToSupply", 
                "name": "Exact location or nearest cross street"
              }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "name": "Call Emergency Dispatch",
                "text": "Call 650-881-2400 for immediate dispatch of nearest available tow truck",
                "url": "tel:650-881-2400"
              },
              {
                "@type": "HowToStep",
                "name": "Provide Vehicle Details",
                "text": "Give dispatcher your vehicle information, location, and description of the problem"
              },
              {
                "@type": "HowToStep",
                "name": "Wait Safely",
                "text": "Stay in a safe location while our operator responds, typically within 15-30 minutes"
              },
              {
                "@type": "HowToStep",
                "name": "Professional Service",
                "text": "Our certified operator will assess the situation and provide safe, professional towing service"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <SEOBreadcrumbs />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional Towing
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  For Every Weight Class
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                From everyday vehicles to heavy industrial equipment, Heavy Haulers has the 
                expertise and equipment to handle your towing and recovery needs safely and efficiently.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href='tel:650-881-2400'>
                  <Phone className="w-5 h-5 mr-2" />
                  Get Emergency Help Now
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Main Service Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-down">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Built for Every Weight Class
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose your service category below, or call us if you're not sure what you need. 
                Our dispatch team can help determine the right solution for your situation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 animate-scale-in">
              {serviceTypes.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="group bg-card border border-border rounded-2xl p-8 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white" asChild>
                      <a href={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* Quick Access Links */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Quick Service Access
              </h3>
              <p className="text-muted-foreground text-center mb-8">
                Jump directly to specific services for faster access to what you need.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickServices.map((service, index) => (
                  <a 
                    key={index}
                    href={service.link}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-300 group"
                  >
                    <span className="text-foreground group-hover:text-primary">{service.name}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Not Sure What You Need?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our experienced dispatch team can help you determine the right service for your situation. 
                We'll ask the right questions to ensure you get exactly what you need.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="hero" size="lg" asChild>
                  <a href='tel:650-881-2400'>
                    <Phone className="w-5 h-5 mr-2" />
                    Call 650-881-2400
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/get-a-quote">Get a Quote Online</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Link Optimization */}
        <InternalLinkOptimizer currentPage="/services" category="mixed" limit={4} />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
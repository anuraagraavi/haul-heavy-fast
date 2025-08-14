import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Sitemap = () => {
  const sitePages = [
    {
      category: "Main Pages",
      pages: [
        { name: "Home", url: "/", description: "Heavy Haulers San Francisco homepage" },
        { name: "About Us", url: "/about", description: "Learn about our company and mission" },
        { name: "Get a Quote", url: "/get-a-quote", description: "Request a free towing quote" },
        { name: "Contact Us", url: "/contact", description: "Contact information and inquiry form" }
      ]
    },
    {
      category: "Services",
      pages: [
        { name: "All Services", url: "/services", description: "Overview of all towing services" },
        { name: "Light-Duty Towing", url: "/services/light-duty", description: "Cars, motorcycles, and small vehicles" },
        { name: "Medium-Duty Towing", url: "/services/medium-duty", description: "Vans, box trucks, and RVs" },
        { name: "Heavy-Duty Hauling", url: "/services/heavy-duty", description: "Semi-trucks, buses, and heavy equipment" }
      ]
    },
    {
      category: "Service Areas",
      pages: [
        { name: "All Locations", url: "/locations", description: "Service coverage across 4 California counties" },
        { name: "San Francisco County", url: "/locations#san-francisco", description: "Towing services in San Francisco" },
        { name: "San Mateo County", url: "/locations#san-mateo", description: "Towing services in San Mateo County" },
        { name: "Alameda County", url: "/locations#alameda", description: "Towing services in Alameda County" },
        { name: "Santa Clara County", url: "/locations#santa-clara", description: "Towing services in Santa Clara County" }
      ]
    },
    {
      category: "Specialized Services",
      pages: [
        { name: "Flatbed Towing", url: "/services/light-duty#flatbed", description: "Safe flatbed transport for vehicles" },
        { name: "Motorcycle Towing", url: "/services/light-duty#motorcycle", description: "Specialized motorcycle transport" },
        { name: "Luxury Car Transport", url: "/services/light-duty#exotic", description: "Premium care for exotic vehicles" },
        { name: "Private Property Removal", url: "/services/light-duty#private-property", description: "Property management towing" },
        { name: "Equipment Transport", url: "/services/heavy-duty#equipment", description: "Heavy machinery and equipment hauling" },
        { name: "Heavy Recovery", url: "/services/heavy-duty#recovery", description: "Accident recovery and winch-outs" },
        { name: "Fleet Accounts", url: "/services/heavy-duty#fleet", description: "Commercial and fleet towing contracts" }
      ]
    },
    {
      category: "Resources",
      pages: [
        { name: "Blog & Guides", url: "/blog", description: "Towing tips, emergency guides, and industry insights" }
      ]
    },
    {
      category: "Legal",
      pages: [
        { name: "Privacy Policy", url: "/privacy-policy", description: "How we protect your personal information" },
        { name: "Terms of Service", url: "/terms", description: "Service agreements and policies" },
        { name: "HTML Sitemap", url: "/sitemap", description: "Complete list of all website pages" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>HTML Sitemap | Heavy Haulers San Francisco</title>
        <meta name="description" content="Complete sitemap of Heavy Haulers website. Find all pages including services, locations, resources, and contact information." />
        <link rel="canonical" href="/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-6">HTML Sitemap</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Complete navigation guide to all pages on Heavy Haulers website. 
                  Find exactly what you're looking for quickly and easily.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sitePages.map((section) => (
                  <Card key={section.category} className="bg-card">
                    <CardHeader>
                      <CardTitle className="text-xl text-warning">
                        {section.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {section.pages.map((page) => (
                          <li key={page.url} className="group">
                            <Link 
                              to={page.url}
                              className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <h4 className="font-medium text-foreground group-hover:text-warning transition-colors">
                                    {page.name}
                                  </h4>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {page.description}
                                  </p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-warning transition-colors mt-0.5 ml-2 flex-shrink-0" />
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-16 bg-gradient-subtle rounded-lg p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">Quick Stats</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-warning mb-2">
                        {sitePages.reduce((total, section) => total + section.pages.length, 0)}
                      </div>
                      <div className="text-sm text-muted-foreground">Total Pages</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-success mb-2">4</div>
                      <div className="text-sm text-muted-foreground">Service Counties</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Emergency Service</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent mb-2">3</div>
                      <div className="text-sm text-muted-foreground">Service Categories</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
                <p className="text-muted-foreground mb-6">
                  Contact our 24/7 dispatch team for immediate assistance with any towing needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-warning text-warning-foreground rounded-lg font-medium hover:bg-warning/90 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <a 
                    href="tel:+14155558697" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Call 650-881-2400
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
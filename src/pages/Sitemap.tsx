import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { PRIMARY_DISPATCH_PHONE_DISPLAY, PRIMARY_DISPATCH_TEL_HREF } from "@/data/screenshotDispatchHubs";

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
        { name: "All Locations", url: "/locations", description: "Service coverage index across county hubs and city pages" },
        { name: "San Mateo County Hub", url: "/locations/san-mateo-county", description: "County-level dispatch and city links" },
        { name: "Alameda County Hub", url: "/locations/alameda-county", description: "County-level dispatch and city links" },
        { name: "Santa Clara County Hub", url: "/locations/santa-clara-county", description: "County-level dispatch and city links" },
        { name: "Contra Costa County Hub", url: "/locations/contra-costa-county", description: "County-level dispatch and city links" }
      ]
    },
    {
      category: "City Towing Pages",
      pages: [
        { name: "Oakland Towing", url: "/towing-oakland", description: "Dedicated Oakland towing coverage page" },
        { name: "San Jose Towing", url: "/towing-san-jose", description: "Dedicated San Jose towing coverage page" },
        { name: "San Francisco Towing", url: "/towing-san-francisco", description: "Dedicated San Francisco towing coverage page" },
        { name: "Stockton Towing", url: "/towing-stockton", description: "Dedicated Stockton towing coverage page" },
        { name: "Browse all city pages", url: "/locations", description: "View full city list by county" }
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
                      <div className="text-3xl font-bold text-success mb-2">30</div>
                      <div className="text-sm text-muted-foreground">Location Pages</div>
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
                    href={PRIMARY_DISPATCH_TEL_HREF}
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Call {PRIMARY_DISPATCH_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </>
  );
};

export default Sitemap;
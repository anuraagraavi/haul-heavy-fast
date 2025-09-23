import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RelatedPosts from "@/components/RelatedPosts";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Phone, ArrowLeft, AlertTriangle, CheckCircle, Shield, Truck, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import motorcycleTowingImage from "@/assets/blog-motorcycle-towing.jpg";

const MotorcycleTowingGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Motorcycle Towing Guide: Safe Transport for Two-Wheelers | Heavy Haulers San Francisco</title>
        <meta name="description" content="Complete guide to motorcycle towing in San Francisco Bay Area. Learn about specialized equipment, safety protocols, and professional transport for bikes. Expert motorcycle towing services." />
        <meta name="keywords" content="motorcycle towing San Francisco, bike transport Bay Area, two-wheeler recovery, motorcycle breakdown SF, professional bike towing, motorcycle transport services" />
        <link rel="canonical" href="https://heavytowpro.com/blog/motorcycle-towing-guide" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Motorcycle Towing Guide: Safe Transport for Two-Wheelers | Heavy Haulers" />
        <meta property="og:description" content="Expert guide to safe motorcycle towing and transport in the San Francisco Bay Area. Professional equipment and safety protocols." />
        <meta property="og:url" content="https://heavytowpro.com/blog/motorcycle-towing-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://heavytowpro.com/src/assets/blog-motorcycle-towing.jpg" />
        
        {/* Schema.org JSON-LD for Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Motorcycle Towing Guide: Safe Transport for Two-Wheelers",
            "description": "Complete guide to motorcycle towing and transport services in the Bay Area",
            "image": "https://heavytowpro.com/src/assets/blog-motorcycle-towing.jpg",
            "author": {
              "@type": "Organization",
              "name": "Heavy Haulers Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Heavy Haulers San Francisco",
              "url": "https://heavytowpro.com"
            },
            "datePublished": "2025-08-23",
            "dateModified": "2025-08-23",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://heavytowpro.com/blog/motorcycle-towing-guide"
            }
          })}
        </script>
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Motorcycle Towing Guide: Safe Transport for Two-Wheelers
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground mb-8">
                <span>Published: August 23, 2025</span>
                <span>•</span>
                <span>9 min read</span>
                <span>•</span>
                <span>By Heavy Haulers Team</span>
              </div>
              <img 
                src={motorcycleTowingImage} 
                alt="Professional motorcycle being loaded onto specialized flatbed tow truck" 
                className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Motorcycle towing requires specialized knowledge, equipment, and techniques that differ significantly from standard vehicle transport. Whether you're dealing with a breakdown, accident, or planned transport, understanding proper motorcycle towing procedures ensures your bike arrives safely at its destination.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Why Specialized Motorcycle Towing Matters</h3>
                </div>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Different weight distribution and balance points</li>
                  <li>Unique securing and tie-down requirements</li>
                  <li>Specialized loading equipment needed</li>
                  <li>Different insurance and liability considerations</li>
                  <li>Risk of damage from improper handling</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Types of Motorcycle Towing Equipment</h2>
              
              <p className="text-muted-foreground mb-6">
                Professional motorcycle towing requires specific equipment designed for two-wheeled vehicles. Understanding these different methods helps you choose the right <Link to="/services/light-duty" className="text-primary hover:underline">motorcycle transport service</Link> for your situation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Truck className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Flatbed Transport</h3>
                  <p className="text-muted-foreground mb-3">The safest method for most motorcycles</p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Complete bike security</li>
                    <li>• No wheel contact with road</li>
                    <li>• Best for luxury/damaged bikes</li>
                    <li>• Higher cost but maximum protection</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Shield className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Motorcycle Trailer</h3>
                  <p className="text-muted-foreground mb-3">Specialized enclosed or open trailers</p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Multiple bike capacity</li>
                    <li>• Weather protection available</li>
                    <li>• Cost-effective for multiple units</li>
                    <li>• Professional securing systems</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Safety Protocols for Motorcycle Loading</h2>
              
              <p className="text-muted-foreground mb-6">
                Proper loading technique is crucial for preventing damage during transport. Professional towing services follow strict protocols to ensure your motorcycle's safety.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Pre-Loading Inspection</h4>
                    <p className="text-muted-foreground">Document existing damage, fuel level, and accessories</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Proper Loading Angle</h4>
                    <p className="text-muted-foreground">Use gradual ramps to prevent scraping or bottoming out</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Secure Tie-Down Points</h4>
                    <p className="text-muted-foreground">Use frame points, not handlebars or fragile components</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Suspension Compression</h4>
                    <p className="text-muted-foreground">Proper tie-down technique to prevent suspension damage</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Common Motorcycle Breakdown Scenarios</h2>
              
              <p className="text-muted-foreground mb-6">
                Understanding when to call for professional motorcycle towing versus attempting repairs helps protect both you and your bike. Some situations always require <Link to="/blog/emergency-towing-guide" className="text-primary hover:underline">professional towing assistance</Link>.
              </p>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  <h3 className="text-xl font-semibold text-foreground">Always Call for Towing</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="text-foreground">• Engine seizure or major mechanical failure</li>
                    <li className="text-foreground">• Accident damage affecting rideability</li>
                    <li className="text-foreground">• Electrical system complete failure</li>
                    <li className="text-foreground">• Transmission/clutch problems</li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="text-foreground">• Fuel system contamination</li>
                    <li className="text-foreground">• Wheel or tire damage</li>
                    <li className="text-foreground">• Brake system failure</li>
                    <li className="text-foreground">• Any safety system malfunction</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Motorcycle-Specific Towing Considerations</h2>
              
              <p className="text-muted-foreground mb-6">
                Motorcycles present unique challenges that standard vehicle towing methods cannot address. Professional motorcycle towing services understand these specific requirements.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Weight and Balance</h3>
                  <p className="text-muted-foreground mb-3">Key factors affecting transport safety:</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• High center of gravity</li>
                    <li>• Uneven weight distribution</li>
                    <li>• Two-wheel contact points only</li>
                    <li>• Suspension travel considerations</li>
                  </ul>
                </div>
                
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Special Equipment Needs</h3>
                  <p className="text-muted-foreground mb-3">Professional-grade securing equipment:</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Motorcycle wheel chocks</li>
                    <li>• Soft-loop tie-down straps</li>
                    <li>• Frame-specific anchor points</li>
                    <li>• Suspension compression tools</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Cost Factors for Motorcycle Towing</h2>
              
              <p className="text-muted-foreground mb-6">
                Motorcycle towing costs vary based on several factors. Understanding these helps you budget appropriately and choose the right service level for your needs.
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Pricing Considerations</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Base Factors:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Distance to destination</li>
                      <li>• Type of motorcycle</li>
                      <li>• Time of day/emergency rates</li>
                      <li>• Complexity of pickup location</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Additional Services:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Flatbed vs. trailer transport</li>
                      <li>• Enclosed trailer protection</li>
                      <li>• Multiple bike transport</li>
                      <li>• Storage services</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Preparing Your Motorcycle for Transport</h2>
              
              <p className="text-muted-foreground mb-6">
                Proper preparation before the towing service arrives helps ensure smooth transport and prevents complications or additional charges.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Fuel Level</h4>
                    <p className="text-muted-foreground">Reduce to 1/4 tank or less to minimize weight and spill risk</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Remove Accessories</h4>
                    <p className="text-muted-foreground">Detach loose items, mirrors, or aftermarket accessories</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Document Condition</h4>
                    <p className="text-muted-foreground">Take photos of existing damage and overall condition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Secure Keys and Paperwork</h4>
                    <p className="text-muted-foreground">Have registration, insurance, and identification ready</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Choosing a Motorcycle Towing Service</h2>
              
              <p className="text-muted-foreground mb-6">
                Not all towing services are equipped for motorcycle transport. Choosing the right provider ensures professional handling and prevents costly damage to your bike.
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Essential Service Qualifications:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Specialized motorcycle equipment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Experienced motorcycle handlers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Comprehensive insurance coverage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">24/7 emergency availability</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Transparent pricing structure</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Local Bay Area knowledge</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Proper licensing and certifications</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Customer references available</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Professional Motorcycle Towing?</h3>
                <p className="text-white/90 mb-6">
                  Heavy Haulers specializes in safe motorcycle transport across the Bay Area. Our experienced team uses professional-grade equipment designed specifically for two-wheelers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-gray-100" asChild>
                    <a href='tel:650-881-2400'>
                      <Phone className="w-5 h-5 mr-2" />
                      Call 650-881-2400
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
                    <Link to="/get-a-quote">
                      Get Free Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RelatedPosts currentPostId="motorcycle-towing-guide" category="Specialty Services" />
      </main>
      <Footer />
    </div>
  );
};

export default MotorcycleTowingGuide;
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Phone, Settings, Truck, Shield, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heavyEquipmentImage from "@/assets/blog-heavy-equipment.jpg";

const HeavyEquipmentTransport = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Heavy Equipment Transport: Professional Hauling Solutions | Heavy Haulers</title>
        <meta name="description" content="Professional heavy equipment transport services. Learn about specialized hauling for construction equipment, machinery, and industrial vehicles across the Bay Area." />
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
                Heavy Equipment Transport: Moving Industrial Machinery Safely
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground mb-8">
                <span>Published: March 12, 2024</span>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span>By Heavy Haulers Team</span>
              </div>
              <img 
                src={heavyEquipmentImage} 
                alt="Heavy equipment being transported on specialized trailer" 
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
                Moving heavy construction equipment and industrial machinery requires specialized knowledge, 
                equipment, and expertise that goes far beyond standard vehicle towing. Whether you're a 
                contractor relocating equipment between job sites or a business owner moving industrial 
                machinery, understanding the complexities of heavy equipment transport is crucial.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Types of Heavy Equipment We Transport</h2>
              
              <p className="text-muted-foreground mb-6">
                Heavy equipment transport covers a wide range of industrial and construction machinery, 
                each with unique handling requirements:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Settings className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Construction Equipment</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Excavators and backhoes</li>
                    <li>• Bulldozers and scrapers</li>
                    <li>• Cranes and boom lifts</li>
                    <li>• Concrete mixers and pumps</li>
                    <li>• Compactors and pavers</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Truck className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Industrial Machinery</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Manufacturing equipment</li>
                    <li>• Forklifts and warehouse equipment</li>
                    <li>• Generator sets and power equipment</li>
                    <li>• Agricultural machinery</li>
                    <li>• Specialized processing equipment</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Specialized Transport Requirements</h2>
              
              <p className="text-muted-foreground mb-6">
                Heavy equipment transport isn't just about moving large items—it requires careful 
                planning and specialized equipment to ensure safe, legal, and efficient transport:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Weight Distribution Analysis</h3>
                  <p className="text-muted-foreground">
                    Proper weight distribution is critical for safe transport. Our team calculates 
                    axle weights, load positioning, and trailer selection to ensure compliance with 
                    California Department of Transportation regulations while maintaining vehicle stability.
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Specialized Securement</h3>
                  <p className="text-muted-foreground">
                    Heavy equipment requires specific tie-down points, chain grades, and securement 
                    patterns. We use only certified chains, binders, and straps rated for the specific 
                    weight and center of gravity of your equipment.
                  </p>
                </div>

                <div className="border-l-4 border-warning pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Route Planning</h3>
                  <p className="text-muted-foreground">
                    Bay Area infrastructure requires careful route selection. We analyze bridge 
                    weight limits, height restrictions, turn radiuses, and traffic patterns to 
                    determine the safest, most efficient path for your equipment.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Permits and Legal Compliance</h2>
              
              <p className="text-muted-foreground mb-6">
                Moving heavy equipment often requires special permits and strict adherence to 
                transportation regulations:
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Required Documentation:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Oversize/Overweight Permits</h4>
                      <p className="text-muted-foreground">Required for loads exceeding standard weight or dimension limits</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Escort Vehicle Requirements</h4>
                      <p className="text-muted-foreground">Pilot cars may be required for extremely wide or long loads</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Time-of-Travel Restrictions</h4>
                      <p className="text-muted-foreground">Certain routes and times may be restricted for oversized loads</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Safety Considerations</h2>
              
              <p className="text-muted-foreground mb-6">
                Heavy equipment transport presents unique safety challenges that require specialized 
                protocols and equipment:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Equipment Safety</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Hydraulic system depressurization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Fuel system preparation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Battery disconnection protocols</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Attachment point verification</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Transport Safety</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Load securement verification</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Proper lighting and flagging</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Height clearance monitoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Emergency response planning</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Cost Factors in Heavy Equipment Transport</h2>
              
              <p className="text-muted-foreground mb-6">
                Understanding the factors that influence heavy equipment transport costs helps you 
                budget appropriately and make informed decisions:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Equipment Weight and Dimensions:</strong> Heavier and larger equipment requires specialized trailers and may need permits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Distance and Route Complexity:</strong> Longer distances and complex routes with restrictions increase costs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Permit Requirements:</strong> Oversize/overweight permits and escort vehicles add to the total cost</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Loading/Unloading Complexity:</strong> Difficult access or special requirements for loading and unloading</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Preparing Equipment for Transport</h2>
              
              <p className="text-muted-foreground mb-6">
                Proper preparation ensures safe transport and prevents damage to your valuable equipment:
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Owner Preparation Checklist:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Clean equipment of debris and fluids</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Secure loose parts and attachments</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Document existing damage with photos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Provide operation manuals if needed</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Drain fluids if required</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Remove or secure glass and mirrors</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Verify equipment dimensions and weight</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Coordinate access at pickup/delivery</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Professional Heavy Equipment Transport</h2>
              
              <p className="text-muted-foreground mb-6">
                While it might seem cost-effective to attempt moving equipment yourself, professional 
                transport offers significant advantages:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Insurance Protection</h4>
                    <p className="text-muted-foreground">Professional transport includes comprehensive insurance coverage for your valuable equipment during transit.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Settings className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Specialized Equipment</h4>
                    <p className="text-muted-foreground">Access to proper trailers, tie-down equipment, and loading/unloading machinery designed for heavy equipment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Truck className="w-6 h-6 text-warning mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Regulatory Compliance</h4>
                    <p className="text-muted-foreground">Professional handling of permits, route planning, and DOT compliance requirements.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Heavy Equipment Transport?</h3>
                <p className="text-white/90 mb-6">
                  Heavy Haulers specializes in safe, professional transport of construction equipment and industrial machinery across the Bay Area.
                </p>
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-gray-100" asChild>
                  <a href='tel:650-881-2400'>
                    <Phone className="w-5 h-5 mr-2" />
                    Get Equipment Transport Quote
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

export default HeavyEquipmentTransport;
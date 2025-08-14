import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Phone, Crown, Shield, Star, ArrowLeft, CheckCircle, Car } from "lucide-react";
import { Link } from "react-router-dom";
import luxuryTransportImage from "@/assets/blog-luxury-transport.jpg";

const LuxuryTransportGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Luxury Vehicle Transport: White-Glove Towing Services | Heavy Haulers</title>
        <meta name="description" content="Premium luxury vehicle transport and exotic car towing services. Learn about specialized handling, soft-tie systems, and white-glove service for high-value vehicles." />
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
                Luxury Vehicle Transport: White-Glove Service for Premium Cars
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground mb-8">
                <span>Published: March 5, 2024</span>
                <span>•</span>
                <span>7 min read</span>
                <span>•</span>
                <span>By Heavy Haulers Team</span>
              </div>
              <img 
                src={luxuryTransportImage} 
                alt="Luxury vehicle being transported on specialized flatbed" 
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
                Luxury and exotic vehicles represent significant investments that require specialized 
                care during transport. Whether you own a classic Ferrari, a modern Lamborghini, or 
                a vintage Rolls-Royce, these high-value vehicles demand more than standard towing 
                services. They require white-glove treatment from operators who understand the unique 
                requirements of premium automobiles.
              </p>

              <h2 className="text-3xl font-bold text-foreground mb-6">Understanding Luxury Vehicle Transport</h2>
              
              <p className="text-muted-foreground mb-6">
                Luxury vehicle transport goes beyond simple towing—it's about preserving the 
                integrity, value, and pristine condition of high-end automobiles during relocation:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Crown className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Exotic & Supercars</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Ferrari, Lamborghini, McLaren</li>
                    <li>• Bugatti, Koenigsegg, Pagani</li>
                    <li>• Aston Martin, Bentley, Maserati</li>
                    <li>• Limited edition hypercars</li>
                    <li>• Custom and modified supercars</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Star className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Luxury & Classic</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Rolls-Royce, Mercedes-Maybach</li>
                    <li>• Vintage Porsche, classic BMW</li>
                    <li>• Collector cars and classics</li>
                    <li>• High-end electric vehicles</li>
                    <li>• Custom luxury modifications</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Specialized Equipment for Premium Vehicles</h2>
              
              <p className="text-muted-foreground mb-6">
                Transporting luxury vehicles requires specialized equipment designed to eliminate 
                any risk of damage during loading, transport, and unloading:
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Soft-Tie Systems</h3>
                  <p className="text-muted-foreground">
                    Traditional chains and straps can damage delicate finishes and trim. Soft-tie 
                    systems use padded straps, wheel nets, and protective covers to secure vehicles 
                    without any metal-to-metal contact or potential for scratching.
                  </p>
                </div>
                
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Low-Clearance Specialists</h3>
                  <p className="text-muted-foreground">
                    Many exotic cars have extremely low ground clearance. Specialized loading 
                    equipment including ultra-low angle ramps, air-ride trailers, and custom 
                    loading platforms ensure safe loading without scraping or damage.
                  </p>
                </div>

                <div className="border-l-4 border-warning pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Climate-Controlled Transport</h3>
                  <p className="text-muted-foreground">
                    Enclosed, climate-controlled trailers protect luxury vehicles from weather, 
                    road debris, and temperature fluctuations. These purpose-built trailers 
                    maintain museum-quality conditions during transport.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">The White-Glove Service Difference</h2>
              
              <p className="text-muted-foreground mb-6">
                White-glove luxury vehicle transport involves meticulous attention to detail at 
                every stage of the process:
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Service Standards Include:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Pre-Transport Inspection</h4>
                      <p className="text-muted-foreground">Detailed photographic documentation of vehicle condition before transport</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Protective Preparation</h4>
                      <p className="text-muted-foreground">Application of protective covers, padding, and barriers as needed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Specialized Loading</h4>
                      <p className="text-muted-foreground">Custom loading procedures for each vehicle's specific requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Real-Time Updates</h4>
                      <p className="text-muted-foreground">Continuous communication throughout the transport process</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Common Luxury Vehicle Transport Scenarios</h2>
              
              <p className="text-muted-foreground mb-6">
                Luxury vehicle owners typically require transport services in specific situations 
                that demand careful handling:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Car className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Dealer Delivery & Pickup</h4>
                    <p className="text-muted-foreground">New vehicle delivery from dealerships or transport to service facilities for warranty work</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Event Transportation</h4>
                    <p className="text-muted-foreground">Moving vehicles to car shows, racing events, or private exhibitions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Crown className="w-6 h-6 text-warning mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Collection Management</h4>
                    <p className="text-muted-foreground">Relocating vehicles between storage facilities or private collections</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Emergency Situations</h4>
                    <p className="text-muted-foreground">Breakdown recovery without risking damage to expensive vehicles</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Insurance and Liability Considerations</h2>
              
              <p className="text-muted-foreground mb-6">
                High-value vehicles require specialized insurance coverage that standard towing 
                services may not provide:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Coverage Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">High-value vehicle coverage ($500K+)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Garage keeper's liability</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Loading/unloading coverage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Transport insurance protection</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Documentation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Detailed condition reports</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Photographic evidence</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Chain of custody records</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Insurance certificates</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Preparing Your Luxury Vehicle for Transport</h2>
              
              <p className="text-muted-foreground mb-6">
                Proper preparation ensures your valuable vehicle receives optimal protection during 
                transport:
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Owner Preparation Checklist:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Remove all personal items</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Secure loose trim or modifications</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Disable alarm systems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Check fluid levels</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Document existing condition</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Provide operation instructions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Verify insurance coverage</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Clean vehicle thoroughly</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Cost Factors in Luxury Transport</h2>
              
              <p className="text-muted-foreground mb-6">
                Premium vehicle transport costs reflect the specialized equipment, insurance, and 
                expertise required:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Vehicle Value and Rarity:</strong> Higher-value vehicles require more comprehensive insurance and specialized handling</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Special Requirements:</strong> Low-clearance vehicles, custom modifications, or unusual dimensions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Transport Distance:</strong> Longer distances require more comprehensive protection and planning</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Service Level:</strong> White-glove service includes additional inspections, documentation, and care</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Selecting the Right Luxury Transport Service</h2>
              
              <p className="text-muted-foreground mb-6">
                Not all towing companies have the capability or expertise to handle luxury vehicles 
                properly. Key factors to consider:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Crown className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Specialized Experience</h4>
                    <p className="text-muted-foreground">Proven track record with luxury and exotic vehicle transport</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Appropriate Insurance</h4>
                    <p className="text-muted-foreground">Coverage limits that match your vehicle's value</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="w-6 h-6 text-warning mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Proper Equipment</h4>
                    <p className="text-muted-foreground">Soft-tie systems, enclosed trailers, and low-clearance capabilities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Client References</h4>
                    <p className="text-muted-foreground">Testimonials from other luxury vehicle owners</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Premium Vehicle Transport?</h3>
                <p className="text-white/90 mb-6">
                  Heavy Haulers provides white-glove luxury vehicle transport with specialized equipment, 
                  comprehensive insurance, and the expertise your valuable vehicles deserve.
                </p>
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-gray-100">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Luxury Transport
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

export default LuxuryTransportGuide;
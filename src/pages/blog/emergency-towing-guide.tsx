import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Phone, Clock, Shield, AlertTriangle, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import emergencyGuideImage from "@/assets/blog-emergency-guide.jpg";

const EmergencyTowingGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Emergency Towing Guide San Francisco: What to Do When Stranded | Heavy Haulers Bay Area</title>
        <meta name="description" content="Complete emergency towing guide for San Francisco Bay Area drivers. Learn what to do when your vehicle breaks down, safety tips, and how to get professional help fast. Expert advice from Heavy Haulers." />
        <meta name="keywords" content="emergency towing guide San Francisco, what to do when stranded, vehicle breakdown Bay Area, emergency roadside assistance, towing safety tips SF" />
        <link rel="canonical" href="https://heavytowpro.com/blog/emergency-towing-guide" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Emergency Towing Guide: What to Do When Stranded | Heavy Haulers" />
        <meta property="og:description" content="Complete guide to emergency towing procedures for San Francisco Bay Area drivers. Safety tips and professional help." />
        <meta property="og:url" content="https://heavytowpro.com/blog/emergency-towing-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://heavytowpro.com/src/assets/blog-emergency-guide.jpg" />
        
        {/* Schema.org JSON-LD for Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Emergency Towing Guide: What to Do When Stranded",
            "description": "Complete guide to emergency towing procedures for San Francisco Bay Area drivers",
            "image": "https://heavytowpro.com/src/assets/blog-emergency-guide.jpg",
            "author": {
              "@type": "Organization",
              "name": "Heavy Haulers Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Heavy Haulers San Francisco",
              "url": "https://heavytowpro.com"
            },
            "datePublished": "2024-03-15",
            "dateModified": "2024-03-15",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://heavytowpro.com/blog/emergency-towing-guide"
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
                Emergency Towing Guide: What to Do When You're Stranded
              </h1>
              <div className="flex items-center space-x-4 text-muted-foreground mb-8">
                <span>Published: March 15, 2024</span>
                <span>•</span>
                <span>7 min read</span>
                <span>•</span>
                <span>By Heavy Haulers Team</span>
              </div>
              <img 
                src={emergencyGuideImage} 
                alt="Emergency towing situation on highway" 
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
                Vehicle breakdowns happen when you least expect them. Whether you're commuting to work, 
                running errands, or traveling across the Bay Area, knowing what to do in an emergency 
                towing situation can make the difference between a minor inconvenience and a dangerous situation.
              </p>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  <h3 className="text-xl font-semibold text-foreground">Emergency First Steps</h3>
                </div>
                <ol className="list-decimal list-inside space-y-2 text-foreground">
                  <li>Get to safety immediately - pull over as far right as possible</li>
                  <li>Turn on hazard lights</li>
                  <li>Exit from the side away from traffic</li>
                  <li>Move away from the vehicle and roadway</li>
                  <li>Call for help: 911 if injured, towing service if mechanical</li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Stay Safe While Waiting for Help</h2>
              
              <p className="text-muted-foreground mb-6">
                Your safety is the top priority while waiting for emergency towing services. Here's what 
                you should do to stay protected:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Visibility</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Keep hazard lights on</li>
                    <li>• Use flares or reflective triangles if available</li>
                    <li>• Raise your hood to signal distress</li>
                    <li>• Stay visible to approaching traffic</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Clock className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-3">Position</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Stay outside the vehicle when possible</li>
                    <li>• Stand away from traffic flow</li>
                    <li>• Use barriers like guardrails for protection</li>
                    <li>• Keep phone charged for communication</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">When to Call Emergency Towing</h2>
              
              <p className="text-muted-foreground mb-6">
                Not every vehicle issue requires immediate emergency towing, but certain situations 
                demand quick professional response:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Engine Failure</h4>
                    <p className="text-muted-foreground">Complete loss of power, overheating, or unusual noises</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Transmission Problems</h4>
                    <p className="text-muted-foreground">Vehicle won't shift, move, or responds erratically</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Accident Damage</h4>
                    <p className="text-muted-foreground">Vehicle unsafe to drive due to collision damage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Electrical Failures</h4>
                    <p className="text-muted-foreground">Complete electrical system failure, no lights or signals</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Information to Provide When Calling</h2>
              
              <p className="text-muted-foreground mb-6">
                When you call for emergency towing, having the right information ready speeds up the 
                response process:
              </p>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Essential Information Checklist:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Exact location or nearest cross street</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Vehicle make, model, year, color</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Nature of the problem</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Preferred destination</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Number of passengers</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Special circumstances</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Contact phone number</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Insurance information</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">Choosing the Right Towing Service</h2>
              
              <p className="text-muted-foreground mb-6">
                In an emergency, you might not have time to research towing companies extensively, 
                but knowing what to look for helps ensure you get professional, reliable service:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">24/7 Availability:</strong> Emergencies don't follow business hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Local Knowledge:</strong> Bay Area roads and traffic patterns</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Proper Insurance:</strong> Vehicle protection during transport</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-muted-foreground"><strong className="text-foreground">Transparent Pricing:</strong> Upfront costs with no hidden fees</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-6">After the Tow</h2>
              
              <p className="text-muted-foreground mb-6">
                Once your vehicle is safely towed, there are several important steps to take care of 
                the situation properly:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <span className="text-muted-foreground">Get a receipt with all service details and costs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <span className="text-muted-foreground">Contact your insurance company if the breakdown was due to an accident</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <span className="text-muted-foreground">Arrange alternative transportation home or to work</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success mt-1" />
                  <span className="text-muted-foreground">Schedule diagnostic and repair work at a trusted mechanic</span>
                </li>
              </ul>

              <div className="bg-gradient-primary rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Emergency Towing Now?</h3>
                <p className="text-white/90 mb-6">
                  Heavy Haulers provides 24/7 emergency towing across the Bay Area with average 15-minute response times.
                </p>
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-gray-100" asChild>
                  <a href='tel:650-881-2400'>
                    <Phone className="w-5 h-5 mr-2" />
                    Call 650-881-2400
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

export default EmergencyTowingGuide;
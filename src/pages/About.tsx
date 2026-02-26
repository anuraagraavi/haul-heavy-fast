import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Truck, Clock, Phone } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Clock,
      title: "Speed",
      description: "One of the fastest dispatch response times in the Bay Area"
    },
    {
      icon: Shield,
      title: "Transparency", 
      description: "Fair, upfront pricing with no hidden charges"
    },
    {
      icon: Users,
      title: "Professionalism",
      description: "Well-trained, courteous operators and dispatchers"
    },
    {
      icon: Truck,
      title: "Capability",
      description: "Fleet power to handle everything from sedans to semi-trucks"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Heavy Haulers - Professional Towing Company San Francisco | Bay Area Experts</title>
        <meta name="description" content="Learn about Heavy Haulers' mission, values, and commitment to professional towing services. Trusted San Francisco Bay Area towing company with transparent pricing and 24/7 availability since inception." />
        <meta name="keywords" content="about Heavy Haulers, professional towing company San Francisco, Bay Area towing experts, transparent towing pricing, reliable towing service, 24/7 towing company" />
        <link rel="canonical" href="https://heavytowpro.com/about" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="About Heavy Haulers - Professional Towing Company San Francisco" />
        <meta property="og:description" content="Trusted Bay Area towing company with transparent pricing, professional service, and 24/7 availability. Learn about our mission and values." />
        <meta property="og:url" content="https://heavytowpro.com/about" />
        <meta property="og:type" content="website" />
        
        {/* Local business geo-targeting */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Francisco, CA" />
        <meta name="geo.position" content="37.7749;-122.4194" />
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">Heavy Haulers</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're not just another towing company. Heavy Haulers specializes in professional-grade 
                towing and recovery services, deliberately avoiding low-value roadside add-ons to focus 
                on what we do best: fast, reliable, heavy-duty hauling.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in the heart of San Francisco, Heavy Haulers was born from a simple observation: 
                    the Bay Area needed a towing company that could handle the full spectrum of hauling needs 
                    without compromising on speed or professionalism.
                  </p>
                  <p>
                    While other companies spread themselves thin with basic roadside services, we made a 
                    strategic decision to focus exclusively on towing, recovery, and hauling – services that 
                    require real expertise, specialized equipment, and trained professionals.
                  </p>
                  <p>
                    Today, we serve five counties across the Bay Area with one of the fastest response times 
                    in the industry, handling everything from luxury car transport to heavy industrial equipment recovery.
                  </p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Mission & Vision</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Our Mission</h4>
                    <p className="text-muted-foreground">
                      Deliver fast, transparent, and community-trusted towing with a trained, 
                      friendly team — available 24/7.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Our Vision</h4>
                    <p className="text-muted-foreground">
                      Be California's most reliable partner for heavy and medium-duty towing by 
                      prioritizing speed, clarity, and care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Drives Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our core differentiators aren't just talking points – they're the foundation 
                of every service call we handle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What We Don't Do */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  What We <span className="text-destructive">Don't</span> Do
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We deliberately avoid low-value roadside services to maintain our focus on 
                  professional towing, recovery, and hauling services that require skill, 
                  equipment, and expertise.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <h4 className="font-semibold text-destructive mb-2">❌ Generic Roadside Services</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Battery jumpstarts</li>
                      <li>• Tire changes</li>
                      <li>• Lockout services</li>
                      <li>• Gas delivery</li>
                    </ul>
                  </div>
                  <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                    <h4 className="font-semibold text-success mb-2">✅ Professional Hauling</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Fleet-grade towing</li>
                      <li>• Long-distance jobs</li>
                      <li>• Corporate contracts</li>
                      <li>• Heavy equipment transport</li>
                    </ul>
                  </div>
                </div>

                <Button variant="hero" size="lg" asChild>
                  <a href='tel:650-881-2400'>
                    <Phone className="w-5 h-5 mr-2" />
                    See What We Can Do For You
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Training & Professional Communication */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Team Training & Professional Communication</h2>
                <p className="text-muted-foreground mb-6">
                  Every Heavy Haulers operator undergoes comprehensive training in vehicle handling, 
                  safety protocols, and customer service. Our dispatchers are available 24/7 and 
                  trained to handle emergency situations with calm professionalism.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Continuous Training Programs</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Monthly safety and equipment certification updates</li>
                      <li>• Advanced rigging and recovery technique workshops</li>
                      <li>• Customer service excellence training</li>
                      <li>• Emergency response protocol drills</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Communication Standards</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Real-time updates during service calls</li>
                      <li>• Clear, professional communication at all times</li>
                      <li>• Multilingual dispatch capabilities</li>
                      <li>• Transparent pricing discussions before work begins</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Licensing & Certifications</h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">State Licensing</h4>
                    <p className="text-sm text-muted-foreground">
                      Full California commercial towing licenses and permits for all vehicle classes
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Insurance Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive liability and cargo protection with specialized coverage for high-value vehicles
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Safety Certifications</h4>
                    <p className="text-sm text-muted-foreground">
                      DOT compliance, OSHA safety training, and specialized heavy equipment certifications
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">Professional Associations</h4>
                    <p className="text-sm text-muted-foreground">
                      Members of California Tow Truck Association and International Towing & Recovery Association
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Centricity Philosophy */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Philosophy of Customer Centricity
                </h2>
                <p className="text-xl text-muted-foreground">
                  Everything we do is designed around one principle: putting our customers' needs first, 
                  every single time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Customer-First Approach</h3>
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      We believe that being stranded or having vehicle trouble is stressful enough. That's why 
                      every interaction with Heavy Haulers is designed to reduce your stress, not add to it.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      From the moment you call our dispatch to the completion of your service, our team focuses 
                      on clear communication, transparent pricing, and professional service that exceeds expectations.
                    </p>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-foreground mb-6">Our Customer Commitments</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">Honest Communication</h5>
                        <p className="text-sm text-muted-foreground">No surprises, no hidden fees, no misleading estimates</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">Rapid Response</h5>
                        <p className="text-sm text-muted-foreground">Fast dispatch because we know your time matters</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-warning rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">Professional Care</h5>
                        <p className="text-sm text-muted-foreground">Treating your vehicle like it's our own</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">4</span>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground">Continuous Improvement</h5>
                        <p className="text-sm text-muted-foreground">Always learning and improving from customer feedback</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Feedback Integration */}
              <div className="bg-gradient-subtle rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Feedback-Driven Excellence
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Customer Surveys</h4>
                    <p className="text-sm text-muted-foreground">Post-service feedback to continuously improve our processes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Quality Assurance</h4>
                    <p className="text-sm text-muted-foreground">Regular service quality reviews and performance monitoring</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Recognition Programs</h4>
                    <p className="text-sm text-muted-foreground">Rewarding team members who consistently exceed customer expectations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
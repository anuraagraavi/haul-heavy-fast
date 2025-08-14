import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { CheckCircle, Phone, Home, Clock, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'contact';

  const getContent = () => {
    switch (type) {
      case 'quote':
        return {
          title: "Quote Request Received",
          message: "Thank you for your quote request! Our team is reviewing your information and will provide a detailed estimate within 15 minutes during business hours.",
          nextSteps: [
            "Our dispatch team is reviewing your request",
            "You'll receive a detailed quote via phone or email",
            "Average response time: 15 minutes",
            "For urgent needs, call us directly"
          ]
        };
      case 'newsletter':
        return {
          title: "Successfully Subscribed",
          message: "Welcome to Heavy Haulers updates! You'll now receive our latest news, tips, and special offers directly in your inbox.",
          nextSteps: [
            "Check your email for a confirmation message",
            "Follow us on social media for daily updates",
            "Visit our blog for towing tips and guides",
            "Contact us anytime for towing services"
          ]
        };
      default: // contact
        return {
          title: "Message Sent Successfully",
          message: "Thank you for contacting Heavy Haulers! We've received your message and will respond as soon as possible.",
          nextSteps: [
            "Our team will review your message",
            "Expect a response within 24 hours",
            "For emergencies, call us directly",
            "We'll follow up via your preferred method"
          ]
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Thank You - Heavy Haulers | Professional Towing Services</title>
        <meta name="description" content="Thank you for contacting Heavy Haulers. We've received your message and will respond promptly." />
      </Helmet>
      <Header />
      <main>
        {/* Thank You Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-success/10 border border-success/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {content.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                {content.message}
              </p>

              {/* Next Steps */}
              <div className="bg-card border border-border rounded-2xl p-8 text-left mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">What Happens Next?</h2>
                <div className="space-y-4">
                  {content.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/">
                    <Home className="w-5 h-5 mr-2" />
                    Return to Homepage
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:650-881-2400">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 650-881-2400
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-gradient-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Clock className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Emergency Towing Right Now?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Don't wait for our response if you're in an emergency situation. 
                Our dispatch team is available 24/7 for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-gray-100" asChild>
                  <a href="tel:650-881-2400">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Dispatch
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/services">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    View All Services
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground text-center mb-12">
                While You Wait, Explore Our Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-elevated transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Our Services</h3>
                  <p className="text-muted-foreground mb-4">
                    Learn about our comprehensive towing and recovery services across the Bay Area.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-elevated transition-all duration-300">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Coverage Areas</h3>
                  <p className="text-muted-foreground mb-4">
                    See all the Bay Area counties and cities we serve with local dispatch.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/locations">View Coverage</Link>
                  </Button>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-elevated transition-all duration-300">
                  <div className="w-12 h-12 bg-warning/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-warning" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Towing Guides</h3>
                  <p className="text-muted-foreground mb-4">
                    Read our expert guides on emergency procedures and vehicle care.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/blog">Read Blog</Link>
                  </Button>
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

export default ThankYou;
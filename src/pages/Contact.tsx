import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/lib/formSubmission";
import { useNavigate } from "react-router-dom";

const dispatchAreas = [
  {
    area: "Peninsula / San Mateo / Brisbane",
    phone: "650-881-2400",
  },
  {
    area: "East Bay (San Leandro / Hayward)",
    phone: "510-800-3800",
  },
  {
    area: "South Bay (San Jose)",
    phone: "408-800-3800",
  },
  {
    area: "Central Valley (Stockton)",
    phone: "916-701-2200",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    website: "" // honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible. Check your email for confirmation.",
      });
      navigate('/thank-you?type=contact');
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or call us directly at 650-881-2400.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Contact Form",
      description: "Quick responses for non-emergency inquiries",
      action: "#send-message",
      label: "Send Message",
      urgent: false
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "General inquiries and fleet contracts",
      action: "mailto:dispatch@heavytowpro.com",
      label: "dispatch@heavytowpro.com",
      urgent: false
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
    { day: "Emergency Dispatch", hours: "24/7 Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Heavy Tow Pro - 24/7 Emergency Towing San Francisco Bay Area | Call (650) 881-2400</title>
        <meta name="description" content="Contact Heavy Tow Pro for immediate 24/7 emergency towing, commercial fleet services, and professional vehicle recovery throughout San Francisco, San Mateo, Alameda, Santa Clara, and San Joaquin counties." />
        <meta name="keywords" content="contact emergency towing San Francisco, 24/7 towing dispatch Bay Area, Heavy Tow Pro contact information, professional towing company San Francisco, fleet towing contracts, emergency roadside assistance contact" />
        <link rel="canonical" href="https://heavytowpro.com/contact" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Contact Heavy Tow Pro - 24/7 Towing Services San Francisco" />
        <meta property="og:description" content="Contact Heavy Tow Pro for professional towing services in San Francisco Bay Area. 24/7 emergency dispatch, fleet contracts, and transparent pricing." />
        <meta property="og:url" content="https://heavytowpro.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Heavy Tow Pro - 24/7 Towing Services San Francisco" />
        <meta name="twitter:description" content="Contact Heavy Tow Pro for professional towing services in San Francisco Bay Area. 24/7 emergency dispatch available." />
        
        {/* Local business geo-targeting */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Francisco, CA" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        
        {/* Enhanced Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Heavy Tow Pro",
              "description": "Professional 24/7 emergency towing and recovery services in San Francisco Bay Area",
              "url": "https://heavytowpro.com",
              "telephone": "+1-650-881-2400",
              "email": "dispatch@heavytowpro.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "351 Industrial Way",
                "addressLocality": "Brisbane",
                "addressRegion": "CA",
                "postalCode": "94005",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.6879",
                "longitude": "-122.3999"
              },
              "areaServed": [
                { "@type": "Place", "name": "San Francisco County, CA" },
                { "@type": "Place", "name": "San Mateo County, CA" },
                { "@type": "Place", "name": "Alameda County, CA" },
                { "@type": "Place", "name": "Santa Clara County, CA" },
                { "@type": "Place", "name": "San Joaquin County, CA" }
              ],
              "serviceType": ["Emergency Towing", "Heavy Duty Towing", "Light Duty Towing", "Medium Duty Towing", "Fleet Services", "Vehicle Recovery"],
              "openingHours": "Mo-Su 00:00-24:00",
              "paymentAccepted": ["Cash", "Credit Card", "Insurance", "Fleet Contract"],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
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
                  "name": "Heavy Tow Pro"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@id": "https://heavytowpro.com/contact",
                  "name": "Contact Us"
                }
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
                Contact
                <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
                  Heavy Tow Pro
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Need immediate help? Call your area's 24/7 emergency dispatch. For general inquiries, 
                fleet contracts, or to schedule non-emergency services, we're here to help.
              </p>
              <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-warning" />
                <span className="text-sm font-medium text-foreground">24/7 Emergency Dispatch Available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Dispatch Area Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Emergency Dispatch – Select Your Area
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Call the dispatch line closest to you for the fastest response.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {dispatchAreas.map((dispatch) => (
                <div key={dispatch.phone + dispatch.area} className="bg-card border border-primary/30 bg-primary/5 rounded-2xl p-6 text-center hover:shadow-elevated hover:scale-105 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{dispatch.area}</h3>
                  <p className="text-sm text-muted-foreground mb-1">24/7 Emergency Dispatch</p>
                  <p className="text-xl font-bold text-primary mb-4">{dispatch.phone}</p>
                  <Button variant="hero" className="w-full" asChild>
                    <a href={`tel:${dispatch.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* Other contact methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-2xl p-8 text-center hover:shadow-elevated hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{method.title}</h3>
                    <p className="text-muted-foreground mb-6">{method.description}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href={method.action}>
                        {method.label}
                      </a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section className="py-20 bg-muted/20" id="send-message">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-up">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Use this form for general inquiries, fleet contracts, or to schedule non-emergency services. 
                  For immediate assistance, please call your area's dispatch line.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="What can we help you with?"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  {/* Honeypot field - hidden from users */}
                  <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                    <Label htmlFor="website">Website (leave blank)</Label>
                    <Input
                      id="website"
                      type="text"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Office Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Office Hours</h2>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="space-y-4">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className={`flex justify-between items-center pb-4 ${index < officeHours.length - 1 ? 'border-b border-border' : ''} ${schedule.day === 'Emergency Dispatch' ? 'bg-primary/10 -mx-6 -mb-6 px-6 pt-4 pb-6 rounded-b-xl' : ''}`}>
                          <span className={`font-medium ${schedule.day === 'Emergency Dispatch' ? 'text-primary' : 'text-foreground'}`}>
                            {schedule.day}
                          </span>
                          <span className={`${schedule.day === 'Emergency Dispatch' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Service Area</h3>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Bay Area & Central Valley</h4>
                        <p className="text-muted-foreground text-sm">
                          Serving San Francisco, San Mateo, Alameda, Santa Clara, and San Joaquin counties
                        </p>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• San Francisco County - All districts</p>
                      <p>• San Mateo County - Peninsula communities</p>
                      <p>• Alameda County - East Bay areas</p>
                      <p>• Santa Clara County - Silicon Valley & South Bay</p>
                      <p>• San Joaquin County - Stockton & surrounding areas</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Fleet Inquiries - Full Width Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Fleet Inquiries</h2>
              <div className="bg-card border border-border rounded-xl p-8">
                <p className="text-muted-foreground mb-6 text-center">
                  Looking for fleet contracts or commercial towing agreements? We offer:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Priority dispatch for business vehicles</li>
                    <li>• Volume pricing for fleet operations</li>
                  </ul>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Service level agreements (SLAs)</li>
                    <li>• Dedicated account management</li>
                  </ul>
                </div>
                <div className="text-center">
                  <Button variant='outline' size='lg' asChild>
                    <a href='mailto:dispatch@heavytowpro.com'>
                      <Mail className='w-4 h-4 mr-2' />
                      dispatch@heavytowpro.com
                    </a>
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

export default Contact;

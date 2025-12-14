import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Phone, Clock, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

import emergencyGuideImage from "@/assets/blog-emergency-guide.jpg";
import heavyEquipmentImage from "@/assets/blog-heavy-equipment.jpg";
import fleetManagementImage from "@/assets/blog-fleet-management.jpg";
import sfChallengesImage from "@/assets/blog-sf-challenges.jpg";
import luxuryTransportImage from "@/assets/blog-luxury-transport.jpg";
import winterTowingImage from "@/assets/blog-winter-towing.jpg";
import motorcycleTowingImage from "@/assets/blog-motorcycle-towing.jpg";
import evTowingImage from "@/assets/blog-ev-towing.jpg";
import roadsideVsTowingImage from "@/assets/blog-roadside-vs-towing.jpg";
import commercialRecoveryImage from "@/assets/blog-commercial-recovery.jpg";
import commercialTruckImage from "@/assets/blog-commercial-truck-towing.jpg";
import accidentSceneImage from "@/assets/blog-accident-scene-management.jpg";
import constructionEquipmentImage from "@/assets/blog-construction-equipment-hauling.jpg";
import vehicleStorageImage from "@/assets/blog-vehicle-storage-solutions.jpg";
import towingTechnologyImage from "@/assets/blog-towing-technology.jpg";

const BlogNew = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const categories = [
    "All Articles", "Emergency Response", "Commercial Services", "Construction Services", 
    "Storage Services", "Technology & Innovation", "Heavy Duty", "Safety Tips", "Specialized Services",
    "SF Local Services", "Regulations & Compliance"
  ];

  const articles = [
    // October 2025 Posts (Newest)
    {
      id: "chp-towing-california",
      title: "CHP Towing in California: What Happens When Highway Patrol Tows Your Vehicle",
      excerpt: "Complete guide to California Highway Patrol towing procedures, impound recovery, fees, and your rights when CHP orders a tow.",
      image: commercialTruckImage,
      author: "Heavy Haulers Team",
      date: "October 28, 2025",
      readTime: "10 min read",
      category: "Regulations & Compliance"
    },
    {
      id: "freeway-towing-bay-area",
      title: "Freeway Towing Bay Area: Highway Recovery Services",
      excerpt: "Professional freeway and highway towing services across the Bay Area with rapid response, safety protocols, and traffic management.",
      image: commercialTruckImage,
      author: "Heavy Haulers Team",
      date: "October 24, 2025",
      readTime: "9 min read",
      category: "Emergency Response"
    },
    {
      id: "heavy-duty-recovery-bay-area",
      title: "Heavy Duty Recovery Bay Area: Commercial & Industrial Towing",
      excerpt: "Specialized heavy-duty vehicle recovery services for semi-trucks, buses, and industrial equipment throughout the Bay Area.",
      image: heavyEquipmentImage,
      author: "Heavy Haulers Team",
      date: "October 21, 2025",
      readTime: "10 min read",
      category: "Heavy Duty"
    },
    {
      id: "underground-garage-towing-sf",
      title: "Underground Garage Towing SF: Low Clearance Vehicle Recovery",
      excerpt: "Specialized underground parking garage towing in San Francisco with low-clearance equipment and tight-space recovery techniques.",
      image: sfChallengesImage,
      author: "Heavy Haulers Team",
      date: "October 17, 2025",
      readTime: "8 min read",
      category: "SF Local Services"
    },
    {
      id: "rv-towing-bay-area",
      title: "RV Towing Bay Area: Recreational Vehicle Transport Guide",
      excerpt: "Complete guide to RV and motorhome towing services in the Bay Area including Class A, B, C motorhomes and travel trailers.",
      image: heavyEquipmentImage,
      author: "Heavy Haulers Team",
      date: "October 14, 2025",
      readTime: "9 min read",
      category: "Specialized Services"
    },
    {
      id: "box-truck-towing-san-francisco",
      title: "Box Truck Towing San Francisco: Commercial Vehicle Recovery",
      excerpt: "Professional box truck and delivery vehicle towing services in San Francisco with medium-duty recovery capabilities.",
      image: commercialTruckImage,
      author: "Heavy Haulers Team",
      date: "October 10, 2025",
      readTime: "8 min read",
      category: "Commercial Services"
    },
    {
      id: "towing-cost-san-francisco",
      title: "Towing Cost San Francisco: Complete Price Guide 2025",
      excerpt: "Comprehensive breakdown of towing costs in San Francisco including impound fees, private towing rates, and money-saving tips.",
      image: towingTechnologyImage,
      author: "Heavy Haulers Team",
      date: "October 7, 2025",
      readTime: "9 min read",
      category: "SF Local Services"
    },
    {
      id: "california-private-property-towing",
      title: "California Private Property Towing: Laws and Your Rights",
      excerpt: "Understanding California's private property towing laws, signage requirements, fee limits, and how to dispute unauthorized tows.",
      image: vehicleStorageImage,
      author: "Heavy Haulers Team",
      date: "October 5, 2025",
      readTime: "10 min read",
      category: "Regulations & Compliance"
    },
    {
      id: "sf-tow-fee-discount",
      title: "SF Tow Fee Discount: Low-Income Towing Assistance Programs",
      excerpt: "Guide to San Francisco's tow fee discount programs for low-income residents, eligibility requirements, and application process.",
      image: sfChallengesImage,
      author: "Heavy Haulers Team",
      date: "October 4, 2025",
      readTime: "7 min read",
      category: "SF Local Services"
    },
    {
      id: "car-towed-san-francisco",
      title: "My Car Was Towed in San Francisco: What to Do Next",
      excerpt: "Step-by-step guide to recovering your towed vehicle in San Francisco, including SFMTA procedures, fees, and your legal rights.",
      image: sfChallengesImage,
      author: "Heavy Haulers Team",
      date: "October 3, 2025",
      readTime: "9 min read",
      category: "SF Local Services"
    },
    // September 2025 Posts
    {
      id: "towing-technology-gps-fleet-management",
      title: "Towing Technology: GPS Tracking and Modern Fleet Management",
      excerpt: "Discover modern towing technology including GPS tracking, fleet management software, and real-time customer communication systems.",
      image: towingTechnologyImage,
      author: "Heavy Haulers Team",
      date: "September 30, 2025",
      readTime: "8 min read",
      category: "Technology & Innovation"
    },
    {
      id: "luxury-transport-guide",
      title: "Luxury Vehicle Transport: Premium Care for Premium Cars", 
      excerpt: "Specialized luxury vehicle transport services with premium care and protection for high-end automobiles in the Bay Area.",
      image: luxuryTransportImage,
      author: "Heavy Haulers Team",
      date: "September 16, 2025",
      readTime: "7 min read",
      category: "Specialized Services"
    },
    {
      id: "vehicle-storage-solutions",
      title: "Vehicle Storage Solutions: Secure Towing and Long-Term Parking",
      excerpt: "Professional vehicle storage and impound services with secure facilities, legal compliance, and easy retrieval processes.",
      image: vehicleStorageImage,
      author: "Heavy Haulers Team",
      date: "September 12, 2025",
      readTime: "9 min read",
      category: "Storage Services"
    },
    {
      id: "sf-towing-challenges",
      title: "San Francisco Towing Challenges: Urban Recovery Solutions",
      excerpt: "Navigate San Francisco's unique towing challenges with expert insights on steep hills, narrow streets, and parking regulations.",
      image: sfChallengesImage,
      author: "Heavy Haulers Team",
      date: "September 10, 2025", 
      readTime: "8 min read",
      category: "Emergency Response"
    },
    {
      id: "commercial-vehicle-urban-recovery",
      title: "Commercial Vehicle Urban Recovery: City Towing Solutions",
      excerpt: "Specialized commercial vehicle recovery in urban environments. Expert solutions for city-based commercial towing challenges.",
      image: commercialRecoveryImage,
      author: "Heavy Haulers Team",
      date: "September 6, 2025",
      readTime: "9 min read", 
      category: "Commercial Services"
    },
    {
      id: "roadside-assistance-vs-towing",
      title: "Roadside Assistance vs Towing: When to Call Who",
      excerpt: "Understanding the difference between roadside assistance and towing services. Know when to call for the right help.",
      image: roadsideVsTowingImage,
      author: "Heavy Haulers Team",
      date: "September 2, 2025",
      readTime: "5 min read",
      category: "Safety Tips"
    },
    // August 2025 Posts
    {
      id: "construction-equipment-hauling",
      title: "Construction Equipment Hauling: Oversize Load Transportation Guide",
      excerpt: "Expert construction equipment hauling with permit assistance, route planning, and specialized transport solutions.",
      image: constructionEquipmentImage,
      author: "Heavy Haulers Team",
      date: "August 29, 2025",
      readTime: "10 min read",
      category: "Construction Services"
    },
    {
      id: "electric-vehicle-towing-guide",
      title: "Electric Vehicle Towing Guide: EV Transport Best Practices",
      excerpt: "Essential guide to electric vehicle towing with specialized techniques and safety protocols for EV transport in the Bay Area.",
      image: evTowingImage,
      author: "Heavy Haulers Team",
      date: "August 27, 2025", 
      readTime: "6 min read",
      category: "Specialized Services"
    },
    {
      id: "motorcycle-towing-guide", 
      title: "Motorcycle Towing Guide: Safe Transport for Two-Wheelers",
      excerpt: "Comprehensive guide to motorcycle towing in the Bay Area. Safe transport techniques and specialized equipment for bikes.",
      image: motorcycleTowingImage,
      author: "Heavy Haulers Team",
      date: "August 23, 2025",
      readTime: "6 min read",
      category: "Specialized Services"
    },
    {
      id: "winter-towing-preparedness",
      title: "Winter Towing Preparedness: Bay Area Vehicle Safety",
      excerpt: "Essential winter towing preparedness tips for Bay Area drivers. Learn about seasonal challenges and emergency planning.",
      image: winterTowingImage,
      author: "Heavy Haulers Team", 
      date: "August 19, 2025",
      readTime: "6 min read",
      category: "Safety Tips"
    },
    {
      id: "accident-scene-management",
      title: "Accident Scene Management: Professional Towing Response Protocols",
      excerpt: "Expert accident scene management and multi-vehicle recovery with professional coordination and insurance support.",
      image: accidentSceneImage,
      author: "Heavy Haulers Team",
      date: "August 15, 2025",
      readTime: "8 min read",
      category: "Emergency Response"
    },
    {
      id: "heavy-equipment-transport",
      title: "Heavy Equipment Transport: Specialized Moving Solutions",
      excerpt: "Professional heavy equipment transport services in the Bay Area. Specialized solutions for construction and industrial moving.",
      image: heavyEquipmentImage,
      author: "Heavy Haulers Team",
      date: "August 13, 2025",
      readTime: "9 min read", 
      category: "Heavy Duty"
    },
    {
      id: "fleet-management-towing",
      title: "Fleet Management Towing: Business Vehicle Solutions",
      excerpt: "Comprehensive fleet management towing solutions for businesses. Reduce downtime and optimize your commercial vehicle operations.",
      image: fleetManagementImage,
      author: "Heavy Haulers Team", 
      date: "August 9, 2025",
      readTime: "8 min read",
      category: "Commercial Services"
    },
    {
      id: "emergency-towing-guide",
      title: "Emergency Towing Guide: What to Do When Stranded",
      excerpt: "Complete guide to emergency towing procedures for San Francisco Bay Area drivers. Learn safety tips and how to get professional help fast.",
      image: emergencyGuideImage,
      author: "Heavy Haulers Team",
      date: "August 5, 2025",
      readTime: "7 min read",
      category: "Emergency Response"
    },
    {
      id: "commercial-truck-towing-interstate",
      title: "Commercial Truck Towing: Interstate Highway Recovery Solutions",
      excerpt: "Professional commercial truck towing services for interstate highways with DOT compliance and 24/7 emergency response.",
      image: commercialTruckImage,
      author: "Heavy Haulers Team",
      date: "August 1, 2025",
      readTime: "9 min read",
      category: "Commercial Services"
    }
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          to: 'dispatch@heavytowpro.com',
          subject: 'Newsletter Subscription',
          name: '',
          email: email,
          message: 'Newsletter subscription request',
          type: 'newsletter'
        }
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Heavy Haulers Blog - Towing Industry Insights & Expert Guides | San Francisco Bay Area</title>
        <meta name="description" content="Expert insights on towing, heavy hauling, and fleet management. Stay informed with the latest industry news, safety tips, and best practices from Heavy Haulers San Francisco." />
        <meta name="keywords" content="towing blog San Francisco, heavy hauling insights, fleet management tips, towing industry news, emergency towing guides, Bay Area towing experts" />
        <link rel="canonical" href="https://heavytowpro.com/blog" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Heavy Haulers Blog - Towing Industry Insights | San Francisco" />
        <meta property="og:description" content="Expert insights on towing, heavy hauling, and fleet management from San Francisco Bay Area professionals." />
        <meta property="og:url" content="https://heavytowpro.com/blog" />
        <meta property="og:type" content="blog" />
        
        {/* Schema.org JSON-LD for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Heavy Haulers Towing Blog",
            "description": "Expert towing insights, guides, and industry news from San Francisco Bay Area professionals",
            "url": "https://heavytowpro.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Heavy Haulers San Francisco",
              "url": "https://heavytowpro.com"
            },
            "inLanguage": "en-US"
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Industry <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert insights on towing, heavy hauling, and fleet management from the Bay Area's leading professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link key={article.id} to={`/blog/${article.id}`} className="block">
                  <Card className="group hover:shadow-elevated transition-all duration-300 animate-fade-in">
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{article.author}</span>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read More <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-8">
                Get the latest industry insights, safety tips, and company news delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" variant="hero">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Emergency Towing?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Don't wait when you're stranded. Our 24/7 emergency response team is ready to help anywhere in the Bay Area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="xl" 
                  variant="secondary"
                  onClick={() => window.location.href = 'tel:650-881-2400'}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (650) 881-2400
                </Button>
                <Button 
                  size="xl" 
                  variant="outline"
                  asChild
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  <Link to="/get-a-quote">Get Free Quote</Link>
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

export default BlogNew;
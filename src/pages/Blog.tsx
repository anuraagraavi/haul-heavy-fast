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

const BlogNew = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const categories = [
    "All Articles", "Emergency Towing", "Heavy Hauling", "Fleet Management", 
    "Safety Tips", "Industry News"
  ];

  const articles = [
    {
      id: "emergency-towing-guide",
      title: "Emergency Towing Guide: What Every Bay Area Driver Should Know",
      excerpt: "Essential information for Bay Area drivers about emergency towing services, what to expect, and how to stay safe during roadside emergencies.",
      image: emergencyGuideImage,
      author: "Heavy Haulers Team",
      date: "January 15, 2024",
      readTime: "6 min read",
      category: "Emergency Towing"
    },
    {
      id: "heavy-equipment-transport",
      title: "Heavy Equipment Transport: Permits, Routes & Safety Protocols",
      excerpt: "Complete overview of heavy equipment transportation requirements in California, including permit processes, route planning, and safety regulations.",
      image: heavyEquipmentImage,
      author: "Heavy Haulers Team",
      date: "January 12, 2024",
      readTime: "8 min read",
      category: "Heavy Hauling"
    },
    {
      id: "fleet-management-reducing-downtime",
      title: "Fleet Management: Reducing Downtime & Towing Costs",
      excerpt: "Strategic approaches to fleet management that minimize vehicle downtime and reduce emergency towing expenses through preventive maintenance and planning.",
      image: fleetManagementImage,
      author: "Heavy Haulers Team",
      date: "January 10, 2024",
      readTime: "7 min read",
      category: "Fleet Management"
    },
    {
      id: "san-francisco-towing-challenges",
      title: "San Francisco Towing Challenges: Hills, Traffic & Regulations",
      excerpt: "Understanding the unique challenges of towing operations in San Francisco, from steep grades to complex traffic patterns and city regulations.",
      image: sfChallengesImage,
      author: "Heavy Haulers Team",
      date: "January 8, 2024",
      readTime: "6 min read",
      category: "Emergency Towing"
    },
    {
      id: "luxury-vehicle-transport",
      title: "Luxury Vehicle Transport: Protecting High-Value Cars",
      excerpt: "Specialized techniques and equipment used for transporting luxury, classic, and high-value vehicles safely and securely.",
      image: luxuryTransportImage,
      author: "Heavy Haulers Team",
      date: "January 5, 2024",
      readTime: "7 min read",
      category: "Heavy Hauling"
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
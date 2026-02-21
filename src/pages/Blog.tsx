import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Phone, Clock, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { blogPosts, BLOG_CATEGORIES, type BlogCategory } from "@/data/blogRegistry";

const POSTS_PER_PAGE = 9;

const BlogNew = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const { toast } = useToast();

  // Get category from URL or default to "All Articles"
  const categoryParam = searchParams.get("category");
  const activeCategory: BlogCategory = BLOG_CATEGORIES.includes(categoryParam as BlogCategory)
    ? (categoryParam as BlogCategory)
    : "All Articles";

  // Filter posts based on active category
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All Articles") return blogPosts;
    return blogPosts.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  // Reset visible posts when category changes
  useEffect(() => {
    setVisiblePosts(POSTS_PER_PAGE);
  }, [activeCategory]);

  const handleCategoryChange = (category: BlogCategory) => {
    if (category === "All Articles") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + POSTS_PER_PAGE);
  };

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

  const postsToShow = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

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
                {BLOG_CATEGORIES.map((category) => (
                  <Badge 
                    key={category} 
                    variant={activeCategory === category ? "default" : "secondary"} 
                    className={`cursor-pointer transition-colors ${
                      activeCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-primary hover:text-primary-foreground"
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
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
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">
                {activeCategory === "All Articles" ? "Latest Articles" : activeCategory}
              </h2>
              {activeCategory !== "All Articles" && (
                <span className="text-muted-foreground">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                </span>
              )}
            </div>

            {postsToShow.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found in this category.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => handleCategoryChange("All Articles")}
                >
                  View All Articles
                </Button>
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {postsToShow.map((article) => (
                    <Link key={article.id} to={`/blog/${article.slug}`} className="block">
                      <Card className="group hover:shadow-elevated transition-all duration-300 animate-fade-in h-full">
                        <div className="relative overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            width={400}
                            height={225}
                            loading="lazy"
                            decoding="async"
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

                {/* Load More Button */}
                {hasMorePosts && (
                  <div className="flex justify-center mt-12">
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={handleLoadMore}
                      className="min-w-[200px]"
                    >
                      Load More Articles
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}

                {/* Posts count indicator */}
                <p className="text-center text-muted-foreground mt-6">
                  Showing {postsToShow.length} of {filteredPosts.length} articles
                </p>
              </>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter for the latest towing industry insights and Bay Area transportation news.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Emergency Towing Services?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Our team is available 24/7 for all your towing and recovery needs across the San Francisco Bay Area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:650-881-2400" className="inline-flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call 650-881-2400
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link to="/get-a-quote">
                    Get a Free Quote
                  </Link>
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

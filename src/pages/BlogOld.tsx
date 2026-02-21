import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const categories = [
    { name: "Emergency Know-How", count: 8, color: "bg-warning" },
    { name: "Vehicle Care", count: 12, color: "bg-success" },
    { name: "Fleet Advice", count: 6, color: "bg-primary" },
    { name: "Local Insights", count: 4, color: "bg-accent" }
  ];

  const featuredPosts = [
    {
      title: "What to Do When Your Heavy Equipment Breaks Down on the Highway",
      excerpt: "Essential steps to ensure safety and get professional help fast when your construction equipment fails.",
      category: "Emergency Know-How",
      author: "Mike Rodriguez",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png"
    },
    {
      title: "Fleet Maintenance: Preventing Costly Breakdowns",
      excerpt: "Proactive maintenance strategies that save thousands in emergency towing and repair costs.",
      category: "Fleet Advice", 
      author: "Sarah Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      image: "/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png"
    },
    {
      title: "San Francisco's Most Challenging Towing Locations",
      excerpt: "How Heavy Haulers navigates steep hills, narrow streets, and complex parking situations.",
      category: "Local Insights",
      author: "Tony Martinez",
      date: "2024-01-10",
      readTime: "4 min read",
      image: "/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png"
    }
  ];

  const recentPosts = [
    {
      title: "Winter Towing Safety: What Every Driver Should Know",
      category: "Emergency Know-How",
      date: "2024-01-08",
      readTime: "6 min read"
    },
    {
      title: "Luxury Car Transport: Special Handling for Exotic Vehicles",
      category: "Vehicle Care",
      date: "2024-01-05",
      readTime: "5 min read"
    },
    {
      title: "Commercial Vehicle Regulations in California",
      category: "Fleet Advice",
      date: "2024-01-03",
      readTime: "8 min read"
    },
    {
      title: "Oakland Port Area: Heavy Hauling Challenges",
      category: "Local Insights",
      date: "2024-01-01",
      readTime: "4 min read"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Towing Blog & Guides | Heavy Haulers San Francisco</title>
        <meta name="description" content="Expert towing advice, emergency guides, and fleet management tips from Heavy Haulers. Stay informed with our professional insights and local knowledge." />
        <meta name="keywords" content="towing blog, emergency guides, vehicle care, fleet advice, San Francisco towing tips" />
        <link rel="canonical" href="/blog" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-hero">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Towing <span className="text-warning">Knowledge</span> Hub
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Expert advice, emergency guides, and industry insights from San Francisco's most trusted heavy haulers.
                </p>
                
                {/* Category Pills */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {categories.map((category) => (
                    <Badge key={category.name} variant="secondary" className="px-4 py-2 text-sm">
                      {category.name} ({category.count})
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Posts */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Featured Articles</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post, index) => (
                  <Card key={index} className="bg-card hover:shadow-orange transition-all duration-300 group cursor-pointer">
                    <div className="aspect-video bg-muted rounded-t-lg mb-4 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        width={400}
                        height={225}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-warning transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Posts */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Recent Posts</h2>
                
                <div className="space-y-6">
                  {recentPosts.map((post, index) => (
                    <Card key={index} className="bg-card hover:shadow-blue transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {post.category}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold group-hover:text-warning transition-colors mb-2">
                              {post.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-warning transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-gradient-primary">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Need Emergency Towing?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Don't wait - our 24/7 dispatch team is ready to help with fast, professional towing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="hero" className="text-lg px-8">
                  Call (415) 555-TOWS
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/20 hover:bg-white/20">
                  Get Instant Quote
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
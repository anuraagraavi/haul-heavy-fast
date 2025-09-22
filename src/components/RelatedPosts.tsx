import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  route: string;
  readTime: string;
  category: string;
}

interface RelatedPostsProps {
  currentPostId: string;
  category?: string;
}

const allBlogPosts: BlogPost[] = [
  {
    id: "emergency-towing-guide",
    title: "Emergency Towing Guide: What to Do When You're Stranded",
    excerpt: "Complete guide to emergency towing procedures for San Francisco Bay Area drivers",
    image: "/src/assets/blog-emergency-guide.jpg",
    route: "/blog/emergency-towing-guide",
    readTime: "7 min read",
    category: "Emergency Services"
  },
  {
    id: "fleet-management-reducing-downtime",
    title: "Fleet Management & Towing: Reducing Downtime for Businesses",
    excerpt: "Learn how proper fleet management and towing partnerships can minimize business disruptions",
    image: "/src/assets/blog-fleet-management.jpg",
    route: "/blog/fleet-management-reducing-downtime",
    readTime: "8 min read",
    category: "Fleet Management"
  },
  {
    id: "heavy-equipment-transport",
    title: "Heavy Equipment Transport: Moving Industrial Machinery Safely",
    excerpt: "Professional guide to transporting heavy machinery and construction equipment",
    image: "/src/assets/blog-heavy-equipment.jpg",
    route: "/blog/heavy-equipment-transport",
    readTime: "9 min read",
    category: "Heavy Duty"
  },
  {
    id: "luxury-vehicle-transport",
    title: "Luxury Vehicle Transport: Premium Care for High-End Cars",
    excerpt: "Specialized transport solutions for luxury and exotic vehicles in the Bay Area",
    image: "/src/assets/blog-luxury-transport.jpg",
    route: "/blog/luxury-vehicle-transport",
    readTime: "6 min read",
    category: "Specialty Services"
  },
  {
    id: "san-francisco-towing-challenges",
    title: "Navigating San Francisco's Unique Towing Challenges",
    excerpt: "Understanding the complexities of towing in San Francisco's urban environment",
    image: "/src/assets/blog-sf-challenges.jpg",
    route: "/blog/san-francisco-towing-challenges",
    readTime: "7 min read",
    category: "Local Insights"
  },
  {
    id: "winter-towing-preparedness",
    title: "Winter Towing Preparedness: Bay Area Weather Challenges",
    excerpt: "Preparing for rain, fog, and seasonal challenges in Bay Area driving",
    image: "/src/assets/blog-winter-towing.jpg",
    route: "/blog/winter-towing-preparedness",
    readTime: "8 min read",
    category: "Safety Tips"
  },
  {
    id: "motorcycle-towing-guide",
    title: "Motorcycle Towing Guide: Safe Transport for Two-Wheelers",
    excerpt: "Specialized towing solutions and safety protocols for motorcycle transport",
    image: "/src/assets/blog-motorcycle-towing.jpg",
    route: "/blog/motorcycle-towing-guide",
    readTime: "9 min read",
    category: "Specialty Services"
  },
  {
    id: "electric-vehicle-towing-guide",
    title: "Electric Vehicle Towing: Special Considerations for EVs",
    excerpt: "Understanding EV-specific safety requirements and specialized towing equipment",
    image: "/src/assets/blog-ev-towing.jpg",
    route: "/blog/electric-vehicle-towing-guide",
    readTime: "8 min read",
    category: "Modern Vehicles"
  },
  {
    id: "roadside-assistance-vs-towing",
    title: "Roadside Assistance vs. Towing: When to Choose What",
    excerpt: "Decision guide for choosing between roadside assistance and full towing services",
    image: "/src/assets/blog-roadside-vs-towing.jpg",
    route: "/blog/roadside-assistance-vs-towing",
    readTime: "9 min read",
    category: "Service Comparison"
  },
  {
    id: "commercial-vehicle-urban-recovery",
    title: "Commercial Vehicle Breakdown Recovery in Urban Areas",
    excerpt: "Specialized recovery strategies for commercial vehicles in busy city environments",
    image: "/src/assets/blog-commercial-recovery.jpg",
    route: "/blog/commercial-vehicle-urban-recovery",
    readTime: "10 min read",
    category: "Commercial Services"
  }
];

const RelatedPosts = ({ currentPostId, category }: RelatedPostsProps) => {
  // Filter out current post and get related posts
  let relatedPosts = allBlogPosts.filter(post => post.id !== currentPostId);
  
  // Prioritize posts from the same category
  if (category) {
    const sameCategoryPosts = relatedPosts.filter(post => post.category === category);
    const otherPosts = relatedPosts.filter(post => post.category !== category);
    relatedPosts = [...sameCategoryPosts, ...otherPosts];
  }
  
  // Take first 3 related posts
  const displayPosts = relatedPosts.slice(0, 3);

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Related Articles</h2>
            <p className="text-muted-foreground">
              Explore more insights and guides from our towing experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {displayPosts.map((post) => (
              <article key={post.id} className="group">
                <Link to={post.route} className="block">
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link to="/blog">
                View All Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;
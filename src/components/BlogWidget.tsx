import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  route: string;
  readTime: string;
  category: string;
  publishDate: string;
}

const featuredBlogPosts: BlogPost[] = [
  {
    id: "winter-towing-preparedness",
    title: "Winter Towing Preparedness: Essential Guide for Bay Area Drivers",
    excerpt: "Prepare your vehicle for winter conditions and learn when professional towing services become essential during challenging weather.",
    image: "/src/assets/blog-winter-towing.jpg", 
    route: "/blog/winter-towing-preparedness",
    readTime: "7 min read",
    category: "Safety & Preparedness",
    publishDate: "2024-01-15"
  },
  {
    id: "motorcycle-towing-guide",
    title: "Motorcycle Towing Guide: Safe Transport for Your Bike",
    excerpt: "Professional motorcycle towing techniques, equipment requirements, and how to choose the right service for your valuable bike.",
    image: "/src/assets/blog-motorcycle-towing.jpg",
    route: "/blog/motorcycle-towing-guide", 
    readTime: "6 min read",
    category: "Specialized Services",
    publishDate: "2024-01-10"
  },
  {
    id: "electric-vehicle-towing-guide",
    title: "Electric Vehicle Towing Guide: Special Considerations & Safety",
    excerpt: "Critical safety protocols and specialized procedures for towing electric vehicles, including Tesla and other EV brands.",
    image: "/src/assets/blog-ev-towing.jpg",
    route: "/blog/electric-vehicle-towing-guide",
    readTime: "8 min read", 
    category: "Electric Vehicles",
    publishDate: "2024-01-05"
  },
  {
    id: "emergency-towing-guide",
    title: "Emergency Towing Guide: What to Do When You're Stranded",
    excerpt: "Step-by-step emergency protocols, safety tips, and essential information to provide when calling for emergency towing services.",
    image: "/src/assets/blog-emergency-guide.jpg",
    route: "/blog/emergency-towing-guide",
    readTime: "5 min read",
    category: "Emergency Services", 
    publishDate: "2024-01-01"
  },
  {
    id: "roadside-assistance-vs-towing",
    title: "Roadside Assistance vs Full Towing: Which Service Do You Need?",
    excerpt: "Understanding the difference between roadside assistance and full towing services to make informed decisions during emergencies.",
    image: "/src/assets/blog-roadside-vs-towing.jpg",
    route: "/blog/roadside-assistance-vs-towing",
    readTime: "6 min read",
    category: "Service Comparison",
    publishDate: "2023-12-28"
  },
  {
    id: "commercial-vehicle-urban-recovery",
    title: "Commercial Vehicle Recovery in Urban Areas: Challenges & Solutions",
    excerpt: "Navigate the complexities of commercial vehicle recovery in dense urban environments with specialized equipment and strategies.",
    image: "/src/assets/blog-commercial-recovery.jpg",
    route: "/blog/commercial-vehicle-urban-recovery",
    readTime: "9 min read",
    category: "Commercial Services",
    publishDate: "2023-12-25"
  }
];

export default function BlogWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const updateVisiblePosts = () => {
      if (window.innerWidth >= 1024) {
        setVisiblePosts(3);
      } else if (window.innerWidth >= 768) {
        setVisiblePosts(2);
      } else {
        setVisiblePosts(1);
      }
    };

    updateVisiblePosts();
    window.addEventListener('resize', updateVisiblePosts);
    return () => window.removeEventListener('resize', updateVisiblePosts);
  }, []);

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < featuredBlogPosts.length - visiblePosts;

  const scrollLeft = () => {
    if (canScrollLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section 
      ref={ref}
      className={`py-16 bg-gradient-subtle transition-all duration-700 ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Towing <span className="text-primary">Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay informed with expert advice, safety tips, and industry insights from Heavy Haulers San Francisco's professional team.
          </p>
        </div>

        {/* Blog Posts Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="h-12 w-12 rounded-full bg-card/90 backdrop-blur-sm border-border/50 shadow-lg hover:bg-card hover:shadow-orange transition-all duration-300 disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="h-12 w-12 rounded-full bg-card/90 backdrop-blur-sm border-border/50 shadow-lg hover:bg-card hover:shadow-orange transition-all duration-300 disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Posts Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visiblePosts)}%)`,
                width: `${(featuredBlogPosts.length / visiblePosts) * 100}%`
              }}
            >
              {featuredBlogPosts.map((post, index) => (
                <Card 
                  key={post.id}
                  className={`flex-shrink-0 mx-3 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-elevated group ${
                    visiblePosts === 1 ? 'w-full' : visiblePosts === 2 ? 'w-[calc(50%-12px)]' : 'w-[calc(33.333%-16px)]'
                  }`}
                >
                  <Link to={post.route} className="block">
                    <CardContent className="p-0">
                      {/* Image */}
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center text-muted-foreground text-sm mb-3">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{post.readTime}</span>
                          <span className="mx-2">•</span>
                          <span>{formatDate(post.publishDate)}</span>
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all duration-300">
                          <span>Read Article</span>
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-orange hover:shadow-elevated transition-all duration-300"
          >
            <Link to="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
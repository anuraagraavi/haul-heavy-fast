import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Clock, Calendar, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// Import blog images
import winterTowingImage from '@/assets/blog-winter-towing.jpg';
import motorcycleTowingImage from '@/assets/blog-motorcycle-towing.jpg';
import evTowingImage from '@/assets/blog-ev-towing.jpg';
import emergencyGuideImage from '@/assets/blog-emergency-guide.jpg';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
  publishDate: string;
}

const featuredBlogPosts: BlogPost[] = [
  {
    id: "winter-towing-preparedness",
    title: "Winter Towing Preparedness: Bay Area Weather Challenges",
    excerpt: "Essential tips for safe winter driving and what to do when weather-related breakdowns occur in the Bay Area.",
    image: winterTowingImage, 
    readTime: "8 min read",
    category: "Safety Tips",
    publishDate: "2024-03-20"
  },
  {
    id: "motorcycle-towing-guide", 
    title: "Motorcycle Towing Guide: Safe Transport for Two-Wheelers",
    excerpt: "Specialized towing solutions and safety protocols for motorcycle transport in the Bay Area.",
    image: motorcycleTowingImage,
    readTime: "9 min read",
    category: "Heavy Hauling", 
    publishDate: "2024-03-22"
  },
  {
    id: "electric-vehicle-towing-guide",
    title: "Electric Vehicle Towing: Special Considerations for EVs", 
    excerpt: "Understanding EV-specific safety requirements and specialized towing equipment for Tesla and other electric vehicles.",
    image: evTowingImage,
    readTime: "8 min read",
    category: "Emergency Towing",
    publishDate: "2024-03-25"
  },
  {
    id: "emergency-towing-guide",
    title: "Emergency Towing Guide: What Every Bay Area Driver Should Know",
    excerpt: "Complete guide to emergency procedures and what to expect during roadside emergencies.", 
    image: emergencyGuideImage,
    readTime: "6 min read",
    category: "Emergency Towing",
    publishDate: "2024-01-15"
  }
];

export default function BlogWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [postsPerView, setPostsPerView] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPostsPerView(1);
      } else if (window.innerWidth < 1024) {
        setPostsPerView(2);
      } else {
        setPostsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const maxIndex = Math.max(0, featuredBlogPosts.length - postsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [postsPerView, isPaused]);

  const maxIndex = Math.max(0, featuredBlogPosts.length - postsPerView);

  const scrollLeft = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const scrollRight = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section 
      ref={ref}
      className={`py-16 bg-gradient-subtle transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Towing <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay informed with expert advice, safety tips, and industry insights from Heavy Haulers San Francisco.
          </p>
        </div>

        {/* Blog Posts Carousel */}
        <div className="relative">
          <div 
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / postsPerView)}%)` }}
            >
              {featuredBlogPosts.map((post, index) => (
                <div key={post.id} className={`w-full flex-shrink-0 px-2`} style={{ width: `${100 / postsPerView}%` }}>
                  <Link to={`/blog/${post.id}`} className="block">
                    <Card className="group hover:shadow-elevated transition-all duration-300 animate-fade-in bg-card/95 backdrop-blur-sm border-border/50 h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          width={400}
                          height={225}
                          loading="lazy"
                          decoding="async"
                        />
                        <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground backdrop-blur-sm text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-base font-semibold line-clamp-2 group-hover:text-primary transition-colors mb-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{formatDate(post.publishDate)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              disabled={currentIndex === 0}
              className="h-10 w-10 rounded-full bg-card/90 backdrop-blur-sm border-border/50 shadow-lg hover:bg-card hover:shadow-orange transition-all duration-300 disabled:opacity-30"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              disabled={currentIndex >= maxIndex}
              className="h-10 w-10 rounded-full bg-card/90 backdrop-blur-sm border-border/50 shadow-lg hover:bg-card hover:shadow-orange transition-all duration-300 disabled:opacity-30"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
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
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Truck, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';
import type { RelatedService, ServiceArea } from '@/types/blog';
import { cn } from '@/lib/utils';

// Related Services Block
interface RelatedServicesProps {
  services: RelatedService[];
  className?: string;
}

export const RelatedServicesBlock = ({ services, className }: RelatedServicesProps) => {
  if (!services || services.length === 0) return null;

  return (
    <section 
      className={cn("py-12", className)}
      aria-labelledby="related-services-heading"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Truck className="w-5 h-5 text-primary" aria-hidden="true" />
        </div>
        <h2 id="related-services-heading" className="text-2xl font-bold text-foreground">
          Related Services
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.slice(0, 4).map((service, index) => (
          <Link
            key={index}
            to={service.href}
            className="group bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {service.description}
            </p>
            <span className="inline-flex items-center text-sm text-primary font-medium">
              Learn more
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

// Service Areas Block
interface ServiceAreasBlockProps {
  areas: ServiceArea[];
  className?: string;
}

export const ServiceAreasBlock = ({ areas, className }: ServiceAreasBlockProps) => {
  if (!areas || areas.length === 0) return null;

  return (
    <section 
      className={cn("py-8 border-t border-border", className)}
      aria-labelledby="service-areas-heading"
    >
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
        <h3 id="service-areas-heading" className="text-lg font-semibold text-foreground">
          Service Areas
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {areas.slice(0, 6).map((area, index) => (
          <Link
            key={index}
            to={area.href}
            className="px-3 py-1.5 bg-muted text-sm text-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
          >
            {area.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

// Blog post type for related articles
interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  route: string;
  readTime: string;
  category: string;
}

// Related Articles Grid
interface RelatedArticlesProps {
  posts: RelatedPost[];
  className?: string;
}

export const RelatedArticlesGrid = ({ posts, className }: RelatedArticlesProps) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section 
      className={cn("py-12", className)}
      aria-labelledby="related-articles-heading"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <h2 id="related-articles-heading" className="text-2xl font-bold text-foreground">
            Related Articles
          </h2>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link to="/blog">
            View All
            <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
          </Link>
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 3).map((post) => (
          <article
            key={post.id}
            className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
          >
            <Link to={post.route} className="block">
              <div className="relative h-40 overflow-hidden">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{post.readTime} read</span>
                  <span className="text-primary font-medium inline-flex items-center">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

// Export all blog posts data for related content
export const allBlogPosts: RelatedPost[] = [
  {
    id: 'emergency-towing-guide',
    title: 'Emergency Towing Guide: What to Do When Stranded',
    excerpt: 'Complete guide for handling vehicle breakdowns and emergencies safely while waiting for professional help.',
    image: '/src/assets/blog-emergency-guide.jpg',
    route: '/blog/emergency-towing-guide',
    readTime: '8 min',
    category: 'Emergency'
  },
  {
    id: 'heavy-equipment-transport',
    title: 'Heavy Equipment Transport: A Complete Guide',
    excerpt: 'Everything you need to know about transporting heavy equipment safely across the Bay Area.',
    image: '/src/assets/blog-heavy-equipment.jpg',
    route: '/blog/heavy-equipment-transport',
    readTime: '10 min',
    category: 'Heavy Duty'
  },
  {
    id: 'motorcycle-towing-guide',
    title: 'Motorcycle Towing: Specialized Care for Your Bike',
    excerpt: 'Learn about specialized motorcycle towing techniques and equipment to protect your bike.',
    image: '/src/assets/blog-motorcycle-towing.jpg',
    route: '/blog/motorcycle-towing-guide',
    readTime: '7 min',
    category: 'Specialty'
  },
  {
    id: 'commercial-truck-towing',
    title: 'Commercial Truck Towing on Interstate Highways',
    excerpt: 'Professional solutions for commercial vehicle recovery on Bay Area highways.',
    image: '/src/assets/blog-commercial-truck-towing.jpg',
    route: '/blog/commercial-truck-towing-interstate',
    readTime: '9 min',
    category: 'Commercial'
  },
  {
    id: 'winter-towing-preparedness',
    title: 'Winter Towing Preparedness: Stay Safe in Cold Weather',
    excerpt: 'Essential winter driving and towing tips for Bay Area residents.',
    image: '/src/assets/blog-winter-towing.jpg',
    route: '/blog/winter-towing-preparedness',
    readTime: '6 min',
    category: 'Safety'
  },
  {
    id: 'luxury-transport-guide',
    title: 'Luxury Vehicle Transport: White-Glove Service',
    excerpt: 'Specialized transport solutions for exotic, luxury, and classic vehicles.',
    image: '/src/assets/blog-luxury-transport.jpg',
    route: '/blog/luxury-transport-guide',
    readTime: '8 min',
    category: 'Specialty'
  },
  {
    id: 'fleet-management-towing',
    title: 'Fleet Management Towing Solutions',
    excerpt: 'Comprehensive towing and recovery programs for business fleets.',
    image: '/src/assets/blog-fleet-management.jpg',
    route: '/blog/fleet-management-towing',
    readTime: '9 min',
    category: 'Commercial'
  },
  {
    id: 'roadside-assistance-vs-towing',
    title: 'Roadside Assistance vs Towing: When to Call Each',
    excerpt: 'Understanding when you need roadside help versus professional towing.',
    image: '/src/assets/blog-roadside-vs-towing.jpg',
    route: '/blog/roadside-assistance-vs-towing',
    readTime: '7 min',
    category: 'Education'
  },
  {
    id: 'sf-towing-challenges',
    title: 'San Francisco Towing Challenges: Urban Recovery',
    excerpt: 'Navigating the unique towing challenges of San Francisco streets.',
    image: '/src/assets/blog-sf-challenges.jpg',
    route: '/blog/sf-towing-challenges',
    readTime: '8 min',
    category: 'Local'
  },
  {
    id: 'ev-towing-guide',
    title: 'Electric Vehicle Towing: What You Need to Know',
    excerpt: 'Specialized techniques for safely towing electric and hybrid vehicles.',
    image: '/src/assets/blog-ev-towing.jpg',
    route: '/blog/electric-vehicle-towing-guide',
    readTime: '7 min',
    category: 'Specialty'
  },
  {
    id: 'construction-equipment-hauling',
    title: 'Construction Equipment Hauling Services',
    excerpt: 'Professional hauling for construction and industrial equipment.',
    image: '/src/assets/blog-construction-equipment-hauling.jpg',
    route: '/blog/construction-equipment-hauling',
    readTime: '8 min',
    category: 'Heavy Duty'
  },
  {
    id: 'vehicle-storage-solutions',
    title: 'Vehicle Storage Solutions: Secure Options',
    excerpt: 'Safe and secure vehicle storage options for short and long-term needs.',
    image: '/src/assets/blog-vehicle-storage-solutions.jpg',
    route: '/blog/vehicle-storage-solutions',
    readTime: '6 min',
    category: 'Services'
  },
  {
    id: 'accident-scene-management',
    title: 'Accident Scene Management: Professional Recovery',
    excerpt: 'How professional towing services handle accident scene recovery safely.',
    image: '/src/assets/blog-accident-scene-management.jpg',
    route: '/blog/accident-scene-management',
    readTime: '9 min',
    category: 'Emergency'
  },
  {
    id: 'commercial-urban-recovery',
    title: 'Commercial Vehicle Urban Recovery',
    excerpt: 'Specialized recovery solutions for commercial vehicles in urban settings.',
    image: '/src/assets/blog-commercial-recovery.jpg',
    route: '/blog/commercial-vehicle-urban-recovery',
    readTime: '8 min',
    category: 'Commercial'
  },
  {
    id: 'towing-technology',
    title: 'Towing Technology: GPS & Fleet Management',
    excerpt: 'How modern technology improves towing efficiency and customer service.',
    image: '/src/assets/blog-towing-technology.jpg',
    route: '/blog/towing-technology-gps-fleet-management',
    readTime: '7 min',
    category: 'Technology'
  },
  {
    id: 'car-towed-san-francisco',
    title: 'Car Towed in San Francisco? Step-by-Step Recovery Guide',
    excerpt: 'Your car was towed in SF. Here\'s exactly what to do: find your vehicle, understand fees, get it released.',
    image: '/src/assets/blog-sf-challenges.jpg',
    route: '/blog/car-towed-san-francisco',
    readTime: '8 min',
    category: 'Local'
  },
  {
    id: 'sf-tow-fee-discount',
    title: "Can't Afford Tow and Storage Fees in SF? Discounts & Options",
    excerpt: 'SFMTA offers reduced fees for low-income residents, first-time tows, and reimbursement programs.',
    image: '/src/assets/blog-sf-challenges.jpg',
    route: '/blog/sf-tow-fee-discount',
    readTime: '7 min',
    category: 'Local'
  },
  {
    id: 'california-private-property-towing',
    title: 'California Private Property Towing Rules: CVC 22658 Guide',
    excerpt: 'Complete guide to California Vehicle Code 22658 for property managers and HOAs.',
    image: '/src/assets/blog-commercial-recovery.jpg',
    route: '/blog/california-private-property-towing',
    readTime: '10 min',
    category: 'Commercial'
  }
];

// Helper to get related posts by category or ID
export function getRelatedPosts(
  currentPostId: string, 
  category?: string, 
  limit: number = 3
): RelatedPost[] {
  let related = allBlogPosts.filter(post => post.id !== currentPostId);
  
  if (category) {
    const sameCategoryPosts = related.filter(post => post.category === category);
    const otherPosts = related.filter(post => post.category !== category);
    related = [...sameCategoryPosts, ...otherPosts];
  }
  
  return related.slice(0, limit);
}

import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Truck, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyImage from '@/components/LazyImage';
import type { RelatedService, ServiceArea } from '@/types/blog';
import { cn } from '@/lib/utils';
import { getRelatedPostsForTemplate } from '@/data/blogRegistry';

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

// Re-export the helper from centralized registry for backward compatibility
export { getRelatedPostsForTemplate as getRelatedPosts } from '@/data/blogRegistry';

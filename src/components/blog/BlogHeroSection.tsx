import { Link } from 'react-router-dom';
import { ChevronRight, Home, Phone, FileText, Clock, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LazyImage from '@/components/LazyImage';
import { estimateReadingTime } from '@/utils/readingTime';
import type { BlogPostData } from '@/types/blog';

interface BlogHeroSectionProps {
  data: BlogPostData;
  wordCount?: number;
}

const BlogHeroSection = ({ data, wordCount }: BlogHeroSectionProps) => {
  // Calculate reading time dynamically if wordCount provided, otherwise use data.readTime
  const readTime = wordCount ? estimateReadingTime(wordCount) : data.readTime;

  return (
    <section className="pt-20 pb-8 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav 
            className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap"
            aria-label="Breadcrumb navigation"
          >
            <Link 
              to="/" 
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only md:not-sr-only">Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <Link 
              to={`/blog?category=${encodeURIComponent(data.category)}`} 
              className="hover:text-primary transition-colors"
            >
              {data.category}
            </Link>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
            <span className="text-foreground truncate max-w-[200px]" aria-current="page">
              {data.title}
            </span>
          </nav>

          {/* Category Pill */}
          <Badge 
            variant="secondary" 
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            {data.category}
          </Badge>

          {/* H1 Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            {data.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
            {data.excerpt}
          </p>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" aria-hidden="true" />
              {data.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              {data.publishDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {readTime} read
            </span>
          </div>

          {/* Primary CTA Row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="tel:650-881-2400" aria-label="Call Heavy Haulers now">
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Call Now: 650-881-2400
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <Link to="/get-a-quote" aria-label="Get a free towing quote">
                <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
                Get Free Quote
              </Link>
            </Button>
          </div>

          {/* Trust Microcopy */}
          <p className="text-sm text-muted-foreground mb-8">
            24/7 Dispatch • Bay Area Coverage • Heavy, Medium & Light Duty Towing
          </p>

          {/* Hero Image */}
          <figure className="relative">
            <LazyImage
              src={data.heroImage.src}
              alt={data.heroImage.alt}
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl"
              priority
              fetchPriority="high"
            />
            {(data.heroImage.caption || data.heroImage.credit) && (
              <figcaption className="mt-3 text-sm text-muted-foreground">
                {data.heroImage.caption}
                {data.heroImage.credit && (
                  <span className="ml-2 opacity-70">
                    Photo: {data.heroImage.credit}
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSection;

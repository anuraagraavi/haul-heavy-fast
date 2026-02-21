import { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RelatedPosts from '@/components/RelatedPosts';
import LazyImage from '@/components/LazyImage';
import LazySection from '@/components/LazySection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogTemplateProps {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  publishDate: string;
  readTime: string;
  author?: string;
  /** Path only (e.g. /assets/... or /lovable-uploads/...); base URL is prepended for og:image and schema */
  image: string;
  imageAlt: string;
  category?: string;
  children: ReactNode;
  currentPostId: string;
}

const BlogTemplate = ({
  title,
  description,
  keywords,
  canonicalUrl,
  publishDate,
  readTime,
  author = 'Heavy Haulers Team',
  image,
  imageAlt,
  category,
  children,
  currentPostId
}: BlogTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title} | Heavy Haulers San Francisco</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={`${title} | Heavy Haulers`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://heavytowpro.com${image}`} />
        
        {/* Schema.org JSON-LD for Article */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": `https://heavytowpro.com${image}`,
            "author": {
              "@type": "Organization",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": "Heavy Haulers San Francisco",
              "url": "https://heavytowpro.com"
            },
            "datePublished": publishDate,
            "dateModified": publishDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })}
        </script>
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-primary hover:underline mb-6"
                aria-label="Return to blog index"
              >
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                Back to Blog
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {title}
              </h1>
              
              <div className="flex items-center space-x-4 text-muted-foreground mb-8">
                <span>Published: {publishDate}</span>
                <span>•</span>
                <span>{readTime} read</span>
                <span>•</span>
                <span>By {author}</span>
              </div>
              
              <LazyImage
                src={image}
                alt={imageAlt}
                className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
                priority
                fetchPriority="high"
                width={1200}
                height={630}
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto prose prose-lg">
              {children}
            </article>
          </div>
        </section>

        {/* Related Posts */}
        <LazySection className="py-20 bg-gradient-subtle">
          <RelatedPosts currentPostId={currentPostId} category={category} />
        </LazySection>
        
        {/* Call to Action */}
        <LazySection className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Need Professional Towing Services?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait for an emergency. Get expert towing services when you need them most. 
              Our professional team is standing by 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:650-881-2400" aria-label="Call Heavy Haulers emergency hotline">
                  Call Now: 650-881-2400
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/get-a-quote" aria-label="Get a free towing quote online">
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </LazySection>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogTemplate;
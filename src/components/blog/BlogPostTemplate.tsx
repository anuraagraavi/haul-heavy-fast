import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSchemas from './BlogSchemas';
import ReadingProgressBar from './ReadingProgressBar';
import BlogHeroSection from './BlogHeroSection';
import AtAGlanceBox from './AtAGlanceBox';
import { TableOfContentsDesktop, TableOfContentsMobile } from './TableOfContents';
import BlogFAQSection from './BlogFAQSection';
import { 
  RelatedServicesBlock, 
  ServiceAreasBlock, 
  RelatedArticlesGrid,
  getRelatedPosts 
} from './BlogRelatedContent';
import { StickyMobileCTA, EndArticleCTA } from './BlogCTABlocks';
import type { BlogPostData } from '@/types/blog';

interface BlogPostTemplateProps {
  data: BlogPostData;
  children: ReactNode;
}

const BlogPostTemplate = ({ data, children }: BlogPostTemplateProps) => {
  const relatedPosts = getRelatedPosts(data.slug, data.category, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO & Schema */}
      <BlogSchemas data={data} />
      
      {/* Reading Progress */}
      <ReadingProgressBar />
      
      {/* Header */}
      <Header />
      
      <main>
        {/* Hero Section */}
        <BlogHeroSection data={data} />
        
        {/* At a Glance Box */}
        <AtAGlanceBox data={data.atAGlance} />
        
        {/* Main Content Area */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex gap-8 lg:gap-12">
              {/* Sticky Desktop TOC */}
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <TableOfContentsDesktop items={data.tableOfContents} />
              </aside>
              
              {/* Article Content */}
              <article className="flex-1 max-w-3xl">
                {/* Mobile TOC */}
                <TableOfContentsMobile items={data.tableOfContents} />
                
                {/* Blog Content (children) */}
                <div className="prose prose-lg prose-invert max-w-none 
                  prose-headings:text-foreground prose-headings:font-bold
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                  prose-li:marker:text-primary
                ">
                  {children}
                </div>
                
                {/* FAQ Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <BlogFAQSection faqs={data.faq} />
                </div>
              </article>
            </div>
          </div>
        </section>
        
        {/* Related Content */}
        <section className="py-12 bg-card/50 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Related Services */}
              <RelatedServicesBlock services={data.relatedServices} />
              
              {/* Service Areas */}
              <ServiceAreasBlock areas={data.serviceAreas} />
              
              {/* Related Articles */}
              <RelatedArticlesGrid posts={relatedPosts} />
            </div>
          </div>
        </section>
        
        {/* End CTA */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <EndArticleCTA />
          </div>
        </section>
      </main>
      
      {/* Sticky Mobile CTA */}
      <StickyMobileCTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BlogPostTemplate;

// Re-export content modules for use in blog posts
export * from './BlogContentModules';
export * from './BlogImageSystem';
export * from './BlogCTABlocks';

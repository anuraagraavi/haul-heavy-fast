import { Helmet } from 'react-helmet';
import type { BlogPostData } from '@/types/blog';
import { generateFAQSchema } from './BlogFAQSection';

interface BlogSchemasProps {
  data: BlogPostData;
}

const BlogSchemas = ({ data }: BlogSchemasProps) => {
  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": data.title,
    "description": data.metaDescription,
    "image": data.heroImage.src.startsWith('http') 
      ? data.heroImage.src 
      : `https://heavytowpro.com${data.heroImage.src}`,
    "author": {
      "@type": "Organization",
      "name": data.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Heavy Haulers San Francisco",
      "url": "https://heavytowpro.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heavytowpro.com/favicon.png"
      }
    },
    "datePublished": data.publishDate,
    "dateModified": data.dateModified || data.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.canonicalUrl
    },
    "keywords": [data.primaryKeyword, ...data.secondaryKeywords].join(', ')
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://heavytowpro.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://heavytowpro.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.category,
        "item": `https://heavytowpro.com/blog?category=${encodeURIComponent(data.category)}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": data.title,
        "item": data.canonicalUrl
      }
    ]
  };

  // FAQ Schema (only if FAQs exist)
  const faqSchema = data.faq && data.faq.length > 0 
    ? generateFAQSchema(data.faq) 
    : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{data.metaTitle} | Heavy Haulers San Francisco</title>
      <meta name="title" content={`${data.metaTitle} | Heavy Haulers San Francisco`} />
      <meta name="description" content={data.metaDescription} />
      <meta name="keywords" content={[data.primaryKeyword, ...data.secondaryKeywords].join(', ')} />
      <link rel="canonical" href={data.canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={data.canonicalUrl} />
      <meta property="og:title" content={`${data.metaTitle} | Heavy Haulers`} />
      <meta property="og:description" content={data.metaDescription} />
      <meta property="og:image" content={
        data.heroImage.src.startsWith('http') 
          ? data.heroImage.src 
          : `https://heavytowpro.com${data.heroImage.src}`
      } />
      <meta property="og:site_name" content="Heavy Haulers San Francisco" />
      <meta property="article:published_time" content={data.publishDate} />
      <meta property="article:modified_time" content={data.dateModified || data.publishDate} />
      <meta property="article:author" content={data.author} />
      <meta property="article:section" content={data.category} />
      <meta property="article:tag" content={data.primaryKeyword} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={data.canonicalUrl} />
      <meta name="twitter:title" content={`${data.metaTitle} | Heavy Haulers`} />
      <meta name="twitter:description" content={data.metaDescription} />
      <meta name="twitter:image" content={
        data.heroImage.src.startsWith('http') 
          ? data.heroImage.src 
          : `https://heavytowpro.com${data.heroImage.src}`
      } />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default BlogSchemas;

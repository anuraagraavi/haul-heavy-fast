import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  type: 'article' | 'business' | 'faq' | 'service';
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const generateSchema = () => {
    switch (type) {
      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.headline,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": data.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Heavy Haulers San Francisco",
            "url": "https://heavytowpro.com"
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url
          }
        };
      
      case 'business':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Heavy Haulers San Francisco",
          "description": "Professional towing and recovery services in San Francisco Bay Area",
          "url": "https://heavytowpro.com",
          "telephone": "+1-650-881-2400",
          "address": data.address,
          "geo": data.geo,
          "openingHours": ["Mo-Su 00:00-23:59"],
          "priceRange": "$$",
          "areaServed": data.areaServed,
          "hasOfferCatalog": data.services
        };
      
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions
        };
      
      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "Heavy Haulers San Francisco"
          },
          "serviceType": data.serviceType,
          "areaServed": data.areaServed
        };
      
      default:
        return null;
    }
  };

  const schema = generateSchema();
  
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
import { Helmet } from "react-helmet";
import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LazySection from "@/components/LazySection";
import CustomerServicePopup from "@/components/CustomerServicePopup";
import MobileOptimizedCTA from "@/components/MobileOptimizedCTA";
import Footer from "@/components/Footer";
import { useCustomerServicePopup } from "@/hooks/useCustomerServicePopup";
import usePerformanceMonitor from "@/hooks/usePerformanceMonitor";

// Lazy load non-critical components
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const ServicesOverview = lazy(() => import("@/components/ServicesOverview"));
const ServiceAreas = lazy(() => import("@/components/ServiceAreas"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const CorporateFleet = lazy(() => import("@/components/CorporateFleet"));
const BlogWidget = lazy(() => import("@/components/BlogWidget"));

const Index = () => {
  const { showPopup, closePopup } = useCustomerServicePopup();
  
  // Monitor Core Web Vitals
  usePerformanceMonitor();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Heavy Haulers San Francisco - Professional Towing & Recovery Services | Bay Area 24/7</title>
        <meta name="description" content="Professional towing services in San Francisco Bay Area. 24/7 emergency light, medium & heavy-duty towing, flatbed service, motorcycle transport. Fast response, transparent pricing. Call 650-881-2400." />
        <meta name="keywords" content="towing services San Francisco Bay Area, emergency towing SF, professional towing company, heavy duty towing, light duty towing, 24/7 towing San Francisco, transparent towing pricing" />
        <link rel="canonical" href="https://heavytowpro.com/" />
        
        {/* Enhanced Open Graph tags */}
        <meta property="og:title" content="Heavy Haulers San Francisco - Professional Towing & Recovery Services" />
        <meta property="og:description" content="Professional 24/7 towing services in San Francisco Bay Area. Light, medium & heavy-duty towing with transparent pricing and fast response." />
        <meta property="og:url" content="https://heavytowpro.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Heavy Haulers San Francisco" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Heavy Haulers San Francisco - Professional Towing Services" />
        <meta name="twitter:description" content="24/7 professional towing services in San Francisco Bay Area. Emergency response, transparent pricing." />
        
        {/* Local business geo-targeting */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Francisco, CA" />
        <meta name="geo.position" content="37.7749;-122.4194" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        
        {/* Comprehensive Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Heavy Haulers San Francisco",
            "description": "Professional towing and recovery services in San Francisco Bay Area",
            "url": "https://heavytowpro.com",
            "logo": "https://heavytowpro.com/favicon.png",
            "telephone": "+1-650-881-2400",
            "email": "dispatch@heavytowpro.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Francisco",
              "addressRegion": "CA",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "37.7749",
              "longitude": "-122.4194"
            },
            "openingHours": ["Mo-Su 00:00-23:59"],
            "priceRange": "$$",
            "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
            "areaServed": [
              {
                "@type": "City",
                "name": "San Francisco",
                "addressRegion": "CA"
              },
              {
                "@type": "AdministrativeArea",
                "name": "San Mateo County",
                "addressRegion": "CA"
              },
              {
                "@type": "AdministrativeArea", 
                "name": "Alameda County",
                "addressRegion": "CA"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Santa Clara County", 
                "addressRegion": "CA"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Towing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Light Duty Towing",
                    "description": "Car towing, flatbed service, motorcycle transport"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Medium Duty Towing",
                    "description": "Commercial vehicle towing, box trucks, RVs"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Heavy Duty Towing",
                    "description": "Semi-truck towing, equipment transport, rotator services"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            },
            "sameAs": [
              "https://heavytowpro.com"
            ]
          })}
        </script>
        
        {/* FAQ Schema for Homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How quickly can you respond to emergency calls?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We typically respond within 15-30 minutes in our primary service areas. Emergency situations receive priority dispatch, and our 24/7 dispatch team is always standing by to help."
                }
              },
              {
                "@type": "Question",
                "name": "What types of vehicles can you tow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We handle everything from motorcycles and cars to semi-trucks and heavy equipment. Our fleet includes light-duty, medium-duty, and heavy-duty tow trucks with rotator capabilities for complex recovery operations."
                }
              },
              {
                "@type": "Question", 
                "name": "Do you provide transparent pricing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. We provide upfront, honest pricing with no hidden fees. You'll know the cost before we begin any work, and we stand behind our transparent pricing policy."
                }
              },
              {
                "@type": "Question",
                "name": "Which areas do you serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve all of San Francisco, San Mateo, Alameda, and Santa Clara counties. This includes major cities like San Francisco, Oakland, San Jose, and hundreds of smaller communities throughout the Bay Area."
                }
              },
              {
                "@type": "Question",
                "name": "Are you available 24/7?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our emergency dispatch operates 24/7, 365 days a year. Whether it's 3 AM or a holiday, we're here when you need us most."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <main>
        {/* Critical above-the-fold content - loaded immediately */}
        <div className="animate-fade-in">
          <Hero />
        </div>
        
        {/* Non-critical content - lazy loaded */}
        <LazySection className="animate-fade-in-up">
          <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-muted" />}>
            <ServicesOverview />
          </Suspense>
        </LazySection>
        
        <LazySection className="animate-scale-in">
          <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-muted" />}>
            <WhyChooseUs />
          </Suspense>
        </LazySection>
        
        <LazySection className="animate-slide-in-right">
          <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted" />}>
            <ServiceAreas />
          </Suspense>
        </LazySection>
        
        <LazySection className="animate-fade-in-up">
          <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-muted" />}>
            <Testimonials />
          </Suspense>
        </LazySection>
        
        <LazySection className="animate-scale-in">
          <Suspense fallback={<div className="min-h-[500px] animate-pulse bg-muted" />}>
            <FAQ />
          </Suspense>
        </LazySection>
        
        <LazySection className="animate-fade-in-down">
          <Suspense fallback={<div className="min-h-[300px] animate-pulse bg-muted" />}>
            <CorporateFleet />
          </Suspense>
        </LazySection>
        
        <LazySection className="animate-fade-in-up">
          <Suspense fallback={<div className="min-h-[400px] animate-pulse bg-muted" />}>
            <BlogWidget />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
      
      {/* Global Customer Service Popup */}
      {showPopup && <CustomerServicePopup onClose={closePopup} />}
      
      {/* Mobile Optimized CTA */}
      <MobileOptimizedCTA />
    </div>
  );
};

export default Index;

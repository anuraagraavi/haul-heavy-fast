 import { Helmet } from "react-helmet";
 import LandingHero from "@/components/landing/LandingHero";
 import TrustBar from "@/components/landing/TrustBar";
 import ServiceCards from "@/components/landing/ServiceCards";
 import PricingPromise from "@/components/landing/PricingPromise";
 import ResponseTime from "@/components/landing/ResponseTime";
 import ProcessSteps from "@/components/landing/ProcessSteps";
 import TestimonialCarousel from "@/components/landing/TestimonialCarousel";
 import CoverageMap from "@/components/landing/CoverageMap";
 import VehicleGallery from "@/components/landing/VehicleGallery";
 import WhyChooseUsLanding from "@/components/landing/WhyChooseUsLanding";
 import LandingFAQ from "@/components/landing/LandingFAQ";
 import GuaranteeSection from "@/components/landing/GuaranteeSection";
 import FinalCTA from "@/components/landing/FinalCTA";
 import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
 
 const LandingLightMedium = () => {
   // Schema.org LocalBusiness + Service structured data
   const structuredData = {
     "@context": "https://schema.org",
     "@graph": [
       {
         "@type": "LocalBusiness",
         "@id": "https://heavytowpro.com/#organization",
         "name": "Heavy Haulers SF",
         "image": "https://heavytowpro.com/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png",
         "telephone": "+1-650-881-2400",
         "email": "info@heavyhaulerssf.com",
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
         "url": "https://heavytowpro.com",
         "priceRange": "$$",
         "openingHoursSpecification": {
           "@type": "OpeningHoursSpecification",
           "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
           "opens": "00:00",
           "closes": "23:59"
         },
         "aggregateRating": {
           "@type": "AggregateRating",
           "ratingValue": "4.9",
           "reviewCount": "500"
         },
         "areaServed": [
           { "@type": "City", "name": "San Francisco" },
           { "@type": "City", "name": "Oakland" },
           { "@type": "City", "name": "San Jose" },
           { "@type": "AdministrativeArea", "name": "San Mateo County" },
           { "@type": "AdministrativeArea", "name": "Alameda County" },
           { "@type": "AdministrativeArea", "name": "Santa Clara County" }
         ]
       },
       {
         "@type": "Service",
         "serviceType": "Light Duty Towing",
         "provider": { "@id": "https://haul-heavy-fast.lovable.app/#organization" },
         "areaServed": "San Francisco Bay Area",
         "description": "Professional towing for cars, SUVs, motorcycles, and light vehicles up to 10,000 lbs"
       },
       {
         "@type": "Service",
         "serviceType": "Medium Duty Towing",
         "provider": { "@id": "https://haul-heavy-fast.lovable.app/#organization" },
         "areaServed": "San Francisco Bay Area",
         "description": "Commercial towing for box trucks, RVs, delivery vans, and vehicles 10,000-26,000 lbs"
       },
       {
         "@type": "FAQPage",
         "mainEntity": [
           {
             "@type": "Question",
             "name": "How much does towing cost in San Francisco?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Towing costs vary based on vehicle size, distance, and time of day. Light duty towing typically starts at competitive local rates, while medium duty requires custom quotes. We always provide an upfront quote before any work begins."
             }
           },
           {
             "@type": "Question",
             "name": "How fast can you get to me?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Our average response time is 15-30 minutes across the Bay Area. In San Francisco proper, we typically arrive within 15-25 minutes."
             }
           },
           {
             "@type": "Question",
             "name": "Will my car be damaged during towing?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "No. Our operators use proper equipment and techniques for each vehicle type. We use flatbed tow trucks for most vehicles, eliminating any risk of drivetrain damage. We're fully insured for your peace of mind."
             }
           },
           {
             "@type": "Question",
             "name": "Do you tow luxury and exotic cars?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes! We specialize in luxury and exotic vehicle transport using enclosed trailers and flatbed trucks with soft straps and wheel lifts designed specifically for high-value vehicles."
             }
           },
           {
             "@type": "Question",
             "name": "Are you available right now?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes! We operate 24 hours a day, 7 days a week, 365 days a year—including holidays. Our dispatchers are standing by right now to take your call."
             }
           }
         ]
       }
     ]
   };
 
   return (
     <>
       <Helmet>
         <title>Car & Truck Towing San Francisco | 24/7 Emergency Service | Heavy Haulers</title>
         <meta 
           name="description" 
           content="Fast, professional towing in San Francisco Bay Area. Cars, trucks, motorcycles, RVs. 15-min response, upfront pricing, 24/7 service. Call 650-881-2400 now!" 
         />
         <meta 
           name="keywords" 
           content="car towing san francisco, tow truck near me, emergency towing bay area, 24/7 towing service, motorcycle towing, box truck towing sf, rv towing bay area, flatbed towing, commercial vehicle towing, towing oakland, towing san jose" 
         />
         <link rel="canonical" href="https://haul-heavy-fast.lovable.app/towing-services" />
         
         {/* Open Graph */}
         <meta property="og:title" content="Car & Truck Towing San Francisco | 24/7 Emergency Service" />
         <meta property="og:description" content="Fast, professional towing in San Francisco Bay Area. 15-min response, upfront pricing, 24/7 service." />
         <meta property="og:type" content="website" />
         <meta property="og:url" content="https://haul-heavy-fast.lovable.app/towing-services" />
         
         {/* Twitter */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content="Car & Truck Towing San Francisco | 24/7 Emergency Service" />
         <meta name="twitter:description" content="Fast, professional towing in San Francisco Bay Area. 15-min response, upfront pricing, 24/7 service." />
         
         {/* Mobile optimization */}
         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
         <meta name="theme-color" content="#1e3a5f" />
         
         {/* Structured Data */}
         <script type="application/ld+json">
           {JSON.stringify(structuredData)}
         </script>
       </Helmet>
 
       <main className="min-h-screen">
         {/* Section 1: Hero with Urgency */}
         <LandingHero />
         
         {/* Section 2: Trust Bar */}
         <TrustBar />
         
         {/* Section 3: Service Cards */}
         <ServiceCards />
         
         {/* Section 4: Pricing Promise */}
         <PricingPromise />
         
         {/* Section 5: Response Time */}
         <ResponseTime />
         
         {/* Section 6: Process Steps */}
         <ProcessSteps />
         
         {/* Section 7: Testimonials */}
         <TestimonialCarousel />
         
         {/* Section 8: Coverage Map */}
         <CoverageMap />
         
         {/* Section 9: Vehicle Gallery */}
         <VehicleGallery />
         
         {/* Section 10: Why Choose Us */}
         <WhyChooseUsLanding />
         
         {/* Section 11: FAQ */}
         <LandingFAQ />
         
         {/* Section 12: Guarantees */}
         <GuaranteeSection />
         
         {/* Section 13: Final CTA */}
         <FinalCTA />
         
         {/* Sticky Mobile CTA */}
         <StickyMobileCTA />
       </main>
     </>
   );
 };
 
 export default LandingLightMedium;
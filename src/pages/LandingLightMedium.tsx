import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandingHero from "@/components/landing/LandingHero";
import ProcessSteps from "@/components/landing/ProcessSteps";
import CoverageMap from "@/components/landing/CoverageMap";
import TrustBar from "@/components/landing/TrustBar";
import WhyChooseUsLanding from "@/components/landing/WhyChooseUsLanding";
import TestimonialCarousel from "@/components/landing/TestimonialCarousel";
import LandingServiceLinks from "@/components/landing/LandingServiceLinks";
import ServiceCards from "@/components/landing/ServiceCards";
import PricingSection from "@/components/landing/PricingSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import LandingFAQ from "@/components/landing/LandingFAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import { landingImagesById } from "@/data/landingImages";

const BASE_URL = "https://www.heavytowpro.com";
const HERO_IMAGE_PATH = landingImagesById.light_suv_tree_lined.src;
const HERO_IMAGE_URL = `${BASE_URL}${HERO_IMAGE_PATH}`;

// FAQPage schema for LP doc 8 Q&As (used in Helmet)
const FAQ_SCHEMA = {
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How fast can you get to me?", acceptedAnswer: { "@type": "Answer", text: "Our average response time is 15 minutes across the Bay Area. We'll give you a confirmed ETA within 60 seconds of your call. If we ever run late, your dispatcher calls you proactively — you're never left wondering." } },
    { "@type": "Question", name: "Do you cover my area?", acceptedAnswer: { "@type": "Answer", text: "We cover 5 Bay Area counties: San Francisco, San Mateo, Alameda, Santa Clara, and Contra Costa — 60+ cities total. If you're on a highway, bridge, or anywhere in the greater Bay Area, we can almost certainly reach you. Call and we'll confirm in 30 seconds." } },
    { "@type": "Question", name: "Will you damage my car?", acceptedAnswer: { "@type": "Answer", text: "No. We use the right equipment for every vehicle type. AWD and luxury cars get flatbed-only treatment. Motorcycles go on dedicated chock rigs with soft tie-downs. EVs are transported per manufacturer protocol. We've completed 50,000+ tows with a near-zero damage claim rate." } },
    { "@type": "Question", name: "Do you do jump-starts, lockouts, or tire changes?", acceptedAnswer: { "@type": "Answer", text: "No — we are a dedicated towing and recovery company only. We don't offer roadside assistance services. This is intentional: being specialists in towing means we're exceptional at it, with the right equipment for every scenario." } },
    { "@type": "Question", name: "Can you tow my Tesla / electric vehicle?", acceptedAnswer: { "@type": "Answer", text: "Yes, absolutely. All EVs must be transported on flatbeds — we never wheel-lift electric vehicles. Our drivers are trained on EV-specific protocols: transport in neutral/tow mode, battery access procedures, and manufacturer guidelines for Tesla, Rivian, Lucid, and other EVs." } },
    { "@type": "Question", name: "How do I pay?", acceptedAnswer: { "@type": "Answer", text: "Credit card or cash on delivery. No payment is required to dispatch — we collect at the drop-off location. You'll know the total before anything is loaded." } },
    { "@type": "Question", name: "What if I need towing at 3am or on a holiday?", acceptedAnswer: { "@type": "Answer", text: "We answer 24/7, 365 days a year. Live dispatcher. Real truck. Real driver. No extra charge for after-hours or holiday calls — ever. Breakdowns don't keep business hours, and neither do we." } },
    { "@type": "Question", name: "Are you licensed and insured?", acceptedAnswer: { "@type": "Answer", text: "Yes. CTTA (California Tow Truck Association) certified, ITRA (International Towing & Recovery Association) member, DOT compliant, OSHA-trained operators, and fully insured with cargo liability coverage. We carry the certifications required for professional towing — not just a truck and a hook." } },
  ],
};

const LandingLightMedium = () => {
  const location = useLocation();
  const canonicalPath = location.pathname || "/towing-services";
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  const isC1KeywordUrl = canonicalPath === "/towing/bay-area-flatbed-emergency-towing-24-7";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#organization`,
        name: "Heavy Haulers",
        image: `${BASE_URL}/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png`,
        telephone: "+1-650-881-2400",
        email: "dispatch@heavytowpro.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "351 Industrial Way",
          addressLocality: "Brisbane",
          addressRegion: "CA",
          postalCode: "94005",
          addressCountry: "US",
        },
        geo: { "@type": "GeoCoordinates", latitude: "37.6810", longitude: "-122.4007" },
        url: canonicalUrl,
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500" },
        areaServed: [
          { "@type": "AdministrativeArea", name: "San Francisco County" },
          { "@type": "AdministrativeArea", name: "San Mateo County" },
          { "@type": "AdministrativeArea", name: "Alameda County" },
          { "@type": "AdministrativeArea", name: "Santa Clara County" },
          { "@type": "AdministrativeArea", name: "Contra Costa County" },
        ],
      },
      {
        "@type": "Service",
        serviceType: "Light Duty Towing",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "San Francisco Bay Area",
        description: "Professional flatbed towing for cars, motorcycles, luxury vehicles & RVs across 5 Bay Area counties.",
      },
      {
        "@type": "Service",
        serviceType: "Medium Duty Towing",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "San Francisco Bay Area",
        description: "Commercial towing for box trucks, RVs, delivery vans, and vehicles 10,000-26,000 lbs.",
      },
      FAQ_SCHEMA,
    ],
  };

  const title = isC1KeywordUrl
    ? "Bay Area Towing in 15 Minutes | Flatbed Emergency 24/7 | Heavy Haulers"
    : "Car & Truck Towing San Francisco | 24/7 Emergency Service | Heavy Haulers";
  const description =
    "Professional flatbed towing for cars, motorcycles, luxury vehicles & RVs across 5 Bay Area counties. 24/7 live dispatch. 4.9 stars. Call 650-881-2400.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="bay area towing, flatbed towing, emergency towing 24/7, towing near me, car towing san francisco, motorcycle towing, rv towing bay area" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={HERO_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={HERO_IMAGE_URL} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />
      <main className="min-h-screen pt-16">
        <LandingHero />
        <ProcessSteps />
        <CoverageMap />
        <TrustBar />
        <WhyChooseUsLanding />
        <TestimonialCarousel />
        <LandingServiceLinks />
        <ServiceCards />
        <PricingSection />
        <GuaranteeSection />
        <LandingFAQ />
        <FinalCTA />
        <StickyMobileCTA />
      </main>
      <Footer />
    </>
  );
};

export default LandingLightMedium;

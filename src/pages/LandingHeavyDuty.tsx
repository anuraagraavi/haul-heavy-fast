import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import HeavyLandingHero from "@/components/landing/HeavyLandingHero";
import HeavyCapabilityBar from "@/components/landing/HeavyCapabilityBar";
import { landingImagesById } from "@/data/landingImages";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MapPin } from "lucide-react";

const BASE_URL = "https://www.heavytowpro.com";
const HERO_IMAGE_PATH = landingImagesById.heavy_cat_d_series_desert.src;
const HERO_IMAGE_URL = `${BASE_URL}${HERO_IMAGE_PATH}`;

// FAQPage schema for Campaign 2 commercial FAQs
const HEAVY_FAQ_SCHEMA = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is your maximum recovery weight?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our rotator fleet handles recoveries up to 75+ tons. This covers Class 8 semis, loaded trailers, large construction equipment, and multi-vehicle incidents. For extremely complex recoveries, we can assess on-site and bring additional equipment if required.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle jackknifed semis and rollover recoveries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is core to our heavy-duty capability. Our rotator-equipped units are specifically designed for jackknifes, rollovers, and off-road recoveries. We carry out-rigger stabilization, air bags, and snatch block rigging for complex recovery scenarios, and we coordinate with CHP and incident command.",
      },
    },
    {
      "@type": "Question",
      name: "Can you tow loaded trailers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We tow loaded trailers — both with the tractor attached and as independent trailer moves. For oversized or overweight configurations, we advise on permit requirements and can coordinate permitted loads where necessary.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer fleet or SLA towing contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer dedicated fleet contracts for commercial operators with monthly invoicing, priority dispatch, volume pricing, dedicated account management, and SLA response time commitments.",
      },
    },
    {
      "@type": "Question",
      name: "Are you DOT compliant and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are fully DOT compliant and hold CTTA (California Tow Truck Association), ITRA (International Towing & Recovery Association), and OSHA training certifications. Our Certificate of Insurance is available on request for fleet onboarding.",
      },
    },
    {
      "@type": "Question",
      name: "Do you cover interstate routes and long-distance hauls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We operate on all major Bay Area interstate corridors (I-80, I-880, I-101, I-580, I-680) and can haul to Sacramento, Stockton, Modesto, and beyond. Long-distance routes are available — call for specific route availability and pricing.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle after-hours commercial emergencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We dispatch 24/7, including holidays. Commercial emergencies do not wait for business hours, and neither do we. Fleet account holders receive priority dispatch at any hour and speak with commercial-capable dispatchers, not an answering service.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work within incident command and with CHP?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our operators are trained for incident scene management and work within established incident command structures. We coordinate directly with CHP, fire departments, and emergency services to clear the scene safely and efficiently.",
      },
    },
  ],
};

const LandingHeavyDuty = () => {
  const location = useLocation();
  const canonicalPath = location.pathname || "/towing/heavy-duty-towing-bay-area";
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;

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
        serviceType: "Heavy Duty Towing",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "San Francisco Bay Area",
        description:
          "Heavy duty towing and recovery for Class 7–8 trucks, semi-trucks, buses, and heavy construction equipment with 75+ ton rotators.",
      },
      {
        "@type": "Service",
        serviceType: "Semi Truck & 18-Wheeler Recovery",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "San Francisco Bay Area",
        description:
          "Semi truck and 18-wheeler recovery, including jackknifes, rollovers, and loaded trailer towing on all major Bay Area corridors.",
      },
      {
        "@type": "Service",
        serviceType: "Fleet Towing Contracts",
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: "San Francisco Bay Area & Central Valley",
        description:
          "Fleet towing contracts with SLA response guarantees, priority dispatch, monthly invoicing, and fleet reporting for commercial operators.",
      },
      HEAVY_FAQ_SCHEMA,
    ],
  };

  const title =
    "Heavy Duty Towing Bay Area | Semi Truck & Fleet Recovery | Heavy Haulers";
  const description =
    "75+ ton heavy duty towing and commercial recovery for semi trucks, fleets, and construction equipment across the Bay Area. Rotator service, SLA fleet contracts, and 24/7 commercial dispatch. Call 650-881-2400.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="heavy duty towing bay area, semi truck towing bay area, rotator recovery, fleet towing contracts, commercial towing, heavy equipment transport"
        />
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
        <HeavyLandingHero />
        <HeavyCapabilityBar />
        <HeavyServiceCapabilitiesSection />
        <HeavyProcessSection />
        <FleetContractsSection />
        <CertificationsSection />
        <CommercialTestimonialsSection />
        <HeavyWorkGallerySection />
        <HeavyCoverageSection />
        <HeavyFAQSection />
        <HeavyDualConversionSection />
        <CommercialGuaranteesSection />
        <FinalHeavyCTASection />
        <StickyMobileCTA />
      </main>
      <Footer />
    </>
  );
};

const HEAVY_SERVICE_CARDS = [
  {
    title: "Semi-Truck & 18-Wheeler Towing",
    body: "Class 7 & 8 tractors, loaded or unloaded trailers, and full 18-wheeler combinations. We dispatch dedicated heavy-duty units — never light-duty trucks attempting big-rig work.",
  },
  {
    title: "Heavy Recovery & Rotator Service",
    body: "75+ ton rotators for rollovers, jackknifes, off-road recoveries, and hard-to-access incidents. We handle complex recoveries other companies refuse.",
  },
  {
    title: "Bus & Transit Vehicle Towing",
    body: "Municipal buses, charter coaches, and school buses. Correct towing points, safe driveline handling, and experienced operators who understand transit agency requirements.",
  },
  {
    title: "Fleet & Commercial Contract Towing",
    body: "Priority-dispatch contracts for logistics, delivery, utility, and municipal fleets. One vendor, one invoice, one accountable partner.",
  },
  {
    title: "Construction & Heavy Equipment Transport",
    body: "Excavators, dozers, graders, loaders, cranes, generators, and aerial lifts. Lowboy trailers, oversize permitting, and route planning handled for you.",
  },
  {
    title: "Interstate & Long-Distance Hauling",
    body: "Bay Area to Central Valley and beyond — I-80, I-5, and Hwy 99 corridors. Long-distance heavy haul with full DOT compliance and documentation.",
  },
];

const HeavyServiceCapabilitiesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Heavy Duty Service Capabilities
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            If it is too big for anyone else, it is exactly right for us. From
            jackknifed semis to multi-machine construction moves, Heavy Haulers is
            built for commercial operators.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {HEAVY_SERVICE_CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HEAVY_PROCESS_STEPS = [
  {
    step: "1",
    title: "Call Dispatch — 24/7",
    body: "One call reaches a commercial-capable dispatcher who understands weight classes, equipment types, and incident command. ETA confirmed within 60 seconds.",
  },
  {
    step: "2",
    title: "Assessment & Right-Sizing",
    body: "We assess your vehicle, load, and scene — then dispatch the correctly spec’d unit: heavy wrecker, rotator, lowboy, or combination. No wrong trucks, no second trips.",
  },
  {
    step: "3",
    title: "Scene Management & Recovery",
    body: "Our operators work within incident command, coordinate with CHP and emergency services, and execute recovery with precision to minimise downtime and lane closure time.",
  },
  {
    step: "4",
    title: "Transport & Delivery",
    body: "We tow or haul to your yard, shop, or preferred facility. DOT-compliant tie-downs, documentation, and delivery confirmations for fleet accounts.",
  },
];

const HeavyProcessSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How Commercial Recovery Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A four-step process built for fleet managers, logistics coordinators, and
            construction supervisors who need problems solved — not more chaos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {HEAVY_PROCESS_STEPS.map((step) => (
            <div key={step.step} className="text-center md:text-left">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto md:mx-0 mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FleetContractsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fleet Towing Contracts — Built for Operations
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Stop calling a different towing company every time something breaks.
            Lock in a single, accountable partner for every incident.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              What Fleet Accounts Include
            </h3>
            <ul className="space-y-2">
              {[
                "Priority dispatch — fleet calls jump the queue ahead of retail work.",
                "Volume-based pricing with monthly invoicing and clear rate schedules.",
                "Dedicated account manager for scheduling, invoicing, and incident reports.",
                "SLA response guarantees written into your agreement for key coverage areas.",
                "Fleet reporting with tow logs, cost breakdowns, and incident summaries.",
                "Multi-county coverage under one contract — Bay Area plus Central Valley corridor.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Who We Work With
            </h3>
            <ul className="space-y-2">
              {[
                "Logistics & freight carriers running regional and long-haul routes.",
                "Parcel & delivery fleets operating dense urban and suburban routes.",
                "Construction and heavy equipment contractors with rotating job sites.",
                "Municipal and transit agencies with bus and refuse fleets.",
                "Corporate and utility fleets that need a single towing partner.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <Button asChild className="w-full sm:w-auto">
                <a href="/get-a-quote">Request Fleet Contract Quote</a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Prefer email? Contact{" "}
                <a
                  href="mailto:dispatch@heavytowpro.com"
                  className="text-primary hover:underline"
                >
                  dispatch@heavytowpro.com
                </a>{" "}
                to start your vendor onboarding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CERTS = [
  {
    code: "CTTA",
    name: "California Tow Truck Association",
    body: "State-level professional towing certification. Confirms training, equipment standards, and compliant business practices in California.",
  },
  {
    code: "ITRA",
    name: "International Towing & Recovery Association",
    body: "Heavy-duty recovery credentials for complex incidents including rollovers, jackknifes, and multi-vehicle scenes.",
  },
  {
    code: "DOT",
    name: "Department of Transportation Compliant",
    body: "Full DOT compliance for commercial vehicles — driver logs, inspections, weight limits, and securement.",
  },
  {
    code: "OSHA",
    name: "OSHA-Trained Operators",
    body: "Operators trained on hazard recognition, PPE, and incident scene safety to protect your people and ours.",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certified. Compliant. Insured.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            The credentials fleet managers and procurement teams need to check off
            before approving a vendor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTS.map((cert) => (
            <div
              key={cert.code}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm flex gap-4"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-bold text-lg">{cert.code}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  {cert.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Need documentation for onboarding? Request our Certificate of Insurance at{" "}
            <a
              href="mailto:dispatch@heavytowpro.com"
              className="text-primary hover:underline"
            >
              dispatch@heavytowpro.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

const CommercialTestimonialsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Commercial Operators Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real recoveries, real downtime saved, and real accountability to fleet
            operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote:
                "Our 62,000 lb excavator went over during offloading. Heavy Haulers had a rotator on site in under an hour and uprighted it without additional damage. We were back on schedule the same day.",
              name: "Robert M.",
              role: "Construction Project Manager",
              context: "Excavator Rollover Recovery",
            },
            {
              quote:
                "We run 45 delivery trucks across the Bay Area. With a fleet contract, every call is handled the same way: priority dispatch, clear ETAs, and one invoice at month end. No surprises.",
              name: "David K.",
              role: "Fleet Operations Manager",
              context: "Fleet Contract — Delivery Company",
            },
            {
              quote:
                "Jackknifed semi on 880 at 2am. Heavy Haulers coordinated with CHP, cleared the incident in under three hours, and kept our insurance escalation costs in check.",
              name: "Marcus T.",
              role: "Logistics Coordinator",
              context: "Semi Recovery — I-880",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between"
            >
              <p className="text-muted-foreground mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HEAVY_GALLERY_IDS = [
  landingImagesById.heavy_cat_d_series_desert,
  landingImagesById.heavy_semi_box_trailer,
  landingImagesById.heavy_wheel_loader,
  landingImagesById.heavy_oversize_sunset,
  landingImagesById.heavy_oversize_peterbilt_cat,
  landingImagesById.heavy_semi_reefer,
] as const;

const HeavyWorkGallerySection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real Heavy Jobs We Handle Every Day
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From oversize CAT equipment to full 18-wheelers and industrial loads, these are
            the kinds of moves our heavy-duty team runs across California.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {HEAVY_GALLERY_IDS.map((img) => (
            <div
              key={img.id}
              className="rounded-2xl overflow-hidden border border-border bg-muted/30 shadow-sm aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                width={640}
                height={480}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HeavyCoverageSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            5 Counties. 6 Hubs. One Contract.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Coverage built around the routes that matter most to fleets: ports, industrial
            corridors, and interstate lanes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Highway &amp; Corridor Coverage
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
                <li>I-880 industrial corridor &amp; Port of Oakland approaches.</li>
                <li>I-101 and I-280 corridors serving SFO and South San Francisco.</li>
                <li>I-580 and I-680 connectors through Livermore, Dublin, and Concord.</li>
                <li>San Jose, Milpitas, and Hwy 237 tech/industrial parks.</li>
                <li>Central Valley reach via Stockton hub for I-5 and Hwy 99.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  Dispatch Hubs &amp; Contacts
                </span>
              </div>
              <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
                <li>
                  <span className="font-semibold text-foreground">Brisbane (HQ)</span> — 351
                  Industrial Way, Brisbane, CA ·{" "}
                  <span className="font-semibold">650-881-2400</span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">Oakland Hub</span> — Port of
                  Oakland / I-880 · <span className="font-semibold">510-800-3800</span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">San Jose Hub</span> — Santa
                  Clara County industrial corridor ·{" "}
                  <span className="font-semibold">408-800-3800</span>
                </li>
                <li>
                  <span className="font-semibold text-foreground">
                    Fremont, Daly City, Concord
                  </span>{" "}
                  — hubs available via HQ dispatch for I-880, SFO corridor, and I-680/780.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HEAVY_FAQS = [
  {
    q: "What is your maximum recovery weight?",
    a: "Our rotator fleet handles recoveries up to 75+ tons, covering Class 8 semis, loaded trailers, large construction equipment, and multi-vehicle incidents.",
  },
  {
    q: "Do you handle jackknifed semis and rollover recoveries?",
    a: "Yes. Our heavy-duty units and rotators are built for jackknifes, rollovers, and off-road recoveries, with out-rigger stabilization and advanced rigging.",
  },
  {
    q: "Can you tow loaded trailers?",
    a: "Yes. We tow loaded trailers with or without the tractor attached. For oversize or overweight loads, we advise on and coordinate permits where needed.",
  },
  {
    q: "Do you offer fleet/SLA towing contracts?",
    a: "Yes. We provide fleet contracts with priority dispatch, volume pricing, dedicated account management, SLA response guarantees, and monthly invoicing.",
  },
  {
    q: "Are you DOT compliant and insured?",
    a: "Yes. Our operations are fully DOT compliant, CTTA and ITRA certified, and supported by comprehensive cargo liability insurance. COI is available on request.",
  },
  {
    q: "Do you cover interstate routes and long-distance hauls?",
    a: "Yes. We regularly operate on I-80, I-880, I-101, I-580, and I-680, and can haul to Sacramento, Stockton, Modesto, and other regional destinations.",
  },
  {
    q: "How do you handle after-hours commercial emergencies?",
    a: "We dispatch 24/7, including nights, weekends, and holidays. Fleet accounts receive priority at all hours.",
  },
  {
    q: "Can you work within incident command and with CHP?",
    a: "Yes. Our team is trained for incident scene management and coordinates directly with CHP, fire, and other agencies on scene.",
  },
];

const HeavyFAQSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Commercial Towing FAQs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The questions fleet managers and commercial operators ask before signing a
            contract or calling for a heavy recovery.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion
            type="multiple"
            collapsible
            defaultValue={["item-0", "item-1", "item-2"]}
            className="space-y-3"
          >
            {HEAVY_FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.q}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const HeavyDualConversionSection = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Emergency Dispatch
              </h2>
              <p className="text-muted-foreground mb-6">
                Semi down on 880. Rollover on 101. Equipment blocking a lane. We answer
                immediately and dispatch the right heavy unit.
              </p>
            </div>
            <div className="space-y-3">
              <a href="tel:+16508812400">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 650-881-2400
                </Button>
              </a>
              <p className="text-xs text-muted-foreground">
                24/7 commercial dispatch. ETA confirmed in 60 seconds for most calls.
              </p>
            </div>
          </div>
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Fleet Contract Inquiry
              </h2>
              <p className="text-muted-foreground mb-6">
                Multiple vehicles. Recurring needs. Want priority dispatch, predictable
                pricing, and SLA accountability in writing.
              </p>
            </div>
            <div className="space-y-3">
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <a href="/get-a-quote">Request Fleet Quote</a>
              </Button>
              <p className="text-xs text-muted-foreground">
                Or email{" "}
                <a
                  href="mailto:dispatch@heavytowpro.com"
                  className="text-primary hover:underline"
                >
                  dispatch@heavytowpro.com
                </a>{" "}
                if you prefer to start via procurement workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CommercialGuaranteesSection = () => {
  const guarantees = [
    {
      title: "Right Equipment, First Dispatch",
      body: "We assess your situation correctly on the first call and send the right heavy unit. If we cannot handle it, we tell you immediately — not after wasting hours.",
    },
    {
      title: "Full Cargo Liability Insurance",
      body: "Comprehensive cargo liability insurance on every commercial tow and haul. COI provided for your vendor files on request.",
    },
    {
      title: "DOT-Compliant Operations",
      body: "Every run is executed under full DOT compliance — logs, inspections, weight limits, and securement — protecting your company from avoidable exposure.",
    },
    {
      title: "SLA Accountability for Fleet Accounts",
      body: "Fleet contracts include written response-time SLAs. If we miss one, we document it and make it right on your account.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Our Commercial Promise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Guarantees written for fleet managers, not just stranded motorists.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="p-6 md:p-8 bg-background rounded-xl border border-border shadow-md hover:border-primary/40 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{g.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalHeavyCTASection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Move Heavy?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Whether you are dealing with a 2am highway incident or planning fleet coverage
            for the next year, Heavy Haulers is ready to be your heavy-duty partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+16508812400">
              <Button variant="hero" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call 650-881-2400
              </Button>
            </a>
            <Button variant="outline" size="lg" asChild>
              <a href="/get-a-quote">Request Fleet Quote</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeavyDuty;


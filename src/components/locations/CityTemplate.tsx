import { Helmet } from "react-helmet";
import { lazy, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Clock, Truck, BadgeCheck } from "lucide-react";
import LocationConfidenceCard from "@/components/locations/LocationConfidenceCard";

const QuickQuoteForm = lazy(() => import("@/components/landing/QuickQuoteForm"));
const CityTemplateBelowFold = lazy(() => import("./CityTemplateBelowFold"));
import { landingImagesById } from "@/data/landingImages";
import type { LocationData, LocationSignatureColor } from "@/data/locations";
import { buildLocationSchemaJsonLd } from "@/lib/locationSchema";
import { telHrefFromNational } from "@/lib/phone";

interface CityTemplateProps {
  data: LocationData;
}

const BASE_URL = "https://heavytowpro.com";

function signatureHeadingClass(color: LocationSignatureColor): string {
  switch (color) {
    case "blue":
      return "ring-2 ring-secondary/40 ring-offset-2 ring-offset-background";
    case "warning":
      return "ring-2 ring-warning/50 ring-offset-2 ring-offset-background";
    default:
      return "ring-2 ring-primary/40 ring-offset-2 ring-offset-background";
  }
}

const CityTemplate = ({ data }: CityTemplateProps) => {
  const hero = landingImagesById[data.images.hero];
  const canonicalUrl = `${BASE_URL}${data.url}`;
  const ogImageUrl = `${BASE_URL}${hero.src}`;
  const phoneHref = telHrefFromNational(data.phone);
  const locCampaign = `LOC-${data.slug.toUpperCase()}`;

  const imageUrls = [
    `${BASE_URL}${hero.src}`,
    ...data.serviceHighlights.map((h) => `${BASE_URL}${landingImagesById[h.imageId].src}`),
  ];

  const schema = buildLocationSchemaJsonLd({
    data,
    canonicalUrl,
    baseUrl: BASE_URL,
    imageUrls,
    isCountyHub: false,
  });

  const confidenceHeadingClass = signatureHeadingClass(data.signatureColor);

  const fireHeroPhoneGtag = () => {
    if (typeof window !== "undefined") {
      window.gtag?.("event", "phone_click", {
        send_to: "AW-17927335103",
        campaign: locCampaign,
        source: "location_hero_phone",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.metaTitle} />
        <meta name="twitter:description" content={data.metaDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": { "@id": `${BASE_URL}/`, "name": "Home" },
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": { "@id": `${BASE_URL}/locations`, "name": "Locations" },
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": { "@id": canonicalUrl, "name": data.city },
              },
            ],
          })}
        </script>
      </Helmet>
      <main className="pt-16">
        <section className="relative min-h-[70vh] flex items-center">
          <img src={hero.src} alt={`${data.city} towing and recovery service`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="container mx-auto px-4 relative z-10 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-white text-sm font-medium">{data.heroKicker}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{data.h1}</h1>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6">{data.heroSubhead}</p>
              <a
                href={phoneHref}
                className="inline-block text-3xl md:text-4xl font-bold text-white mb-6 hover:underline"
                onClick={fireHeroPhoneGtag}
              >
                {data.phone}
              </a>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/85 text-xs md:text-sm mb-8 max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" aria-hidden />
                  Live dispatch
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-primary" aria-hidden />
                  Flatbed-first when it matters
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4 text-primary" aria-hidden />
                  CTTA / DOT-minded crews
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" aria-hidden />
                  Pay on delivery
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                  <a href={phoneHref} onClick={fireHeroPhoneGtag}>
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto">
                  <a href="#location-quick-quote">Get a 60-Second Quote</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="location-quick-quote" className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              <LocationConfidenceCard data={data} phoneHref={phoneHref} onPhoneClick={fireHeroPhoneGtag} />
              <div className="h-full min-h-0 flex flex-col">
                <Suspense
                  fallback={<div className="min-h-[420px] flex-1 animate-pulse rounded-xl bg-muted" aria-hidden />}
                >
                  <QuickQuoteForm
                    campaign={locCampaign}
                    defaultLocation={data.city}
                    redirectTo={`/thank-you?type=location-${data.slug}`}
                    wideLayout
                    className="flex-1 flex flex-col [&>div]:flex-1"
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        <Suspense
          fallback={<div className="min-h-[600px] animate-pulse bg-muted/30" aria-hidden />}
        >
          <CityTemplateBelowFold
            data={data}
            phoneHref={phoneHref}
            locCampaign={locCampaign}
            confidenceHeadingClass={confidenceHeadingClass}
          />
        </Suspense>
      </main>
    </div>
  );
};

export default CityTemplate;

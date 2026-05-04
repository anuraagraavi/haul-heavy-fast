import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, MapPin, Route, ShieldCheck, Clock, Truck, BadgeCheck } from "lucide-react";
import QuickQuoteForm from "@/components/landing/QuickQuoteForm";
import ProcessSteps from "@/components/landing/ProcessSteps";
import FinalCTA from "@/components/landing/FinalCTA";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import LocationTrustStrip from "@/components/locations/LocationTrustStrip";
import LocationsCarousel from "@/components/locations/LocationsCarousel";
import LocalKnowledgePanel from "@/components/locations/LocalKnowledgePanel";
import LocationStatsBand from "@/components/locations/LocationStatsBand";
import LocationTestimonials from "@/components/locations/LocationTestimonials";
import OurServiceStandard from "@/components/locations/OurServiceStandard";
import LocationConfidenceCard from "@/components/locations/LocationConfidenceCard";
import { landingImagesById } from "@/data/landingImages";
import type { LocationData, LocationSignatureColor } from "@/data/locations";
import { buildLocationSchemaJsonLd } from "@/lib/locationSchema";
import { telHrefFromNational } from "@/lib/phone";
import { cn } from "@/lib/utils";

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
      </Helmet>
      <Header />
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
                <QuickQuoteForm
                  campaign={locCampaign}
                  defaultLocation={data.city}
                  redirectTo={`/thank-you?type=location-${data.slug}`}
                  wideLayout
                  className="flex-1 flex flex-col [&>div]:flex-1"
                />
              </div>
            </div>
          </div>
        </section>

        <LocationTrustStrip />

        <LocationStatsBand stats={data.stats} locationLabel={data.city} />

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Why {data.city} calls feel different with Heavy Tow Pro</h2>
            <p className="text-muted-foreground leading-relaxed text-center md:text-lg">{data.localIntro}</p>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2
              className={cn(
                "text-3xl font-bold text-foreground mb-8 text-center inline-block mx-auto w-full rounded-2xl py-3 px-4",
                signatureHeadingClass(data.signatureColor),
              )}
            >
              Why {data.city} drivers choose Heavy Tow Pro
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.confidencePoints.map((point) => (
                <article key={point.title} className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Service & vehicle coverage in {data.city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {data.serviceHighlights.map((h) => {
                const image = landingImagesById[h.imageId];
                return (
                  <article
                    key={h.title}
                    className={cn(
                      "bg-card border border-border rounded-2xl overflow-hidden flex flex-col",
                      h.featured && "md:col-span-2 lg:col-span-2",
                    )}
                  >
                    <div className={cn("relative", h.featured && "md:flex md:items-stretch")}>
                      <img
                        src={image.src}
                        alt={`${data.city} — ${h.title}`}
                        className={cn("w-full object-cover", h.featured ? "md:w-1/2 h-56 md:h-auto md:min-h-[220px]" : "h-44")}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className={cn("p-5 md:p-6 flex flex-col flex-1", h.featured && "md:w-1/2")}>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{h.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{h.body}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <LocalKnowledgePanel city={data.city} items={data.localKnowledge} />

        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Coverage: neighborhoods, freeways & common scenarios</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8 text-center leading-relaxed">{data.neighborhoodIntro}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 justify-center lg:justify-start">
                  <MapPin className="w-4 h-4 text-primary shrink-0" /> Neighborhoods
                </h3>
                <ul className="space-y-2">
                  {data.neighborhoodsServed.map((n) => (
                    <li key={n} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-success shrink-0" /> {n}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2 justify-center lg:justify-start">
                  <Route className="w-4 h-4 text-primary shrink-0" /> Freeways & landmarks
                </h3>
                <ul className="space-y-2">
                  {[...data.freeways, ...data.landmarks].map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-success shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 text-center lg:text-left">Common scenarios in {data.city}</h3>
                <ul className="space-y-2">
                  {data.commonScenarios.map((scenario) => (
                    <li key={scenario} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-success shrink-0" /> {scenario}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ProcessSteps
          phoneDisplay={data.phone}
          phoneHref={phoneHref}
          phoneGtagCampaign={locCampaign}
          phoneGtagSource="location_process_steps_phone"
        />

        <OurServiceStandard locationLabel={data.city} />

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently asked questions — {data.city}</h2>
            <div className="space-y-4">
              {data.faqs.map((faq) => (
                <details key={faq.q} className="bg-card border border-border rounded-xl p-5">
                  <summary className="font-semibold text-foreground cursor-pointer">{faq.q}</summary>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <LocationTestimonials city={data.city} testimonials={data.testimonials} />

        <LocationsCarousel currentSlug={data.slug} />
        <FinalCTA
          phoneDisplay={data.phone}
          phoneHref={phoneHref}
          phoneGtagCampaign={locCampaign}
          phoneGtagSource="location_final_cta"
        />
        <StickyMobileCTA phoneDisplay={data.phone} phoneHref={phoneHref} gtagCampaign={locCampaign} />
      </main>
      <Footer />
    </div>
  );
};

export default CityTemplate;

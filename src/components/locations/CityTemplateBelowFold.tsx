import { CheckCircle, MapPin, Route, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ProcessSteps from "@/components/landing/ProcessSteps";
import FinalCTA from "@/components/landing/FinalCTA";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import LocationTrustStrip from "@/components/locations/LocationTrustStrip";
import LocationsCarousel from "@/components/locations/LocationsCarousel";
import LocalKnowledgePanel from "@/components/locations/LocalKnowledgePanel";
import LocationStatsBand from "@/components/locations/LocationStatsBand";
import LocationTestimonials from "@/components/locations/LocationTestimonials";
import OurServiceStandard from "@/components/locations/OurServiceStandard";
import { landingImagesById } from "@/data/landingImages";
import type { LocationData } from "@/data/locations";
import { cn } from "@/lib/utils";

export type CityTemplateBelowFoldProps = {
  data: LocationData;
  phoneHref: string;
  locCampaign: string;
  confidenceHeadingClass: string;
};

/** Below-the-fold location content (code-split from CityTemplate). */
export default function CityTemplateBelowFold({
  data,
  phoneHref,
  locCampaign,
  confidenceHeadingClass,
}: CityTemplateBelowFoldProps) {
  return (
    <>
      <LocationTrustStrip />

      <LocationStatsBand stats={data.stats} locationLabel={data.city} />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Why {data.city} calls feel different with Heavy Tow Pro
          </h2>
          <p className="text-muted-foreground leading-relaxed text-center md:text-lg">{data.localIntro}</p>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2
            className={cn(
              "text-3xl font-bold text-foreground mb-8 text-center inline-block mx-auto w-full rounded-2xl py-3 px-4",
              confidenceHeadingClass,
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

      {data.relatedGuides && data.relatedGuides.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" aria-hidden />
              Local towing guides — {data.city}
            </h2>
            <ul className="space-y-2">
              {data.relatedGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    to={`/blog/${guide.slug}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {guide.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
    </>
  );
}

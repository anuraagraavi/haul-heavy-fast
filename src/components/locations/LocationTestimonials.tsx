import type { LocationTestimonial } from "@/data/locations";
import { Star } from "lucide-react";

interface LocationTestimonialsProps {
  city: string;
  testimonials: LocationTestimonial[];
}

const LocationTestimonials = ({ city, testimonials }: LocationTestimonialsProps) => {
  return (
    <section className="py-16 bg-muted/20" aria-label={`Customer reviews for ${city}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">What {city} drivers say</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Sample feedback from recent dispatch calls — every load is documented with securement photos when requested.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name + t.quote.slice(0, 24)} className="bg-card border border-border rounded-2xl p-6 flex flex-col h-full">
              <div className="flex gap-0.5 mb-3" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning shrink-0" aria-hidden />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 pt-4 border-t border-border text-sm">
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> · {t.neighborhood}</span>
                <p className="text-xs text-muted-foreground mt-1">{t.vehicle}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationTestimonials;

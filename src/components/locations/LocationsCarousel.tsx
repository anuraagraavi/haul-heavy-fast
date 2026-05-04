import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CITY_LOCATIONS, COUNTY_HUB_LOCATIONS, LOCATIONS_BY_SLUG, type LocationData } from "@/data/locations";
import { landingImagesById } from "@/data/landingImages";

interface LocationsCarouselProps {
  currentSlug: string;
  title?: string;
  subtitle?: string;
}

function orderLocations(current: LocationData) {
  const siblingCities = CITY_LOCATIONS.filter((location) => location.slug !== current.slug && location.countySlug === current.countySlug);
  const countyHubs = COUNTY_HUB_LOCATIONS.filter((location) => location.slug !== current.slug);
  const otherCities = CITY_LOCATIONS.filter((location) => location.slug !== current.slug && location.countySlug !== current.countySlug);
  return [...siblingCities, ...countyHubs, ...otherCities].slice(0, 12);
}

const LocationsCarousel = ({
  currentSlug,
  title = "Towing In More Bay Area Locations",
  subtitle = "Corridor-friendly suggestions beyond the on-page city list — hand-written blurbs per destination, same live dispatch.",
}: LocationsCarouselProps) => {
  const currentLocation = LOCATIONS_BY_SLUG[currentSlug];
  const ordered = currentLocation ? orderLocations(currentLocation) : [];
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
  });

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="text-center md:text-center md:flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">{subtitle}</p>
          </div>
          <div className="hidden md:flex gap-2 shrink-0 justify-center md:justify-end">
            <Button type="button" variant="outline" size="icon" aria-label="Previous locations" onClick={() => emblaApi?.scrollPrev()}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button type="button" variant="outline" size="icon" aria-label="Next locations" onClick={() => emblaApi?.scrollNext()}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto snap-x snap-mandatory md:overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {ordered.map((location) => {
              const image = landingImagesById[location.images.hero];
              const blurb =
                currentLocation?.relatedCities.find((item) => item.slug === location.slug)?.anchorBlurb ??
                "Reliable local dispatch coverage";
              return (
                <div
                  key={location.slug}
                  className="snap-start min-w-[82%] md:min-w-[45%] lg:min-w-[31%] rounded-2xl overflow-hidden border border-border bg-card"
                >
                  <Link to={location.url} className="block group">
                    <div className="relative">
                      <img src={image.src} alt={`${location.city} towing service coverage`} className="w-full h-44 object-cover" loading="lazy" decoding="async" />
                      <span className="absolute top-3 right-3 bg-background/90 text-foreground text-xs px-2 py-1 rounded-full border border-border">
                        {location.county.replace(" County", "")}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{location.city}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{blurb}</p>
                      <span className="inline-flex items-center gap-1 text-sm text-primary mt-3">
                        View location <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}

            <div className="snap-start min-w-[82%] md:min-w-[45%] lg:min-w-[31%] rounded-2xl border border-dashed border-primary/40 bg-card">
              <Link to="/locations" className="h-full min-h-[250px] p-6 flex flex-col justify-center items-start">
                <h3 className="text-xl font-semibold text-foreground">View All Locations</h3>
                <p className="text-sm text-muted-foreground mt-2">Browse every county hub and city service page.</p>
                <span className="inline-flex items-center gap-1 text-sm text-primary mt-4">
                  Open locations index <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsCarousel;


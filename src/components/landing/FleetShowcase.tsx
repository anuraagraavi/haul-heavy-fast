import type { LandingImageId } from "@/data/landingImages";
import { landingImagesById } from "@/data/landingImages";

const GALLERY_IMAGE_IDS: LandingImageId[] = [
  "light_luxury_flatbed",
  "light_accident_recovery",
  "light_suv_highway",
  "light_suv_tree_lined",
  "light_rivian_ev",
  "medium_att_service_truck",
];

const FleetShowcase = () => {
  return (
    <section className="py-10 md:py-12 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
          Real Jobs, Real Trucks
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 text-sm md:text-base">
          This is what we do every day — flatbeds, roadside recovery, luxury cars, EVs, and commercial rigs across the Bay Area.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {GALLERY_IMAGE_IDS.map((id) => {
            const img = landingImagesById[id];
            if (!img) return null;
            return (
              <div key={id} className="rounded-xl overflow-hidden shadow-md border border-border bg-muted/30 aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FleetShowcase;

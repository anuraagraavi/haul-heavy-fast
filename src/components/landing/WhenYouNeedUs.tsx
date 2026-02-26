import { Wrench, Building2, Shield } from "lucide-react";
import type { LandingImageId } from "@/data/landingImages";
import { landingImagesById } from "@/data/landingImages";

/** "When You Need Us" / Scenarios block — from MediumDuty. */
const SCENARIOS: Array<{
  icon: typeof Wrench;
  title: string;
  desc: string;
  imageId: LandingImageId;
}> = [
  { icon: Wrench, title: "Mechanical Breakdowns", desc: "Engine failure, transmission problems, or other mechanical issues that leave your vehicle stranded.", imageId: "light_suv_highway" },
  { icon: Building2, title: "Commercial Relocations", desc: "Business vehicle relocations, fleet repositioning, or moving vehicles between job sites.", imageId: "medium_att_service_truck" },
  { icon: Shield, title: "Accident Recovery", desc: "Post-collision recovery and scene clearance. We coordinate with CHP and work at your direction.", imageId: "light_accident_recovery" },
];

const WhenYouNeedUs = () => {
  return (
    <section className="py-10 bg-muted/20 border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-foreground text-center mb-6">
          When You Need Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {SCENARIOS.map((item, index) => {
            const IconComponent = item.icon;
            const img = landingImagesById[item.imageId];
            return (
              <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-background border border-border">
                {img && (
                  <div className="flex-shrink-0 w-full sm:w-28 h-20 sm:h-20 rounded-lg overflow-hidden bg-muted">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" width={120} height={80} loading="lazy" decoding="async" />
                  </div>
                )}
                <div className="flex gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhenYouNeedUs;

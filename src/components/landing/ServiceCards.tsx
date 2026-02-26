import { Truck, Car, Bike, Home, Package, AlertCircle } from "lucide-react";
import type { LandingImageId } from "@/data/landingImages";
import { landingImagesById } from "@/data/landingImages";
import lightDutyLuxury from "@/assets/light-duty-luxury.jpeg";
import lightDutyMotorcycle from "@/assets/light-duty-motorcycle.png";
import mediumDutyRv from "@/assets/medium-duty-rv.jpeg";

type ServiceImage = { imageId: LandingImageId } | { image: { src: string; alt: string } };

const C1_SERVICES: Array<{
  Icon: typeof Truck;
  name: string;
  desc: string;
  benefits: string[];
} & ServiceImage> = [
  { Icon: Truck, name: "Flatbed Towing", desc: "All-wheel-drive vehicles, AWDs, and modern cars that can't be wheel-lifted. Flatbed only — your car stays level and protected.", imageId: "light_suv_highway", benefits: ["No wheel lift damage", "Secure tie-down points", "Safe for low-clearance vehicles"] },
  { Icon: Car, name: "Luxury & Exotic Car Towing", desc: "Porsche, Ferrari, Tesla, Lamborghini, BMW — specialist flatbeds with soft straps. Zero damage policy.", image: { src: lightDutyLuxury, alt: "Luxury and exotic car towing with specialist flatbed" }, benefits: ["Soft-tie protection", "Low-clearance expertise", "White-glove service"] },
  { Icon: Bike, name: "Motorcycle Towing", desc: "Dedicated chock systems & soft tie-downs. Never loaded sideways, never dragged.", image: { src: lightDutyMotorcycle, alt: "Motorcycle towing with dedicated chock and tie-down service" }, benefits: ["Specialized bike restraints", "No scratches or damage", "Quick pickup times"] },
  { Icon: Home, name: "RV & Motorhome Towing", desc: "Class A, B & C motorhomes, fifth wheels, travel trailers. Heavy-duty flatbeds sized for your rig.", image: { src: mediumDutyRv, alt: "RV and motorhome towing with heavy-duty flatbed" }, benefits: ["Sized flatbeds for your rig", "24/7 emergency availability", "Experienced RV operators"] },
  { Icon: Package, name: "Box Truck & Medium-Duty", desc: "Up to 26,000 lb GVW. Box trucks, delivery vans, moving trucks. We dispatch medium-duty rigs — not overloaded light-duty trucks.", imageId: "medium_att_service_truck", benefits: ["Specialized medium-duty equipment", "Fast response for business vehicles", "Fleet contracts available"] },
  { Icon: AlertCircle, name: "Accident & Recovery Towing", desc: "Post-collision recovery and scene clearance. We coordinate with CHP, work within incident command, and tow at your direction.", imageId: "light_accident_recovery", benefits: ["Scene clearance", "CHP coordination", "Professional documentation"] },
];

const ServiceCards = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            We Tow It All — Safely, Every Time
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialist equipment for every vehicle type. No standard tow trucks here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {C1_SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-border shadow-md hover:shadow-elevated transition-shadow overflow-hidden border-t-4 border-primary flex flex-col"
            >
              {(() => {
                const img = "image" in service ? service.image : landingImagesById[service.imageId];
                return img ? (
                  <div className="hidden sm:block w-full h-48 overflow-hidden">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" width={400} height={192} loading="lazy" decoding="async" />
                  </div>
                ) : null;
              })()}
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3" aria-hidden>
                  <service.Icon className="w-6 h-6" />
                </span>
                <h3 className="font-bold text-foreground text-lg mb-2">{service.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.desc}</p>
                {service.benefits && service.benefits.length > 0 && (
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-primary font-bold">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Specialisation note — scope of services */}
        <div className="rounded-xl p-4 md:p-6 bg-primary/10 border border-primary/20">
          <h3 className="font-bold text-foreground text-center mb-4">
            We&apos;re Towing Specialists — Not a Roadside App
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div>
              <p className="text-foreground font-medium mb-2">What we focus on</p>
              <p className="text-muted-foreground text-sm">
                We handle towing, recovery, and vehicle transport only — not jump-starts, lockouts, tire changes, or fuel delivery.
                That focus keeps our trucks and training dialed in for real tows.
              </p>
            </div>
            <div>
              <p className="text-foreground font-medium mb-2">Why that&apos;s better for you</p>
              <p className="text-muted-foreground text-sm">
                Every call gets matched to the right rig and operator for your vehicle type. Better equipment, better technique,
                and fewer surprises when it matters most.
              </p>
            </div>
          </div>
          <p className="text-foreground font-medium text-center mt-4">
            If you only need a jump-start or fuel, we&apos;re happy to point you to a roadside assistance provider when you call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;

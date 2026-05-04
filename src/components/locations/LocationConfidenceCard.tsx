import { Button } from "@/components/ui/button";
import type { LocationData } from "@/data/locations";
import { BadgeCheck, MapPin, Phone, ShieldCheck, Truck } from "lucide-react";

interface LocationConfidenceCardProps {
  data: LocationData;
  phoneHref: string;
  onPhoneClick: () => void;
}

const LocationConfidenceCard = ({ data, phoneHref, onPhoneClick }: LocationConfidenceCardProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full flex flex-col">
      <h2 className="text-2xl font-bold text-foreground mb-3">Get a fast tow quote in {data.city}</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Live dispatch from {data.nearestHub.city} coordinates the right equipment class for your situation — flatbed-first when drivetrains are sensitive, medium-duty when GVWR demands it, and heavy-capable routing when you tell us upfront.
      </p>

      <div className="space-y-4 flex-1">
        <div className="rounded-xl border border-border bg-muted/20 p-4">
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">What we confirm in the first minute</p>
          <ul className="space-y-2 text-sm text-foreground/90">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden />
              <span>Exact pickup pin, cross streets, garage vs curb, and any clearance limits</span>
            </li>
            <li className="flex gap-2">
              <Truck className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden />
              <span>Vehicle type, AWD/EV, whether wheels roll, and approximate height for commercial units</span>
            </li>
            <li className="flex gap-2">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden />
              <span>Drop-off destination category — shop, yard, home, or fleet facility</span>
            </li>
          </ul>
        </div>

        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <BadgeCheck className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden />
            <span>24/7 live dispatch — no voicemail tree for emergencies</span>
          </li>
          <li className="flex gap-2">
            <BadgeCheck className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden />
            <span>Flatbed-first discipline for EV, AWD, luxury, and lowered vehicles when conditions warrant</span>
          </li>
          <li className="flex gap-2">
            <BadgeCheck className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden />
            <span>Hub routing from {data.nearestHub.address}</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-2">Prefer voice?</p>
        <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
          <a href={phoneHref} onClick={onPhoneClick}>
            <Phone className="w-5 h-5 mr-2" />
            Call {data.phone}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default LocationConfidenceCard;

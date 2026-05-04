import { BadgeCheck, ShieldCheck, Building2, Clock3, Wallet, Truck } from "lucide-react";

const TRUST_PILLARS = [
  { icon: BadgeCheck, label: "CTTA Certified" },
  { icon: ShieldCheck, label: "ITRA Member" },
  { icon: Truck, label: "DOT Compliant" },
  { icon: Building2, label: "OSHA-Trained Operators" },
  { icon: Wallet, label: "Pay On Delivery" },
  { icon: Clock3, label: "24/7 Live Dispatch" },
] as const;

interface LocationTrustStripProps {
  className?: string;
}

const LocationTrustStrip = ({ className }: LocationTrustStripProps) => {
  return (
    <section className={`py-6 bg-card border-y border-border ${className ?? ""}`.trim()}>
      <div className="container mx-auto px-4">
        <p className="text-center text-foreground/80 text-xs uppercase tracking-widest mb-4">
          Operating Standards You Can Verify
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="rounded-lg border border-border bg-background/60 px-3 py-3 text-center flex flex-col items-center justify-center gap-1"
            >
              <pillar.icon className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-xs font-medium text-foreground">{pillar.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationTrustStrip;


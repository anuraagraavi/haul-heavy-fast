import type { ComponentType } from "react";
import type { LocalKnowledgeIconName, LocalKnowledgeItem } from "@/data/locations";
import { Building2, Car, Clock, MapPin, MountainSnow, Route, ShieldCheck, Truck } from "lucide-react";

const ICONS: Record<LocalKnowledgeIconName, ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  MapPin,
  Route,
  Clock,
  ShieldCheck,
  Truck,
  Building2,
  MountainSnow,
  Car,
};

interface LocalKnowledgePanelProps {
  city: string;
  items: LocalKnowledgeItem[];
}

const LocalKnowledgePanel = ({ city, items }: LocalKnowledgePanelProps) => {
  return (
    <section className="py-16 bg-background" aria-label={`Local towing knowledge for ${city}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">Local dispatch knowledge — {city}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mb-10 text-sm md:text-base">
          The fastest tow is the one planned correctly before wheels roll. Here is how we think about your city.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <article key={item.title} className="bg-card border border-border rounded-2xl p-6 flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center border border-primary/25">
                  <Icon className="w-5 h-5 text-primary" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocalKnowledgePanel;

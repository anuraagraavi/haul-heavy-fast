import type { CorridorCoverageItem } from "@/data/locations";
import { Route } from "lucide-react";

interface LocationCorridorCoverageProps {
  countyName: string;
  items: CorridorCoverageItem[];
}

const LocationCorridorCoverage = ({ countyName, items }: LocationCorridorCoverageProps) => {
  if (!items.length) return null;
  return (
    <section className="py-16 bg-background" aria-label={`Major corridors in ${countyName}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">Corridor coverage across {countyName}</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 text-sm md:text-base">
          County dispatch thinks in freeway segments — not just city names — so the right unit angles toward your incident faster.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <article key={item.title} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Route className="w-5 h-5 text-primary shrink-0" aria-hidden />
                {item.tag && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
                    {item.tag}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationCorridorCoverage;

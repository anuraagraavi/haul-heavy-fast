import type { LocationStat } from "@/data/locations";

interface LocationStatsBandProps {
  stats: LocationStat[];
  /** e.g. "San Francisco" or "San Mateo County" */
  locationLabel: string;
  className?: string;
}

const LocationStatsBand = ({ stats, locationLabel, className }: LocationStatsBandProps) => {
  return (
    <section className={`py-10 bg-gradient-subtle border-y border-border ${className ?? ""}`.trim()} aria-label={`Service stats for ${locationLabel}`}>
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">Why drivers call Heavy Tow Pro in {locationLabel}</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card/80 px-4 py-5 text-center shadow-sm"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary tabular-nums">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationStatsBand;

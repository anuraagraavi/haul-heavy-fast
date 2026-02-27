const HEAVY_STATS = [
  { value: "75+ Tons", label: "Max Recovery Capacity" },
  { value: "50,000+", label: "Total Tows Completed" },
  { value: "6 Hubs", label: "Bay Area Dispatch Points" },
  { value: "24/7", label: "Commercial Dispatch" },
  { value: "SLA", label: "Fleet Contracts Available" },
  { value: "Rotator", label: "Recovery Fleet On Call" },
];

const HeavyCapabilityBar = () => {
  return (
    <section className="py-6 md:py-8 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-foreground/80 text-xs uppercase tracking-widest mb-4">
          Heavy Duty — By the Numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-0">
          {HEAVY_STATS.map((stat, index) => (
            <div
              key={index}
              className={`text-center py-3 md:py-0 ${
                index > 0 ? "md:border-l border-border" : ""
              }`}
            >
              <p className="text-xl md:text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeavyCapabilityBar;


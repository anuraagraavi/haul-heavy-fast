const TRUST_STATS = [
  { value: "4.9 / 5", label: "Google Rating" },
  { value: "50,000+", label: "Tows Completed" },
  { value: "15 Min", label: "Avg Response Time" },
  { value: "24 / 7", label: "Live Dispatch" },
  { value: "5 Counties", label: "Bay Area Coverage" },
];

const TrustBar = () => {
  return (
    <section className="py-6 md:py-8 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-foreground/80 text-xs uppercase tracking-widest mb-4">
          Trusted by Bay Area Drivers — By the Numbers
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-0">
          {TRUST_STATS.map((stat, index) => (
            <div
              key={index}
              className={`text-center py-3 md:py-0 ${index > 0 && index < 5 ? "md:border-l border-border" : ""}`}
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;

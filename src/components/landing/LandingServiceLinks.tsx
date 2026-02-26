import { Link } from "react-router-dom";

/** "What do you need to tow?" link row — mirrors Index Hero service selector. */
const LandingServiceLinks = () => {
  return (
    <section className="py-6 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm mb-4">What do you need to tow?</p>
        <p className="text-center text-muted-foreground text-xs mb-4">Choose your service type below or call for any vehicle.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/services/light-duty" className="bg-card border border-border rounded-lg px-5 py-3 hover:bg-primary/10 hover:border-primary/40 transition-all font-medium text-foreground hover:text-primary">
            Light-Duty
          </Link>
          <Link to="/services/medium-duty" className="bg-card border border-border rounded-lg px-5 py-3 hover:bg-primary/10 hover:border-primary/40 transition-all font-medium text-foreground hover:text-primary">
            Medium-Duty
          </Link>
          <Link to="/services/heavy-duty" className="bg-card border border-border rounded-lg px-5 py-3 hover:bg-primary/10 hover:border-primary/40 transition-all font-medium text-foreground hover:text-primary">
            Heavy-Duty
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingServiceLinks;

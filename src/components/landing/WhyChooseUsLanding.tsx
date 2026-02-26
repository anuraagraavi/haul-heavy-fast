import { Truck, DollarSign, Shield, Clock, Award, Briefcase } from "lucide-react";

const C1_DIFFERENTIATORS = [
  { icon: Truck, title: "Right Truck for the Right Job", desc: "We don't send a light-duty hook truck for your luxury car or motorcycle. Every dispatch is matched to your vehicle type — flatbed for cars that need it, specialist motorcycle rigs when required. Equipment matters.", gradient: "from-primary to-destructive" },
  { icon: DollarSign, title: "No Hidden Fees. Ever.", desc: "Upfront pricing on arrival — not after loading. No fuel surcharges, no mileage surprises, no after-hours premiums. We quote it, we charge it. Transparency isn't a policy here; it's a non-negotiable.", gradient: "from-success to-secondary" },
  { icon: Shield, title: "Certified & Licensed Professionals", desc: "CTTA (California Tow Truck Association) certified, ITRA (International Towing & Recovery Association) member, DOT compliant, OSHA-trained operators. This isn't a side hustle — this is a licensed, professional operation.", gradient: "from-secondary to-warning" },
  { icon: Clock, title: "Real Human Dispatch. 24/7, 365.", desc: "Your call is answered by a live dispatcher at any hour — not an answering service, not a voicemail, not a chatbot. A real person with real authority to dispatch a truck immediately.", gradient: "from-warning to-primary" },
  { icon: Award, title: "4.9 Stars on Google — 50,000+ Tows", desc: "Our reputation is built on 50,000+ completed tows and hundreds of verified 5-star reviews. We don't just claim quality — we've earned it, consistently, across every county we serve.", gradient: "from-secondary to-primary" },
  { icon: Briefcase, title: "Business Ready", desc: "Corporate contracts, fleet partnerships, and dedicated account management. We understand business urgency and respond accordingly.", gradient: "from-warning to-secondary" },
];

const WhyChooseUsLanding = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Why Thousands of Bay Area Drivers Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Heavy Haulers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Not every tow truck is equal. Here&apos;s what sets us apart.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs md:text-sm">
            <span className="px-3 py-1 rounded-full bg-card border border-border text-foreground">
              CTTA Certified
            </span>
            <span className="px-3 py-1 rounded-full bg-card border border-border text-foreground">
              ITRA Member
            </span>
            <span className="px-3 py-1 rounded-full bg-card border border-border text-foreground">
              DOT Compliant
            </span>
            <span className="px-3 py-1 rounded-full bg-card border border-border text-foreground">
              OSHA-Trained Operators
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {C1_DIFFERENTIATORS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-elevated transition-all">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsLanding;

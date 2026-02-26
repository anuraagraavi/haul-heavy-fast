import { Link } from "react-router-dom";
import { DollarSign, ShieldCheck, Clock, MapPin, Shield } from "lucide-react";

const C1_PROMISES = [
  { Icon: DollarSign, title: "Upfront Pricing", desc: "You'll know the rate before we load. Nothing is added on arrival. No fuel charges, no dispatch fees, no surprises — ever." },
  { Icon: ShieldCheck, title: "Damage-Free or We Make It Right", desc: "We carry full cargo liability insurance. In the rare event of any damage, we handle it immediately — no runaround, no delays." },
  { Icon: Clock, title: "On-Time or We'll Tell You Why", desc: "If we're running late for any reason, your dispatcher proactively calls you. You are never left wondering what's happening." },
  { Icon: MapPin, title: "Your Vehicle, Your Direction", desc: "We tow where you tell us — your preferred shop, your home, any destination within our service area. Your vehicle, your call." },
];

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Our Promise to Every Customer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We stand behind every tow. Period.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          {C1_PROMISES.map((promise, index) => (
            <div
              key={index}
              className="text-left p-6 md:p-8 bg-background rounded-xl border border-border shadow-md hover:border-primary/40 transition-colors flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <promise.Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{promise.title}</h3>
                <p className="text-muted-foreground">{promise.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 border border-primary/20">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-semibold text-foreground">
              Licensed, Bonded, and Fully Insured for Your Protection
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            <Link to="/about" className="text-primary hover:underline">Learn more about our licensing, certifications & team training</Link> on our About page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;

import { Phone, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const REASSURANCE = [
  "No obligation — we quote before we load",
  "Live dispatcher — no voicemail, no hold",
  "Licensed, certified & fully insured",
  "Serving the Bay Area 24/7",
];

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
            <span className="text-sm font-medium">Available now — live dispatcher ready</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            One Call. We&apos;re on the Way.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            One call. Live dispatcher. ETA in 60 seconds. Day or night.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto h-16 md:h-14 text-lg md:text-xl px-10">
              <a href="tel:+16508812400">
                <Phone className="w-6 h-6 mr-3" />
                CALL NOW — 650-881-2400
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto h-14 text-lg px-8">
              <Link to="/get-a-quote">
                Request a Quote Online
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-primary-foreground/80 text-sm mb-6">
            {REASSURANCE.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span className="text-accent">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-4 items-center">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
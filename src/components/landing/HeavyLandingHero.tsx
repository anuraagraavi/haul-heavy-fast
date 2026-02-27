import { useEffect, useState } from "react";
import { Phone, Clock, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { landingImagesById } from "@/data/landingImages";

const HERO_SLIDES = [
  landingImagesById.heavy_cat_d_series_desert,
  landingImagesById.heavy_cat_dozer_golden_hour,
  landingImagesById.heavy_oversize_peterbilt_cat,
] as const;

const HeavyLandingHero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const heroImage = HERO_SLIDES[slideIndex];

  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image carousel with heavy-duty Work Images */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={i === slideIndex ? slide.alt : ""}
            aria-hidden={i !== slideIndex}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === slideIndex ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : undefined}
            decoding={i === 0 ? "sync" : "async"}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/55 to-black/40 z-[1]" aria-hidden />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-primary/40 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-warning" />
            <span className="text-white font-semibold text-sm md:text-base">
              24/7 Heavy Duty Dispatch
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
            <span className="text-white">
              Bay Area&apos;s #1 Semi Truck Towing.
            </span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              75+ Ton Heavy Recovery.
            </span>
          </h1>

          {/* Subheadline from Campaign 2 hero */}
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            Semi-truck, 18-wheeler &amp; heavy equipment recovery — fleet contracts, rotator
            service, 5 Bay Area counties. Built for fleet managers, logistics coordinators,
            and construction firms who can&apos;t afford downtime.
          </p>

          {/* Dominant phone number */}
          <a
            href="tel:+16508812400"
            className="inline-block text-white font-bold text-3xl md:text-4xl lg:text-[2.5rem] mb-4 hover:underline focus:underline"
          >
            650-881-2400
          </a>

          {/* Key benefits row */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Truck className="w-5 h-5 text-primary" />
              <span className="text-white font-medium text-sm">
                Heavy Wreckers &amp; Rotators
              </span>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-white font-medium text-sm">
                DOT / CTTA / ITRA Certified
              </span>
            </div>
            <div className="flex items-center gap-2 bg-card/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <Clock className="w-5 h-5 text-warning" />
              <span className="text-white font-medium text-sm">
                24/7 Commercial Dispatch
              </span>
            </div>
          </div>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="w-full sm:w-auto h-16 md:h-14 text-lg md:text-xl px-8"
            >
              <a href="tel:+16508812400">
                <Phone className="w-6 h-6 mr-3" />
                CALL NOW
              </a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="w-full sm:w-auto h-12 text-base px-6"
            >
              <Link to="/get-a-quote">Request a Fleet Quote</Link>
            </Button>
          </div>

          {/* Capability trust chips */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium">
              75+ Tons Rotator Capacity
            </span>
            <span className="px-4 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium">
              Rotator Fleet On Call
            </span>
            <span className="px-4 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium">
              DOT Compliant
            </span>
            <span className="px-4 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium">
              CTTA + ITRA Certified
            </span>
            <span className="px-4 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium">
              SLA Contracts Available
            </span>
            <span className="px-4 py-2.5 rounded-full bg-white/10 text-white text-sm font-medium">
              24/7 Commercial Dispatch
            </span>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeavyLandingHero;


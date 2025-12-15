import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, FileText, Clock, MapPin, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Sticky mobile CTA bar
export const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 400px
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className={cn("fixed bottom-0 left-0 right-0 z-40 lg:hidden", "bg-background/95 backdrop-blur-md border-t border-border", "transform transition-transform duration-300", isVisible ? "translate-y-0" : "translate-y-full")} role="complementary" aria-label="Quick contact options">
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-3">
          <Button variant="default" className="flex-1 bg-primary hover:bg-primary/90" asChild>
            <a href="tel:650-881-2400" aria-label="Call for emergency towing">
              <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
              Call Now
            </a>
          </Button>
          <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10" asChild>
            <Link to="/get-a-quote" aria-label="Request a quote online">
              <FileText className="w-4 h-4 mr-2" aria-hidden="true" />
              Get Quote
            </Link>
          </Button>
        </div>
      </div>
    </div>;
};

// Mid-article CTA card
interface MidArticleCTAProps {
  className?: string;
}
export const MidArticleCTA = ({
  className
}: MidArticleCTAProps) => <aside className={cn("bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 my-8", className)} role="complementary" aria-label="Get immediate help">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
        <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          Need Help Right Now?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Our dispatchers are standing by 24/7. Get a truck on the way in minutes.
        </p>
        <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
          <a href="tel:650-881-2400" className="bg-muted text-primary">
            <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
            Call 650-881-2400
          </a>
        </Button>
      </div>
    </div>
  </aside>;

// End of article CTA
interface EndArticleCTAProps {
  className?: string;
}
export const EndArticleCTA = ({
  className
}: EndArticleCTAProps) => <section className={cn("bg-card border border-border rounded-2xl p-8 md:p-12 text-center", className)} aria-labelledby="end-cta-heading">
    <div className="max-w-2xl mx-auto">
      <h2 id="end-cta-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
        Need Professional Towing Services?
      </h2>
      <p className="text-lg text-muted-foreground mb-6">
        Don't wait for an emergency. Get expert towing services when you need them most. 
        Our professional team is standing by 24/7 across the entire Bay Area.
      </p>
      
      {/* Trust indicators */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-primary" aria-hidden="true" />
          24/7 Dispatch
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-primary" aria-hidden="true" />
          Bay Area Coverage
        </span>
        <span className="flex items-center gap-1.5">
          <Truck className="w-4 h-4 text-primary" aria-hidden="true" />
          All Vehicle Types
        </span>
      </div>
      
      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
          <a href="tel:650-881-2400" aria-label="Call for immediate assistance">
            <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
            Call Now: 650-881-2400
          </a>
        </Button>
        <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" asChild>
          <Link to="/get-a-quote" aria-label="Get a free quote online">
            <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
            Get Free Quote
          </Link>
        </Button>
      </div>
      
      {/* Reassurance line */}
      <p className="text-sm text-muted-foreground mt-6">
        No obligation • Fast response • Competitive pricing
      </p>
    </div>
  </section>;
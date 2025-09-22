import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function MobileOptimizedCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    // Show CTA after 3 seconds on mobile devices
    const timer = setTimeout(() => {
      if (window.innerWidth <= 768) {
        setIsVisible(true);
      }
    }, 3000);

    // Listen for scroll events to show/hide CTA
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        const scrolled = window.scrollY > 200;
        setIsVisible(scrolled && !isMinimized);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isMinimized]);

  const handleMinimize = () => {
    setIsMinimized(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <div className="bg-card/95 backdrop-blur-sm border border-border rounded-xl shadow-elevated p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">Emergency Towing Available</span>
          </div>
          <button
            onClick={handleMinimize}
            className="p-1 rounded-full hover:bg-muted/50 transition-colors"
            aria-label="Close emergency towing banner"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            size="sm" 
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-orange"
            asChild
          >
            <a href="tel:650-881-2400" className="flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </Button>
          
          <Button 
            size="sm" 
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10"
            asChild
          >
            <Link to="/get-quote" className="flex items-center justify-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get Quote
            </Link>
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-2">
          24/7 Emergency • Bay Area Coverage
        </p>
      </div>
    </div>
  );
}
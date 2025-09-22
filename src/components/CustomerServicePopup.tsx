import { useState, useEffect } from 'react';
import { X, Phone, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface CustomerServicePopupProps {
  onClose: () => void;
}

export default function CustomerServicePopup({ onClose }: CustomerServicePopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for exit animation
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <Card 
        className={`w-full max-w-md bg-card/95 backdrop-blur-sm border-border/50 shadow-elevated transition-all duration-300 ${
          isVisible ? 'animate-scale-in' : 'animate-bounce-in'
        }`}
      >
        <CardContent className="p-6">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors duration-200"
            aria-label="Close popup"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>

          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 shadow-orange">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Exceptional Customer Service
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We've got the best customer service that is looking to serve you. Let's understand your needs, and let's give you fair pricing and the best experience that satisfies you as the right solution that you always needed.
            </p>
          </div>

          {/* Call to Actions */}
          <div className="space-y-3">
            {/* Primary CTA - Get Quote */}
            <Button 
              asChild
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-orange hover:shadow-elevated transition-all duration-300"
            >
              <Link to="/get-quote" onClick={handleClose}>
                <FileText className="mr-2 h-4 w-4" />
                Get a Free Quote
              </Link>
            </Button>

            {/* Secondary CTA - Call Now */}
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <a href="tel:650-881-2400" onClick={handleClose}>
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now: (650) 881-2400
              </a>
            </Button>

            {/* Tertiary CTA - Contact Team */}
            <Button 
              asChild
              variant="ghost"
              size="lg"
              className="w-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300"
            >
              <Link to="/contact" onClick={handleClose}>
                <Users className="mr-2 h-4 w-4" />
                Connect to Our Team
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 pt-4 border-t border-border/50">
            <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                <span>Fair Pricing</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
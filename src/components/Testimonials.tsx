import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "San Francisco",
      rating: 5,
      text: "Heavy Haulers saved the day when our delivery truck broke down on 101. Their response time was incredible - under 20 minutes! Professional, transparent pricing, and they kept us updated throughout. Highly recommend for any business vehicle needs.",
      service: "Medium-Duty Commercial"
    },
    {
      name: "Michael Rodriguez", 
      location: "Oakland",
      rating: 5,
      text: "Had to get my classic Porsche transported after a minor accident. I was worried about damage, but Heavy Haulers used their soft-tie system and treated it like their own car. Arrived perfectly safe. Worth every penny for high-value vehicles.",
      service: "Luxury Vehicle Transport"
    },
    {
      name: "Jennifer Walsh",
      location: "San Jose",
      rating: 5,
      text: "2 AM breakdown on Highway 280 and I was terrified. Heavy Haulers dispatch was so professional and calming. The driver arrived quickly, got me to safety, and handled everything with such care. True 24/7 service when you need it most.",
      service: "Emergency Towing"
    },
    {
      name: "David Kim",
      location: "San Mateo",
      rating: 5,
      text: "We have a corporate contract with Heavy Haulers for our construction fleet. Their priority dispatch and transparent billing has saved us thousands in downtime costs. The best B2B towing partner we've ever worked with.",
      service: "Fleet Services"
    },
    {
      name: "Lisa Thompson",
      location: "Berkeley",
      rating: 5,
      text: "Motorcycle broke down during a weekend ride. Most companies don't handle bikes properly, but Heavy Haulers has specialized equipment and really knows what they're doing. My bike arrived without a scratch.",
      service: "Motorcycle Towing"
    },
    {
      name: "Robert Martinez",
      location: "Redwood City",
      rating: 5,
      text: "Complex heavy equipment recovery after our excavator tipped over. Heavy Haulers' rotator team handled it like professionals - safely uprighted and transported a $200k machine. Impressive expertise and equipment."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers
            <span className="bg-gradient-primary bg-clip-text text-transparent ml-2">
              Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from Bay Area drivers and businesses who trust Heavy Haulers 
            for their towing and recovery needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border border-border hover:shadow-elevated transition-all duration-300 relative">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    {testimonial.service && (
                      <div className="text-right">
                        <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-2">4.9/5</h3>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-2">50,000+</h3>
            <p className="text-muted-foreground">Vehicles Towed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-warning mb-2">15 min</h3>
            <p className="text-muted-foreground">Avg Response Time</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-success mb-2">24/7</h3>
            <p className="text-muted-foreground">Emergency Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { Star } from "lucide-react";

const C1_TESTIMONIALS = [
  {
    name: "Jennifer W.",
    location: "San Francisco",
    service: "Sedan Tow",
    rating: 5,
    text: "I was stranded on the Bay Bridge at 2am — completely terrified. They answered immediately, gave me a 20-minute ETA, and showed up in 18. The driver was calm, professional, and got my car home safely. I cannot thank them enough.",
  },
  {
    name: "Marcus T.",
    location: "Oakland",
    service: "Motorcycle Tow",
    rating: 5,
    text: "My motorcycle went down and I was panicking about damage during transport. The driver showed me the chock system before loading, explained every strap, and delivered it to the shop without a scratch. That level of care is rare.",
  },
  {
    name: "Lisa K.",
    location: "Palo Alto",
    service: "EV Flatbed Tow",
    rating: 5,
    text: "I drive a Tesla Model S. Most towing companies get nervous when they see it. These guys loaded it onto a flatbed without me having to explain anything. Perfect tow, no warning lights afterward.",
  },
  {
    name: "Daniel R.",
    location: "San Jose",
    service: "Box Truck Tow",
    rating: 5,
    text: "Our delivery box truck died in the middle of a route. Dispatch picked up on the first ring, had a medium-duty truck on scene fast, and still got us to the dock before close. They understood it was our business on the line.",
  },
  {
    name: "Priya S.",
    location: "Redwood City",
    service: "Family SUV Tow",
    rating: 5,
    text: "Minivan broke down with two kids in the car. Driver showed up exactly when the dispatcher said, helped me move car seats, and made sure we all got home safely. Calm, kind, and professional the whole time.",
  },
  {
    name: "Alex G.",
    location: "Berkeley",
    service: "Long-Distance Flatbed",
    rating: 5,
    text: "Needed my project car moved from Berkeley to a shop down the Peninsula. The driver treated it like his own, walked me through the tie-down points, and the invoice matched the quote exactly. No surprises.",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Trusted by Bay Area Drivers — Here&apos;s What They Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over 50,000 tows. Real customers, real experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {C1_TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border border-t-4 border-t-primary shadow-md"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic mb-4">&quot;{testimonial.text}&quot;</p>
              <p className="font-bold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.location} | {testimonial.service}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-4 rounded-xl bg-background border-2 border-primary/30">
            <span className="flex gap-0.5" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </span>
            <span className="text-muted-foreground text-sm">
              Trusted by hundreds of Bay Area drivers for emergency and planned tows.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

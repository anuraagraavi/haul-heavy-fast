 import { Star, Quote, Phone } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
 } from "@/components/ui/carousel";
 
 const TestimonialCarousel = () => {
   const testimonials = [
     {
       name: "Sarah M.",
       location: "San Francisco",
       service: "Car Towing",
       rating: 5,
       text: "My car broke down on the Bay Bridge during rush hour. Heavy Haulers arrived in under 20 minutes and got me to safety. The driver was professional and kept me informed the whole time. Highly recommend!",
     },
     {
       name: "Marcus T.",
       location: "Oakland",
       service: "Box Truck Towing",
       rating: 5,
       text: "As a business owner, downtime costs money. When our delivery truck broke down, Heavy Haulers got us back on the road faster than I expected. Fair pricing and excellent communication throughout.",
     },
     {
       name: "Jennifer L.",
       location: "San Mateo",
       service: "Motorcycle Towing",
       rating: 5,
       text: "They used a specialized motorcycle trailer and treated my bike like it was their own. Not many towing companies know how to properly handle motorcycles, but these guys are pros.",
     },
     {
       name: "David K.",
       location: "Palo Alto",
       service: "Luxury Car Transport",
       rating: 5,
       text: "Had my Tesla Model S towed after a flat battery. They knew exactly how to handle an EV and used a flatbed to prevent any damage. Worth every penny for the peace of mind.",
     },
     {
       name: "Lisa R.",
       location: "San Jose",
       service: "RV Towing",
       rating: 5,
       text: "Our RV broke down on the way to a camping trip. Heavy Haulers sent a truck that could handle our 28-foot motorhome. The driver was patient and made sure it was secured properly.",
     },
   ];
 
   return (
     <section className="py-12 md:py-16 bg-background">
       <div className="container mx-auto px-4">
         <div className="text-center mb-10">
           <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
             Why Bay Area Drivers Trust Us
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Real stories from real customers across the Bay Area
           </p>
         </div>
 
         <Carousel
           opts={{
             align: "start",
             loop: true,
           }}
           className="w-full max-w-5xl mx-auto"
         >
           <CarouselContent className="-ml-4">
             {testimonials.map((testimonial, index) => (
               <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                 <div className="h-full bg-muted/30 rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors flex flex-col">
                   {/* Quote Icon */}
                   <Quote className="w-8 h-8 text-primary/30 mb-4" />
                   
                   {/* Rating */}
                   <div className="flex gap-1 mb-3">
                     {[...Array(testimonial.rating)].map((_, i) => (
                       <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                     ))}
                   </div>
                   
                   {/* Text */}
                   <p className="text-foreground text-sm mb-4 flex-1">"{testimonial.text}"</p>
                   
                   {/* Author */}
                   <div className="border-t border-border pt-4">
                     <p className="font-semibold text-foreground">{testimonial.name}</p>
                     <p className="text-xs text-muted-foreground">{testimonial.location} • {testimonial.service}</p>
                   </div>
                 </div>
               </CarouselItem>
             ))}
           </CarouselContent>
           <CarouselPrevious className="hidden md:flex -left-12" />
           <CarouselNext className="hidden md:flex -right-12" />
         </Carousel>
 
         {/* Review Platform Badges */}
         <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
           <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
             <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
             <span className="text-sm font-medium text-foreground">4.9 on Google</span>
           </div>
           <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-full">
             <Star className="w-4 h-4 fill-red-500 text-red-500" />
             <span className="text-sm font-medium text-foreground">5.0 on Yelp</span>
           </div>
         </div>
 
         {/* CTA */}
         <div className="text-center">
           <a href="tel:650-881-2400">
             <Button size="lg" className="h-14 px-8 text-lg font-semibold">
               <Phone className="w-5 h-5 mr-2" />
               Join 50,000+ Satisfied Customers
             </Button>
           </a>
         </div>
       </div>
     </section>
   );
 };
 
 export default TestimonialCarousel;
 import { Phone, Star, ArrowRight } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 
 const FinalCTA = () => {
   return (
     <section className="py-16 md:py-20 bg-primary text-white relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0">
         <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
       </div>
       
       <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-3xl mx-auto text-center">
           {/* Online Indicator */}
           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </span>
             <span className="text-sm font-medium">Dispatchers standing by right now</span>
           </div>
           
           <h2 className="text-3xl md:text-5xl font-bold mb-4">
             Stranded? Let's Get You Moving
           </h2>
           <p className="text-xl text-white/80 mb-8">
             One call is all it takes. We'll handle the rest.
           </p>
           
           {/* Primary CTA */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
             <a href="tel:650-881-2400" className="w-full sm:w-auto">
               <Button 
                 size="lg" 
                 className="w-full sm:w-auto h-16 md:h-14 text-lg md:text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground px-10 shadow-2xl hover:shadow-accent/25 transition-all hover:scale-105"
               >
                 <Phone className="w-6 h-6 mr-3 animate-pulse" />
                 Call Now: 650-881-2400
               </Button>
             </a>
             <Link to="/get-a-quote" className="w-full sm:w-auto">
               <Button 
                 size="lg" 
                 variant="outline" 
                 className="w-full sm:w-auto h-14 text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-primary px-8"
               >
                 Get Online Quote
                 <ArrowRight className="w-5 h-5 ml-2" />
               </Button>
             </Link>
           </div>
           
           {/* Trust Reminder */}
           <div className="flex flex-wrap justify-center gap-4 items-center">
             <div className="flex items-center gap-1">
               {[...Array(5)].map((_, i) => (
                 <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
               ))}
             </div>
             <span className="text-white/80">4.9 stars from 500+ reviews</span>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default FinalCTA;
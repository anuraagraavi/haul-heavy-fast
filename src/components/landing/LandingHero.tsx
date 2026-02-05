 import { Phone, Star, Shield, Clock } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 
 const LandingHero = () => {
   return (
     <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-primary-dark overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-10">
         <div className="absolute inset-0" style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
         }} />
       </div>
       
       <div className="container mx-auto px-4 py-12 relative z-10">
         <div className="max-w-4xl mx-auto text-center">
           {/* Urgency Badge */}
           <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 animate-pulse">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </span>
             <span className="text-white font-semibold text-sm md:text-base">
               24/7 Emergency Dispatch • Response in 15 Minutes
             </span>
           </div>
           
           {/* Main Headline */}
           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
             Fast, Professional Towing in{" "}
             <span className="text-accent">San Francisco Bay Area</span>
           </h1>
           
           {/* Subheadline */}
           <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
             Cars, SUVs, Motorcycles, Box Trucks, RVs — One Call Does It All
           </p>
           
           {/* Trust Elements Row */}
           <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
             <div className="flex items-center gap-2 text-white/90">
               <div className="flex">
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                 ))}
               </div>
               <span className="font-semibold">4.9/5</span>
             </div>
             <div className="flex items-center gap-2 text-white/90">
               <Shield className="w-5 h-5 text-accent" />
               <span>Licensed & Insured</span>
             </div>
             <div className="flex items-center gap-2 text-white/90">
               <Clock className="w-5 h-5 text-accent" />
               <span>50,000+ Tows</span>
             </div>
           </div>
           
           {/* CTA Buttons */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a 
               href="tel:650-881-2400" 
               className="w-full sm:w-auto"
             >
               <Button 
                 size="lg" 
                 className="w-full sm:w-auto h-16 md:h-14 text-lg md:text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground px-8 shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
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
                 Get Instant Quote
               </Button>
             </Link>
           </div>
           
           {/* Micro Trust Text */}
           <p className="text-white/70 text-sm mt-6">
             No hidden fees • Upfront pricing • Satisfaction guaranteed
           </p>
         </div>
       </div>
       
       {/* Bottom Wave */}
       <div className="absolute bottom-0 left-0 right-0">
         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
           <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
         </svg>
       </div>
     </section>
   );
 };
 
 export default LandingHero;
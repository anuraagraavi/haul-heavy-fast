 import { MapPin, Clock, Phone, Navigation } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const ResponseTime = () => {
   const counties = [
     { name: "San Francisco", time: "15-25 min", highlight: true },
     { name: "San Mateo County", time: "15-30 min", highlight: false },
     { name: "Alameda County", time: "20-35 min", highlight: false },
     { name: "Santa Clara County", time: "20-40 min", highlight: false },
   ];
 
   return (
     <section className="py-12 md:py-16 bg-primary text-white relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
       </div>
       
       <div className="container mx-auto px-4 relative z-10">
         <div className="text-center mb-10">
           <h2 className="text-2xl md:text-4xl font-bold mb-3">
             Help is Closer Than You Think
           </h2>
           <p className="text-white/80 max-w-2xl mx-auto">
             Our strategically positioned fleet means fast response times across the entire Bay Area
           </p>
         </div>
 
         {/* Main Stat */}
         <div className="text-center mb-10">
           <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
             <div className="relative">
               <Clock className="w-12 h-12 text-accent" />
               <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
             </div>
             <div className="text-left">
               <p className="text-sm text-white/70 uppercase tracking-wide">Average Response Time</p>
               <p className="text-4xl md:text-5xl font-bold text-accent">15-30 Min</p>
             </div>
           </div>
         </div>
 
         {/* County Grid */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
           {counties.map((county, index) => (
             <div 
               key={index}
               className={`p-4 rounded-xl text-center ${
                 county.highlight 
                   ? 'bg-accent text-accent-foreground' 
                   : 'bg-white/10 backdrop-blur-sm border border-white/20'
               }`}
             >
               <MapPin className={`w-5 h-5 mx-auto mb-2 ${county.highlight ? '' : 'text-accent'}`} />
               <p className="font-semibold text-sm">{county.name}</p>
               <p className={`text-lg font-bold ${county.highlight ? '' : 'text-accent'}`}>{county.time}</p>
             </div>
           ))}
         </div>
 
         {/* Real-time Indicator */}
         <div className="text-center mb-8">
           <div className="inline-flex items-center gap-2 text-white/80">
             <span className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
             </span>
             <span className="font-medium">Dispatchers online now</span>
           </div>
         </div>
 
         {/* CTA */}
         <div className="text-center">
           <a href="tel:650-881-2400">
             <Button 
               size="lg" 
               className="h-16 px-10 text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl"
             >
               <Phone className="w-6 h-6 mr-3" />
               Dispatch Now: 650-881-2400
             </Button>
           </a>
         </div>
       </div>
     </section>
   );
 };
 
 export default ResponseTime;
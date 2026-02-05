 import { MapPin, Phone, ChevronDown } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import {
   Collapsible,
   CollapsibleContent,
   CollapsibleTrigger,
 } from "@/components/ui/collapsible";
 import { useState } from "react";
 
 const CoverageMap = () => {
   const [openCounty, setOpenCounty] = useState<string | null>("San Francisco");
 
   const counties = [
     {
       name: "San Francisco",
       cities: ["Mission District", "SOMA", "Financial District", "Richmond", "Sunset", "Pacific Heights", "Marina", "North Beach", "Tenderloin", "Castro"],
       color: "bg-primary",
     },
     {
       name: "San Mateo County",
       cities: ["Redwood City", "Daly City", "San Mateo", "Menlo Park", "Burlingame", "South San Francisco", "San Bruno", "Pacifica", "Foster City", "Half Moon Bay"],
       color: "bg-accent",
     },
     {
       name: "Alameda County",
       cities: ["Oakland", "Berkeley", "Fremont", "Hayward", "San Leandro", "Alameda", "Union City", "Newark", "Pleasanton", "Livermore"],
       color: "bg-green-600",
     },
     {
       name: "Santa Clara County",
       cities: ["San Jose", "Palo Alto", "Mountain View", "Sunnyvale", "Santa Clara", "Cupertino", "Milpitas", "Campbell", "Los Gatos", "Saratoga"],
       color: "bg-blue-600",
     },
   ];
 
   return (
     <section className="py-12 md:py-16 bg-muted/30">
       <div className="container mx-auto px-4">
         <div className="text-center mb-10">
           <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
             Serving the Entire San Francisco Bay Area
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             From San Jose to San Francisco, we've got you covered
           </p>
         </div>
 
         <div className="grid lg:grid-cols-2 gap-8 items-start">
           {/* Map Visual */}
           <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
             <div className="aspect-square max-w-md mx-auto relative">
               {/* Simplified Bay Area representation */}
               <svg viewBox="0 0 400 400" className="w-full h-full">
                 {/* Water */}
                 <ellipse cx="200" cy="200" rx="80" ry="120" fill="hsl(var(--primary) / 0.1)" />
                 
                 {/* San Francisco */}
                 <circle cx="130" cy="140" r="35" fill="hsl(var(--primary))" className="opacity-80" />
                 <text x="130" y="145" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">SF</text>
                 
                 {/* San Mateo */}
                 <circle cx="100" cy="240" r="40" fill="hsl(var(--accent))" className="opacity-80" />
                 <text x="100" y="245" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">San Mateo</text>
                 
                 {/* Alameda */}
                 <circle cx="280" cy="180" r="45" fill="hsl(142 76% 36%)" className="opacity-80" />
                 <text x="280" y="185" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Alameda</text>
                 
                 {/* Santa Clara */}
                 <circle cx="220" cy="320" r="50" fill="hsl(217 91% 60%)" className="opacity-80" />
                 <text x="220" y="325" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Santa Clara</text>
                 
                 {/* Connecting lines */}
                 <line x1="130" y1="175" x2="100" y2="200" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4" opacity="0.5" />
                 <line x1="165" y1="140" x2="235" y2="180" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4" opacity="0.5" />
                 <line x1="140" y1="240" x2="170" y2="320" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4" opacity="0.5" />
                 <line x1="280" y1="225" x2="250" y2="270" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4" opacity="0.5" />
               </svg>
               
               {/* Pulse Animation */}
               <div className="absolute top-[32%] left-[30%] w-4 h-4">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
               </div>
             </div>
             
             <p className="text-center text-sm text-muted-foreground mt-4">
               <MapPin className="w-4 h-4 inline mr-1" />
               Strategic positioning for fastest response times
             </p>
           </div>
 
           {/* City Lists */}
           <div className="space-y-3">
             {counties.map((county) => (
               <Collapsible
                 key={county.name}
                 open={openCounty === county.name}
                 onOpenChange={() => setOpenCounty(openCounty === county.name ? null : county.name)}
               >
                 <CollapsibleTrigger className="w-full">
                   <div className="flex items-center justify-between p-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors">
                     <div className="flex items-center gap-3">
                       <div className={`w-4 h-4 rounded-full ${county.color}`} />
                       <span className="font-semibold text-foreground">{county.name}</span>
                     </div>
                     <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${openCounty === county.name ? 'rotate-180' : ''}`} />
                   </div>
                 </CollapsibleTrigger>
                 <CollapsibleContent>
                   <div className="px-4 pb-4 pt-2">
                     <div className="flex flex-wrap gap-2">
                       {county.cities.map((city, index) => (
                         <span 
                           key={index}
                           className="px-3 py-1 bg-muted/50 rounded-full text-sm text-foreground"
                         >
                           {city}
                         </span>
                       ))}
                     </div>
                   </div>
                 </CollapsibleContent>
               </Collapsible>
             ))}
           </div>
         </div>
 
         {/* CTA */}
         <div className="text-center mt-10">
           <a href="tel:650-881-2400">
             <Button size="lg" className="h-14 px-8 text-lg font-semibold">
               <Phone className="w-5 h-5 mr-2" />
               Call Your Local Dispatch
             </Button>
           </a>
         </div>
       </div>
     </section>
   );
 };
 
 export default CoverageMap;
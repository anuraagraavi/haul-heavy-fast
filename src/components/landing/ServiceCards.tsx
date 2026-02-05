 import { Car, Bike, Sparkles, Zap, Truck, Package, Caravan, Wrench, Phone } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const ServiceCards = () => {
   const lightDutyServices = [
     { icon: Car, name: "Cars & Sedans", desc: "Standard vehicles of all makes" },
     { icon: Car, name: "SUVs & Crossovers", desc: "All sizes and weights" },
     { icon: Bike, name: "Motorcycles", desc: "Specialized transport" },
     { icon: Sparkles, name: "Luxury & Exotic", desc: "White-glove handling" },
     { icon: Zap, name: "Electric Vehicles", desc: "EV-safe towing" },
     { icon: Wrench, name: "Classic Cars", desc: "Careful restoration transport" },
   ];
 
   const mediumDutyServices = [
     { icon: Truck, name: "Box Trucks", desc: "Up to 26,000 lbs" },
     { icon: Package, name: "Delivery Vans", desc: "Sprinters, Transits, ProMasters" },
     { icon: Caravan, name: "RVs & Campers", desc: "Class B & C motorhomes" },
     { icon: Truck, name: "Work Trucks", desc: "Service & utility vehicles" },
     { icon: Truck, name: "Commercial Vehicles", desc: "Fleet & business vehicles" },
     { icon: Package, name: "Cargo Vans", desc: "Loaded or empty" },
   ];
 
   return (
     <section className="py-12 md:py-16 bg-muted/30">
       <div className="container mx-auto px-4">
         <div className="text-center mb-10">
           <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
             Professional Towing for Any Vehicle
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             From motorcycles to box trucks, our fleet is equipped to handle it all
           </p>
         </div>
 
         <div className="grid md:grid-cols-2 gap-8 mb-10">
           {/* Light Duty */}
           <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-sm">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                 <Car className="w-6 h-6 text-primary" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-foreground">Light Duty Towing</h3>
                 <p className="text-sm text-muted-foreground">Up to 10,000 lbs</p>
               </div>
             </div>
             <div className="grid grid-cols-2 gap-3">
               {lightDutyServices.map((service, index) => (
                 <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                   <service.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                   <div>
                     <p className="font-medium text-sm text-foreground">{service.name}</p>
                     <p className="text-xs text-muted-foreground">{service.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
 
           {/* Medium Duty */}
           <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-sm">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                 <Truck className="w-6 h-6 text-accent" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-foreground">Medium Duty Towing</h3>
                 <p className="text-sm text-muted-foreground">10,000 - 26,000 lbs</p>
               </div>
             </div>
             <div className="grid grid-cols-2 gap-3">
               {mediumDutyServices.map((service, index) => (
                 <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                   <service.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                   <div>
                     <p className="font-medium text-sm text-foreground">{service.name}</p>
                     <p className="text-xs text-muted-foreground">{service.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
 
         {/* CTA */}
         <div className="text-center">
           <p className="text-muted-foreground mb-4">Not sure what you need? We'll help you figure it out.</p>
           <a href="tel:650-881-2400">
             <Button size="lg" className="h-14 px-8 text-lg font-semibold">
               <Phone className="w-5 h-5 mr-2" />
               Call Now for Help
             </Button>
           </a>
         </div>
       </div>
     </section>
   );
 };
 
 export default ServiceCards;
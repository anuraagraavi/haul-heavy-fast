 import { Phone, MapPin, Truck, CheckCircle } from "lucide-react";
 
 const ProcessSteps = () => {
   const steps = [
     {
       step: 1,
       icon: Phone,
       title: "Call or Request",
       desc: "Reach out 24/7 by phone or online form",
     },
     {
       step: 2,
       icon: MapPin,
       title: "We Locate You",
       desc: "GPS dispatch finds the closest available truck",
     },
     {
       step: 3,
       icon: Truck,
       title: "Driver Arrives",
       desc: "Professional, uniformed operator on scene fast",
     },
     {
       step: 4,
       icon: CheckCircle,
       title: "Safe Transport",
       desc: "Your vehicle delivered safely to destination",
     },
   ];
 
   return (
     <section className="py-12 md:py-16 bg-muted/30">
       <div className="container mx-auto px-4">
         <div className="text-center mb-10">
           <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
             Towing Made Simple
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             From your call to safe delivery, we handle everything
           </p>
         </div>
 
         {/* Desktop: Horizontal Timeline */}
         <div className="hidden md:block">
           <div className="flex justify-between items-start max-w-4xl mx-auto relative">
             {/* Connector Line */}
             <div className="absolute top-10 left-[12.5%] right-[12.5%] h-1 bg-primary/20">
               <div className="h-full bg-gradient-to-r from-primary via-primary to-accent rounded-full" />
             </div>
             
             {steps.map((step, index) => (
               <div key={index} className="flex flex-col items-center text-center w-1/4 relative z-10">
                 <div className="w-20 h-20 bg-background rounded-2xl border-2 border-primary flex items-center justify-center mb-4 shadow-lg">
                   <step.icon className="w-10 h-10 text-primary" />
                 </div>
                 <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                   {step.step}
                 </span>
                 <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                 <p className="text-sm text-muted-foreground">{step.desc}</p>
               </div>
             ))}
           </div>
         </div>
 
         {/* Mobile: Vertical Timeline */}
         <div className="md:hidden space-y-6">
           {steps.map((step, index) => (
             <div key={index} className="flex gap-4 relative">
               {/* Connector Line */}
               {index < steps.length - 1 && (
                 <div className="absolute left-7 top-16 w-0.5 h-12 bg-primary/30" />
               )}
               
               <div className="relative flex-shrink-0">
                 <div className="w-14 h-14 bg-background rounded-xl border-2 border-primary flex items-center justify-center shadow-md">
                   <step.icon className="w-7 h-7 text-primary" />
                 </div>
                 <span className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs">
                   {step.step}
                 </span>
               </div>
               <div className="flex-1 pt-2">
                 <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                 <p className="text-sm text-muted-foreground">{step.desc}</p>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ProcessSteps;
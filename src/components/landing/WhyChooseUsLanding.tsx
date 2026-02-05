 import { Zap, DollarSign, UserCheck, Truck, Shield, Clock } from "lucide-react";
 
 const WhyChooseUsLanding = () => {
   const benefits = [
     {
       icon: Zap,
       title: "Fastest Response",
       desc: "Strategic positioning across Bay Area means we arrive faster than anyone else",
     },
     {
       icon: DollarSign,
       title: "Transparent Pricing",
       desc: "No hidden fees, no surprise charges. What we quote is what you pay",
     },
     {
       icon: UserCheck,
       title: "Professional Operators",
       desc: "Trained, certified, and uniformed drivers who treat you with respect",
     },
     {
       icon: Truck,
       title: "Modern Fleet",
       desc: "Well-maintained, GPS-tracked vehicles equipped for any situation",
     },
     {
       icon: Shield,
       title: "Fully Insured",
       desc: "Complete coverage for your peace of mind. Your vehicle is protected",
     },
     {
       icon: Clock,
       title: "24/7 Available",
       desc: "Emergencies don't wait for business hours. Neither do we.",
     },
   ];
 
   return (
     <section className="py-12 md:py-16 bg-muted/30">
       <div className="container mx-auto px-4">
         <div className="text-center mb-10">
           <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
             The Heavy Haulers Difference
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             We're not just another towing company. Here's what sets us apart.
           </p>
         </div>
 
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
           {benefits.map((benefit, index) => (
             <div 
               key={index}
               className="bg-background rounded-2xl p-5 md:p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
             >
               <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                 <benefit.icon className="w-6 h-6 text-primary" />
               </div>
               <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
               <p className="text-sm text-muted-foreground">{benefit.desc}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default WhyChooseUsLanding;
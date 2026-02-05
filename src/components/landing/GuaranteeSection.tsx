 import { DollarSign, Heart, ThumbsUp, Shield } from "lucide-react";
 
 const GuaranteeSection = () => {
   const guarantees = [
     {
       icon: DollarSign,
       title: "Price Guarantee",
       desc: "The quote we give is the price you pay. No exceptions, no excuses.",
     },
     {
       icon: Heart,
       title: "Care Guarantee",
       desc: "Your vehicle treated like it's our own. Professional handling always.",
     },
     {
       icon: ThumbsUp,
       title: "Satisfaction Guarantee",
       desc: "We're not happy until you are. That's our promise to every customer.",
     },
   ];
 
   return (
     <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
       <div className="container mx-auto px-4">
         <div className="text-center mb-10">
           <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
             Our Promise to You
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             When you choose Heavy Haulers, you're choosing peace of mind
           </p>
         </div>
 
         <div className="grid md:grid-cols-3 gap-6 mb-10">
           {guarantees.map((guarantee, index) => (
             <div 
               key={index}
               className="text-center p-6 md:p-8 bg-background rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-sm"
             >
               <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                 <guarantee.icon className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-xl font-bold text-foreground mb-2">{guarantee.title}</h3>
               <p className="text-muted-foreground">{guarantee.desc}</p>
             </div>
           ))}
         </div>
 
         {/* Trust Statement */}
         <div className="text-center">
           <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 border border-primary/20">
             <Shield className="w-6 h-6 text-primary" />
             <span className="font-semibold text-foreground">
               Licensed, Bonded, and Fully Insured for Your Protection
             </span>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default GuaranteeSection;
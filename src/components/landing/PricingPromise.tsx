 import { DollarSign, FileText, Ban, CheckCircle, Phone } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 
 const PricingPromise = () => {
   const promises = [
     {
       icon: FileText,
       title: "Quote Before We Start",
       desc: "Know your exact cost upfront before any work begins. No surprises, no stress.",
     },
     {
       icon: Ban,
       title: "No Surprise Charges",
       desc: "The price we quote is the price you pay. Period. Even if the job takes longer.",
     },
     {
       icon: DollarSign,
       title: "Free Estimates",
       desc: "Get a no-obligation quote in minutes. No pressure, just honest pricing.",
     },
   ];
 
   return (
     <section className="py-12 md:py-16 bg-background">
       <div className="container mx-auto px-4">
         <div className="text-center mb-10">
           <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full mb-4">
             <CheckCircle className="w-5 h-5" />
             <span className="font-semibold">Price Match Guarantee</span>
           </div>
           <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
             No Hidden Fees. <span className="text-primary">Ever.</span>
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             We believe in complete transparency. That's why thousands of Bay Area drivers trust us.
           </p>
         </div>
 
         <div className="grid md:grid-cols-3 gap-6 mb-10">
           {promises.map((promise, index) => (
             <div 
               key={index}
               className="text-center p-6 md:p-8 bg-muted/30 rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg"
             >
               <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                 <promise.icon className="w-8 h-8 text-primary" />
               </div>
               <h3 className="text-lg font-bold text-foreground mb-2">{promise.title}</h3>
               <p className="text-muted-foreground text-sm">{promise.desc}</p>
             </div>
           ))}
         </div>
 
         {/* Pricing Indicators */}
         <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
           <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
             <h4 className="font-bold text-foreground mb-2">Light Duty Towing</h4>
             <p className="text-sm text-muted-foreground mb-3">Cars, SUVs, Motorcycles, EVs</p>
             <p className="text-2xl font-bold text-primary">Competitive Local Rates</p>
             <p className="text-xs text-muted-foreground mt-1">Starting prices vary by location & distance</p>
           </div>
           <div className="bg-accent/5 rounded-xl p-6 border border-accent/20">
             <h4 className="font-bold text-foreground mb-2">Medium Duty Towing</h4>
             <p className="text-sm text-muted-foreground mb-3">Box Trucks, RVs, Commercial</p>
             <p className="text-2xl font-bold text-accent">Custom Quotes</p>
             <p className="text-xs text-muted-foreground mt-1">Based on vehicle size & requirements</p>
           </div>
         </div>
 
         {/* CTA */}
         <div className="text-center">
           <Link to="/get-a-quote">
             <Button size="lg" className="h-14 px-8 text-lg font-semibold">
               Get Your Free Quote in 2 Minutes
             </Button>
           </Link>
         </div>
       </div>
     </section>
   );
 };
 
 export default PricingPromise;
 import { Star, Truck, Clock, Phone, Shield, Award, CheckCircle } from "lucide-react";
 
 const TrustBar = () => {
   const stats = [
     { icon: Star, value: "4.9/5", label: "Average Rating", color: "text-yellow-500" },
     { icon: Truck, value: "50,000+", label: "Vehicles Towed", color: "text-accent" },
     { icon: Clock, value: "15 Min", label: "Avg Response", color: "text-green-500" },
     { icon: Phone, value: "24/7/365", label: "Always Available", color: "text-primary" },
   ];
 
   const badges = [
     { icon: Shield, label: "Licensed" },
     { icon: CheckCircle, label: "Insured" },
     { icon: Award, label: "BBB Accredited" },
     { icon: Star, label: "Google Verified" },
   ];
 
   return (
     <section className="py-8 md:py-12 bg-background">
       <div className="container mx-auto px-4">
         {/* Stats Grid */}
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
           {stats.map((stat, index) => (
             <div 
               key={index}
               className="text-center p-4 md:p-6 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
             >
               <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
               <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
               <p className="text-sm text-muted-foreground">{stat.label}</p>
             </div>
           ))}
         </div>
         
         {/* Trust Badges */}
         <div className="flex flex-wrap justify-center gap-3 md:gap-6">
           {badges.map((badge, index) => (
             <div 
               key={index}
               className="flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/20"
             >
               <badge.icon className="w-4 h-4 text-primary" />
               <span className="text-sm font-medium text-foreground">{badge.label}</span>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default TrustBar;
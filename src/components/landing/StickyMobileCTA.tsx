 import { useState, useEffect } from "react";
 import { Phone, MessageSquare, X } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Link } from "react-router-dom";
 
 const StickyMobileCTA = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [isDismissed, setIsDismissed] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 300 && !isDismissed) {
         setIsVisible(true);
       } else if (window.scrollY <= 300) {
         setIsVisible(false);
       }
     };
 
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, [isDismissed]);
 
   const handleDismiss = () => {
     setIsDismissed(true);
     setIsVisible(false);
   };
 
   if (!isVisible) return null;
 
   return (
     <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-background/95 backdrop-blur-lg border-t border-border shadow-2xl md:hidden animate-in slide-in-from-bottom duration-300">
       <div className="flex items-center gap-2">
         {/* Online Indicator */}
         <div className="flex items-center gap-1.5 px-2">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
           </span>
           <span className="text-xs text-muted-foreground whitespace-nowrap">Online</span>
         </div>
         
         {/* Call Button */}
         <a href="tel:650-881-2400" className="flex-1">
           <Button 
             className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90"
           >
             <Phone className="w-4 h-4 mr-2" />
             Call Now
           </Button>
         </a>
         
         {/* Quote Button */}
         <Link to="/get-a-quote" className="flex-1">
           <Button 
             variant="outline" 
             className="w-full h-12 text-base font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
           >
             <MessageSquare className="w-4 h-4 mr-2" />
             Quote
           </Button>
         </Link>
         
         {/* Dismiss Button */}
         <button 
           onClick={handleDismiss}
           className="p-2 text-muted-foreground hover:text-foreground transition-colors"
           aria-label="Dismiss"
         >
           <X className="w-5 h-5" />
         </button>
       </div>
     </div>
   );
 };
 
 export default StickyMobileCTA;
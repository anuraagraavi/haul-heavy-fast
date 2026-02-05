 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 
 const LandingFAQ = () => {
   const faqs = [
     {
       question: "How much does towing cost in San Francisco?",
       answer: "Towing costs vary based on vehicle size, distance, and time of day. Light duty towing (cars, SUVs) typically starts at competitive local rates, while medium duty (box trucks, RVs) requires custom quotes. We always provide an upfront quote before any work begins—no hidden fees, guaranteed.",
     },
     {
       question: "How fast can you get to me?",
       answer: "Our average response time is 15-30 minutes across the Bay Area. In San Francisco proper, we typically arrive within 15-25 minutes. We have strategically positioned trucks throughout the region to ensure the fastest possible response to your location.",
     },
     {
       question: "Will my car be damaged during towing?",
       answer: "Absolutely not. Our operators are trained professionals who use proper equipment and techniques for each vehicle type. We use flatbed tow trucks for most vehicles, which eliminates any risk of drivetrain damage. Plus, we're fully insured for your peace of mind.",
     },
     {
       question: "Do you tow luxury and exotic cars?",
       answer: "Yes! We specialize in luxury and exotic vehicle transport. We use enclosed trailers and flatbed trucks with soft straps and wheel lifts designed specifically for high-value vehicles. Your Ferrari, Porsche, or Tesla will be treated with white-glove care.",
     },
     {
       question: "What forms of payment do you accept?",
       answer: "We accept all major credit cards, debit cards, cash, and most fleet accounts. For commercial customers, we also offer invoicing and account-based billing. Payment is collected after the job is complete.",
     },
     {
       question: "Are you available right now?",
       answer: "Yes! We operate 24 hours a day, 7 days a week, 365 days a year—including holidays. Our dispatchers are standing by right now to take your call. No matter when you need us, we're here.",
     },
   ];
 
   return (
     <section className="py-12 md:py-16 bg-background">
       <div className="container mx-auto px-4">
         <div className="text-center mb-10">
           <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
             Questions? We've Got Answers
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto">
             Everything you need to know about our towing services
           </p>
         </div>
 
         <div className="max-w-3xl mx-auto">
           <Accordion type="single" collapsible className="space-y-3">
             {faqs.map((faq, index) => (
               <AccordionItem 
                 key={index} 
                 value={`item-${index}`}
                 className="bg-muted/30 rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
               >
                 <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                   {faq.question}
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground pb-4">
                   {faq.answer}
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
         </div>
       </div>
     </section>
   );
 };
 
 export default LandingFAQ;
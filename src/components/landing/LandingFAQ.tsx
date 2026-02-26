import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const C1_FAQS = [
  { q: "How fast can you get to me?", a: "Our average response time is 15 minutes across the Bay Area. We'll give you a confirmed ETA within 60 seconds of your call. If we ever run late, your dispatcher calls you proactively — you're never left wondering." },
  { q: "Do you cover my area?", a: "We cover 5 Bay Area counties: San Francisco, San Mateo, Alameda, Santa Clara, and Contra Costa — 60+ cities total. If you're on a highway, bridge, or anywhere in the greater Bay Area, we can almost certainly reach you. Call and we'll confirm in 30 seconds." },
  { q: "Will you damage my car?", a: "No. We use the right equipment for every vehicle type. AWD and luxury cars get flatbed-only treatment. Motorcycles go on dedicated chock rigs with soft tie-downs. EVs are transported per manufacturer protocol. We've completed 50,000+ tows with a near-zero damage claim rate." },
  { q: "Do you do jump-starts, lockouts, or tire changes?", a: "No — we are a dedicated towing and recovery company only. We don't offer roadside assistance services. This is intentional: being specialists in towing means we're exceptional at it, with the right equipment for every scenario." },
  { q: "Can you tow my Tesla / electric vehicle?", a: "Yes, absolutely. All EVs must be transported on flatbeds — we never wheel-lift electric vehicles. Our drivers are trained on EV-specific protocols: transport in neutral/tow mode, battery access procedures, and manufacturer guidelines for Tesla, Rivian, Lucid, and other EVs." },
  { q: "How do I pay?", a: "Credit card or cash on delivery. No payment is required to dispatch — we collect at the drop-off location. You'll know the total before anything is loaded." },
  { q: "What if I need towing at 3am or on a holiday?", a: "We answer 24/7, 365 days a year. Live dispatcher. Real truck. Real driver. No extra charge for after-hours or holiday calls — ever. Breakdowns don't keep business hours, and neither do we." },
  { q: "Are you licensed and insured?", a: "Yes. CTTA (California Tow Truck Association) certified, ITRA (International Towing & Recovery Association) member, DOT compliant, OSHA-trained operators, and fully insured with cargo liability coverage. We carry the certifications required for professional towing — not just a truck and a hook." },
];

const LandingFAQ = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Answers to the questions every Bay Area driver asks before calling.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" collapsible defaultValue={["item-0", "item-1", "item-2"]} className="space-y-3">
            {C1_FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
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

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const C1_PRICING_ROWS = [
  {
    service: "Light-Duty Tow (Sedan / SUV, local)",
    rate: "Fair local pricing",
    notes: "Short-distance city tows priced by miles and situation.",
  },
  {
    service: "Flatbed Tow (AWD / 4WD / Luxury)",
    rate: "Flatbed-only pricing",
    notes: "Distance and vehicle-based pricing, always quoted before we load.",
  },
  {
    service: "Motorcycle Tow",
    rate: "Specialist service",
    notes: "Dedicated motorcycle carriers and chocks, priced by distance.",
  },
  {
    service: "RV / Motorhome Tow",
    rate: "Size-based pricing",
    notes: "Larger rigs priced by size, weight, and route complexity.",
  },
  {
    service: "Medium-Duty (Box Truck up to 26K GVW)",
    rate: "Commercial rate",
    notes: "Medium-duty rigs for box trucks and vans, priced per job.",
  },
  {
    service: "After-Hours / Holiday",
    rate: "Same fair rate",
    notes: "No surge pricing — same honest structure, any hour, any day.",
  },
];

const PricingSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Transparent Pricing — No Surprises
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We quote before we load. What you hear is what you pay.
          </p>
        </div>

        <div className="max-w-3xl mx-auto overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-4 py-3 font-semibold">Service Type</th>
                <th className="px-4 py-3 font-semibold whitespace-nowrap">How we price</th>
                <th className="px-4 py-3 font-semibold hidden sm:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {C1_PRICING_ROWS.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-muted/30" : "bg-background"}
                >
                  <td className="px-4 py-3 text-foreground font-medium">{row.service}</td>
                  <td className="px-4 py-3 text-primary font-bold whitespace-nowrap">{row.rate}</td>
                  <td className="px-4 py-3 text-muted-foreground text-sm hidden sm:table-cell">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-muted-foreground text-sm max-w-xl mx-auto">
          Final price always depends on distance, vehicle, and situation — but you&apos;ll hear the total before we load, never after.
        </p>

        <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
          <p className="text-foreground font-medium mb-2">
            We do NOT add fuel surcharges, dispatch fees, or after-hours premiums. The rate we quote is the rate you approve — on the phone or by text — before anything moves.
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground mb-4">Get an instant quote — we&apos;ll quote your specific tow in under 60 seconds. No obligation.</p>
          <a href="tel:+16508812400">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Phone className="w-4 h-4 mr-2" />
              Call 650-881-2400
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

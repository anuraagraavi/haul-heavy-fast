import { CheckCircle, Headphones, Package, ShieldCheck } from "lucide-react";

interface OurServiceStandardProps {
  locationLabel: string;
}

const INCLUDES = [
  "Licensed, insured operators with documented securement checks",
  "Soft straps and wheel-focused patterns for AWD, EV, and luxury vehicles when flatbed is used",
  "Walk-through before release so you understand how the vehicle was secured",
  "Photo-ready documentation for insurance or fleet reimbursement packets",
];

const OurServiceStandard = ({ locationLabel }: OurServiceStandardProps) => {
  return (
    <section className="py-16 bg-muted/20" aria-label={`Service standard in ${locationLabel}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-3 text-center">Our service standard in {locationLabel}</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 text-sm md:text-base">
          No dollar amounts here — just how we operate before we load, while we transport, and when we hand off your vehicle.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-card border border-border rounded-xl p-6 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-primary mb-3 mx-auto md:mx-0">
              <Headphones className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="font-semibold text-lg mb-2">Confirmed scope before we load</h3>
            <p className="text-sm text-muted-foreground">Dispatch confirms what we are doing, pickup and drop-off context, and equipment plan before hookup begins.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-primary mb-3 mx-auto md:mx-0">
              <ShieldCheck className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="font-semibold text-lg mb-2">One dispatcher until arrival</h3>
            <p className="text-sm text-muted-foreground">You are not bounced between queues — the same voice tracks ETA changes and driver handoff.</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 text-primary mb-3 mx-auto md:mx-0">
              <Package className="w-6 h-6" aria-hidden />
            </div>
            <h3 className="font-semibold text-lg mb-2">Pay on delivery, clear handoff</h3>
            <p className="text-sm text-muted-foreground">You know the service scope up front; delivery workflow stays straightforward with no surprise add-ons after dispatch approves the plan.</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <h3 className="font-semibold text-center md:text-left mb-4">What every {locationLabel} tow includes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INCLUDES.map((line) => (
              <div key={line} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" aria-hidden />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServiceStandard;

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BAY_AREA_COUNTIES_LP, DISPATCH_HUBS_LP } from "@/data/coverage";
import { PRIMARY_DISPATCH_PHONE_DISPLAY, PRIMARY_DISPATCH_TEL_HREF } from "@/data/screenshotDispatchHubs";
import { telHrefFromNational } from "@/lib/phone";
import bayAreaCoverageImg from "@/assets/bay-area-coverage.jpg";

const CoverageMap = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            We Cover the Entire Bay Area — 5 Counties, 60+ Cities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Eight official dispatch hubs across the Bay Area. Local dispatch means faster routing. If you&apos;re not sure which number to
            call, use {PRIMARY_DISPATCH_PHONE_DISPLAY} (main Bay Area line) and we&apos;ll connect you.
          </p>
        </div>

        {/* Coverage banner image — same as ServiceAreas / Locations */}
        <div className="relative mb-10 rounded-2xl overflow-hidden shadow-elevated">
          <img
            src={bayAreaCoverageImg}
            alt="Heavy Haulers towing service coverage map San Francisco Bay Area counties including SF, San Mateo, Alameda, Santa Clara, Contra Costa"
            className="w-full h-48 md:h-80 object-cover"
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            {BAY_AREA_COUNTIES_LP.map((county, index) => (
              <div key={index} className="bg-background rounded-xl p-4 border border-border">
                <h3 className="font-bold text-foreground mb-2">
                  {county.name} {'star' in county && county.star && "★ #1 Market"}
                </h3>
                <p className="text-sm text-muted-foreground">{county.cities}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-foreground mb-4">Dispatch Hubs</h3>
            {DISPATCH_HUBS_LP.map((hub, index) => (
              <div key={index} className="bg-background rounded-xl p-4 border border-border flex justify-between items-start gap-2">
                <div>
                  <p className="font-semibold text-foreground">{hub.name}</p>
                  <p className="text-sm text-muted-foreground">{hub.address}</p>
                </div>
                {hub.phone && (
                  <a
                    href={telHrefFromNational(hub.phone)}
                    className="text-primary font-semibold whitespace-nowrap hover:underline"
                  >
                    {hub.phone}
                  </a>
                )}
              </div>
            ))}
            <p className="text-xs text-muted-foreground">
              Each hub uses its own dispatch number; if you&apos;re ever unsure which to call, dial {PRIMARY_DISPATCH_PHONE_DISPLAY} and
              we&apos;ll connect you.
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
          <p className="text-foreground font-medium mb-4">Not sure if we cover your area? Call us and we&apos;ll confirm in 30 seconds.</p>
          <Button variant="hero" size="lg" asChild>
            <a href={PRIMARY_DISPATCH_TEL_HREF}>
              <Phone className="w-4 h-4 mr-2" />
              {PRIMARY_DISPATCH_PHONE_DISPLAY}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;

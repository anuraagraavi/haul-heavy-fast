import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { CITY_LOCATIONS, COUNTY_HUB_LOCATIONS, CITIES_BY_COUNTY } from "@/data/locations";
import { DISPATCH_HUBS } from "@/data/coverage";
import { PRIMARY_DISPATCH_PHONE_DISPLAY, PRIMARY_DISPATCH_TEL_HREF } from "@/data/screenshotDispatchHubs";
import { telHrefFromNational } from "@/lib/phone";

const LEGACY_HASH_REDIRECTS: Record<string, string> = {
  "#san-francisco": "/towing-san-francisco",
  "#san-mateo": "/locations/san-mateo-county",
  "#alameda": "/locations/alameda-county",
  "#santa-clara": "/locations/santa-clara-county",
  "#contra-costa": "/locations/contra-costa-county",
  "#central-valley": "/towing-stockton",
};

const Locations = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash.toLowerCase();
    if (!hash) return;
    const slugHash = hash.replace("#", "");
    const cityMatch = CITY_LOCATIONS.find((city) => city.slug === slugHash);
    const redirectPath = cityMatch?.url ?? LEGACY_HASH_REDIRECTS[hash];
    if (redirectPath) navigate(redirectPath, { replace: true });
  }, [location.hash, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Bay Area Towing Locations | County & City Coverage Index</title>
        <meta
          name="description"
          content="Explore Heavy Tow Pro county hubs and dedicated city towing pages across Bay Area and Stockton coverage."
        />
        <link rel="canonical" href="https://heavytowpro.com/locations" />
      </Helmet>
      <main className="pt-20">
        <section className="py-14 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Bay Area Locations Index</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Select your county hub or city page for dedicated towing coverage, dispatch details, and direct conversion paths.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href={PRIMARY_DISPATCH_TEL_HREF}>
                <Phone className="w-5 h-5 mr-2" />
                24/7 Dispatch: {PRIMARY_DISPATCH_PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">County Hubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COUNTY_HUB_LOCATIONS.map((county) => (
                <Link key={county.slug} to={county.url} className="block bg-card border border-border rounded-xl p-6 hover:shadow-elevated">
                  <h3 className="text-xl font-semibold text-foreground">{county.city}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{county.heroSubhead}</p>
                  <p className="text-sm text-primary font-medium mt-3">{county.phone}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">All Cities We Serve</h2>
            <div className="space-y-10">
              {COUNTY_HUB_LOCATIONS.map((county) => (
                <div key={county.slug}>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{county.city}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {(CITIES_BY_COUNTY[county.slug] ?? []).map((city) => (
                      <Link key={city.slug} to={city.url} className="bg-card border border-border rounded-lg px-4 py-3 text-sm hover:border-primary transition-colors">
                        {city.city}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Official Dispatch Hubs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {DISPATCH_HUBS.map((hub) => (
                <article key={hub.city} className="bg-card border border-border rounded-xl p-4 flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{hub.city}</h3>
                  <p className="text-xs text-muted-foreground flex items-start gap-1">
                    <MapPin className="w-3 h-3 mt-0.5 shrink-0" /> {hub.address}
                  </p>
                  <a className="text-sm text-primary" href={telHrefFromNational(hub.phone)}>
                    {hub.phone}
                  </a>
                  {"url" in hub && hub.url ? (
                    <Button variant="secondary" size="sm" className="mt-auto w-full" asChild>
                      <Link to={hub.url}>Visit {hub.city} Hub Page</Link>
                    </Button>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Locations;

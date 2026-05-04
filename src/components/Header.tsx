import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Phone, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useHoverDelay } from "@/hooks/useHoverDelay";
import { resolveShellDispatchFromPathname } from "@/lib/shellDispatchPhone";
import { LOCATION_NAV_MODEL } from "@/data/locations/navModel";
import type { LocationData } from "@/data/locations/types";

const cityLinkClass =
  "block rounded px-2 py-1.5 text-sm text-muted-foreground outline-none transition-colors hover:bg-accent/50 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const locationsMegaCityLinkClass =
  "block rounded-md px-2 py-2 text-sm text-foreground/90 outline-none transition-colors hover:bg-accent/60 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card";

const megaMenuShellClass =
  "animate-fade-in rounded-xl border border-border bg-card shadow-elevated ring-1 ring-border/70";

interface LocationsMegaCountyEntry {
  key: string;
  label: string;
  badge: "County hub" | "Service area";
  hubUrl: string | null;
  cities: LocationData[];
}

function buildLocationsMegaCounties(): LocationsMegaCountyEntry[] {
  const regions: LocationsMegaCountyEntry[] = LOCATION_NAV_MODEL.regions.map((region) => ({
    key: region.hub.slug,
    label: region.hub.city,
    badge: "County hub",
    hubUrl: region.hub.url,
    cities: region.cities,
  }));
  const orphans: LocationsMegaCountyEntry[] = LOCATION_NAV_MODEL.orphanGroups.map((group) => ({
    key: group.countySlug,
    label: group.displayLabel,
    badge: "Service area",
    hubUrl: null,
    cities: group.cities,
  }));
  return [...regions, ...orphans];
}

const LOCATIONS_MEGA_COUNTIES = buildLocationsMegaCounties();

interface MegaMenuHelpColumnProps {
  title: string;
  headline: string;
  addressLine: string;
  phoneDisplay: string;
  phoneHref: string;
  layout?: "default" | "compact";
}

function MegaMenuHelpColumn({
  title,
  headline,
  addressLine,
  phoneDisplay,
  phoneHref,
  layout = "default",
}: MegaMenuHelpColumnProps) {
  const colClass =
    layout === "compact"
      ? "col-span-3 border-l border-border/80 pl-5 lg:pl-6"
      : "col-span-4 border-l border-border/80 pl-6 lg:pl-8";

  return (
    <div className={colClass}>
      <h3 className="mb-4 text-lg font-semibold tracking-tight text-foreground">{title}</h3>
      <div className="rounded-xl border border-primary/35 bg-primary/[0.07] p-4 shadow-[inset_0_1px_0_0_hsl(0_0%_100%/0.04)]">
        <p className="font-semibold text-foreground">{headline}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{addressLine}</p>
      </div>
      <Button variant="hero" className="mt-4 w-full" asChild>
        <a href={phoneHref} aria-label={`Call Heavy Haulers at ${phoneDisplay}`}>
          <Phone className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
          Call {phoneDisplay}
        </a>
      </Button>
    </div>
  );
}

const Header = () => {
  const { pathname } = useLocation();
  const { phoneDisplay: businessPhone, phoneHref: businessPhoneHref, addressLine: businessAddress } =
    resolveShellDispatchFromPathname(pathname);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const [locationsMegaCountyKey, setLocationsMegaCountyKey] = useState<string | null>(
    () => LOCATIONS_MEGA_COUNTIES[0]?.key ?? null
  );
  const servicesHover = useHoverDelay(() => setIsServicesOpen(true), () => setIsServicesOpen(false), { leaveDelay: 200 });
  const locationsHover = useHoverDelay(() => setIsLocationsOpen(true), () => setIsLocationsOpen(false), { leaveDelay: 300 });

  useEffect(() => {
    if (!isLocationsOpen) return;
    setLocationsMegaCountyKey((prev) => {
      const valid = prev != null && LOCATIONS_MEGA_COUNTIES.some((c) => c.key === prev);
      if (valid) return prev;
      return LOCATIONS_MEGA_COUNTIES[0]?.key ?? null;
    });
  }, [isLocationsOpen]);

  const activeLocationsCounty =
    LOCATIONS_MEGA_COUNTIES.find((c) => c.key === locationsMegaCountyKey) ?? LOCATIONS_MEGA_COUNTIES[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" title="Heavy Haulers Transport Co." aria-label="Heavy Haulers San Francisco homepage">
              <img
                src="/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png"
                alt="Heavy Haulers San Francisco professional towing company logo"
                className="h-10 w-auto"
                width={160}
                height={40}
                loading="eager"
                fetchPriority="high"
              />
            </Link>
          </div>

          <nav className="hidden items-center space-x-6 lg:flex" aria-label="Primary">
            <Link to="/" className="text-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-foreground transition-colors hover:text-primary">
              About Us
            </Link>

            <div
              className="relative"
              onMouseEnter={servicesHover.onMouseEnter}
              onMouseLeave={servicesHover.onMouseLeave}
            >
              <Link
                to="/services"
                className="flex items-center text-foreground transition-colors hover:text-primary"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                aria-controls="header-services-mega"
                id="header-services-trigger"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
              {isServicesOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2 pt-1">
                  <div
                    id="header-services-mega"
                    role="region"
                    aria-labelledby="header-services-trigger"
                    className={`w-screen max-w-4xl ${megaMenuShellClass}`}
                  >
                    <div className="grid grid-cols-12 gap-6 p-8">
                      <div className="col-span-4 space-y-4">
                        <h3 className="mb-4 text-lg font-semibold text-foreground">Service Categories</h3>
                        <div className="space-y-3">
                          <Link
                            to="/services/light-duty"
                            className="group flex items-start space-x-3 rounded-lg p-3 transition-colors hover:bg-accent"
                          >
                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                            <div>
                              <h4 className="font-medium text-foreground group-hover:text-primary">Light-Duty Towing</h4>
                              <p className="text-sm text-muted-foreground">Cars, motorcycles, luxury vehicles</p>
                            </div>
                          </Link>
                          <Link
                            to="/services/medium-duty"
                            className="group flex items-start space-x-3 rounded-lg p-3 transition-colors hover:bg-accent"
                          >
                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                            <div>
                              <h4 className="font-medium text-foreground group-hover:text-primary">Medium-Duty Towing</h4>
                              <p className="text-sm text-muted-foreground">Vans, box trucks, small RVs</p>
                            </div>
                          </Link>
                          <Link
                            to="/services/heavy-duty"
                            className="group flex items-start space-x-3 rounded-lg p-3 transition-colors hover:bg-accent"
                          >
                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-warning" />
                            <div>
                              <h4 className="font-medium text-foreground group-hover:text-primary">Heavy-Duty Hauling</h4>
                              <p className="text-sm text-muted-foreground">Commercial trucks, equipment, recovery</p>
                            </div>
                          </Link>
                        </div>
                      </div>

                      <div className="col-span-4 space-y-4">
                        <h3 className="mb-4 text-lg font-semibold text-foreground">Specialized Services</h3>
                        <div className="space-y-2">
                          <a
                            href="/services/light-duty#flatbed"
                            className="block rounded px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-primary"
                          >
                            Flatbed Tow Service
                          </a>
                          <a
                            href="/services/light-duty#motorcycle"
                            className="block rounded px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-primary"
                          >
                            Motorcycle Towing
                          </a>
                          <a
                            href="/services/light-duty#exotic"
                            className="block rounded px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-primary"
                          >
                            Luxury & Exotic Transport
                          </a>
                          <a
                            href="/services/light-duty#private-property"
                            className="block rounded px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-primary"
                          >
                            Private Property Removal
                          </a>
                          <a
                            href="/services/heavy-duty#equipment"
                            className="block rounded px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-primary"
                          >
                            Equipment & Machinery
                          </a>
                          <a
                            href="/services/heavy-duty#fleet"
                            className="block rounded px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/50 hover:text-primary"
                          >
                            Fleet & Commercial Accounts
                          </a>
                        </div>
                      </div>

                      <MegaMenuHelpColumn
                        title="Get Help Now"
                        headline="24/7 Emergency Service"
                        addressLine={businessAddress}
                        phoneDisplay={businessPhone}
                        phoneHref={businessPhoneHref}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={locationsHover.onMouseEnter}
              onMouseLeave={locationsHover.onMouseLeave}
            >
              <button
                type="button"
                className="flex items-center text-foreground transition-colors hover:text-primary"
                aria-label="Bay Area service locations menu"
                aria-expanded={isLocationsOpen}
                aria-haspopup="true"
                aria-controls="header-locations-mega"
                id="header-locations-trigger"
              >
                Bay Area Locations
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </button>
              {isLocationsOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-1 w-[min(100vw-1rem,72rem)] max-w-[72rem] -translate-x-1/2 pt-1">
                  <div
                    id="header-locations-mega"
                    role="region"
                    aria-labelledby="header-locations-trigger"
                    className={megaMenuShellClass}
                  >
                    <div className="grid grid-cols-12 gap-7 p-7 lg:gap-8 lg:p-8">
                      <div className="col-span-12 flex flex-wrap items-center justify-between gap-3 border-b border-border/90 pb-4">
                        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                          County hubs and city pages — same dispatch network.
                        </p>
                        <Link
                          to="/locations"
                          className="inline-flex shrink-0 items-center rounded-full border border-primary/45 bg-primary/[0.08] px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/[0.14] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                        >
                          View all locations
                        </Link>
                      </div>

                      <div className="col-span-9 grid min-w-0 grid-cols-9 gap-0">
                        <div className="col-span-5 min-w-0 border-r border-border/80 pr-4" aria-label="Bay Area counties">
                          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            Select a county
                          </p>
                          <ul className="space-y-1">
                            {LOCATIONS_MEGA_COUNTIES.map((entry) => {
                              const isActive = entry.key === locationsMegaCountyKey;
                              return (
                                <li key={entry.key}>
                                  <button
                                    type="button"
                                    id={`header-locations-county-${entry.key}`}
                                    aria-controls="header-locations-mega-detail"
                                    aria-current={isActive ? "true" : undefined}
                                    onMouseEnter={() => setLocationsMegaCountyKey(entry.key)}
                                    onFocus={() => setLocationsMegaCountyKey(entry.key)}
                                    onClick={() => setLocationsMegaCountyKey(entry.key)}
                                    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
                                      isActive
                                        ? "bg-accent/70 text-foreground ring-1 ring-primary/40"
                                        : "text-foreground hover:bg-accent/45"
                                    }`}
                                  >
                                    <span className="min-w-0 flex-1 leading-snug">
                                      <span className="font-semibold">{entry.label}</span>
                                      <span className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                                        <span className="inline-flex rounded-full border border-border/70 bg-muted/30 px-1.5 py-px text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                                          {entry.badge}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                          {entry.cities.length} {entry.cities.length === 1 ? "city" : "cities"}
                                        </span>
                                      </span>
                                    </span>
                                    <ChevronRight
                                      className={`h-4 w-4 shrink-0 text-primary ${isActive ? "opacity-100" : "opacity-40"}`}
                                      aria-hidden="true"
                                    />
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div
                          id="header-locations-mega-detail"
                          role="region"
                          aria-labelledby="header-locations-detail-heading"
                          className="col-span-4 min-w-0 pl-5"
                        >
                          {activeLocationsCounty ? (
                            <>
                              <div className="mb-4 border-b border-border/80 pb-3">
                                <h4
                                  id="header-locations-detail-heading"
                                  className="text-base font-semibold tracking-tight text-foreground"
                                >
                                  {activeLocationsCounty.label}
                                </h4>
                                {activeLocationsCounty.hubUrl ? (
                                  <Link
                                    to={activeLocationsCounty.hubUrl}
                                    className="mt-2 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
                                  >
                                    County overview
                                  </Link>
                                ) : (
                                  <p className="mt-2 text-sm text-muted-foreground">City pages in this service area.</p>
                                )}
                              </div>
                              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                                Cities
                              </p>
                              <div className="grid grid-cols-2 gap-2 xl:grid-cols-3">
                                {activeLocationsCounty.cities.map((city) => (
                                  <Link key={city.slug} to={city.url} className={locationsMegaCityLinkClass}>
                                    {city.city}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : null}
                        </div>
                      </div>

                      <MegaMenuHelpColumn
                        title="Need help now?"
                        headline="24/7 Bay Area coverage"
                        addressLine={businessAddress}
                        phoneDisplay={businessPhone}
                        phoneHref={businessPhoneHref}
                        layout="compact"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/blog" className="text-foreground transition-colors hover:text-primary">
              Blog
            </Link>
            <Link to="/get-a-quote" className="text-foreground transition-colors hover:text-primary">
              Get a Quote
            </Link>
            <Link to="/contact" className="text-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>

          <div className="hidden items-center space-x-4 lg:flex">
            <Button variant="hero" size="default" asChild>
              <a href={businessPhoneHref} aria-label={`Call Heavy Haulers emergency towing at ${businessPhone}`}>
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="p-2 text-foreground hover:text-primary lg:hidden"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="flex w-80 max-w-[85vw] flex-col p-0">
              <SheetHeader className="shrink-0 border-b border-border p-6">
                <SheetTitle className="flex items-center space-x-3">
                  <img
                    src="/lovable-uploads/a43ad238-af3b-47a8-962f-32c9da2fc727.png"
                    alt="Heavy Haulers Transport Co."
                    className="h-8 w-auto"
                    width={128}
                    height={32}
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="flex min-h-0 flex-1 flex-col">
                <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto px-6 py-4" aria-label="Mobile primary">
                  <Link to="/" className="block py-2 text-foreground transition-colors hover:text-primary">
                    Home
                  </Link>
                  <Link to="/about" className="block py-2 text-foreground transition-colors hover:text-primary">
                    About Us
                  </Link>

                  <div className="space-y-1 pt-1">
                    <Link to="/services" className="block py-2 font-medium text-foreground transition-colors hover:text-primary">
                      Services
                    </Link>
                    <div className="ml-3 space-y-1 border-l border-border pl-4">
                      <Link
                        to="/services/light-duty"
                        className="block py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Light-Duty Towing
                      </Link>
                      <Link
                        to="/services/medium-duty"
                        className="block py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Medium-Duty Towing
                      </Link>
                      <Link
                        to="/services/heavy-duty"
                        className="block py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        Heavy-Duty Hauling
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-1 border-t border-border/80 pt-3">
                    <Link to="/locations" className="block py-2 font-medium text-foreground transition-colors hover:text-primary">
                      All locations index
                    </Link>
                    <p className="pb-1 text-xs text-muted-foreground">Expand a county for hub + city pages.</p>
                    {LOCATION_NAV_MODEL.regions.map((region) => (
                      <Collapsible key={region.hub.slug} className="border-b border-border/60 last:border-b-0">
                        <CollapsibleTrigger className="flex w-full items-center justify-between gap-2 rounded-md py-2.5 text-left text-sm font-medium text-foreground outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&[data-state=open]>svg]:rotate-180">
                          <span className="leading-snug">{region.hub.city}</span>
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="space-y-1 border-l border-border/80 pb-3 pl-3">
                            <Link
                              to={region.hub.url}
                              className="block py-1 text-sm font-medium text-primary transition-colors hover:underline"
                            >
                              County overview
                            </Link>
                            {region.cities.map((city) => (
                              <Link
                                key={city.slug}
                                to={city.url}
                                className="block py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                              >
                                {city.city}
                              </Link>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                    {LOCATION_NAV_MODEL.orphanGroups.map((group) => (
                      <Collapsible key={group.countySlug} className="border-b border-border/60 last:border-b-0">
                        <CollapsibleTrigger className="flex w-full items-center justify-between gap-2 rounded-md py-2.5 text-left text-sm font-medium text-foreground outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&[data-state=open]>svg]:rotate-180">
                          <span className="leading-snug">{group.displayLabel}</span>
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" aria-hidden="true" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="space-y-1 border-l border-border/80 pb-3 pl-3">
                            {group.cities.map((city) => (
                              <Link
                                key={city.slug}
                                to={city.url}
                                className="block py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                              >
                                {city.city}
                              </Link>
                            ))}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>

                  <Link to="/blog" className="block py-2 text-foreground transition-colors hover:text-primary">
                    Blog
                  </Link>
                  <Link to="/get-a-quote" className="block py-2 text-foreground transition-colors hover:text-primary">
                    Get a Quote
                  </Link>
                  <Link to="/contact" className="block py-2 text-foreground transition-colors hover:text-primary">
                    Contact
                  </Link>
                </nav>

                <div className="shrink-0 space-y-4 border-t border-border p-6">
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-1 font-medium text-foreground">24/7 Emergency Service</p>
                    <p>{businessAddress}</p>
                  </div>
                  <Button variant="hero" size="default" className="w-full" asChild>
                    <a href={businessPhoneHref}>
                      <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                      Call {businessPhone}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Phone, CheckCircle, MapPin, Clock, Building2, Camera } from "lucide-react";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import { SERVICE_EXTRAS } from "@/data/commercialServiceExtras";
import { Button } from "@/components/ui/button";
import { COMMERCIAL_SERVICES, CORRIDORS, type CommercialService } from "@/data/commercialServices";
import { SCREENSHOT_DISPATCH_HUBS, PRIMARY_DISPATCH_PHONE_DISPLAY, PRIMARY_DISPATCH_TEL_HREF, PRIMARY_DISPATCH_E164 } from "@/data/screenshotDispatchHubs";

const SITE = "https://heavytowpro.com";

export default function CommercialServicePage({ service: s }: { service: CommercialService }) {
  const url = `${SITE}${s.path}`;
  const x = SERVICE_EXTRAS[s.slug];
  const faqs = [...s.faqs, ...(x?.faqs ?? [])];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.h1,
      serviceType: s.navLabel,
      url,
      description: s.metaDescription,
      areaServed: "San Francisco Bay Area, CA",
      provider: { "@type": "TowingService", name: "Heavy Haulers", telephone: PRIMARY_DISPATCH_E164, url: SITE },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
        { "@type": "ListItem", position: 3, name: s.navLabel, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  const others = COMMERCIAL_SERVICES.filter((o) => o.slug !== s.slug);

  return (
    <main className="bg-background">
      <Helmet>
        <title>{s.metaTitle}</title>
        <meta name="description" content={s.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={s.metaTitle} />
        <meta property="og:description" content={s.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative overflow-hidden">
        <img src={s.heroImage.src} alt={s.heroImage.alt} width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="relative container mx-auto px-4 py-20 md:py-28 max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link> <span className="mx-1">/</span>
            <Link to="/services" className="hover:text-primary">Services</Link> <span className="mx-1">/</span>
            <span className="text-foreground">{s.navLabel}</span>
          </nav>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">{s.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground max-w-3xl leading-tight">{s.h1}</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{s.intro[0]}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href={PRIMARY_DISPATCH_TEL_HREF}><Phone className="w-5 h-5 mr-2" />Call {PRIMARY_DISPATCH_PHONE_DISPLAY}</a>
            </Button>
            <Button variant="outline" size="xl" asChild><Link to="/get-a-quote">Get a Free Quote</Link></Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/90">
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" />Dispatch answers 24/7</li>
            <li className="flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" />{SCREENSHOT_DISPATCH_HUBS.length} dispatch hubs, Brisbane to Stockton</li>
            <li className="flex items-center gap-2"><Camera className="w-4 h-4 text-primary" />Photos on this site are our own jobs</li>
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-start">
          <div>
            {s.intro.slice(1).map((p) => <p key={p} className="text-lg text-muted-foreground leading-relaxed mb-6">{p}</p>)}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">{s.whatWeTow.title}</h2>
            <ul className="space-y-3">
              {s.whatWeTow.items.map((i) => (
                <li key={i} className="flex gap-3 text-foreground"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />{i}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border">
            <img src={s.sideImage.src} alt={s.sideImage.alt} width={1600} height={1200} loading="lazy" className="w-full aspect-[4/3] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">How a call works</h2>
          <ol className="grid md:grid-cols-2 gap-6">
            {s.steps.map((st, i) => (
              <li key={st.title} className="bg-card border border-border rounded-2xl p-6">
                <span className="text-primary font-bold text-sm">Step {i + 1}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{st.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{st.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">The equipment we send</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {s.equipment.map((e) => (
              <article key={e.title} className="border-t-2 border-primary bg-card rounded-b-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{e.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {x && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">{x.assessTitle}</h2>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-10">{x.assessIntro}</p>
            <div className="grid md:grid-cols-2 gap-6">
              {x.assess.map((a) => (
                <div key={a.title} className="border-l-2 border-primary pl-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a.body}</p>
                </div>
              ))}
            </div>
            {x.photoPrompt && (
              <div className="mt-10 rounded-2xl border border-border bg-card p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                <div>
                  <p className="font-semibold text-foreground">Easier to show than explain?</p>
                  <p className="text-muted-foreground text-sm mt-1">Attach a few photos of how the truck is sitting to a quote request. It helps dispatch pick the right equipment.</p>
                </div>
                <Button variant="outline" asChild><Link to="/get-a-quote"><Camera className="w-4 h-4 mr-2" />Send us photos</Link></Button>
              </div>
            )}
          </div>
        </section>
      )}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Freight roads we cover</h2>
            <p className="text-muted-foreground mb-6">{s.corridorsIntro}</p>
            <ul className="space-y-4">
              {CORRIDORS.map((c) => (
                <li key={c.name}><span className="font-semibold text-foreground">{c.name}</span><span className="block text-sm text-muted-foreground">{c.note}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our dispatch hubs</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {SCREENSHOT_DISPATCH_HUBS.map((h) => (
                <li key={h.slug}>
                  <Link to={h.path} className="block bg-card border border-border rounded-xl p-4 hover:border-primary transition-colors">
                    <span className="flex items-center gap-2 font-semibold text-foreground"><MapPin className="w-4 h-4 text-primary" />{h.city}</span>
                    <span className="block text-xs text-muted-foreground mt-1">{h.addressLine}</span>
                    <span className="block text-sm text-primary mt-1">{h.phoneDisplay}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {x && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Where we run these calls most</h2>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-8">{x.citiesIntro}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {x.cities.map((ct) => (
                <Link key={ct.path} to={ct.path} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
                  {s.navLabel} in {ct.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl border border-primary/40 bg-card p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Have this ready when you call</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {s.readyChecklist.map((c) => <li key={c} className="flex gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Common questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <article key={f.q} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Related services and guides</h2>
          <div className="flex flex-wrap gap-3">
            {[...s.related, ...others.map((o) => ({ label: o.navLabel, href: o.path }))]
              .filter((v, i, a) => a.findIndex((x) => x.href === v.href) === i)
              .map((r) => (
                <Link key={r.href} to={r.href} className="rounded-full border border-border px-4 py-2 text-sm text-foreground hover:border-primary hover:text-primary transition-colors">{r.label}</Link>
              ))}
          </div>
        </div>
      </section>
      <StickyMobileCTA gtagCampaign="commercial" />
    </main>
  );
}

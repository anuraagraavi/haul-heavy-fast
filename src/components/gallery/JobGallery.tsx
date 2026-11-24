import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Phone, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { GALLERY_CATEGORIES, GALLERY_IMAGES, type GalleryCategory } from "@/data/galleryImages";
import { PRIMARY_DISPATCH_PHONE_DISPLAY, PRIMARY_DISPATCH_TEL_HREF } from "@/data/screenshotDispatchHubs";
import { cn } from "@/lib/utils";

const PREVIEW_COUNT = 8;

export default function JobGallery() {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((i) => i.category === filter)),
    [filter],
  );
  const visible = expanded ? filtered : filtered.slice(0, PREVIEW_COUNT);

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const current = open !== null ? filtered[open] : null;

  return (
    <section className="py-16 md:py-20 bg-background border-t border-border" aria-labelledby="job-gallery-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Real Jobs · Real Crew</p>
          <h2 id="job-gallery-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Unedited photos from recent H&amp;H jobs across the Bay Area: crane rigging, heavy hauls, recoveries and flatbed tows.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Filter photos">
          {GALLERY_CATEGORIES.map((c) => {
            const count = c.id === "all" ? GALLERY_IMAGES.length : GALLERY_IMAGES.filter((i) => i.category === c.id).length;
            const active = filter === c.id;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={active}
                onClick={() => { setFilter(c.id); setExpanded(false); }}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-primary/60",
                )}
              >
                {c.label} <span className={cn("ml-1 text-xs", active ? "opacity-80" : "opacity-60")}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {visible.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setOpen(idx)}
              className="group relative mb-3 md:mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-border bg-muted/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={`Open photo: ${img.caption}`}
            >
              <img
                src={img.sm}
                alt={img.alt}
                width={img.w}
                height={img.h}
                loading="lazy"
                decoding="async"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-3 pt-10 text-left text-xs md:text-sm font-medium text-foreground opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                {img.caption}
              </span>
            </button>
          ))}
        </div>

        {filtered.length > PREVIEW_COUNT && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded((e) => !e)}
              className="px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {expanded ? "Show fewer" : `View all ${filtered.length} photos`}
            </button>
          </div>
        )}
      </div>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-6xl w-[96vw] p-0 bg-background/95 border-border overflow-hidden [&>button]:hidden">
          {current && (
            <div
              onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
                touchX.current = null;
              }}
            >
              <DialogTitle className="sr-only">{current.caption}</DialogTitle>
              <div className="relative flex items-center justify-center bg-black">
                <img src={current.lg} alt={current.alt} className="max-h-[78vh] w-auto max-w-full object-contain" />
                <button onClick={() => step(-1)} aria-label="Previous photo" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground hover:bg-primary hover:text-primary-foreground">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={() => step(1)} aria-label="Next photo" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground hover:bg-primary hover:text-primary-foreground">
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button onClick={() => setOpen(null)} aria-label="Close" className="absolute right-2 top-2 rounded-full bg-background/70 p-2 text-foreground hover:bg-primary hover:text-primary-foreground">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4">
                <p className="text-sm text-foreground">
                  {current.caption} <span className="text-muted-foreground ml-2">{(open ?? 0) + 1} / {filtered.length}</span>
                </p>
                <a href={PRIMARY_DISPATCH_TEL_HREF} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90">
                  <Phone className="w-4 h-4" /> Call {PRIMARY_DISPATCH_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

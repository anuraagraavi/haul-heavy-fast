import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { isGalleryExcluded } from "@/data/galleryImages";

const JobGallery = lazy(() => import("./JobGallery"));

/** Site-wide job gallery above the footer; code and images load only when scrolled near. */
export default function GlobalJobGallery({ inline = false }: { inline?: boolean }) {
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    if (near || !ref.current) return;
    const io = new IntersectionObserver((e) => e[0].isIntersecting && setNear(true), { rootMargin: "600px" });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [near, pathname]);

  // Homepage shows the gallery inline (above "Why Choose"), not above the footer.
  if (!inline && (pathname === "/" || isGalleryExcluded(pathname))) return null;
  return (
    <div ref={ref} id={inline ? "job-gallery-home" : "job-gallery"} style={{ minHeight: near ? undefined : 1 }}>
      {near && (
        <Suspense fallback={null}>
          <JobGallery />
        </Suspense>
      )}
    </div>
  );
}

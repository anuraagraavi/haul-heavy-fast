import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalJobGallery from "@/components/gallery/GlobalJobGallery";
import PrerenderTrigger from "@/components/PrerenderTrigger";

/**
 * Eager chrome: Header/Footer render immediately; route chunks load inside Suspense.
 * Null fallback keeps the previous route visible while the next lazy chunk loads (no skeleton flash).
 */
export default function AppShell() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <PrerenderTrigger />
        <Outlet />
        <GlobalJobGallery />
      </Suspense>
      <Footer />
    </>
  );
}

import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function MainFallback() {
  return (
    <main className="min-h-[40vh] px-4 py-8" aria-busy="true" aria-label="Loading page content">
      <div className="container mx-auto max-w-4xl space-y-4 animate-pulse">
        <div className="h-8 w-48 rounded-md bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-[92%] rounded bg-muted" />
        <div className="h-40 w-full rounded-lg bg-muted" />
      </div>
    </main>
  );
}

/**
 * Eager chrome: Header/Footer render immediately; route chunks load inside Suspense.
 */
export default function AppShell() {
  return (
    <>
      <Header />
      <Suspense fallback={<MainFallback />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

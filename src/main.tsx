import { createRoot } from 'react-dom/client'
import { Helmet, HelmetProvider } from "react-helmet-async";
import App from './App.tsx'
import './index.css'

declare global {
  interface Window {
    __PRERENDER_INJECTED?: {
      diagnostics?: boolean;
    };
  }
}

if (window.__PRERENDER_INJECTED?.diagnostics) {
  window.addEventListener("error", (event) => {
    console.error(
      `[prerender-runtime] error: ${event.message} @ ${event.filename}:${event.lineno}:${event.colno}`,
    );
  });
  window.addEventListener("unhandledrejection", (event) => {
    console.error("[prerender-runtime] unhandledrejection:", event.reason);
  });
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet prioritizeSeoTags />
    <App />
  </HelmetProvider>
);

if (typeof window !== "undefined") {
  const runWhenIdle = (cb: () => void, timeout: number) => {
    const ric = window.requestIdleCallback;
    if (typeof ric === "function") {
      ric(cb, { timeout });
    } else {
      window.setTimeout(cb, Math.min(timeout, 2000));
    }
  };
  runWhenIdle(() => {
    void import("./pages/Services");
    void import("./pages/Locations");
    void import("./pages/GetQuote");
  }, 4000);
}

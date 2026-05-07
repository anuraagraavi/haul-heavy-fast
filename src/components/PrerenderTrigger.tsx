import { useEffect } from "react";

/**
 * Dispatches a deterministic signal for Puppeteer prerendering after
 * route render + Helmet head mutations have had time to flush.
 */
export default function PrerenderTrigger() {
  useEffect(() => {
    const dispatchReady = () => {
      document.dispatchEvent(new Event("prerender-ready"));
    };

    const timer = window.setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          dispatchReady();
        });
      });
    }, 50);

    // Bounded retries guard against late listener attachment in prerender plugin.
    const interval = window.setInterval(dispatchReady, 1000);
    const stopRetries = window.setTimeout(() => {
      window.clearInterval(interval);
    }, 20000);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(interval);
      window.clearTimeout(stopRetries);
    };
  }, []);

  return null;
}

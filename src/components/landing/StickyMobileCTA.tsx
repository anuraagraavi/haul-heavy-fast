import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { PRIMARY_DISPATCH_PHONE_DISPLAY, PRIMARY_DISPATCH_TEL_HREF } from "@/data/screenshotDispatchHubs";

const DEFAULT_PHONE_LINK = PRIMARY_DISPATCH_TEL_HREF;
const DEFAULT_PHONE_DISPLAY = PRIMARY_DISPATCH_PHONE_DISPLAY;
const GTAG_ID = "AW-17927335103";
const HEAVY_PATH = "/towing/heavy-duty-towing-bay-area";

const LANDING_PATHS = [
  "/towing/bay-area-flatbed-emergency-towing-24-7",
  "/towing-services",
  "/towing/heavy-duty-towing-bay-area",
];

export interface StickyMobileCTAProps {
  phoneDisplay?: string;
  phoneHref?: string;
  /** When set, used for gtag campaign instead of pathname-based C1/C2. */
  gtagCampaign?: string;
}

const StickyMobileCTA = ({
  phoneDisplay = DEFAULT_PHONE_DISPLAY,
  phoneHref = DEFAULT_PHONE_LINK,
  gtagCampaign: gtagCampaignOverride,
}: StickyMobileCTAProps) => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const isLanding = LANDING_PATHS.includes(pathname);

  useEffect(() => {
    const isMobile = () => window.innerWidth < 768;
    const update = () => {
      if (!isMobile()) {
        setIsVisible(false);
        return;
      }
      if (isLanding) {
        setIsVisible(true);
        return;
      }
      setIsVisible(window.scrollY > 300);
    };
    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isLanding]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-in slide-in-from-bottom duration-300">
      <a
        href={phoneHref}
        className="flex items-center justify-center gap-3 w-full py-4 px-4 bg-gradient-primary text-white font-bold text-lg shadow-2xl hover:opacity-95 active:opacity-90 transition-all"
        aria-label={`Tap to call ${phoneDisplay}`}
        onClick={() => {
          if (typeof window !== "undefined") {
            const campaign =
              gtagCampaignOverride ?? (pathname === HEAVY_PATH ? "C2" : "C1");
            window.gtag?.("event", "phone_click", {
              send_to: GTAG_ID,
              campaign,
              source: "sticky_mobile_cta",
            });
          }
        }}
      >
        <Phone className="w-5 h-5 shrink-0" />
        <span>TAP TO CALL — {phoneDisplay}</span>
      </a>
    </div>
  );
};

export default StickyMobileCTA;

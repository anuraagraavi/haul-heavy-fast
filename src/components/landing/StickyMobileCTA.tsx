import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";

const PHONE_LINK = "tel:+16508812400";
const PHONE_DISPLAY = "650-881-2400";

const LANDING_PATHS = ["/towing/bay-area-flatbed-emergency-towing-24-7", "/towing-services"];

const StickyMobileCTA = () => {
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
        href={PHONE_LINK}
        className="flex items-center justify-center gap-3 w-full py-4 px-4 bg-gradient-primary text-white font-bold text-lg shadow-2xl hover:opacity-95 active:opacity-90 transition-all"
        aria-label={`Tap to call ${PHONE_DISPLAY}`}
      >
        <Phone className="w-5 h-5 shrink-0" />
        <span>TAP TO CALL — {PHONE_DISPLAY}</span>
      </a>
    </div>
  );
};

export default StickyMobileCTA;

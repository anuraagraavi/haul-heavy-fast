const PHONE_CLICK_SEND_TO = "AW-17927335103/fOj4CJvUtqkcEL_ZteRC";

type PhoneClickMetadata = Record<string, string | number | boolean | undefined>;

const getPathname = (): string => {
  if (typeof window === "undefined") {
    return "unknown_path";
  }
  return window.location.pathname || "/";
};

export const trackPhoneClickConversion = (metadata: PhoneClickMetadata = {}): void => {
  if (typeof window === "undefined" || !window.gtag) {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: PHONE_CLICK_SEND_TO,
    value: 1.0,
    currency: "USD",
    ...metadata,
  });
};

export const installTelLinkConversionTracking = (): void => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element | null;
      const phoneLink = target?.closest('a[href^="tel:"]');
      if (!phoneLink) {
        return;
      }

      const href = phoneLink.getAttribute("href") ?? "";
      trackPhoneClickConversion({
        source: "tel_link",
        page_path: getPathname(),
        phone_href: href,
      });
    },
    true,
  );
};


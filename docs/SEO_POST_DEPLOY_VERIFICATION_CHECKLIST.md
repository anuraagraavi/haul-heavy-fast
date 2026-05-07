# SEO Post-Deploy Verification Checklist

This checklist is used immediately after deploying the SEO and conversion fixes.

## 1) Tag Assistant validation

- Open Tag Assistant and connect to `https://heavytowpro.com/`.
- Validate at least one Google tag is detected.
- Test these routes:
  - `/`
  - `/towing/bay-area-flatbed-emergency-towing-24-7`
  - `/towing-san-mateo`
  - `/blog/box-truck-towing-san-francisco`
- Submit contact form and quote form once each.
- Confirm conversion signal is detected for:
  - `AW-17927335103/moPiCPOh-_kbEL_ZteRC`

## 2) Search Console validation

- Re-submit `https://heavytowpro.com/sitemap.xml`.
- Request indexing for:
  - `/`
  - `/towing/bay-area-flatbed-emergency-towing-24-7`
  - `/towing-san-francisco`
  - `/towing-oakland`
  - `/blog`
- Track discovered pages and crawl status daily for 14 days.

## 3) Performance validation

- Re-run PageSpeed Insights (mobile + desktop) on:
  - `/`
  - `/towing/bay-area-flatbed-emergency-towing-24-7`
  - `/towing-san-mateo`
  - `/blog/box-truck-towing-san-francisco`
- Target thresholds:
  - LCP < 2.5s
  - CLS < 0.1
  - Mobile score >= 70

## 4) Analytics monitoring (14-day window)

- In GA4, monitor:
  - Organic sessions
  - Landing pages from organic
  - Form conversions from organic
- In Search Console, monitor:
  - Impressions
  - CTR
  - Average position
  - Indexed pages trend


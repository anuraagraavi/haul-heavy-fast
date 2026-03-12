
## Complete Google Tag Audit — All Pages Including Landing Pages

### What I found across all files

**Files with phone_click events (tracking EXISTS):**
- `LandingHero.tsx` — 2 events (phone number link + CALL NOW button) — C1, no `send_to`
- `HeavyLandingHero.tsx` — 2 events (phone number link + CALL NOW button) — C2, no `send_to`
- `FinalCTA.tsx` — 1 event (CALL NOW button) — C1, no `send_to`

**Files with phone links but NO tracking:**
- `LandingHeavyDuty.tsx` — 2 untracked `tel:` links (Emergency Dispatch card + Final CTA)
- `StickyMobileCTA.tsx` — sticky mobile TAP TO CALL button, no tracking
- `PricingSection.tsx` — phone link, no tracking
- `ProcessSteps.tsx` — 2 phone links, no tracking
- `CoverageMap.tsx` — phone link, no tracking
- `Contact.tsx` — multiple phone links (4 dispatch areas), no tracking

**Form submissions with NO gtag:**
- `Contact.tsx` (`handleSubmit`) — navigates to `/thank-you?type=contact`, no event fired
- `GetQuote.tsx` (`handleSubmit`) — navigates to `/thank-you?type=quote`, no event fired
- `QuickQuoteForm.tsx` — fires `quote_submit` but missing `send_to`

**ThankYou.tsx** — zero gtag calls; this is the conversion confirmation page — must fire a conversion event on mount

---

## Complete Fix Plan (Expanded to All Landing Pages)

### Files to change — 9 total

**1. `src/pages/ThankYou.tsx`** (HIGHEST PRIORITY)
Add `useEffect` on mount that fires:
- `gtag('event', 'conversion', { send_to: 'AW-17927335103', value: 1.0, currency: 'USD' })` — this is what Google Ads actually counts
- A descriptive event based on `type` query param (`quote_submit` or `contact_submit`) for GA4 reporting
- Phone click tracking on the "Call 650-881-2400" button

**2. `src/pages/Contact.tsx`**
Add gtag call in `handleSubmit` before `navigate()`:
```ts
gtag('event', 'contact_submit', { send_to: 'AW-17927335103', source: 'contact_page' })
```
Also add `phone_click` tracking to all 4 dispatch area phone links.

**3. `src/pages/GetQuote.tsx`**
Add gtag call in `handleSubmit` before `navigate()`:
```ts
gtag('event', 'quote_submit', { send_to: 'AW-17927335103', source: 'get_quote_page' })
```

**4. `src/components/landing/QuickQuoteForm.tsx`**
Add `send_to: 'AW-17927335103'` to the existing `quote_submit` event.

**5. `src/components/landing/LandingHero.tsx`**
Add `send_to: 'AW-17927335103'` to both existing `phone_click` events.

**6. `src/components/landing/HeavyLandingHero.tsx`**
Add `send_to: 'AW-17927335103'` to both existing `phone_click` events.

**7. `src/components/landing/FinalCTA.tsx`**
Add `send_to: 'AW-17927335103'` to the existing `phone_click` event.

**8. `src/pages/LandingHeavyDuty.tsx`** (the `/towing/heavy-duty-towing-bay-area` page)
Add `phone_click` tracking to both untracked `tel:` links:
- Emergency Dispatch card phone button (line 753)
- `FinalHeavyCTASection` call button (line 856)
Both will use `campaign: "C2", send_to: 'AW-17927335103'`.

**9. `src/components/landing/StickyMobileCTA.tsx`** (shown on BOTH landing pages)
Add `onClick` gtag `phone_click` event — this sticky bar appears on `/towing/heavy-duty-towing-bay-area` and `/towing/bay-area-flatbed-emergency-towing-24-7`. Use dynamic campaign based on pathname (C1 for light/medium, C2 for heavy).

---

### Tracking gaps left intentionally untouched
`PricingSection.tsx`, `ProcessSteps.tsx`, `CoverageMap.tsx` — internal section links on the landing page; the hero and sticky CTA already cover phone call attribution on these pages, and adding tracking to every internal section link risks event spam/duplicates in the ads dashboard.

---

### Important note on conversion label
The plan will add `send_to: 'AW-17927335103'` (account ID only) and a clear `// TODO: Add your conversion label` comment on the ThankYou page conversion event. The full `send_to` for conversions should be `AW-17927335103/YOUR_CONVERSION_LABEL`. The label is found in Google Ads → Goals → Conversions. Without it, Google Ads can't attribute a dollar value but it will still record the event.

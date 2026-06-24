# Phase 10 Source Pack — Commercial Capstone + Stockton Hub

**Deploy date:** 2026-06-24  
**Posts:** `stockton-towing-dispatch-checklist` (ship first), `commercial-towing-redwood-city-seaport`

## GSC keyword targets

| Query | Impressions (Jun 24 export) | Position | Use |
|-------|---------------------------:|---------:|-----|
| towing stockton | 104 | — | Stockton post FAQ + secondary |
| towing stockton ca | 43 | — | Stockton post meta + FAQ |
| stockton towing | 36 | — | Stockton post secondary |
| semi towing near me | 91 | 53 | Stockton heavy-duty FAQ |
| tow yards stockton | 11 | — | Stockton FAQ |
| towing redwood city | 33 | 1.5 | Seaport post secondary |
| redwood city towing | 10 | 2.3 | Seaport post FAQ |
| heavy duty towing | 148 | 52 | Stockton contextual link |

## Official sources — Port of Redwood City

- [Port of Redwood City](https://www.redwoodcityport.com/)
  - Only deep-water port in the South San Francisco Bay
  - ~120 acres industrial waterfront at 675 Seaport Blvd, Redwood City CA 94063
  - Direct US-101 and Union Pacific rail access; five wharves
  - Tenants include Cemex, Sims Metal (bulk/scrap operations)
- [Port Tariff 8 (maritime)](https://www.redwoodcityport.com/tariff-8)
  - Gate, escort, and TWIC requirements for secured wharf zones

## Official sources — Stockton corridors

- [Caltrans District 10](https://dot.ca.gov/caltrans-near-me/district-10) — San Joaquin County freeways
- [511 Northern California](https://511.org) — freeway conditions
- [FMCSA CMV definition](https://www.fmcsa.dot.gov/regulations/cmv/definition-commercial-motor-vehicle) — 10,001+ lb GVWR/GCWR
- Corridor context: I-5 (north–south freight), CA-99 (ag/port traffic), CA-4 (Contra Costa connector)
- Dense interchange zone: I-5 / CA-99 / SR-120 near Manteca and Charter Way

## Meta CTR notes (old → new)

| Slug | Old metaDescription | New hook |
|------|---------------------|----------|
| stockton-towing-dispatch-checklist | Generic Hwy 4 | I-5 + CA-99 corridors, tow yards, fleet billing |
| commercial-towing-redwood-city-seaport | Generic port access | 675 Seaport Blvd, TWIC, US-101 staging |

## Inbound links

- `semi-truck-breakdown-highway-guide` → Stockton dispatch checklist (dispatch-comms section)
- `construction-dump-truck-roll-off-recovery-bay-area` → Redwood City Seaport guide (equipment-class section)
- Existing: `stocktonCity.ts` / `peninsula.ts` relatedGuides on city pages

## Conversion paths

- `/services/heavy-duty` — Stockton Class 7–8 default
- `/towing-stockton` — Central Valley city hub
- `/services/medium-duty` — Seaport box trucks and fleet vans
- `/towing-redwood-city` — Peninsula city hub
- 916-701-2200 — Stockton dispatch hub (`screenshotDispatchHubs.ts`)
- 650-881-2400 — Peninsula dispatch (Seaport)

## Cross-links (outbound)

- Stockton → `semi-truck-breakdown-highway-guide`, `delivery-van-towing-concord-ca`, `dot-out-of-service-weight-station-bay-area`
- Seaport → `commercial-vehicle-urban-recovery`, `construction-dump-truck-roll-off-recovery-bay-area`, `us-101-peninsula-freeway-breakdown-guide`

## Post-deploy GSC

1. URL Inspection — **Stockton first** (P0 demand cluster)
2. URL Inspection — Redwood City Seaport second

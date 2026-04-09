

## Updated Plan: Dispatch Hub Changes (7 files)

The key change from the previous plan: **San Mateo hub stays**. Redwood City is added as a **new, independent hub** alongside it.

### Data Changes (`src/data/coverage.ts`)

| Hub | Action | Address | Phone |
|---|---|---|---|
| Brisbane | UPDATE | 308 Industrial Way | 415-800-3800 |
| San Mateo | KEEP | 403 1st Avenue | 650-881-2400 |
| Redwood City | ADD | 1320 Marshall St | 650-881-2400 |
| Concord | ADD | 4075 Folsom Ct | 925-888-2400 |
| San Leandro | KEEP | unchanged | unchanged |
| Hayward | KEEP | unchanged | unchanged |
| San Jose | KEEP | unchanged | unchanged |
| Stockton | KEEP | unchanged | unchanged |

Total hubs: 6 → 8

### County Phone Routing Updates
- San Francisco County: 650-881-2400 → **415-800-3800** (Brisbane hub)
- Contra Costa County: 650-881-2400 → **925-888-2400** (Concord hub)
- All others unchanged

### Files to Change

1. **`src/data/coverage.ts`** — Update Brisbane address/phone, add Concord + Redwood City hubs, update SF and Contra Costa county phones
2. **`src/pages/Locations.tsx`** — Update local county phone arrays for SF + Contra Costa, update schema markup Brisbane address
3. **`src/pages/Contact.tsx`** — Update dispatch areas (Brisbane phone → 415-800-3800, add Contra Costa/Concord entry, add Redwood City entry), update schema address
4. **`src/components/Header.tsx`** — Update businessAddress to 308 Industrial Way, add Contra Costa to mega menu + mobile menu
5. **`src/components/Footer.tsx`** — Add "Other Dispatch Lines Available" link to Contact page
6. **`src/components/StructuredData.tsx`** — Update Brisbane address if referenced
7. **`src/components/landing/CoverageMap.tsx`** — No code changes (auto-derives from coverage.ts)

### Unchanged
- Primary phone: 650-881-2400 (header, footer, hero CTAs)
- All UI styling, dark theme, layout
- San Mateo hub fully preserved


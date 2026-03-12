
## Two Build Failures — Root Cause Analysis

### Failure 1 — Edge Function: `npm:resend@2.0.0` not found

**File:** `supabase/functions/send-email/index.ts` line 2

```
import { Resend } from "npm:resend@2.0.0";
```

Deno Edge Functions require a `deno.json` (or `import_map.json`) file in the function directory to declare npm dependencies. Without it, the `npm:` specifier cannot be resolved during the Supabase deploy step, causing:

> Could not find a matching package for 'npm:resend@2.0.0'

**Fix:** Add a `supabase/functions/send-email/deno.json` file that declares the import map for resend, OR switch to the ESM CDN import which requires no manifest:

```ts
// Replace line 2:
import { Resend } from "npm:resend@2.0.0";
// With:
import { Resend } from "https://esm.sh/resend@2.0.0";
```

The ESM CDN approach (`esm.sh`) is already used for the Supabase client on line 3 and is the standard pattern for Supabase Edge Functions — no deno.json needed.

---

### Failure 2 — Vite Build: `dispatchHubs is not defined`

**File:** `src/pages/Locations.tsx`

The page imports `DISPATCH_HUBS` from `@/data/coverage` (confirmed present in that file), but somewhere in the JSX the old lowercase name `dispatchHubs` is still referenced — visible in the runtime stack trace pointing to `Locations-Dayk4crq.js:1:3342`. This means the compiled bundle still contains the old name from a stale edit.

**Fix:** Audit the full `Locations.tsx` to ensure every reference uses `DISPATCH_HUBS` (all-caps), with no remaining `dispatchHubs` references anywhere in the file.

---

## Plan

### Files to change:

1. **`supabase/functions/send-email/index.ts`** — Replace `npm:resend@2.0.0` with `https://esm.sh/resend@2.0.0` to match the existing ESM CDN pattern already used for supabase-js.

2. **`src/pages/Locations.tsx`** — Do a full audit and replace any remaining `dispatchHubs` (lowercase) with `DISPATCH_HUBS`. This is a simple find-and-replace with no logic changes.

No other files need to change. No UI modifications. No redesign.

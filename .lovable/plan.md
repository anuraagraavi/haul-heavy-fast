# Restore the site: lift the suspension

## What to do

1. **Flip the switch off.** In `src/App.tsx`, change `const SITE_SUSPENDED = true;` to `false` (line 15). This is the only logic change — the suspension notice stops showing and every original page, route, form, and menu renders again exactly as before.
2. **Leave the safety net in place.** Keep `src/components/SuspensionScreen.tsx` and the `if (SITE_SUSPENDED) return <SuspensionScreen />;` check untouched, so the notice can be re-enabled in one line if a future invoice goes unpaid.
3. **Confirm nothing else was left suspended.** Verify `index.html` has no leftover `noindex` metadata from the suspension period (the notice's own noindex lives inside `SuspensionScreen`, so it disappears with the switch), and that the sitemap/robots files are unchanged.
4. **Verify the restore end-to-end.** Load the preview and check the homepage plus a deep route (e.g. the heavy duty landing page and a city page) render the real site — header, hero, quote form — and that submitting the quick quote form still reaches the thank-you page with the conversion event. Check desktop and mobile viewports.
5. **Re-index with Google.** Since the site was briefly hidden with a noindex notice, resubmit the sitemap in Google Search Console and request indexing on the key pages so the pages come back in search. This is a manual step for you in Search Console — I'll list the exact pages.
6. **Republish.** Publish the restored build so the live site (heavytowpro.com) is back up.

## Technical details

- Single-line revert: `src/App.tsx:15` `SITE_SUSPENDED` `true` → `false`. The gate at `src/App.tsx:157-158` stays.
- No route, component, data, or build-file changes; the earlier hub/phone updates, Google Ads call-tracking config, thank-you conversion tag, database keepalive job, and storage/RLS hardening all remain as they are.
- After the edit, confirm the latest build entry in the diagnostics log reports success and no runtime errors appear in the preview.
- `AGENTS.md` already records the one-boolean gate rule, so it needs no edit.

# Follow-up Task: Astro or Next.js Migration

This is a separate workstream and intentionally out of scope for the immediate SEO hotfix release.

## Goal

Migrate from Vite SPA + prerender plugin to a native SSG/SSR framework for long-term crawlability and performance stability.

## Candidate options

- Astro (content-heavy marketing preferred)
- Next.js App Router (if future dynamic/server features are prioritized)

## Acceptance criteria

- Static HTML emitted per route without postbuild browser prerender plugin.
- Route-level metadata generated at build-time.
- Sitemap generated from route/content source of truth.
- No client-only dependency for first meaningful content on key SEO routes.
- Equal or better Lighthouse and CWV metrics than current patched baseline.

## Proposed phases

1. Discovery and framework selection
2. Routing and template migration
3. Metadata/schema migration
4. Form/conversion tracking parity
5. Performance hardening and rollout


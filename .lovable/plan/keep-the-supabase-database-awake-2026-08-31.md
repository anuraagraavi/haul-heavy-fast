# Keep the Supabase database awake

Supabase pauses free-tier projects after a week of inactivity. The fix is a tiny heartbeat that writes one row per day inside the database itself, so nothing depends on the website being visited or a browser being open.

## What gets built

1. A small `db_keepalive` table with one row per ping (a timestamp and a short note).
2. A database function that inserts one heartbeat row and deletes rows older than 30 days, so the table never grows.
3. A scheduled job that runs that function once every 24 hours (03:00 UTC), using Postgres' built-in scheduler (`pg_cron`) — entirely server-side, no external service, no edge function, no cost.

That's it: one row a day, self-pruning, always-on activity signal.

## Notes

- Keeping the database "active" via writes prevents the inactivity pause; it does not affect billing or storage in any meaningful way (a few KB per year).
- The table is locked down: only the server-side job and admin tooling can read or write it. Nothing is exposed to site visitors.

## Technical detail

Single migration:

```sql
CREATE TABLE public.db_keepalive (
  id bigserial PRIMARY KEY,
  pinged_at timestamptz NOT NULL DEFAULT now(),
  source text NOT NULL DEFAULT 'pg_cron'
);
GRANT ALL ON public.db_keepalive TO service_role;   -- no anon/authenticated grants
ALTER TABLE public.db_keepalive ENABLE ROW LEVEL SECURITY;
-- no policies: unreachable from the client API by design

CREATE EXTENSION IF NOT EXISTS pg_cron;

CREATE FUNCTION public.keepalive_ping() ... SECURITY DEFINER
  -- inserts one row, deletes rows older than 30 days

SELECT cron.schedule('supabase-keepalive-daily', '0 3 * * *',
  $$SELECT public.keepalive_ping()$$);
```

Verification after it runs: query `public.db_keepalive` and `cron.job_run_details` to confirm the daily entry.

## Fallback if pg_cron is unavailable

If the extension can't be enabled on this project, the alternative is an edge function (`keepalive`) doing the same insert, triggered daily by an external free scheduler (e.g. cron-job.org) hitting its URL. I'd only go this route if the migration shows pg_cron is blocked.

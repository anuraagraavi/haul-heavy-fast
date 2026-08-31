# Fix: remaining "RLS enabled, no policy" linter item

## What the linter is flagging

The `db_keepalive` table (the daily heartbeat that stops Supabase pausing the database) has row level security turned on but no policies written. The linter can't tell whether that's deliberate lock-down or an oversight, so it reports it as informational.

Confirmed current state: the table has no table privileges granted to any role at all — not `anon`, not `authenticated`, not `service_role`. It is only written by the scheduled `keepalive_ping()` function, which runs with elevated (definer) rights and bypasses both grants and policies. So the table is already fully closed off; the flag is cosmetic.

## The fix

One migration that makes the intent explicit so the linter is satisfied and future readers see the lock-down was intentional:

- Add an explicit deny-all policy on `db_keepalive` for visitors and signed-in users (a policy whose condition never matches), covering all operations.
- Keep the table with no grants to `anon` / `authenticated`, and leave the heartbeat function untouched — it continues to work exactly as today.

## Result

- Linter reports clean.
- No behaviour change: the daily heartbeat keeps running, and the table stays unreachable from the app.

I'll also record in security memory that `db_keepalive` is deliberately server-only, so future scans don't re-raise it.

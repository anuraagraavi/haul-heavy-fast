CREATE TABLE public.db_keepalive (
  id bigserial PRIMARY KEY,
  pinged_at timestamptz NOT NULL DEFAULT now(),
  source text NOT NULL DEFAULT 'pg_cron'
);

GRANT ALL ON public.db_keepalive TO service_role;
GRANT USAGE, SELECT ON SEQUENCE public.db_keepalive_id_seq TO service_role;

ALTER TABLE public.db_keepalive ENABLE ROW LEVEL SECURITY;

CREATE EXTENSION IF NOT EXISTS pg_cron;

CREATE OR REPLACE FUNCTION public.keepalive_ping()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.db_keepalive (source) VALUES ('pg_cron');
  DELETE FROM public.db_keepalive WHERE pinged_at < now() - interval '30 days';
END;
$$;

REVOKE ALL ON FUNCTION public.keepalive_ping() FROM PUBLIC, anon, authenticated;

SELECT cron.schedule('supabase-keepalive-daily', '0 3 * * *', $$SELECT public.keepalive_ping()$$);

SELECT public.keepalive_ping();
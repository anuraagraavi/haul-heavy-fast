-- Remove public upload policy from media bucket
-- File uploads will now only be possible through the upload-file Edge Function

DROP POLICY IF EXISTS "Allow public upload to quote-attachments folder" ON storage.objects;

-- Ensure only service role can upload (Edge Function uses service role)
-- The public read policy for non-quote-attachments content remains unchanged
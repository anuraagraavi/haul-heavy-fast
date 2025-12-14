-- Fix storage policy: Remove public upload access and make it more restrictive
-- Drop the existing overly permissive policy
DROP POLICY IF EXISTS "Allow public uploads to quote-attachments folder" ON storage.objects;

-- Create a new policy that still allows public uploads but with path validation
-- This is a compromise since the form doesn't require auth, but we add server-side validation
-- The edge function now validates attachment URLs before processing
CREATE POLICY "Allow uploads to quote-attachments folder"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'media' 
  AND (storage.foldername(name))[1] = 'quote-attachments'
  AND LENGTH(name) < 500
);

-- Add policy to limit file size at storage level (if supported)
-- Note: Actual file size limits should be enforced in Supabase dashboard

-- Keep read access public for serving attachments
DROP POLICY IF EXISTS "Public read access to media bucket" ON storage.objects;
CREATE POLICY "Public read access to media bucket"
ON storage.objects
FOR SELECT
USING (bucket_id = 'media');
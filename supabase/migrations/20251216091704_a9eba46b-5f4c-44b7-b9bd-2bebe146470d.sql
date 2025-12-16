-- Remove public read access from media bucket to protect customer data
DROP POLICY IF EXISTS "Public read access to media bucket" ON storage.objects;

-- Update the bucket to be private
UPDATE storage.buckets SET public = false WHERE id = 'media';

-- Create policy for authenticated read access (if needed in the future)
CREATE POLICY "Authenticated users can view media files"
ON storage.objects
FOR SELECT
TO authenticated
USING (bucket_id = 'media');

-- Keep the upload policy for quote-attachments folder (already restricted)
-- This allows the quote form to still upload files
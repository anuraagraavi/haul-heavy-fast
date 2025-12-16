-- Restore public read access for website display images (not in quote-attachments folder)
CREATE POLICY "Public read access to website images"
ON storage.objects
FOR SELECT
TO public
USING (
  bucket_id = 'media' 
  AND (storage.foldername(name))[1] IS DISTINCT FROM 'quote-attachments'
);

-- Quote attachments in the quote-attachments folder remain private (only accessible via signed URLs)
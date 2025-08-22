-- Create storage policies for quote attachments
CREATE POLICY "Allow public uploads to quote-attachments folder" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'media' AND (storage.foldername(name))[1] = 'quote-attachments');

CREATE POLICY "Allow public access to quote-attachments folder" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'media' AND (storage.foldername(name))[1] = 'quote-attachments');
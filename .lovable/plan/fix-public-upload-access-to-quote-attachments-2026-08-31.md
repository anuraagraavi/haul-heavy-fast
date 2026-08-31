# Fix: public upload access to quote-attachments

## What's happening

The media bucket has a policy that lets anyone (unauthenticated) upload files into the `quote-attachments/` folder, and a second policy that lets anyone read those files. Nothing in the app needs either one: the quote form uploads only through the `upload-file` Edge Function, which uses the service role and bypasses these policies entirely. The two public policies are leftovers and are pure attack surface (storage abuse, malicious file hosting, exposure of customers' uploaded documents).

## The fix

One migration that removes the two unnecessary public policies on storage objects:

- Drop "Allow uploads to quote-attachments folder" (public INSERT) — the Edge Function already handles uploads with server-side validation (type, size, magic bytes, filename sanitising, rate limiting).
- Drop "Allow public access to quote-attachments folder" (public SELECT) — customer attachments should not be world-readable; the email function reads them server-side with the service role.

Kept as-is:

- Public read for non-quote-attachments website images.
- Authenticated read on the media bucket.

## Result

- Anonymous visitors can no longer write anything into the bucket or read other customers' attachments.
- The quote form keeps working unchanged (no code changes needed) because it goes through the Edge Function.

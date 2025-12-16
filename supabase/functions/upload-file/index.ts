import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Rate limiting - 10 uploads per 5 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX = 10;

// Allowed file types and max size
const ALLOWED_CONTENT_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'application/pdf',
];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_FILENAME_LENGTH = 200;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  record.count++;
  return true;
}

function sanitizeFilename(filename: string): string {
  // Remove path components and dangerous characters
  const sanitized = filename
    .replace(/[/\\]/g, '')
    .replace(/\.\./g, '')
    .replace(/[<>:"|?*]/g, '')
    .trim();
  
  if (sanitized.length > MAX_FILENAME_LENGTH) {
    const ext = sanitized.split('.').pop() || '';
    const name = sanitized.substring(0, MAX_FILENAME_LENGTH - ext.length - 1);
    return `${name}.${ext}`;
  }
  
  return sanitized;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    // Rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";
    
    if (!checkRateLimit(clientIP)) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(JSON.stringify({ error: "Too many uploads. Please try again later." }), {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Parse multipart form data
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      console.log(`File too large: ${file.size} bytes`);
      return new Response(JSON.stringify({ error: "File too large. Maximum size is 10MB." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate content type
    if (!ALLOWED_CONTENT_TYPES.includes(file.type)) {
      console.log(`Invalid content type: ${file.type}`);
      return new Response(JSON.stringify({ error: "Invalid file type. Only images and PDFs are allowed." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate file extension matches content type
    const extension = file.name.split('.').pop()?.toLowerCase();
    const validExtensions: Record<string, string[]> = {
      'image/jpeg': ['jpg', 'jpeg'],
      'image/png': ['png'],
      'image/gif': ['gif'],
      'image/webp': ['webp'],
      'application/pdf': ['pdf'],
    };
    
    if (!extension || !validExtensions[file.type]?.includes(extension)) {
      console.log(`Extension mismatch: ${extension} for type ${file.type}`);
      return new Response(JSON.stringify({ error: "File extension does not match content type." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Read file content and validate magic bytes
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    
    // Magic byte validation
    const magicBytes: Record<string, number[][]> = {
      'image/jpeg': [[0xFF, 0xD8, 0xFF]],
      'image/png': [[0x89, 0x50, 0x4E, 0x47]],
      'image/gif': [[0x47, 0x49, 0x46, 0x38]],
      'image/webp': [[0x52, 0x49, 0x46, 0x46]], // RIFF header
      'application/pdf': [[0x25, 0x50, 0x44, 0x46]], // %PDF
    };
    
    const expectedMagic = magicBytes[file.type];
    const isValidMagic = expectedMagic?.some(magic => 
      magic.every((byte, index) => uint8Array[index] === byte)
    );
    
    if (!isValidMagic) {
      console.log(`Invalid magic bytes for type ${file.type}`);
      return new Response(JSON.stringify({ error: "File content does not match declared type." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Create Supabase client with service role
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Generate secure file path
    const sanitizedName = sanitizeFilename(file.name);
    const timestamp = Date.now();
    const randomId = crypto.randomUUID().substring(0, 8);
    const filePath = `quote-attachments/${timestamp}-${randomId}-${sanitizedName}`;

    console.log(`Uploading file: ${filePath}, size: ${file.size}, type: ${file.type}`);

    // Upload to storage
    const { data, error } = await supabase.storage
      .from("media")
      .upload(filePath, uint8Array, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error("Storage upload error:", error);
      return new Response(JSON.stringify({ error: "Failed to upload file." }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log(`File uploaded successfully: ${data.path}`);

    // Return the file path (not URL - the send-email function will handle access)
    return new Response(JSON.stringify({ 
      success: true,
      path: data.path,
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error) {
    console.error("Upload handler error:", error);
    return new Response(JSON.stringify({ error: "An unexpected error occurred." }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);

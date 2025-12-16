import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.55.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client with service role for storage access
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// SECURITY: Allowed recipients whitelist
const ALLOWED_RECIPIENTS = [
  'dispatch@heavytowpro.com',
  'anuraagraavi@gmail.com',
  'heavyhaulers.ca@gmail.com'
];

// SECURITY: Allowed storage path prefix for attachment validation
const ALLOWED_STORAGE_PATH_PREFIX = 'quote-attachments/';

// SECURITY: Simple in-memory rate limiting (resets on function restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per 10 minutes per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  entry.count++;
  return true;
}

interface EmailRequest {
  to: string | string[];
  subject: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'contact' | 'quote' | 'newsletter';
  attachments?: string[];
  honeypot?: string;
}

// SECURITY: Input validation functions
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

function validateName(name: string): boolean {
  return typeof name === 'string' && name.length > 0 && name.length <= 100;
}

function validateMessage(message: string): boolean {
  return typeof message === 'string' && message.length > 0 && message.length <= 5000;
}

function validateSubject(subject: string): boolean {
  return typeof subject === 'string' && subject.length <= 200;
}

function validateRecipients(to: string | string[]): boolean {
  const recipients = Array.isArray(to) ? to : [to];
  return recipients.every(email => ALLOWED_RECIPIENTS.includes(email));
}

// SECURITY: Validate attachment path is from allowed folder
function validateAttachmentPath(path: string): boolean {
  return path.startsWith(ALLOWED_STORAGE_PATH_PREFIX);
}

// Extract path from Supabase storage URL
function extractStoragePath(url: string): string | null {
  const pattern = /\/storage\/v1\/object\/(?:public|sign)\/media\/(.+?)(?:\?|$)/;
  const match = url.match(pattern);
  return match ? match[1] : null;
}

const handler = async (req: Request): Promise<Response> => {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
             req.headers.get('cf-connecting-ip') || 
             'unknown';
  
  console.log("Received request:", req.method, "from IP:", ip);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  // SECURITY: Rate limiting check
  if (!checkRateLimit(ip)) {
    console.log("Rate limit exceeded for IP:", ip);
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }

  try {
    const emailData: EmailRequest = await req.json();
    console.log("Email data received:", { 
      type: emailData.type, 
      name: emailData.name ? '[PROVIDED]' : '[MISSING]',
      email: emailData.email ? '[PROVIDED]' : '[MISSING]',
      hasAttachments: emailData.attachments?.length || 0,
      timestamp: new Date().toISOString(),
      ip
    });

    // SECURITY: Honeypot check
    if (emailData.honeypot && emailData.honeypot.trim() !== '') {
      console.log("Honeypot triggered, likely spam submission from IP:", ip);
      return new Response(
        JSON.stringify({ error: "Invalid submission" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // SECURITY: Validate recipients
    if (!validateRecipients(emailData.to)) {
      console.error("Invalid recipient attempted:", emailData.to);
      return new Response(
        JSON.stringify({ error: "Invalid recipient" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // SECURITY: Input validation
    if (emailData.type !== 'newsletter' && !validateName(emailData.name)) {
      return new Response(
        JSON.stringify({ error: "Invalid name (max 100 characters)" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!validateEmail(emailData.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (emailData.type !== 'newsletter' && !validateMessage(emailData.message)) {
      return new Response(
        JSON.stringify({ error: "Invalid message (max 5000 characters)" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (emailData.subject && !validateSubject(emailData.subject)) {
      return new Response(
        JSON.stringify({ error: "Invalid subject (max 200 characters)" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("Missing Resend API key");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Format email content based on type
    let emailContent = "";
    let emailSubject = "";

    switch (emailData.type) {
      case 'contact':
        emailSubject = emailData.subject;
        emailContent = `
${emailData.message}

---
Sent from Heavy Haulers website contact form
        `;
        break;
      
      case 'quote':
        emailSubject = emailData.subject;
        emailContent = `
${emailData.message}

---
Sent from Heavy Haulers website quote form
        `;
        break;
      
      case 'newsletter':
        emailSubject = `Newsletter Subscription: ${emailData.email}`;
        emailContent = `
New newsletter subscription:

Email: ${emailData.email}
Name: ${emailData.name || 'Not provided'}

---
Sent from Heavy Haulers website newsletter signup
        `;
        break;
    }

    // SECURITY: Process attachments using Supabase storage (private bucket)
    const attachments = [];
    if (emailData.attachments && emailData.attachments.length > 0) {
      // SECURITY: Limit attachment count
      const maxAttachments = 5;
      const attachmentsToProcess = emailData.attachments.slice(0, maxAttachments);
      
      console.log("Processing attachments:", attachmentsToProcess.length);
      
      for (const url of attachmentsToProcess) {
        // Extract path from URL
        const storagePath = extractStoragePath(url);
        if (!storagePath) {
          console.error("Could not extract storage path from URL:", url);
          continue;
        }
        
        // SECURITY: Validate attachment path is in allowed folder
        if (!validateAttachmentPath(storagePath)) {
          console.error("Blocked unauthorized attachment path:", storagePath);
          continue;
        }
        
        try {
          console.log("Downloading attachment from storage:", storagePath);
          
          // Use Supabase client with service role to access private bucket
          const { data, error } = await supabase.storage
            .from('media')
            .download(storagePath);
          
          if (error) {
            console.error('Failed to download attachment:', error.message);
            continue;
          }
          
          if (!data) {
            console.error('No data returned for attachment');
            continue;
          }
          
          const contentType = data.type;
          const allowedTypes = ['image/', 'application/pdf'];
          
          // SECURITY: Validate content type
          if (!allowedTypes.some(type => contentType?.startsWith(type))) {
            console.error('Invalid content type for attachment:', contentType);
            continue;
          }
          
          const buffer = await data.arrayBuffer();
          
          // SECURITY: Enforce size limit (10MB per attachment)
          if (buffer.byteLength > 10 * 1024 * 1024) {
            console.error('Attachment too large:', buffer.byteLength);
            continue;
          }
          
          const filename = storagePath.split('/').pop() || 'attachment';
          console.log("Successfully processed attachment:", filename, "Size:", buffer.byteLength);
          attachments.push({
            filename,
            content: new Uint8Array(buffer),
          });
        } catch (attachmentError) {
          console.error('Error processing attachment:', attachmentError);
        }
      }
      console.log("Total attachments processed:", attachments.length);
    }

    // Send email via Resend
    try {
      console.log("Sending email via Resend API");
      
      const emailPayload: any = {
        from: "Heavy Haulers <noreply@updates.heavytowpro.com>",
        to: emailData.to,
        subject: emailSubject,
        html: emailContent.replace(/\n/g, '<br>'),
        text: emailContent,
      };

      if (attachments.length > 0) {
        emailPayload.attachments = attachments;
        console.log("Adding attachments to email:", attachments.map(a => ({ filename: a.filename, size: a.content.length })));
      }

      const emailResponse = await resend.emails.send(emailPayload);

      console.log("Email sent successfully:", emailResponse);

      // Send confirmation email to user if this is not a newsletter signup
      if (emailData.type !== 'newsletter' && emailData.email) {
        try {
          let userSubject = "";
          let userContent = "";

          if (emailData.type === 'quote') {
            userSubject = "Quote Request Received - Heavy Haulers";
            userContent = `
              <h2>Thank you for your quote request!</h2>
              <p>Hi ${emailData.name},</p>
              <p>We've received your quote request and our team is reviewing the details. You can expect to hear back from us within 15 minutes during business hours.</p>
              
              <h3>Your Request Details:</h3>
              <ul>
                <li><strong>Name:</strong> ${emailData.name}</li>
                <li><strong>Phone:</strong> ${emailData.phone || 'Not provided'}</li>
                <li><strong>Email:</strong> ${emailData.email}</li>
              </ul>
              
              <h3>What happens next?</h3>
              <ol>
                <li>Our dispatch team reviews your request</li>
                <li>We prepare a detailed quote based on your specific needs</li>
                <li>You'll receive a call or email within 15 minutes</li>
              </ol>
              
              <p><strong>Need immediate assistance?</strong><br>
              Call our 24/7 emergency dispatch: <a href="tel:650-881-2400">650-881-2400</a></p>
              
              <p>Best regards,<br>
              Heavy Haulers Team<br>
              <a href="mailto:dispatch@heavytowpro.com">dispatch@heavytowpro.com</a></p>
            `;
          } else if (emailData.type === 'contact') {
            userSubject = "Message Received - Heavy Haulers";
            userContent = `
              <h2>Thank you for contacting us!</h2>
              <p>Hi ${emailData.name},</p>
              <p>We've received your message and will get back to you as soon as possible, typically within 24 hours during business days.</p>
              
              <h3>Your Message:</h3>
              <p><strong>Subject:</strong> ${emailData.subject || 'General Inquiry'}</p>
              <p><strong>Message:</strong> ${emailData.message}</p>
              
              <p><strong>Need immediate assistance?</strong><br>
              Call our 24/7 emergency dispatch: <a href="tel:650-881-2400">650-881-2400</a></p>
              
              <p>Best regards,<br>
              Heavy Haulers Team<br>
              <a href="mailto:dispatch@heavytowpro.com">dispatch@heavytowpro.com</a></p>
            `;
          }

          const userEmailPayload = {
            from: "Heavy Haulers <noreply@updates.heavytowpro.com>",
            to: [emailData.email],
            subject: userSubject,
            html: userContent,
            text: userContent.replace(/<[^>]*>/g, ''),
          };

          const userEmailResponse = await resend.emails.send(userEmailPayload);
          console.log("User confirmation email sent:", userEmailResponse);
        } catch (userEmailError) {
          console.error("Failed to send user confirmation email:", userEmailError);
          // Don't fail the main request if user email fails
        }
      }

      return new Response(
        JSON.stringify({ success: true, message: "Email sent successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );

    } catch (emailError: any) {
      // SECURITY: Log detailed error server-side only
      console.error("Email sending error:", {
        error: emailError.message,
        stack: emailError.stack,
        timestamp: new Date().toISOString()
      });
      // SECURITY: Return generic error to client
      return new Response(
        JSON.stringify({ error: "Unable to send email. Please try again or contact us directly at 650-881-2400." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

  } catch (error: any) {
    // SECURITY: Log detailed error server-side only
    console.error("Handler error:", {
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
    // SECURITY: Return generic error to client
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again or call 650-881-2400." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

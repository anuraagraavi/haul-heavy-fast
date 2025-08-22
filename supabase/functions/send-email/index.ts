import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string | string[];
  subject: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'contact' | 'quote' | 'newsletter';
  attachments?: string[];
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request:", req.method);

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

  try {
    const emailData: EmailRequest = await req.json();
    console.log("Email data received:", { ...emailData, message: "[REDACTED]" });

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
New contact form submission:

Name: ${emailData.name}
Email: ${emailData.email}
Phone: ${emailData.phone || 'Not provided'}
Subject: ${emailData.subject}

Message:
${emailData.message}

---
Sent from Heavy Haulers website contact form
        `;
        break;
      
      case 'quote':
        emailSubject = emailData.subject;
        emailContent = `
New quote request:

Name: ${emailData.name}
Email: ${emailData.email}
Phone: ${emailData.phone || 'Not provided'}

Details:
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

    // Process attachments if present
    const attachments = [];
    if (emailData.attachments && emailData.attachments.length > 0) {
      for (const url of emailData.attachments) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const buffer = await response.arrayBuffer();
            const filename = url.split('/').pop() || 'attachment';
            attachments.push({
              filename,
              content: new Uint8Array(buffer),
            });
          }
        } catch (attachmentError) {
          console.error('Error processing attachment:', url, attachmentError);
        }
      }
    }

    // Send email via Resend
    try {
      console.log("Sending email via Resend API");
      
      const emailPayload: any = {
        from: "Heavy Haulers <onboarding@resend.dev>",
        to: "anuraagraavi@gmail.com",
        subject: emailSubject,
        text: emailContent,
      };

      if (attachments.length > 0) {
        emailPayload.attachments = attachments;
      }

      const emailResponse = await resend.emails.send(emailPayload);

      console.log("Email sent successfully:", emailResponse);

      return new Response(
        JSON.stringify({ success: true, message: "Email sent successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );

    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: emailError.message }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

  } catch (error: any) {
    console.error("Error in send-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
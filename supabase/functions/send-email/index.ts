import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  subject: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'contact' | 'quote' | 'newsletter';
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

    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpUsername = Deno.env.get("SMTP_USERNAME");
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");

    if (!smtpHost || !smtpUsername || !smtpPassword) {
      console.error("Missing SMTP configuration");
      return new Response(
        JSON.stringify({ error: "SMTP configuration missing" }),
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
        emailSubject = `Contact Form: ${emailData.subject}`;
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
        emailSubject = `Quote Request from ${emailData.name}`;
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

    // Create email message
    const emailMessage = [
      `From: Heavy Haulers <info@updates.heavytowpro.com>`,
      `To: dispatch@heavytowpro.com`,
      `Subject: ${emailSubject}`,
      `Content-Type: text/plain; charset=utf-8`,
      "",
      emailContent
    ].join("\r\n");

    // Send email via SMTP
    try {
      console.log("Connecting to SMTP server:", smtpHost);
      
      const conn = await Deno.connect({
        hostname: smtpHost,
        port: 465,
        transport: "tcp",
      });

      const encoder = new TextEncoder();
      const decoder = new TextDecoder();

      // Simple SMTP implementation
      const writeLine = async (line: string) => {
        await conn.write(encoder.encode(line + "\r\n"));
      };

      const readResponse = async () => {
        const buffer = new Uint8Array(1024);
        const n = await conn.read(buffer);
        return n ? decoder.decode(buffer.subarray(0, n)) : "";
      };

      // SMTP conversation
      await readResponse(); // Server greeting
      await writeLine(`EHLO heavytowpro.com`);
      await readResponse();
      
      await writeLine(`AUTH LOGIN`);
      await readResponse();
      
      await writeLine(btoa(smtpUsername));
      await readResponse();
      
      await writeLine(btoa(smtpPassword));
      await readResponse();
      
      await writeLine(`MAIL FROM:<${smtpUsername}>`);
      await readResponse();
      
      await writeLine(`RCPT TO:<dispatch@heavytowpro.com>`);
      await readResponse();
      
      await writeLine(`DATA`);
      await readResponse();
      
      await writeLine(emailMessage);
      await writeLine(".");
      await readResponse();
      
      await writeLine(`QUIT`);
      conn.close();

      console.log("Email sent successfully");

      return new Response(
        JSON.stringify({ success: true, message: "Email sent successfully" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );

    } catch (smtpError) {
      console.error("SMTP Error:", smtpError);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: smtpError.message }),
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
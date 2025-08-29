import { supabase } from '@/integrations/supabase/client';

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  pickupLocation: string;
  dropoffLocation: string;
  vehicleType: string;
  serviceType: string;
  notes: string;
  urgency: string;
  attachments?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const submitQuoteForm = async (formData: QuoteFormData): Promise<void> => {
  try {
    const emailData = {
      to: ["anuraagraavi@gmail.com"],
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: `New Quote Request - ${formData.serviceType}`,
      message: `
**Quote Request Details**

**Contact Information:**
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}

**Service Details:**
- Vehicle Type: ${formData.vehicleType}
- Service Type: ${formData.serviceType}
- Pickup Location: ${formData.pickupLocation}
- Drop-off Location: ${formData.dropoffLocation || 'Not specified'}
- Urgency: ${formData.urgency || 'Not specified'}

**Additional Notes:**
${formData.notes || 'No additional notes provided'}

${formData?.attachments && formData?.attachments?.length > 0 ? `
Attachments:
${formData.attachments.map(url => url).join('\n')}
` : ''}

**Request Time:** ${new Date().toLocaleString()}
      `,
      type: "quote"
    };

    const { error } = await supabase.functions.invoke('send-email', {
      body: { ...emailData, attachments: formData?.attachments }
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Error submitting quote form:', error);
    throw error;
  }
};

export const submitContactForm = async (formData: ContactFormData): Promise<void> => {
  try {
    const emailData = {
      to: ["anuraagraavi@gmail.com"],
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: `Contact Form: ${formData.subject}`,
      message: `
**Contact Form Submission**

**Contact Information:**
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}

**Subject:** ${formData.subject}

**Message:**
${formData.message}

**Submitted:** ${new Date().toLocaleString()}
      `,
      type: "contact"
    };

    const { error } = await supabase.functions.invoke('send-email', {
      body: emailData
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
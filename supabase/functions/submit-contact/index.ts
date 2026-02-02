import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", formData);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      throw new Error("Missing required fields: name, email, or phone");
    }

    // Send email to support
    const emailResponse = await resend.emails.send({
      from: "Internet Network <noreply@internetnetwork.us>",
      to: ["support@internetnetwork.us"],
      subject: `New Contact Form Submission - ${formData.serviceInterest || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">New Contact Form Submission</h1>
          
          <h2 style="color: #0066cc;">Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${formData.phone}">${formData.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Service Interest:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.serviceInterest || "Not specified"}</td>
            </tr>
          </table>

          <h2 style="color: #0066cc; margin-top: 20px;">Service Address</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Address:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.address || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">City:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.city || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">State:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.state || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">ZIP Code:</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${formData.zipCode || "Not provided"}</td>
            </tr>
          </table>

          ${formData.message ? `
          <h2 style="color: #0066cc; margin-top: 20px;">Additional Message</h2>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            <p style="margin: 0; white-space: pre-wrap;">${formData.message}</p>
          </div>
          ` : ""}

          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Internet Network website contact form.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in submit-contact function:", error);
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

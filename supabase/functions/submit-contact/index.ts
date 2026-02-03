import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

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

    // Initialize EXTERNAL Supabase client (user's own Supabase project)
    const externalSupabaseUrl = Deno.env.get("EXTERNAL_SUPABASE_URL");
    const externalSupabaseKey = Deno.env.get("EXTERNAL_SUPABASE_SERVICE_KEY");

    if (!externalSupabaseUrl || !externalSupabaseKey) {
      throw new Error("External Supabase credentials not configured");
    }

    const supabase = createClient(externalSupabaseUrl, externalSupabaseKey);

    // Save to external database
    const { data: dbData, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service_interest: formData.serviceInterest || null,
        address: formData.address || null,
        city: formData.city || null,
        state: formData.state || null,
        zip_code: formData.zipCode || null,
        message: formData.message || null,
        status: "new",
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database insert error:", dbError);
      throw new Error(`Failed to save submission to external database: ${dbError.message}`);
    }

    console.log("Submission saved to external Supabase:", dbData.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        id: dbData.id
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
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

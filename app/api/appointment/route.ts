import { NextRequest, NextResponse } from "next/server";

interface AppointmentData {
  fullName: string;
  phone: string;
  email?: string;
  service: string;
  preferredDate: string;
  message?: string;
}

function validateAppointment(data: AppointmentData): string | null {
  if (!data.fullName || data.fullName.trim().length < 2) {
    return "Invalid full name";
  }
  if (!data.phone || data.phone.trim().length < 9) {
    return "Invalid phone number";
  }
  if (!data.service) {
    return "Service is required";
  }
  if (!data.preferredDate) {
    return "Preferred date is required";
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body: AppointmentData = await request.json();

    const validationError = validateAppointment(body);
    if (validationError) {
      return NextResponse.json({ error: validationError }, { status: 400 });
    }

    // Log the appointment request (in production, send email or save to DB)
    console.log("New appointment request:", {
      name: body.fullName,
      phone: body.phone,
      email: body.email || "Not provided",
      service: body.service,
      date: body.preferredDate,
      message: body.message || "None",
      receivedAt: new Date().toISOString(),
    });

    // TODO: Integrate email service (e.g., Resend, SendGrid, Nodemailer)
    // TODO: Optionally save to MongoDB/Supabase

    return NextResponse.json(
      {
        success: true,
        message: "Appointment request received. We will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Appointment API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

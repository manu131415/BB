// src/app/api/enquiry/route.ts
import { NextResponse } from "next/server";
import { client } from "@/src/sanity/client"; // ⚠️ path fixed

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

    await client.create({
      _type: "quick_enquiry",
      email,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enquiry error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry." },
      { status: 500 }
    );
  }
}

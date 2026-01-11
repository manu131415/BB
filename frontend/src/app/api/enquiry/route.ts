// src/app/api/enquiry/route.ts
import { NextResponse } from "next/server"
import { sanityWriteClient } from "@/src/sanity/clientWrite"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const doc = {
      _type: "enquiry",
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      subject: body.subject,
      budget: body.budget,
      timeline: body.timeline,
      services: body.services,
      message: body.message,
    }

    await sanityWriteClient.create(doc)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Enquiry error:", error)
    return NextResponse.json(
      { success: false },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    relocation: formData.get("relocation"),
    why_fit: formData.get("why_fit"),
    outside_interests: formData.get("outside_interests"),
    submittedAt: new Date().toISOString(),
  };

  console.log("Associate dentist candidate lead:", payload);

  // 🔥 ADD THIS BLOCK (THIS IS WHAT YOU WERE MISSING)
  await fetch("https://formspree.io/f/mlgoaqow", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  // ✅ KEEP YOUR REDIRECT
  return NextResponse.redirect(new URL("/thank-you", request.url), 303);
}

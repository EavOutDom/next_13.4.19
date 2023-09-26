import { Resend } from "resend";
import PreviewEmails from "@/emails/PreviewEmails";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  await resend.emails.send({
    from: "dr.doom.dev",
    to: "eavoutdom400@gmail.com",
    subject: "Hello world",
    react: PreviewEmails({ name: "Outdom" }),
  });
  return NextResponse.json({});
}

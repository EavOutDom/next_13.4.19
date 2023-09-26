import { resend } from "resend";
import PreviewEmails from '@/emails/PreviewEmails'
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API.KEY);

export async function POST() {
    await resend.emails.send({
        from: '',
        to: 'eavoutdom400@gmail.com',
        subject: '...',
        react: <PreviewEmails name='Outdom' />
    });
    return NextResponse.json({});
}

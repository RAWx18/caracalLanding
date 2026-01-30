import { NextResponse } from 'next/server';
import { getResend } from '@/lib/resend';
import { getEarlyAccessEmailHtml } from '@/lib/email-template';

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName, company } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Optional: persist signup to an external DB (removed Supabase dependency).
    // This deployment doesn't require a DB; we skip persistence when not configured.

    // 2. Send confirmation email via Resend (only if API key configured)
    try {
      const resend = getResend();
      if (resend) {
        await resend.emails.send({
          from: 'Caracal <onboarding@resend.dev>',
          to: email,
          subject: 'Access Granted (Pending) | Caracal.ai',
          html: getEarlyAccessEmailHtml(firstName || 'there'),
        });
      } else {
        console.warn('RESEND_API_KEY not set; skipping confirmation email.');
      }
    } catch (emailError) {
      console.error('Email error:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

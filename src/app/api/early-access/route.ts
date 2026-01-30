import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';
import { getEarlyAccessEmailHtml } from '@/lib/email-template';

export async function POST(req: Request) {
  try {
    const { email, firstName, lastName, company } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 1. Insert into Supabase
    const { error: dbError } = await supabase
      .from('early_access_signups')
      .upsert({ 
        email, 
        first_name: firstName, 
        last_name: lastName, 
        company 
      }, { onConflict: 'email' });

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json({ error: 'Failed to register. Please try again.' }, { status: 500 });
    }

    // 2. Send confirmation email via Resend
    try {
      await resend.emails.send({
        from: 'Caracal <onboarding@resend.dev>',
        to: email,
        subject: 'Access Granted (Pending) | Caracal.ai',
        html: getEarlyAccessEmailHtml(firstName || 'there'),
      });
    } catch (emailError) {
      // We don't want to fail the whole request if email fails, 
      // but we should log it.
      console.error('Email error:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

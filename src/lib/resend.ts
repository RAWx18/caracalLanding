import { Resend, type Resend as ResendType } from 'resend';

let _resend: ResendType | null = null;

export function getResend(): ResendType | null {
	if (_resend) return _resend;

	const apiKey = process.env.RESEND_API_KEY;
	if (!apiKey) return null;

	_resend = new Resend(apiKey);
	return _resend;

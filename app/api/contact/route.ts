import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
  locale?: 'en' | 'id';
};

const attempts = new Map<string, number[]>();

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const id = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';
    const now = Date.now();
    const recent = (attempts.get(id) ?? []).filter((time) => now - time < 60_000);
    if (recent.length >= 3) return NextResponse.json({ error: payload.locale === 'id' ? 'Terlalu banyak percobaan. Coba lagi nanti.' : 'Too many attempts. Try again later.' }, { status: 429 });
    attempts.set(id, [...recent, now]);
    if (payload.website) return NextResponse.json({ success: true });
    const localized = (en: string, id: string) => payload.locale === 'id' ? id : en;
    const name = payload.name?.trim() ?? '';
    const email = payload.email?.trim() ?? '';
    const subject = payload.subject?.trim() ?? '';
    const message = payload.message?.trim() ?? '';

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: localized('All fields are required.', 'Semua kolom wajib diisi.') }, { status: 400 });
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: localized('Please provide a valid email address.', 'Masukkan alamat email yang valid.') }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ error: 'Message must be at least 10 characters.' }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO ?? 'zulfikarsiswanto@gmail.com';
    const emailHost = process.env.EMAIL_HOST ?? 'smtp.gmail.com';
    const emailPort = Number(process.env.EMAIL_PORT ?? 587);

    if (!emailUser || !emailPass) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailPort === 465,
      requireTLS: emailPort === 587,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Unable to send message.' }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

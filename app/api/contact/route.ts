import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, message } = body ?? {};

    // In production, integrate email service or CRM here.
    // For now, just log the payload.
    console.log('Contact request:', { name, company, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return new NextResponse('Invalid request', { status: 400 });
  }
}



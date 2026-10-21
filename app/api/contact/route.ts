import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || message.length < 12) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId) {
    return NextResponse.json({ ok: false, reason: "unconfigured" }, { status: 501 });
  }

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      _subject: `Portfolio inquiry from ${name}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, reason: "upstream" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";

/**
 * Server-side contact handler. Sends the submission through EmailJS's REST API
 * using the private key as an access token. All credentials are read from
 * server-only env vars (never NEXT_PUBLIC_*), so nothing sensitive reaches the
 * browser. Requires EmailJS → Account → Security → "Allow EmailJS API for
 * non-browser applications" to be enabled.
 */

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  const name = str(body.name);
  const email = str(body.email);
  const message = str(body.message);
  const company = str(body.company);
  const budget = str(body.budget);
  const services = str(body.services);

  if (!name || !EMAIL_RE.test(email) || !message) {
    return NextResponse.json({ ok: false, error: "Missing or invalid fields." }, { status: 400 });
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  // Not fully configured → accept but don't send, so the UI still works locally.
  if (!serviceId || !templateId || !publicKey || !privateKey) {
    // eslint-disable-next-line no-console
    console.warn("[contact] EmailJS env vars missing — running in demo mode (not sent).");
    return NextResponse.json({ ok: true, demo: true });
  }

  try {
    const res = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: { name, email, company, budget, services, message },
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      // eslint-disable-next-line no-console
      console.error("[contact] EmailJS error:", res.status, detail);
      return NextResponse.json({ ok: false, error: "Failed to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] EmailJS request failed:", err);
    return NextResponse.json({ ok: false, error: "Failed to send message." }, { status: 502 });
  }
}

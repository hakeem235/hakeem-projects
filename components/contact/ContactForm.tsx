"use client";
import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

function validate(f: { name: string; email: string; message: string }) {
  const e: Partial<typeof f> = {};
  if (!f.name.trim()) e.name = "Name is required.";
  if (!f.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address.";
  if (!f.message.trim()) e.message = "Message is required.";
  return e;
}

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof fields>>({});
  const [status, setStatus] = useState<FormState>("idle");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const demoMode = !formspreeId || formspreeId === "your_formspree_id_here";

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    if (demoMode) { console.warn("[Contact] Demo mode — NEXT_PUBLIC_FORMSPREE_ID not set."); setStatus("success"); return; }
    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "success") return (
    <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-8 rounded-xl text-center section-enter">
      <p className="font-semibold text-lg mb-1">Thanks! We'll be in touch.</p>
      <p className="text-sm">We typically respond within one business day.</p>
    </div>
  );

  return (
    <>
      {demoMode && (
        <div className="mb-6 text-sm bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg">
          Demo mode — set <code className="font-mono">NEXT_PUBLIC_FORMSPREE_ID</code> to enable live submission.
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {[
          { name: "name", label: "Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "company", label: "Company (optional)", type: "text" },
        ].map((f) => (
          <div key={f.name}>
            <label htmlFor={f.name} className="block text-sm font-medium text-text-base mb-1">{f.label}</label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              value={fields[f.name as keyof typeof fields]}
              onChange={handleChange}
              className={`input w-full ${errors[f.name as keyof typeof errors] ? "border-red-400 focus:ring-red-300" : ""}`}
            />
            {errors[f.name as keyof typeof errors] && (
              <p className="text-xs text-red-500 mt-1">{errors[f.name as keyof typeof errors]}</p>
            )}
          </div>
        ))}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-base mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={fields.message}
            onChange={handleChange}
            className={`input w-full resize-none ${errors.message ? "border-red-400 focus:ring-red-300" : ""}`}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
        </div>
        {status === "error" && (
          <p className="text-sm text-red-500">Something went wrong. Please try again or email us directly.</p>
        )}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary w-full disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </button>
      </form>
    </>
  );
}

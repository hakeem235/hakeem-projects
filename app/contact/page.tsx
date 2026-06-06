import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import { FadeUp } from "@/components/motion";

export const metadata: Metadata = {
  title: "Get In Touch",
  description: "Start a conversation about your project. We respond within one business day.",
  openGraph: { title: "Get In Touch", description: "Start a conversation about your project. We respond within one business day." },
};

export default function ContactPage() {
  return (
    <>
      {/* Image hero */}
      <section className="relative py-24 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80"
          alt="Person at a desk with warm lighting"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1917]/85 to-[#1C1917]/50" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Get In Touch</h1>
          <p className="text-white/75 text-lg">Tell us about your project. We&apos;ll get back to you within one business day.</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <FadeUp>
            <h2 className="text-xl font-bold text-primary mb-6">Contact Information</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-accent text-sm">✉</span>
                </div>
                <div>
                  <span className="font-medium text-text-base block mb-0.5 text-sm">Email</span>
                  <a href="mailto:hello@hakeemprojects.com" className="text-accent-2 hover:underline text-sm">hello@hakeemprojects.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <span className="text-accent text-sm">⌖</span>
                </div>
                <div>
                  <span className="font-medium text-text-base block mb-0.5 text-sm">Location</span>
                  <span className="text-text-muted text-sm">Remote / Global</span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.1}>
            <ContactForm />
          </FadeUp>
        </div>
      </section>
    </>
  );
}

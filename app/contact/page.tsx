import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Get In Touch",
  description: "Start a conversation about your project. We respond within one business day.",
  openGraph: { title: "Get In Touch", description: "Start a conversation about your project. We respond within one business day." },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-300 text-lg">Tell us about your project. We'll get back to you within one business day.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-bold text-primary mb-6">Contact Information</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <span className="font-medium text-text-base block mb-1">Email</span>
                <a href="mailto:hello@hakeemprojects.com" className="text-accent hover:underline">hello@hakeemprojects.com</a>
              </div>
              <div>
                <span className="font-medium text-text-base block mb-1">Location</span>
                <span>Remote / Global</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

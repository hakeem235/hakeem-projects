import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Hakeem Projects — our story, mission, values, and the team behind the work.",
  openGraph: { title: "About Us", description: "Learn about Hakeem Projects — our story, mission, values, and the team behind the work." },
};

const values = [
  { title: "Quality", desc: "We don't cut corners. Every line of code is written to last, tested, and reviewed before it ships." },
  { title: "Transparency", desc: "No surprises. You always know where things stand — progress, blockers, and decisions are shared openly." },
  { title: "Speed", desc: "We move fast without breaking things. Lean processes, clear scope, and decisive execution." },
  { title: "Partnership", desc: "Your success is ours. We're not vendors — we're an extension of your team." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300 text-lg">A small, focused software team that gets things done.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Hakeem Projects was founded on a simple observation: most software projects fail not because of technical complexity, but because of poor communication, unclear scope, and teams that aren't aligned. We set out to build a different kind of software company — one where technical excellence and client partnership go hand in hand.</p>
          <p className="text-gray-600 leading-relaxed">Since our founding, we've worked with startups building their first product, scale-ups modernising legacy systems, and enterprises integrating new capabilities into existing platforms. In every engagement, we bring the same rigour, care, and commitment to quality.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-2xl font-semibold text-text-base leading-snug mb-6">"To build software that solves real problems — reliably, beautifully, and on time."</p>
          <p className="text-gray-600 leading-relaxed">We believe great software is built through clear thinking, honest communication, and relentless attention to detail. Our mission is to deliver products that our clients are proud to show their users — and that we're proud to have our name on.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card bg-white rounded-xl p-6 border border-gray-100 stagger-item">
                <h3 className="font-bold text-primary text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">The Team</h2>
          <div className="flex justify-center">
            <div className="card bg-background rounded-xl p-8 border border-gray-100 text-center max-w-xs w-full">
              <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">AH</div>
              <h3 className="font-bold text-primary text-lg">Ahmed Hakeem</h3>
              <p className="text-accent text-sm font-medium mt-1">Founder & Lead Engineer</p>
              <p className="text-gray-500 text-sm mt-3">Full-stack engineer with a focus on product quality, scalable architecture, and building teams that ship.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

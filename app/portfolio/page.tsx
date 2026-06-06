import type { Metadata } from "next";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Our Work",
  description: "A selection of web, mobile, and API projects built by Hakeem Projects.",
  openGraph: { title: "Our Work", description: "A selection of web, mobile, and API projects built by Hakeem Projects." },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-gray-300 text-lg">A selection of projects we&apos;ve built and are proud of.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}

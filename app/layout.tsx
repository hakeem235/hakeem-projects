import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hakeem-projects.vercel.app"),
  title: {
    default: "Hakeem's Projects — Web & mobile design, development, QA",
    template: "%s | Hakeem's Projects",
  },
  description:
    "A boutique studio that designs, builds and tests web & mobile software for startups and growing teams. End to end, from wireframe to QA sign-off.",
  openGraph: {
    siteName: "Hakeem's Projects",
    type: "website",
    title: "Hakeem's Projects — Web & mobile design, development, QA",
    description:
      "A boutique studio that designs, builds and tests web & mobile software for startups and growing teams.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Without JS the reveal observer never runs — keep content visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

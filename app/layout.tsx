import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Hakeem Projects", template: "%s | Hakeem Projects" },
  description: "Software development company building modern web, mobile, and API solutions.",
  openGraph: {
    siteName: "Hakeem Projects",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

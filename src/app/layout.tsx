import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { site } from "@/lib/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const title = `${site.name} | Faith-based spoken word and poetry community`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Poets Speak Louder",
    "spoken word",
    "poetry",
    "Christian poetry",
    "spoken word bootcamp",
    "public speaking for children",
    "creative writing workshops",
    "faith-based non-profit",
    "Chicago",
    "Lagos",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "nonprofit",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.shortDescription,
    url: "/",
    locale: site.locale,
  },
  twitter: { card: "summary_large_image", title, description: site.shortDescription },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#faf8f4",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}

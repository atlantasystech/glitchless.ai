import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { JsonLd } from "@/components/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glitchless.ai"),
  title: {
    default: "Glitchless | AI-Operated Business Systems for Modern Enterprises",
    template: "%s | Glitchless Systems",
  },
  description:
    "Glitchless builds governed AI agents, CRM intelligence, and ecommerce operations systems that reduce manual work, accelerate response times, and give leadership complete visibility.",
  keywords: [
    "AI operated business systems",
    "enterprise AI governance India",
    "Revenue OS",
    "Commerce OS",
    "Ops Control Tower",
    "Odoo CRM customization India",
    "ERPNext Frappe implementation",
    "ecommerce operations automation",
    "agentic AI audit trails",
    "Shopify Plus operations partner",
  ],
  authors: [{ name: "Glitchless Systems" }],
  creator: "Glitchless Systems",
  publisher: "Glitchless Systems Private Limited",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://glitchless.ai",
    title: "Glitchless | AI-Operated Business Systems",
    description:
      "Most companies don't need more AI tools. They need an operating system that actually runs the work. Governed AI, CRM intelligence, and ecommerce operations.",
    siteName: "Glitchless",
    images: [
      {
        url: "https://glitchless.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glitchless - AI-Operated Business Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glitchless | AI-Operated Business Systems",
    description:
      "Governed AI agents, CRM intelligence, and ecommerce operations systems engineered for high-growth enterprises.",
    creator: "@glitchless_ai",
    images: ["https://glitchless.ai/og-image.png"],
  },
  alternates: {
    canonical: "https://glitchless.ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://glitchless.ai/#organization",
        name: SITE_CONFIG.name,
        legalName: SITE_CONFIG.legalName,
        url: SITE_CONFIG.url,
        logo: "https://glitchless.ai/logo.png",
        description: SITE_CONFIG.subheadline,
        telephone: SITE_CONFIG.contact.phone,
        email: SITE_CONFIG.contact.salesEmail,
        sameAs: [
          SITE_CONFIG.socials.linkedin,
          SITE_CONFIG.socials.twitter,
          SITE_CONFIG.socials.github,
          SITE_CONFIG.socials.youtube,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE_CONFIG.contact.phone,
            contactType: "operations audit and technical inquiries",
            areaServed: ["IN", "US", "GB", "AE", "SG"],
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://glitchless.ai/#localBusinessBengaluru",
        name: "Glitchless Systems - Bengaluru Engineering Center",
        url: "https://glitchless.ai",
        telephone: SITE_CONFIG.contact.phone,
        priceRange: "₹₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Tower 2B, RMZ Infinity, Old Madras Road, Bennigana Halli",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560016",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://glitchless.ai/#website",
        url: "https://glitchless.ai",
        name: "Glitchless",
        description: SITE_CONFIG.subheadline,
        publisher: {
          "@id": "https://glitchless.ai/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fbfcfd] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
        <JsonLd data={globalSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

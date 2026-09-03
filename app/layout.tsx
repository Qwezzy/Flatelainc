import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "FLATELA (PTY) LTD is a South African holding company registered in 2026. It will house intended pillar projects across Property, Data & Technology, Retail, Travel, Energy, and Education.";

export const metadata: Metadata = {
  metadataBase: new URL("https://flatelainc.co.za"),
  title: {
    default: "Flatela — FLATELA (PTY) LTD",
    template: "%s — Flatela",
  },
  description,
  openGraph: {
    title: "Flatela",
    description,
    url: "https://flatelainc.co.za",
    siteName: "Flatela",
    images: ["/og-image.png"],
    locale: "en_ZA",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FLATELA (PTY) LTD",
  alternateName: "Flatela",
  url: "https://flatelainc.co.za",
  identifier: "2026/291183/07",
  foundingDate: "2026-04-09",
  address: {
    "@type": "PostalAddress",
    streetAddress: "75 Kanna Street, Northmead Ext 4",
    addressLocality: "Benoni",
    postalCode: "1501",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body className={`${sourceSerif.variable} ${sourceSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-moss focus:text-cream focus:rounded-md focus-moss"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

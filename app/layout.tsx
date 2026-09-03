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

export const metadata: Metadata = {
  metadataBase: new URL("https://flatelainc.co.za"),
  title: {
    default: "Flatela Inc — FLATELA (PTY) LTD",
    template: "%s — Flatela Inc",
  },
  description:
    "FLATELA (PTY) LTD t/a Flatela Inc is a South African holding company registered in 2026. It will house intended pillar projects across Property, Data & Technology, Retail, Travel, Energy, and Education.",
  openGraph: {
    title: "Flatela Inc",
    description:
      "FLATELA (PTY) LTD t/a Flatela Inc — a holding company registered in 2026 that will house intended pillar projects.",
    url: "https://flatelainc.co.za",
    siteName: "Flatela Inc",
    images: ["/og-image.png"],
    locale: "en_ZA",
    type: "website",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-moss focus:text-cream focus:rounded-md focus-bronze"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

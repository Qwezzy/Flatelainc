import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flatelainc.co.za"),
  title: "Flatela Inc. — A South African Family Enterprise",
  description:
    "A multi-generational family-owned holding company building across Property, Data, Retail, Travel, Energy, and Education in South Africa.",
  openGraph: {
    title: "Flatela Inc.",
    description: "Together, we are building something that will outlast us.",
    url: "https://flatelainc.co.za",
    siteName: "Flatela Inc.",
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
      <body className={`${fraunces.variable} ${manrope.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-bronze focus:text-cream focus:rounded-md focus-bronze"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

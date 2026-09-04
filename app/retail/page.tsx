import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import RetailPillar from "@/components/sections/RetailPillar";

const description =
  "Retail is an intended line of FLATELA (PTY) LTD. Flatela plans direct importation of fashion and furniture via e-commerce and wholesale — not a live shop or stocked catalogue.";

export const metadata: Metadata = {
  title: {
    absolute: "Retail — Flatela · FLATELA (PTY) LTD",
  },
  description,
  openGraph: {
    title: "Retail — Flatela · FLATELA (PTY) LTD",
    description,
    url: "https://flatelainc.co.za/retail",
    siteName: "Flatela",
    images: ["/og-image.png"],
    locale: "en_ZA",
    type: "website",
  },
};

export default function RetailPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <RetailPillar />
      </main>
      <Footer />
    </>
  );
}

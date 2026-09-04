import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PropertyPillar from "@/components/sections/PropertyPillar";

const description =
  "Property is an intended line of FLATELA (PTY) LTD. Flatela plans residential renovation and managed rental portfolios — not a live landlord or estate agent.";

export const metadata: Metadata = {
  title: {
    absolute: "Property — Flatela · FLATELA (PTY) LTD",
  },
  description,
  openGraph: {
    title: "Property — Flatela · FLATELA (PTY) LTD",
    description,
    url: "https://flatelainc.co.za/property",
    siteName: "Flatela",
    images: ["/og-image.png"],
    locale: "en_ZA",
    type: "website",
  },
};

export default function PropertyPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <PropertyPillar />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import TravelPillar from "@/components/sections/TravelPillar";

const description =
  "Travel is an intended line of FLATELA (PTY) LTD. Flatela plans leisure, corporate, and educational travel work — not a live travel agency, and we do not claim IATA accreditation.";

export const metadata: Metadata = {
  title: {
    absolute: "Travel — Flatela · FLATELA (PTY) LTD",
  },
  description,
  openGraph: {
    title: "Travel — Flatela · FLATELA (PTY) LTD",
    description,
    url: "https://flatelainc.co.za/travel",
    siteName: "Flatela",
    images: ["/og-image.png"],
    locale: "en_ZA",
    type: "website",
  },
};

export default function TravelPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <TravelPillar />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import EnergyPillar from "@/components/sections/EnergyPillar";

const description =
  "Energy is an intended line of FLATELA (PTY) LTD. Flatela plans residential and commercial solar PV, battery storage, and related energy work — not a live installation business.";

export const metadata: Metadata = {
  title: {
    absolute: "Energy — Flatela · FLATELA (PTY) LTD",
  },
  description,
  openGraph: {
    title: "Energy — Flatela · FLATELA (PTY) LTD",
    description,
    url: "https://flatelainc.co.za/energy",
    siteName: "Flatela",
    images: ["/og-image.png"],
    locale: "en_ZA",
    type: "website",
  },
};

export default function EnergyPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <EnergyPillar />
      </main>
      <Footer />
    </>
  );
}

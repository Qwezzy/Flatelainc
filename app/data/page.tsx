import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import DataPillar from "@/components/sections/DataPillar";

const description =
  "Data & Technology is an intended line of FLATELA (PTY) LTD. Flatela plans survey, storage, ML, and data management work — not a live processor or trading division.";

export const metadata: Metadata = {
  title: {
    absolute: "Data & Technology — Flatela · FLATELA (PTY) LTD",
  },
  description,
  openGraph: {
    title: "Data & Technology — Flatela · FLATELA (PTY) LTD",
    description,
    url: "https://flatelainc.co.za/data",
    siteName: "Flatela",
    images: ["/og-image.png"],
    locale: "en_ZA",
    type: "website",
  },
};

export default function DataPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <DataPillar />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import EducationPillar from "@/components/sections/EducationPillar";

const description =
  "Education is an intended line of FLATELA (PTY) LTD. Flatela plans a community Education Centre — not a live school, campus, or enrolment product.";

export const metadata: Metadata = {
  title: {
    absolute: "Education — Flatela · FLATELA (PTY) LTD",
  },
  description,
  openGraph: {
    title: "Education — Flatela · FLATELA (PTY) LTD",
    description,
    url: "https://flatelainc.co.za/education",
    siteName: "Flatela",
    images: ["/og-image.png"],
    locale: "en_ZA",
    type: "website",
  },
};

export default function EducationPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <EducationPillar />
      </main>
      <Footer />
    </>
  );
}

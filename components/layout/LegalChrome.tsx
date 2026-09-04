import type { ReactNode } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function LegalChrome({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-cream pt-28 lg:pt-32 pb-20 px-6 lg:px-12">
        <article className="max-w-3xl mx-auto flex flex-col gap-6">{children}</article>
      </main>
      <Footer />
    </>
  );
}

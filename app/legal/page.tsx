import type { Metadata } from "next";
import LegalChrome from "@/components/layout/LegalChrome";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Legal notice for FLATELA (PTY) LTD, a South African holding company registered in 2026.",
};

export default function LegalPage() {
  return (
    <LegalChrome>
      <p className="eyebrow text-moss">Legal</p>
      <h1 className="font-serif-display font-light text-display-lg text-brown">
        Legal notice
      </h1>
      <p className="font-sans text-body-sm text-ink-mute">
        FLATELA (PTY) LTD · 2026/291183/07 · Last updated September 2026
      </p>

      <h2 className="font-serif-display font-semibold text-display-md text-brown pt-4">
        Company
      </h2>
      <p className="font-sans text-body text-ink leading-[1.65]">
        The legal name of the company is FLATELA (PTY) LTD. It is a private
        company registered in the Republic of South Africa on 9 April 2026,
        enterprise number 2026/291183/07. Sole director: Khwezi Flatela. The
        public wordmark on this site is Flatela.
      </p>
      <p className="font-sans text-body text-ink leading-[1.65]">
        Address: 75 Kanna Street, Northmead Ext 4, Benoni, 1501, Gauteng, South
        Africa. Website:{" "}
        <a className="text-moss underline" href="https://flatelainc.co.za">
          flatelainc.co.za
        </a>
        . Contact:{" "}
        <a className="text-moss underline" href="mailto:info@flatelainc.co.za">
          info@flatelainc.co.za
        </a>
        .
      </p>

      <h2 className="font-serif-display font-semibold text-display-md text-brown pt-4">
        What this site describes
      </h2>
      <p className="font-sans text-body text-ink leading-[1.65]">
        FLATELA (PTY) LTD is a holding company registered in 2026 that will
        house intended pillar projects: Property, Data &amp; Technology, Retail,
        Travel, Energy, and Education. Those six names are intended lines of
        work, not live trading divisions. Nothing on this site is an offer of
        financial services, travel ticketing, energy installation, education
        programmes, or data-processing services unless and until a specific
        engagement is agreed in writing.
      </p>

      <h2 className="font-serif-display font-semibold text-display-md text-brown pt-4">
        No extra claims
      </h2>
      <p className="font-sans text-body text-ink leading-[1.65]">
        We do not claim IATA accreditation, SETA or government funding, a
        commercial POPIA-processor service, or educator-screening products. We
        do not publish a VAT number on this site. Origin-story dates (a family
        conversation in 2024) are narrative only; the company was registered in
        2026.
      </p>

      <h2 className="font-serif-display font-semibold text-display-md text-brown pt-4">
        Liability and law
      </h2>
      <p className="font-sans text-body text-ink leading-[1.65]">
        The site is provided as general information. South African law applies.
        Courts of Gauteng have jurisdiction, without limiting any non-excludable
        rights you have under consumer law.
      </p>
    </LegalChrome>
  );
}

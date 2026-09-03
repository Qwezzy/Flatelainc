import type { Metadata } from "next";
import LegalChrome from "@/components/layout/LegalChrome";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How FLATELA (PTY) LTD handles personal information on this marketing site.",
};

export default function PrivacyPage() {
  return (
    <LegalChrome>
      <p className="eyebrow text-moss">Privacy</p>
      <h1 className="font-serif-display font-light text-display-lg text-brown">
        Privacy notice
      </h1>
      <p className="font-sans text-body-sm text-ink-mute">
        FLATELA (PTY) LTD · 2026/291183/07 · Last updated September 2026
      </p>

      <p className="font-sans text-body text-ink leading-[1.65]">
        This is a static marketing website. It does not offer user accounts,
        payments, or an online application form. We do not provide a commercial
        data-processing service for third parties.
      </p>

      <h2 className="font-serif-display font-semibold text-display-md text-brown pt-4">
        Who we are
      </h2>
      <p className="font-sans text-body text-ink leading-[1.65]">
        FLATELA (PTY) LTD is a private company registered in South Africa on 9
        April 2026 (enterprise number 2026/291183/07). Sole director: Khwezi
        Flatela. Registered address: 75 Kanna Street, Northmead Ext 4, Benoni,
        1501, Gauteng.
      </p>
      <p className="font-sans text-body text-ink leading-[1.65]">
        Contact for this notice:{" "}
        <a className="text-moss underline" href="mailto:info@flatelainc.co.za">
          info@flatelainc.co.za
        </a>
        .
      </p>

      <h2 className="font-serif-display font-semibold text-display-md text-brown pt-4">
        What we collect
      </h2>
      <p className="font-sans text-body text-ink leading-[1.65]">
        If you email us, we receive whatever you send — typically your address,
        name, and the content of the message. Hosting and DNS providers may
        process technical logs (IP address, user agent, time of request) as
        part of serving this site. We do not run analytics tags on this version
        of the site, and we do not invent additional processors.
      </p>

      <h2 className="font-serif-display font-semibold text-display-md text-brown pt-4">
        Why we use it
      </h2>
      <p className="font-sans text-body text-ink leading-[1.65]">
        Under the Protection of Personal Information Act 4 of 2013 we process
        enquiry information only to respond to you and, where relevant, to keep
        a limited record of the correspondence. We do not sell personal
        information. We do not use it for automated decision-making.
      </p>

      <h2 className="font-serif-display font-semibold text-display-md text-brown pt-4">
        Sharing and retention
      </h2>
      <p className="font-sans text-body text-ink leading-[1.65]">
        We share information only where the law requires it, or where a service
        provider must see it to deliver email or hosting. We keep enquiry
        correspondence only as long as needed for the conversation and ordinary
        business records.
      </p>

      <h2 className="font-serif-display font-semibold text-display-md text-brown pt-4">
        Your rights
      </h2>
      <p className="font-sans text-body text-ink leading-[1.65]">
        You may ask us what personal information we hold about you, request
        correction, or object to processing, by writing to{" "}
        <a className="text-moss underline" href="mailto:info@flatelainc.co.za">
          info@flatelainc.co.za
        </a>
        . You may also lodge a complaint with the Information Regulator
        (South Africa).
      </p>
    </LegalChrome>
  );
}

import type { Metadata } from "next";
import { EnquiryPageClient } from "./EnquiryPageClient";

export const metadata: Metadata = {
  title: "Enquiry | Blake Smart Solutions",
  description:
    "Send an enquiry to Blake Smart Solutions for Wi-Fi, Starlink, security cameras, alarms, antennas and data cabling in Perth.",
  alternates: {
    canonical: "https://www.blakesmartsolutions.com.au/enquiry",
  },
};

export default function EnquiryPage() {
  return (
    <section className="min-h-[60vh] bg-[var(--color-page)] px-5 py-20 text-[var(--color-ink)]">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Enquiry
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Send an enquiry
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          The enquiry form should open automatically.
        </p>
        <EnquiryPageClient />
      </div>
    </section>
  );
}

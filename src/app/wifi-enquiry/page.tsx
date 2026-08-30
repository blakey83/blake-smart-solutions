import type { Metadata } from "next";
import { EnquiryPageClient } from "@/app/enquiry/EnquiryPageClient";
import { enquiryProductContent } from "@/content/components/siteContent";
import { buildSeoMetadata } from "@/lib/seoMetadata";

const pagePath = "/wifi-enquiry";

export const metadata: Metadata = buildSeoMetadata({
  title: "Wi-Fi Connectivity Quote Perth | Blake Smart Solutions",
  description:
    "Tell Blake Smart Solutions where your Wi-Fi is not reaching and what you need connected. Request a clear quote for the right connectivity solution.",
  path: pagePath,
});

export default function WifiEnquiryPage() {
  return (
    <section className="min-h-[60vh] bg-[var(--color-page)] px-5 py-20 text-[var(--color-ink)]">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Wi-Fi &amp; connectivity
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Get a connectivity quote
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
          Tell us where the network isn’t reaching and what you need connected.
          The enquiry form should open automatically.
        </p>
        <EnquiryPageClient
          productName={enquiryProductContent.wifiSolutions}
          redirectTo="/wifi-solutions-perth"
        />
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { trackPhoneClick } from "@/lib/analytics";
import { openEnquiryModal } from "@/lib/enquiryModal";

type WifiSitelinkCtasProps = {
  productName: string;
  service?: "wifi" | "starlink";
  layout?: "hero" | "center" | "mobile";
};

export function WifiSitelinkCtas({
  productName,
  layout = "hero",
  service = "wifi",
}: WifiSitelinkCtasProps) {
  const quoteButton = (
    <button
      type="button"
      onClick={() =>
        openEnquiryModal(productName, {
          defaultMessage: service === "starlink"
            ? `I’d like a quote for Starlink installation at my business. My suburb, premises type and Starlink kit are: `
            : `I’d like a quote for ${productName.toLowerCase()}. The area or connection I need help with is: `,
        })
      }
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,110,184,0.2)] transition hover:bg-[var(--color-accent-strong)] ${layout === "mobile" ? "w-full" : ""}`.trim()}
    >
      {service === "starlink" ? "Get a Starlink Installation Quote" : "Get a Connectivity Quote"}
    </button>
  );

  if (layout === "mobile") {
    return quoteButton;
  }

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row ${
        layout === "center" ? "justify-center" : ""
      }`}
    >
      {quoteButton}
      <Link
        href="tel:0477948079"
        onClick={trackPhoneClick}
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-6 text-sm font-semibold !text-black transition hover:border-[var(--color-accent)] hover:!text-[var(--color-accent)]"
      >
        Call for a Free Quote
      </Link>
    </div>
  );
}

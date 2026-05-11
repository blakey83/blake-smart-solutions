"use client";

import Link from "next/link";
import {
  enquiryProductContent,
  wifiArticleCtaContent,
} from "@/content/siteContent";
import { openEnquiryModal } from "@/lib/enquiryModal";

type WifiLandingPageCtasProps = {
  primaryLabel?: string;
  secondaryLabel?: string;
  className?: string;
  showSecondary?: boolean;
};

export function WifiLandingPageCtas({
  primaryLabel = wifiArticleCtaContent.defaultPrimaryLabel,
  secondaryLabel = wifiArticleCtaContent.defaultSecondaryLabel,
  className = "",
  showSecondary = true,
}: WifiLandingPageCtasProps) {
  const primaryClasses =
    "inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(13,160,245,0.2)] transition hover:bg-[var(--color-accent-strong)]";
  const secondaryClasses =
    "inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white px-5 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`.trim()}>
      <button
        type="button"
        onClick={() => openEnquiryModal(enquiryProductContent.wifiHealthCheck)}
        className={primaryClasses}
      >
        {primaryLabel}
      </button>

      {showSecondary ? (
        <Link href="tel:0477948079" className={secondaryClasses}>
          {secondaryLabel}
        </Link>
      ) : null}
    </div>
  );
}

"use client";

import { openEnquiryModal } from "@/lib/enquiryModal";

const DEFAULT_MESSAGE =
  "Hi, I'm interested in getting help with my Starlink setup.";

type StarlinkSetupCtaProps = {
  children: React.ReactNode;
  className?: string;
};

export function StarlinkSetupCta({
  children,
  className = "",
}: StarlinkSetupCtaProps) {
  return (
    <button
      type="button"
      onClick={() =>
        openEnquiryModal("Starlink Installation", {
          defaultMessage: DEFAULT_MESSAGE,
          tracking: {
            source: "starlink_setup_perth",
            default_message: DEFAULT_MESSAGE,
          },
        })
      }
      className={`inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(13,160,245,0.2)] transition hover:bg-[var(--color-accent-strong)] ${className}`.trim()}
    >
      {children}
    </button>
  );
}

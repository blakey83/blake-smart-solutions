"use client";

import { enquiryProductContent } from "@/content/siteContent";
import { trackClickToCall } from "@/lib/analytics";
import { openEnquiryModal } from "@/lib/enquiryModal";

const DEFAULT_MESSAGE =
  "Hi, I'm interested in getting help with my wireless network.";

type WifiProblemsCtaProps = {
  children: React.ReactNode;
  className?: string;
};

export function WifiProblemsCta({
  children,
  className = "",
}: WifiProblemsCtaProps) {
  return (
    <button
      type="button"
      onClick={() =>
        openEnquiryModal(enquiryProductContent.wifiHelp, {
          defaultMessage: DEFAULT_MESSAGE,
          tracking: {
            source: "wifi_problems_perth_landing",
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

type WifiProblemsCallLinkProps = {
  children: React.ReactNode;
  className?: string;
};

export function WifiProblemsCallLink({
  children,
  className = "",
}: WifiProblemsCallLinkProps) {
  return (
    <a
      href="tel:0477948079"
      onClick={trackClickToCall}
      className={className}
    >
      {children}
    </a>
  );
}

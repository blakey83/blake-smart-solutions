"use client";

import { openEnquiryModal } from "@/lib/enquiryModal";

const DEFAULT_MESSAGE = "Come fix my Wi-Fi!";

export function WifiArticleInlineCta({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`.trim()}>
      <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm leading-6 shadow-sm">
        <span className="text-[var(--color-muted)]">Need help in Perth?</span>
        <button
          type="button"
          onClick={() =>
            openEnquiryModal("Wi-Fi Help", {
              defaultMessage: DEFAULT_MESSAGE,
              tracking: {
                source: "wifi_article_inline_cta",
                default_message: DEFAULT_MESSAGE,
              },
            })
          }
          className="font-semibold text-[var(--color-accent)] underline-offset-4 transition hover:text-[var(--color-accent-strong)] hover:underline"
        >
          Book a commercial-grade Wi-Fi survey to tell you exactly how to fix
          your network for just $99 (valued at $399).
        </button>
      </div>
    </div>
  );
}

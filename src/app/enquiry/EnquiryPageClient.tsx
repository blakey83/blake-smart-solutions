"use client";

import { useEffect } from "react";
import { enquiryPageContent } from "@/content/pages/enquiryPage";
import { enquiryProductContent } from "@/content/components/siteContent";
import { openEnquiryModal } from "@/lib/enquiryModal";

function openEnquiryPageModal() {
  openEnquiryModal(enquiryProductContent.generalQuoteRequest, {
    redirectTo: "/",
  });
}

export function EnquiryPageClient() {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      openEnquiryPageModal();
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={openEnquiryPageModal}
      className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--color-accent-strong)]"
    >
      {enquiryPageContent.openCta}
    </button>
  );
}

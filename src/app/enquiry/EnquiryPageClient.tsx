"use client";

import { useEffect } from "react";
import { enquiryPageContent } from "@/content/pages/enquiryPage";
import { enquiryProductContent } from "@/content/components/siteContent";
import { openEnquiryModal } from "@/lib/enquiryModal";

type EnquiryPageClientProps = {
  productName?: string;
  redirectTo?: string;
};

export function EnquiryPageClient({
  productName = enquiryProductContent.generalQuoteRequest,
  redirectTo = "/",
}: EnquiryPageClientProps) {
  const openEnquiryPageModal = () => {
    openEnquiryModal(productName, { redirectTo });
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      openEnquiryModal(productName, { redirectTo });
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [productName, redirectTo]);

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

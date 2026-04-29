"use client";

import { useEffect } from "react";
import { openEnquiryModal } from "@/lib/enquiryModal";

function openEnquiryPageModal() {
  openEnquiryModal("General Quote Request", { redirectTo: "/" });
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
      Open enquiry form
    </button>
  );
}

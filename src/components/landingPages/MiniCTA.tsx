"use client";

import { securityLandingPageContent } from "@/content/landing-page-contents/securityLandingPage";
import { openEnquiryModal } from "@/lib/enquiryModal";

export function MiniCTA() {
  const { miniCta } = securityLandingPageContent;

  return (
    <section className="relative isolate overflow-hidden bg-black px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(220,38,38,0.22),rgba(13,160,245,0.12)_48%,rgba(220,38,38,0.16))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-red-600/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-sky-500/45 to-transparent" />

      <div className="mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">
            {miniCta.eyebrow}
          </p>
          <p className="mt-2 text-2xl font-black uppercase leading-tight text-white sm:text-3xl">
            {miniCta.title}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-red-600 px-5 text-sm font-black uppercase text-white shadow-[0_14px_38px_rgba(220,38,38,0.28)] transition hover:bg-red-700 sm:px-6"
          >
            <CalendarIcon />
            {miniCta.primaryCta}
          </button>
          <a
            href="tel:0477948079"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/40 bg-black/35 px-5 text-sm font-black uppercase text-white transition hover:border-white hover:bg-white/10 sm:px-6"
          >
            <PhoneIcon />
            {miniCta.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
    >
      <path d="M7 3v3m10-3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M9 13h3m-3 3h6m1-5v4l3-2-3-2Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      fill="currentColor"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.28-.28.68-.36 1.04-.25 1.15.38 2.38.58 3.65.58.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.7 21 3 13.3 3 3.9c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.27.2 2.5.58 3.65.11.36.03.76-.25 1.04l-2.21 2.2Z" />
    </svg>
  );
}

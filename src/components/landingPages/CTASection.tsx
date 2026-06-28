"use client";

import { securityLandingPageContent } from "@/content/components/securityLandingPage";
import { trackPhoneClick } from "@/lib/analytics";
import { openEnquiryModal } from "@/lib/enquiryModal";

export function CTASection() {
  const { cta } = securityLandingPageContent;

  return (
    <section className="relative isolate overflow-hidden bg-black px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_22%_18%,rgba(220,38,38,0.22),transparent_24rem),radial-gradient(circle_at_78%_56%,rgba(13,160,245,0.16),transparent_28rem),linear-gradient(180deg,#050505_0%,#09090b_55%,#020202_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-px bg-gradient-to-r from-transparent via-red-600/65 to-transparent" />

      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-red-600">
          {cta.eyebrow}
        </p>
        <h2 className="mt-4 text-4xl font-black uppercase leading-[0.96] tracking-normal text-white sm:text-5xl lg:text-6xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          {cta.intro}
        </p>

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => openEnquiryModal()}
            className="inline-flex min-h-16 items-center justify-center gap-3 rounded-md bg-red-600 px-6 text-base font-black uppercase text-white shadow-[0_14px_38px_rgba(220,38,38,0.28)] transition hover:bg-red-700 sm:px-8 sm:text-lg"
          >
            <CalendarIcon />
            {cta.primaryCta}
          </button>
          <a
            href="tel:0477948079"
            onClick={trackPhoneClick}
            className="inline-flex min-h-16 items-center justify-center gap-3 rounded-md border border-white/45 bg-black/35 px-6 text-base font-black uppercase text-white transition hover:border-white hover:bg-white/10 sm:px-8 sm:text-lg"
          >
            <PhoneIcon />
            {cta.secondaryCta}
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
      className="h-6 w-6 shrink-0"
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
      className="h-6 w-6 shrink-0"
      fill="currentColor"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.28-.28.68-.36 1.04-.25 1.15.38 2.38.58 3.65.58.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.7 21 3 13.3 3 3.9c0-.56.44-1 1-1h3.5c.56 0 1 .44 1 1 0 1.27.2 2.5.58 3.65.11.36.03.76-.25 1.04l-2.21 2.2Z" />
    </svg>
  );
}

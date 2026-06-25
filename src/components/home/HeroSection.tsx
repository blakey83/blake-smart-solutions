"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackPhoneClick } from "@/lib/analytics";
import { openEnquiryModal } from "@/lib/enquiryModal";
import { heroSectionContent } from "@/content/home/heroSection";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[620px] overflow-hidden bg-[var(--color-ink)] text-white lg:min-h-[680px]">
      <Image
        src={heroSectionContent.imageSrc}
        alt={heroSectionContent.imageAlt}
        fill
        sizes="100vw"
        loading="eager"
        className="absolute inset-0 -z-20 object-cover object-[58%_top] sm:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(31,41,55,0.80)_0%,rgba(31,41,55,0.66)_46%,rgba(31,41,55,0.88)_100%)] lg:bg-[linear-gradient(90deg,rgba(31,41,55,0.92)_0%,rgba(31,41,55,0.78)_40%,rgba(13,160,245,0.18)_72%,rgba(31,41,55,0.38)_100%)]" />

      <div className="mx-auto flex w-full max-w-6xl px-5 pt-12 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pt-32 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="flex min-h-[560px] w-full max-w-3xl flex-col justify-between text-left sm:min-h-[542px] lg:min-h-[528px]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
              {heroSectionContent.eyebrow}
            </p>

            <h1 className="mt-3 max-w-3xl text-[2.35rem] font-semibold leading-[1.04] tracking-tight sm:mt-4 sm:text-5xl sm:leading-tight lg:text-6xl">
              {heroSectionContent.title}
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-6 text-white/85 sm:hidden">
              {heroSectionContent.mobileDescription}
            </p>
            <p className="mt-5 hidden max-w-2xl text-base leading-7 text-white/85 sm:block sm:text-lg">
              {heroSectionContent.description}
            </p>
          </div>

          <div className="pt-10 sm:pt-14">
            <div className="inline-flex max-w-full flex-col gap-1.5 rounded-2xl border border-[var(--color-accent)]/35 bg-[var(--color-ink)]/72 px-3.5 py-2.5 text-left shadow-[0_18px_44px_rgba(15,23,42,0.26)] backdrop-blur-sm sm:max-w-xl sm:gap-2 sm:px-4 sm:py-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                <span
                  className="text-sm font-semibold tracking-[0.12em] text-amber-300"
                  aria-label="Five star Google review"
                >
                  {heroSectionContent.review.rating}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
                  {heroSectionContent.review.source}
                </span>
              </div>
              <p className="max-w-[21rem] text-sm leading-5 text-white/90 sm:max-w-none sm:text-base sm:leading-6">
                “{heroSectionContent.review.quote}”
              </p>
              <p className="text-sm font-semibold text-white/70">
                — {heroSectionContent.review.author}
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:gap-3">
              <Link
                href="tel:0477948079"
                onClick={trackPhoneClick}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[var(--color-accent)] px-5 py-2 text-base font-semibold text-white shadow-[0_14px_28px_rgba(13,160,245,0.22)] transition hover:bg-white hover:text-[var(--color-ink)] sm:w-auto sm:py-3"
              >
                {heroSectionContent.callCTA}
              </Link>

              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-[var(--color-accent-soft)]/70 bg-white/10 px-5 py-2 text-base font-semibold text-white backdrop-blur-sm transition hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)]/18 sm:w-auto sm:py-3"
              >
                {heroSectionContent.quoteCTA}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

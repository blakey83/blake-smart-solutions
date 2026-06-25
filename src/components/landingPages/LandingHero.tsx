"use client";

import { securityLandingPageContent } from "@/content/landing-page-contents/securityLandingPage";
import { trackPhoneClick } from "@/lib/analytics";
import { openEnquiryModal } from "@/lib/enquiryModal";

const trustIcons = {
  shield: (
    <path d="M12 3.75 5.25 6.1v5.55c0 4.32 2.83 7.36 6.75 8.6 3.92-1.24 6.75-4.28 6.75-8.6V6.1L12 3.75Zm0 4.2v6.75m-2.7-2.7 2.7 2.7 3.2-4.25" />
  ),
  insured: (
    <path d="m8 12.2 2.45 2.45L16.2 8.9M12 3.75 5.25 6.1v5.55c0 4.32 2.83 7.36 6.75 8.6 3.92-1.24 6.75-4.28 6.75-8.6V6.1L12 3.75Z" />
  ),
  location: (
    <>
      <path d="M19 10.3c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0Z" />
      <path d="M12 12.45a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
    </>
  ),
  installation: (
    <>
      <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
      <path d="M12 2.9v2.2m0 13.8v2.2M4.95 4.95l1.55 1.55m11 11 1.55 1.55M2.9 12h2.2m13.8 0h2.2M4.95 19.05l1.55-1.55m11-11 1.55-1.55" />
    </>
  ),
};

export function LandingHero() {
  const { hero } = securityLandingPageContent;

  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-black text-white">
      {/* Actual hero image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-[center_right] opacity-80"
        style={{
          backgroundImage: hero.backgroundImage,
        }}
      />

      {/* Dark overlays for text readability */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#020202_0%,rgba(2,2,2,0.96)_28%,rgba(2,8,18,0.62)_58%,rgba(2,2,2,0.28)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_22%,rgba(13,160,245,0.16),transparent_28rem)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.96))]" />

      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl flex-col justify-end px-5 pt-10 sm:px-6 lg:px-8">
        <div className="relative z-20 max-w-4xl pb-10 pt-10 sm:pb-14 lg:pb-36">
          <h1 className="max-w-5xl font-black uppercase leading-[0.88] tracking-normal">
            <span className="block text-[clamp(5rem,14vw,12.4rem)] text-red-600 drop-shadow-[0_8px_22px_rgba(0,0,0,0.75)]">
              {hero.titleLineOne}
            </span>
            <span className="mt-3 block text-[clamp(3.2rem,7.6vw,7.6rem)] text-white drop-shadow-[0_7px_18px_rgba(0,0,0,0.85)]">
              {hero.titleLineTwo}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-balance text-xl font-medium leading-tight text-zinc-200 sm:text-2xl">
            {hero.intro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => openEnquiryModal()}
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-md bg-red-600 px-6 text-base font-black uppercase text-white shadow-[0_14px_38px_rgba(220,38,38,0.28)] transition hover:bg-red-700 sm:px-8 sm:text-lg"
            >
              <CalendarIcon />
              {hero.primaryCta}
            </button>

            <a
              href="tel:0477948079"
              onClick={trackPhoneClick}
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-md border border-white/45 bg-black/35 px-6 text-base font-black uppercase text-white transition hover:border-white hover:bg-white/10 sm:px-8 sm:text-lg"
            >
              <PhoneIcon />
              {hero.secondaryCta}
            </a>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hero.trustItems.map((item) => (
              <div
                key={item.title}
                className="flex min-w-0 items-center gap-3 border-white/20 sm:border-r sm:pr-5 last:border-r-0"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-10 w-10 shrink-0 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                >
                  {trustIcons[item.icon as keyof typeof trustIcons]}
                </svg>
                <div className="min-w-0">
                  <p className="text-pretty text-base font-black uppercase leading-5 text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-30 border-t border-white/5 bg-zinc-950/92 px-5 py-5 backdrop-blur sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:gap-9">
          <div className="inline-flex w-fit items-center bg-white/5 px-5 py-3">
            <span className="text-3xl font-black tracking-normal text-white">
              {hero.productBadgePrefix}
              <span className="text-red-600">{hero.productBadgeHighlight}</span>
              {hero.productBadgeSuffix}
            </span>
          </div>
          <p className="text-lg font-medium text-zinc-100 sm:text-2xl">
            {hero.features.map((feature, index) => (
              <span key={feature}>
                {index > 0 ? (
                  <>
                    {" "}
                    <span className="px-2 text-red-600">•</span>{" "}
                  </>
                ) : null}
                {feature}
              </span>
            ))}
          </p>
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

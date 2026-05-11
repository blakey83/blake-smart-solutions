import Image from "next/image";
import { securityLandingPageContent } from "@/content/landing-page-contents/securityLandingPage";

export function WhatWeDoSection() {
  const { whatWeDo } = securityLandingPageContent;

  return (
    <section className="relative isolate overflow-hidden bg-[#f4f7fb] py-20 text-zinc-950 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_14%_14%,rgba(13,160,245,0.16),transparent_24rem),radial-gradient(circle_at_88%_24%,rgba(220,38,38,0.13),transparent_26rem),linear-gradient(180deg,#ffffff_0%,#f4f7fb_48%,#eef3f8_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-px bg-gradient-to-r from-transparent via-sky-500/55 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-600">
              {whatWeDo.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-[0.96] tracking-normal text-zinc-950 sm:text-5xl lg:text-6xl">
              {whatWeDo.title}
            </h2>
            <div className="mt-7 max-w-xl space-y-5 text-lg leading-8 text-zinc-700">
              {whatWeDo.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 overflow-hidden border border-zinc-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/products/security/call_out2.jpg"
                  alt={whatWeDo.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(2,6,23,0.72))]" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">
                    {whatWeDo.imageEyebrow}
                  </p>
                  <p className="mt-2 text-2xl font-black uppercase leading-tight">
                    {whatWeDo.imageTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <article className="border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="grid gap-6">
                <div className="max-w-2xl">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                    {whatWeDo.activeEyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-zinc-950">
                    {whatWeDo.activeTitle}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-zinc-700">
                    {whatWeDo.activeIntro}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
                  {whatWeDo.deterrenceFeatures.map((feature) => (
                    <FeaturePill key={feature}>{feature}</FeaturePill>
                  ))}
                </div>
              </div>
              <p className="mt-7 border-t border-zinc-200 pt-6 text-xl font-bold leading-8 text-zinc-950">
                {whatWeDo.activeClosing}
              </p>
            </article>

            <article className="grid overflow-hidden border border-zinc-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:grid-cols-[0.88fr_1.12fr]">
              <div className="bg-zinc-950 p-6 text-white sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-300">
                  {whatWeDo.phoneEyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase leading-tight">
                  {whatWeDo.phoneTitle}
                </h3>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-base leading-7 text-zinc-700">
                  {whatWeDo.phoneIntro}
                </p>
                <p className="mt-5 text-lg font-bold leading-7 text-zinc-950">
                  {whatWeDo.phoneClosing}
                </p>
              </div>
            </article>

            <article className="border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                    {whatWeDo.siteEyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-zinc-950">
                    {whatWeDo.siteTitle}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-zinc-700">
                    {whatWeDo.siteIntro}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {whatWeDo.assessmentItems.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </div>
              </div>
              <p className="mt-7 border-t border-zinc-200 pt-6 text-lg font-bold leading-7 text-zinc-950">
                {whatWeDo.siteClosing}
              </p>
            </article>

            <article className="border border-sky-200 bg-[linear-gradient(135deg,#ffffff_0%,#f3f9ff_48%,#fff5f5_100%)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-700">
                {whatWeDo.installEyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-zinc-950">
                {whatWeDo.installTitle}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                {whatWeDo.installIntro}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {whatWeDo.installTypes.map((type) => (
                  <div
                    key={type}
                    className="border border-zinc-200 bg-white px-4 py-3 text-sm font-black uppercase text-zinc-900"
                  >
                    {type}
                  </div>
                ))}
              </div>
              <p className="mt-7 text-xl font-bold leading-8 text-zinc-950">
                {whatWeDo.installClosing}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-16 items-center gap-3 border border-red-100 bg-red-50 px-4 py-3">
      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-600 shadow-[0_0_14px_rgba(220,38,38,0.55)]" />
      <span className="text-sm font-black uppercase leading-5 text-zinc-950 sm:text-[0.8rem]">
        {children}
      </span>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 border border-zinc-200 bg-zinc-50 px-4 py-3">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
      >
        <path d="m5 12 4 4L19 6" />
      </svg>
      <span className="text-sm font-bold uppercase leading-5 text-zinc-800">
        {children}
      </span>
    </div>
  );
}

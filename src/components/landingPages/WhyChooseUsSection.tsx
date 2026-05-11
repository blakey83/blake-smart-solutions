import Image from "next/image";
import { securityLandingPageContent } from "@/content/landing-page-contents/securityLandingPage";

export function WhyChooseUsSection() {
  const { whyChooseUs } = securityLandingPageContent;

  return (
    <section className="relative isolate overflow-hidden bg-white py-20 text-zinc-950 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_82%_18%,rgba(13,160,245,0.12),transparent_24rem),radial-gradient(circle_at_12%_78%,rgba(220,38,38,0.1),transparent_26rem),linear-gradient(180deg,#ffffff_0%,#f6f8fb_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-px bg-gradient-to-r from-transparent via-red-600/45 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-600">
              {whyChooseUs.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-[0.96] tracking-normal text-zinc-950 sm:text-5xl lg:text-6xl">
              {whyChooseUs.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700">
              {whyChooseUs.intro}
            </p>

            <div className="mt-10 overflow-hidden border border-zinc-200 bg-zinc-950 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/me_and_charlotte.png"
                  alt={whyChooseUs.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(2,6,23,0.78))]" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-300">
                    {whyChooseUs.imageEyebrow}
                  </p>
                  <p className="mt-2 text-2xl font-black uppercase leading-tight">
                    {whyChooseUs.imageTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <article className="border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex gap-4">
                <IconBadge>
                  <path d="M12 3.75 5.25 6.1v5.55c0 4.32 2.83 7.36 6.75 8.6 3.92-1.24 6.75-4.28 6.75-8.6V6.1L12 3.75Z" />
                  <path d="m8.5 12.2 2.35 2.35 4.9-5.1" />
                </IconBadge>
                <div>
                  <h3 className="text-2xl font-black uppercase leading-tight text-zinc-950">
                    {whyChooseUs.licenceTitle}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-zinc-700">
                    {whyChooseUs.licenceIntro}
                  </p>
                </div>
              </div>
            </article>

            <article className="border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex gap-4">
                <IconBadge>
                  <path d="M19 10.3c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0Z" />
                  <path d="M12 12.45a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
                </IconBadge>
                <div>
                  <h3 className="text-2xl font-black uppercase leading-tight text-zinc-950">
                    {whyChooseUs.localTitle}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-zinc-700">
                    {whyChooseUs.localIntro}
                  </p>
                </div>
              </div>
            </article>

            <article className="border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-600">
                {whyChooseUs.modernEyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-zinc-950">
                {whyChooseUs.modernTitle}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-700">
                {whyChooseUs.modernIntro}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {whyChooseUs.modernSystems.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-14 items-center gap-3 border border-red-100 bg-red-50 px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-600 shadow-[0_0_14px_rgba(220,38,38,0.55)]" />
                    <span className="text-sm font-black uppercase leading-5 text-zinc-950">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-zinc-200 pt-5 text-base font-bold leading-7 text-zinc-950">
                {whyChooseUs.modernClosing}
              </p>
            </article>

            <article className="border border-sky-200 bg-[linear-gradient(135deg,#f3f9ff_0%,#ffffff_48%,#fff5f5_100%)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-700">
                {whyChooseUs.propertyEyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-zinc-950">
                {whyChooseUs.propertyTitle}
              </h3>
              <p className="mt-5 text-lg leading-8 text-zinc-700">
                {whyChooseUs.propertyIntro}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-zinc-950 text-red-500">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        {children}
      </svg>
    </div>
  );
}

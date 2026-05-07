import Image from "next/image";

const installedItems = [
  "an active deterrence TiOC camera covering the front entry",
  "full-colour night vision cameras around the rear of the property",
  "remote phone access for live viewing and alerts",
];

const resultItems = [
  "better awareness around the property",
  "clearer night-time footage",
  "instant phone notifications",
  "stronger front-door deterrence",
  "simpler day-to-day use",
];

export function RecentWorkSection() {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 py-20 text-white sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_18%_20%,rgba(13,160,245,0.18),transparent_28rem),radial-gradient(circle_at_88%_34%,rgba(220,38,38,0.14),transparent_26rem),linear-gradient(180deg,#050505_0%,#0b0f16_48%,#020202_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-20 h-px bg-gradient-to-r from-transparent via-sky-400/55 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-600">
              Recent Installation — Safety Bay
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-[0.96] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Active deterrence upgrade for a retired couple in Safety Bay
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              This customer wanted better visibility around their home, along
              with a stronger deterrent at the front entrance.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <WorkImage
                src="/images/work_gallery/safety_bay1.jpg"
                alt="Safety Bay active deterrence camera installation"
                label="Front entry deterrence"
              />
              <WorkImage
                src="/images/work_gallery/safety_bay2.jpg"
                alt="Safety Bay rear security camera installation"
                label="Rear property coverage"
              />
            </div>
          </div>

          <div className="grid gap-5">
            <article className="border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8">
              <h3 className="text-2xl font-black uppercase leading-tight text-white">
                We installed:
              </h3>
              <ul className="mt-6 grid gap-3">
                {installedItems.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-zinc-200">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="grid overflow-hidden border border-white/10 bg-black/45 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-red-600 p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-red-50">
                  Front Camera
                </p>
                <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-white">
                  Warning lights and intelligent detection
                </h3>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-base leading-7 text-zinc-300">
                  The front camera was configured with active warning lights and
                  intelligent person detection to help deter unwanted visitors
                  approaching the property.
                </p>
              </div>
            </article>

            <article className="border border-sky-500/20 bg-[linear-gradient(135deg,rgba(13,160,245,0.13),rgba(255,255,255,0.04)_44%,rgba(220,38,38,0.08))] p-6 sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-300">
                Rear Coverage
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-white">
                Clear night-time visibility
              </h3>
              <p className="mt-5 text-base leading-7 text-zinc-300">
                At the rear of the home, the focus was clear night-time
                visibility and reliable coverage across outdoor areas without
                relying on poor-quality infrared footage.
              </p>
            </article>

            <article className="border border-white/10 bg-white p-6 text-zinc-950 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-8">
              <h3 className="text-2xl font-black uppercase leading-tight">
                The result was a cleaner, more modern system that provides:
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {resultItems.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-14 items-center gap-3 border border-zinc-200 bg-zinc-50 px-4 py-3"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-red-600 shadow-[0_0_14px_rgba(220,38,38,0.55)]" />
                    <span className="text-sm font-black uppercase leading-5">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-7 border-t border-zinc-200 pt-6 text-xl font-bold leading-8">
                Designed for real-world security, not just recording footage
                after the fact.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkImage({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="overflow-hidden border border-white/10 bg-black shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
      <div className="relative aspect-[4/3]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgba(0,0,0,0.72))]" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-white">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="mt-0.5 h-5 w-5 shrink-0 text-red-500"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.3"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

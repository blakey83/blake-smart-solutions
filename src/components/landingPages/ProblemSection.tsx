const alreadyGone = [
  "the car is gone",
  "the tools are gone",
  "the damage is already done",
];

const activeDeterrence = [
  "detect people intelligently",
  "trigger warning lights",
  "send instant phone alerts",
  "create a visible deterrent before someone reaches your home or business",
];

const budgetClaims = ["4K", "AI", "Smart alerts"];

const budgetFailures = [
  "miss important events",
  "trigger constant false alerts",
  "perform poorly at night",
  "become difficult to use day-to-day",
];

const protectedAreas = [
  "homes",
  "driveways",
  "workshops",
  "vehicles",
  "small businesses",
  "side access areas",
  "entry points",
];

export function ProblemSection() {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 py-20 text-white sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_18%_14%,rgba(220,38,38,0.18),transparent_26rem),radial-gradient(circle_at_82%_42%,rgba(13,160,245,0.14),transparent_28rem),linear-gradient(180deg,#020202_0%,#09090b_52%,#020202_100%)]" />
      <div className="absolute left-0 top-0 -z-20 h-px w-full bg-gradient-to-r from-transparent via-red-600/70 to-transparent" />
      <div className="absolute right-[-12rem] top-24 -z-10 h-[32rem] w-[32rem] rounded-full border border-red-600/15" />
      <div className="absolute right-[-8rem] top-40 -z-10 h-[20rem] w-[20rem] rounded-full border border-sky-500/15" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-600">
              The Problem
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-[0.95] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Most cameras only record what already happened.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              Traditional CCTV systems are reactive. They might help identify
              someone later, but they do very little to stop an intruder
              entering your property in the first place.
            </p>
          </div>

          <div className="space-y-6">
            <article className="border border-white/10 bg-black/45 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-8">
              <p className="text-xl font-bold text-white">
                By the time you check the footage:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {alreadyGone.map((item) => (
                  <div
                    key={item}
                    className="border-l-2 border-red-600 bg-red-600/8 px-4 py-4"
                  >
                    <p className="text-base font-black uppercase leading-5 text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <h3 className="text-2xl font-black uppercase leading-tight text-white">
                    That&apos;s where active deterrence changes everything.
                  </h3>
                  <p className="mt-4 text-base leading-7 text-zinc-300">
                    Modern security systems can:
                  </p>
                </div>
                <ul className="grid gap-3">
                  {activeDeterrence.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base text-zinc-100"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600 shadow-[0_0_16px_rgba(220,38,38,0.85)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-7 border-t border-white/10 pt-6 text-xl font-semibold leading-8 text-white">
                Because the best security system is the one that helps stop the
                incident from happening at all.
              </p>
            </article>

            <article className="grid overflow-hidden border border-white/10 bg-black/55 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-red-600 p-6 text-white sm:p-8">
                <h3 className="text-2xl font-black uppercase leading-tight">
                  Cheap systems create false confidence.
                </h3>
                <p className="mt-5 text-base font-medium leading-7 text-red-50">
                  A lot of budget camera systems look impressive on paper:
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {budgetClaims.map((claim) => (
                    <span
                      key={claim}
                      className="border border-white/35 bg-black/20 px-4 py-2 text-sm font-black uppercase"
                    >
                      &quot;{claim}&quot;
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-base font-bold uppercase text-zinc-200">
                  But in the real world, many systems:
                </p>
                <ul className="mt-5 grid gap-4">
                  {budgetFailures.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base text-zinc-300"
                    >
                      <WarningIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-base leading-7 text-zinc-300">
                  A properly designed security system should be reliable, simple
                  to use, and built around how people actually live and work.
                </p>
              </div>
            </article>

            <article className="border border-sky-500/20 bg-[linear-gradient(135deg,rgba(13,160,245,0.12),rgba(255,255,255,0.03)_42%,rgba(220,38,38,0.08))] p-6 sm:p-8">
              <h3 className="text-2xl font-black uppercase leading-tight text-white">
                Security is not just about footage anymore.
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-300">
                Today&apos;s systems are designed to actively protect:
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {protectedAreas.map((area) => (
                  <div
                    key={area}
                    className="border border-white/10 bg-black/35 px-4 py-3 text-sm font-black uppercase text-zinc-100"
                  >
                    {area}
                  </div>
                ))}
              </div>
              <p className="mt-7 text-xl font-semibold leading-8 text-white">
                With the right setup, you can know immediately when someone
                enters your property, even when you&apos;re not there.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function WarningIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="mt-0.5 h-5 w-5 shrink-0 text-red-600"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M12 3 2.8 20h18.4L12 3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

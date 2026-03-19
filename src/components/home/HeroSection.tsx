import { trustPoints } from "./content";
import { ButtonLink } from "../ui/ButtonLink";

export function HeroSection() {
  return (
    <section className="border-b border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Perth&apos;s Technical Solutions Specialists
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-5xl">
              Smart installation work that feels tidy, reliable, and easy to
              live with.
            </h1>
            <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              Blake Smart Solutions installs practical technology for homes and
              businesses, with a focus on clear communication, clean finishes,
              and systems that work properly day to day.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#services">View Services</ButtonLink>
              <ButtonLink href="#specials" variant="secondary">
                See Current Specials
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-6">
            <div className="rounded-3xl bg-white p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[var(--color-accent-soft)] text-2xl font-semibold text-[var(--color-accent)]">
                  BS
                </div>
                <div>
                  <p className="text-lg font-semibold text-[var(--color-ink)]">
                    Blake Smart Solutions
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">
                    Modern trade-business solutions without the fluff.
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <p className="text-sm leading-6 text-[var(--color-ink)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

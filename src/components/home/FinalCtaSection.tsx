import { ButtonLink } from "../ui/ButtonLink";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="bg-[var(--color-section)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-[28px] border border-[var(--color-border)] bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Final Step
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Ready to sort out CCTV, alarms, Wi-Fi, Starlink, antennas, or home
            entertainment?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Start with a quick conversation and we can point you toward the
            right setup for your property, coverage needs, and budget.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="tel:0477948079">
              Call Blake Smart Solutions
            </ButtonLink>
            <ButtonLink
              href="mailto:daniel@blakesmartsolutions.com.au"
              variant="secondary"
            >
              Email for a Quote
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-[var(--color-muted)] sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-4">
              <p className="font-semibold text-[var(--color-ink)]">Phone</p>
              <p className="mt-1">0477 948 079</p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-4">
              <p className="font-semibold text-[var(--color-ink)]">Email</p>
              <p className="mt-1 break-all">daniel@blakesmartsolutions.com.au</p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-4">
              <p className="font-semibold text-[var(--color-ink)]">ABN</p>
              <p className="mt-1">66 695 399 761</p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-4">
              <p className="font-semibold text-[var(--color-ink)]">
                Security Agent Licence
              </p>
              <p className="mt-1">SA84208</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ButtonLink } from "../ui/ButtonLink";

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="border-t border-[var(--color-border)] bg-white"
    >
      <div className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Get in touch
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Ready to sort out your Wi-Fi, security or installation needs?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
          Clear advice, practical solutions, and tidy workmanship for Perth
          homes and small businesses.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="tel:0477948079">Call 0477 948 079</ButtonLink>
          <ButtonLink href="/#contact" variant="secondary">
            Request a Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

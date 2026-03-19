import { services } from "./content";
import { SectionHeading } from "../ui/SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Services"
          title="Installation services built around security, connectivity, and everyday usability."
          description="The layout stays simple and readable while covering the core services Blake Smart Solutions is known for."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              id={service.slug}
              className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_14px_30px_rgba(15,23,42,0.04)]"
            >
              <div className="h-11 w-11 rounded-2xl bg-[var(--color-accent-soft)]" />
              <h3 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

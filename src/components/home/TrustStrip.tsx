const trustItems = [
  "Perth-based service",
  "Homes and businesses",
  "ABN 66 695 399 761",
  "Security Agent Licence SA84208",
];

export function TrustStrip() {
  return (
    <section className="border-y border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-6xl px-5 py-5 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-4 text-center text-sm font-medium text-[var(--color-ink)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

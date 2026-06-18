interface TrustItem {
  trustItems: string[];
}

export function TrustStrip({ trustItems }: TrustItem) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-section)]">
      <div className="mx-auto max-w-6xl px-5 py-5 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex min-h-12 items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

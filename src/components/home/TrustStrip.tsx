interface TrustItem {
  trustItems: string[];
}

export function TrustStrip({ trustItems }: TrustItem) {
  return (
    <section className="bg-[var(--color-ink)] text-white">
      <div className="mx-auto max-w-6xl px-5 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item}
              className="py-3 text-center text-sm font-medium opacity-90 border-white/10 sm:border-r last:border-r-0"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

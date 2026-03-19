import { specials } from "@/content/products";
import { SectionHeading } from "../ui/SectionHeading";
import ProductCard from "../ui/ProductCard";

export function SpecialsSection() {
  return (
    <section id="specials" className="bg-[var(--color-section)]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Specials"
          title="Straightforward offers for common callouts and upgrades."
          description="Fixed-price entry offers designed to solve common Wi-Fi and security problems without overcomplicating the process."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {specials.map((special) => (
            <ProductCard key={special.name} product={special} />
          ))}
        </div>
      </div>
    </section>
  );
}
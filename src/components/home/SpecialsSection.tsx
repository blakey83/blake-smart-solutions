import { specialsSectionContent } from "@/content/home/sections";
import { specials } from "@/content/products";
import { SectionHeading } from "../ui/SectionHeading";
import { ProductCardGrid } from "../products/ProductCardGrid";

export function SpecialsSection() {
  return (
    <section id="specials" className="bg-[var(--color-section)]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={specialsSectionContent.eyebrow}
          title={specialsSectionContent.title}
          description={specialsSectionContent.description}
        />

        <div className="mt-8">
          <ProductCardGrid
            products={specials}
            className="grid gap-6 lg:grid-cols-2"
          />
        </div>
      </div>
    </section>
  );
}

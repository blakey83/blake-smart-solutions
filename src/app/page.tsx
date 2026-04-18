import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemPathsSelection } from "@/components/home/ProblemPathsSelection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SpecialsSection } from "@/components/home/SpecialsSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { trustItems } from "@/content/products";

export default function Home() {
  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <HeroSection />
      <TrustStrip trustItems={trustItems} />
      <ProblemPathsSelection />
      <ServicesSection />
      <SpecialsSection />
      <FinalCtaSection />
    </div>
  );
}

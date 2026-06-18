import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProblemPathsSelection } from "@/components/home/ProblemPathsSelection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyBSS } from "@/components/landingPages/WhyBSS";
import { whyChooseUsHome } from "@/content/home/sections";
import { trustItems } from "@/content/products";

export default function Home() {
  return (
    <div className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <HeroSection />
      <TrustStrip trustItems={trustItems} />
      <WhyBSS content={whyChooseUsHome} background="section" />
      <ProblemPathsSelection />
      <ServicesSection />
      <FinalCtaSection />
    </div>
  );
}

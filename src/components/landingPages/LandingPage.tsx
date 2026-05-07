import { LandingHero } from "@/components/landingPages/LandingHero";
import { ProblemSection } from "@/components/landingPages/ProblemSection";
import { WhatWeDoSection } from "@/components/landingPages/WhatWeDoSection";
import { WhyChooseUsSection } from "@/components/landingPages/WhyChooseUsSection";
import { RecentWorkSection } from "@/components/landingPages/RecentWorkSection";
import { CTASection } from "@/components/landingPages/CTASection";
import { MiniCTA } from "@/components/landingPages/MiniCTA";

export function LandingPage() {
  return (
    <>
      <LandingHero />
      <ProblemSection />
      <WhatWeDoSection />
      <MiniCTA />
      <WhyChooseUsSection />
      <RecentWorkSection />
      <CTASection />
    </>
  );
}

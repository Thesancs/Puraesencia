
import { HeaderBanner } from "@/components/landing-bano/sections/HeaderBanner";
import { HeroSection } from "@/components/landing-bano/sections/HeroSection";
import { BenefitsSection } from "@/components/landing-bano/sections/BenefitsSection";
import { VideoSection } from "@/components/landing-bano/sections/VideoSection";
import { PersonalStorySection } from "@/components/landing-bano/sections/PersonalStorySection";
import { WhyPuraEsenciaSection } from "@/components/landing-bano/sections/WhyPuraEsenciaSection";
import { WhatYouGetSection } from "@/components/landing-bano/sections/WhatYouGetSection";
import { GallerySection } from "@/components/landing-bano/sections/GallerySection";
import { PricingSection } from "@/components/landing-bano/sections/PricingSection";
import { BonusSection } from "@/components/landing-bano/sections/BonusSection";
import { TestimonialsSection } from "@/components/landing-bano/sections/TestimonialsSection";
import { CertificateSection } from "@/components/landing-bano/sections/CertificateSection";
import { GuaranteeSection } from "@/components/landing-bano/sections/GuaranteeSection";
import { FaqSection } from "@/components/landing-bano/sections/FaqSection";

export default function LandingBanoPage() {
    console.log('[LandingBano] Page rendered');

  return (
    <div className="bg-white text-[#2C2C2C] font-body">
      <HeaderBanner />
      <main className="isolate">
        <HeroSection />
        <BenefitsSection />
        <VideoSection />
        <PersonalStorySection />
        <WhyPuraEsenciaSection />
        <GallerySection />
        <WhatYouGetSection />
        <PricingSection />
        <BonusSection />
        <TestimonialsSection />
        <CertificateSection />
        <GuaranteeSection />
        <PricingSection />
        <FaqSection />
      </main>
    </div>
  );
}

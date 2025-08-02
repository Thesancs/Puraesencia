
import { AlertTriangle, Check, ChevronDown, ShieldCheck } from "lucide-react";
import CtaButton from "@/components/landing-bano/CtaButton";
import { CertificateSection } from "@/components/landing-bano/sections/CertificateSection";
import { FaqSection } from "@/components/landing-bano/sections/FaqSection";
import { GuaranteeSection } from "@/components/landing-bano/sections/GuaranteeSection";
import { TestimonialsSection } from "@/components/landing-bano/sections/TestimonialsSection";
import { BonusSection } from "@/components/landing-bano/sections/BonusSection";
import { PricingSection } from "@/components/landing-bano/sections/PricingSection";
import { GallerySection } from "@/components/landing-bano/sections/GallerySection";
import { WhyPuraEsenciaSection } from "@/components/landing-bano/sections/WhyPuraEsenciaSection";
import { PersonalStorySection } from "@/components/landing-bano/sections/PersonalStorySection";
import { WhatYouGetSection } from "@/components/landing-bano/sections/WhatYouGetSection";
import { VideoSection } from "@/components/landing-bano/sections/VideoSection";
import { BenefitsSection } from "@/components/landing-bano/sections/BenefitsSection";
import { HeroSection } from "@/components/landing-bano/sections/HeroSection";
import { HeaderBanner } from "@/components/landing-bano/sections/HeaderBanner";

export default function LandingBanoPage() {
    console.log('[LandingBano] Page rendered');

  return (
    <div className="bg-white text-[#2C2C2C] font-body">
      <HeaderBanner />
      <main className="isolate">
        <HeroSection />
        <BenefitsSection />
        <VideoSection />
        <WhatYouGetSection />
        <PersonalStorySection />
        <WhyPuraEsenciaSection />
        <GallerySection />
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

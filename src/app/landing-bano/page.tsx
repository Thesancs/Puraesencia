import { HeaderBanner } from "@/components/landing-bano/sections/HeaderBanner";
import { HeroSection } from "@/components/landing-bano/sections/HeroSection";
import { BenefitsSection } from "@/components/landing-bano/sections/BenefitsSection";
import { VideoSection } from "@/components/landing-bano/sections/VideoSection";
import { WhyPuraEsenciaSection } from "@/components/landing-bano/sections/WhyPuraEsenciaSection";
import { GallerySection } from "@/components/landing-bano/sections/GallerySection";
import { BonusSection } from "@/components/landing-bano/sections/BonusSection";
import { TestimonialsSection } from "@/components/landing-bano/sections/TestimonialsSection";
import { CertificateSection } from "@/components/landing-bano/sections/CertificateSection";
import { GuaranteeSection } from "@/components/landing-bano/sections/GuaranteeSection";
import { FaqSection } from "@/components/landing-bano/sections/FaqSection";
import { Footer } from "@/components/landing-bano/sections/Footer";
import { OfferSection } from "@/components/landing-bano/sections/OfferSection";
import { IntroCardSection } from "@/components/landing-bano/sections/IntroCardSection";
import { GuideBenefitsSection } from "@/components/landing-bano/sections/GuideBenefitsSection";

export default function LandingBanoPage() {
    console.log('[LandingBano] Page rendered');

  return (
    <div className="antialiased text-foreground bg-background font-body">
      <HeaderBanner />
      <main className="isolate">
        <HeroSection />
        <IntroCardSection />
        <BenefitsSection />
        <VideoSection />
        <WhyPuraEsenciaSection />
        <GuideBenefitsSection />
        <GallerySection />
        <OfferSection />
        <BonusSection />
        <TestimonialsSection />
        <CertificateSection />
        <GuaranteeSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}

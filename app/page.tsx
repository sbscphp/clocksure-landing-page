import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { HeroSection } from "@/components/landing/hero-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { StatsSection } from "@/components/landing/stats-section"
import { FeaturePreviewSection } from "@/components/landing/feature-preview-section"
import { CTASection } from "@/components/landing/cta-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <StatsSection />
        <FeaturePreviewSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

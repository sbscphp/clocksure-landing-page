import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { CTASection } from "@/components/landing/cta-section"
import { FeaturesHero } from "@/components/landing/features-hero"
import { CoreFeaturesGrid } from "@/components/landing/core-features-grid"
import { AdvancedFeatures } from "@/components/landing/advanced-features"
import { FeatureComparison } from "@/components/landing/feature-comparison"

export const metadata = {
  title: "Features - Clocksure | Employee Time & Attendance Management",
  description: "Discover all the powerful features Clocksure offers: biometric tracking, real-time analytics, role-based permissions, audit trails, and more.",
}

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <FeaturesHero />
        <CoreFeaturesGrid />
        <AdvancedFeatures />
        <FeatureComparison />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

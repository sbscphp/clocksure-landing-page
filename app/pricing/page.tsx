import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PricingHero } from "@/components/landing/pricing-hero"
import { PricingCards } from "@/components/landing/pricing-cards"
import { PricingFAQ } from "@/components/landing/pricing-faq"
import { TrustIndicators } from "@/components/landing/trust-indicators"

export const metadata = {
  title: "Pricing - ClockSure | Subscription Pricing Plans",
  description: "ClockSure provides a fully white labelled attendance system. Annual subscriptions with dedicated instances branded with your organisation's logo. No feature restrictions across plans.",
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <PricingHero />
        <PricingCards />
        <PricingFAQ />
        <TrustIndicators />
      </main>
      <Footer />
    </div>
  )
}

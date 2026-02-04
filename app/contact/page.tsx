import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ContactHero } from "@/components/landing/contact-hero"
import { ContactForm } from "@/components/landing/contact-form"
import { ContactMethods } from "@/components/landing/contact-methods"
import { Testimonials } from "@/components/landing/testimonials"
import { CTASection } from "@/components/landing/cta-section"

export const metadata = {
  title: "Contact - Clocksure | Get in Touch",
  description: "Contact Clocksure for questions, demos, or support. Start your free trial today or schedule a personalized demo.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactForm />
        <ContactMethods />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

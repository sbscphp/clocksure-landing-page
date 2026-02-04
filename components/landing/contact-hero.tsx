"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function ContactHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--blue-deep)] via-[var(--blue-navy)] to-[var(--gray-charcoal)] py-20 lg:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(241,103,34,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          className={`text-4xl font-bold text-white transition-all duration-500 sm:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          Ready to Transform Your{" "}
          <span className="bg-gradient-to-r from-[var(--orange-primary)] to-[var(--orange-light)] bg-clip-text text-transparent">
            Workforce Management?
          </span>
        </h1>
        <p
          className={`mx-auto mt-6 max-w-2xl text-lg text-gray-300 transition-all delay-100 duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          Join thousands of companies using Clocksure to streamline attendance tracking and boost productivity. Start your free trial today.
        </p>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all delay-200 duration-500 sm:flex-row ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-[var(--orange-primary)] text-white shadow-lg shadow-[var(--orange-primary)]/25 hover:bg-[var(--orange-dark)]"
          >
            Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 px-8 text-lg font-semibold border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50"
          >
            Schedule a Demo
          </Button>
        </div>

        {/* Trust Text */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 transition-all delay-300 duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          {["No credit card required", "14-day free trial", "Cancel anytime"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[var(--success-green)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

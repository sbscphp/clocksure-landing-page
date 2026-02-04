"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PricingHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p
          className={`text-sm font-semibold uppercase tracking-wider text-[var(--orange-primary)] transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          Pricing
        </p>
        <h1
          className={`mt-4 text-4xl font-bold text-[var(--blue-deep)] transition-all delay-100 duration-500 sm:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          ClockSure Subscription Pricing
        </h1>
        <p
          className={`mx-auto mt-6 max-w-2xl text-lg text-[var(--gray-medium)] transition-all delay-200 duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          ClockSure provides a fully white labelled attendance system for your organisation. Every subscription includes a dedicated instance branded with your organisation's logo, including all system generated emails. There are no feature restrictions across plans.
        </p>
        <div
          className={`mt-8 transition-all delay-300 duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Button
            asChild
            variant="outline"
            className="border-[var(--orange-primary)] text-[var(--orange-primary)] hover:bg-[var(--orange-primary)] hover:text-white bg-transparent"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

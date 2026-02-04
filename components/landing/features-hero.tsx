"use client"

import { useEffect, useState } from "react"

export function FeaturesHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-gradient-to-b from-white to-[var(--gray-light)] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p
          className={`text-sm font-semibold uppercase tracking-wider text-[var(--orange-primary)] transition-all duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          Features
        </p>
        <h1
          className={`mt-4 text-4xl font-bold text-[var(--blue-deep)] transition-all delay-100 duration-500 sm:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          Everything You Need to Manage Your Workforce
        </h1>
        <p
          className={`mx-auto mt-6 max-w-2xl text-lg text-[var(--gray-medium)] transition-all delay-200 duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          Powerful features designed to streamline attendance management and boost productivity across your organization.
        </p>
      </div>
    </section>
  )
}

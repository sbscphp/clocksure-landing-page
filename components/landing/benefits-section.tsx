"use client"

import { Clock, BarChart3, Shield } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const benefits = [
  {
    icon: Clock,
    title: "Accurate Time Tracking",
    description: "Biometric QR code scanning ensures accurate clock in/out times with zero manual errors",
    color: "var(--orange-primary)",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Get instant insights into attendance patterns, punctuality, and workforce productivity",
    color: "var(--blue-sky)",
  },
  {
    icon: Shield,
    title: "Complete Control",
    description: "Role-based permissions, audit trails, and compliance reporting built-in",
    color: "var(--success-green)",
  },
]

export function BenefitsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--gray-charcoal)] sm:text-4xl lg:text-5xl">
            Why Choose Clocksure?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--gray-medium)]">
            Everything you need to manage your workforce effectively in one powerful platform
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative rounded-2xl border border-[var(--border)] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${benefit.color}15` }}
              >
                <benefit.icon
                  className="h-7 w-7"
                  style={{ color: benefit.color }}
                />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-[var(--gray-charcoal)]">
                {benefit.title}
              </h3>
              <p className="mt-3 text-[var(--gray-medium)] leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Border Effect */}
              <div
                className="absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ borderColor: benefit.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

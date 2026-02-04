"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Mail } from "lucide-react"

const methods = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time for quick answers to your questions.",
    cta: "Start Chat",
    color: "var(--orange-primary)",
  },
  {
    icon: Calendar,
    title: "Schedule Demo",
    description: "Book a personalized demo with our team to see Clocksure in action.",
    cta: "Schedule Now",
    color: "var(--blue-sky)",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll get back to you within 24 hours.",
    cta: "Send Email",
    color: "var(--success-green)",
  },
]

export function ContactMethods() {
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
    <section ref={sectionRef} className="bg-[var(--gray-light)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--gray-charcoal)] sm:text-4xl">
            More Ways to Connect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--gray-medium)]">
            Choose the method that works best for you
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method, index) => (
            <div
              key={method.title}
              className={`group rounded-2xl border border-[var(--border)] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${method.color}15` }}
              >
                <method.icon className="h-7 w-7" style={{ color: method.color }} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--gray-charcoal)]">
                {method.title}
              </h3>
              <p className="mt-3 text-[var(--gray-medium)] leading-relaxed">
                {method.description}
              </p>
              <Button
                className="mt-6"
                style={{
                  backgroundColor: method.color,
                  color: "white",
                }}
              >
                {method.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

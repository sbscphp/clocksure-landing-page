"use client"

import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "HR Director",
    company: "TechFlow Inc.",
    content: "Clocksure has transformed how we manage attendance across our 500+ employees. The real-time analytics have been invaluable for workforce planning.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    title: "Operations Manager",
    company: "Global Solutions Ltd.",
    content: "The biometric QR scanning feature eliminated time theft completely. We've saved thousands of dollars in payroll accuracy alone.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    title: "CEO",
    company: "StartUp Hub",
    content: "Simple to set up, easy to use, and incredible support. Clocksure scaled with us from 10 to 200 employees without missing a beat.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Kim",
    title: "Finance Director",
    company: "RetailMax",
    content: "The reporting features are exceptional. We generate compliance reports in minutes that used to take hours to compile manually.",
    rating: 5,
    avatar: "DK",
  },
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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
          <h2 className="text-3xl font-bold text-[var(--gray-charcoal)] sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--gray-medium)]">
            See what our customers have to say about Clocksure
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition-all duration-500 hover:shadow-lg ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[var(--warning-amber)] text-[var(--warning-amber)]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mt-4 text-sm leading-relaxed text-[var(--gray-medium)]">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--orange-primary)] to-[var(--orange-light)] text-sm font-semibold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-[var(--gray-charcoal)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--gray-medium)]">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

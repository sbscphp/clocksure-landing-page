"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Users, Target, Headphones } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: 10000,
    suffix: "+",
    label: "Active Companies",
  },
  {
    icon: Users,
    value: 500000,
    suffix: "+",
    label: "Employees Tracked Daily",
  },
  {
    icon: Target,
    value: 99.9,
    suffix: "%",
    label: "Accuracy Rate",
  },
  {
    icon: Headphones,
    value: 24,
    suffix: "/7",
    label: "Support Available",
  },
]

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isVisible])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(0) + "M"
    if (num >= 1000) return (num / 1000).toFixed(0) + "K"
    if (num % 1 !== 0) return num.toFixed(1)
    return num.toString()
  }

  return (
    <span className="text-4xl font-bold text-[var(--orange-primary)] sm:text-5xl">
      {formatNumber(count)}{suffix}
    </span>
  )
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[var(--gray-light)] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--orange-primary)]/10">
                <stat.icon className="h-6 w-6 text-[var(--orange-primary)]" />
              </div>
              <div className="mt-4">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <p className="mt-2 text-[var(--gray-medium)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

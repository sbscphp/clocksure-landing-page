"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Building2, Clock, QrCode, BarChart3, Shield } from "lucide-react"

const coreFeatures = [
  {
    icon: Users,
    title: "Employee Management",
    description: "Create, view, edit, and manage employee profiles with biometric data integration",
    color: "var(--orange-primary)",
  },
  {
    icon: Building2,
    title: "Department Management",
    description: "Organize employees into departments with full CRUD operations and hierarchical structure",
    color: "var(--blue-sky)",
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    description: "Track clock in/out times, view attendance history, and manage records with precision",
    color: "var(--success-green)",
  },
  {
    icon: QrCode,
    title: "Biometric Scanner",
    description: "QR code-based clock in/out system with camera support and admin override capabilities",
    color: "var(--orange-primary)",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Generate comprehensive attendance reports with filtering, export options, and real-time analytics",
    color: "var(--blue-sky)",
  },
  {
    icon: Shield,
    title: "Audit Trail",
    description: "Complete activity logging for compliance, accountability, and security monitoring",
    color: "var(--success-green)",
  },
]

export function CoreFeaturesGrid() {
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
            Core Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--gray-medium)]">
            Essential tools for comprehensive workforce management
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl border border-[var(--border)] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-xl ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon
                  className="h-7 w-7 transition-colors"
                  style={{ color: feature.color }}
                />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-[var(--gray-charcoal)]">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[var(--gray-medium)]">
                {feature.description}
              </p>

              {/* Hover gradient border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}20, transparent)`,
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ borderColor: feature.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Check, QrCode, BarChart3, Users, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    title: "Biometric Attendance Tracking",
    description: "Employees clock in/out instantly using QR codes. Admin override capabilities ensure flexibility for all situations.",
    benefits: [
      "Instant QR code scanning",
      "Camera-based verification",
      "Admin override controls",
      "Offline mode support",
    ],
    icon: QrCode,
    visual: "qr",
  },
  {
    title: "Comprehensive Reporting",
    description: "Generate detailed attendance reports, export data, and analyze workforce patterns with powerful analytics.",
    benefits: [
      "Real-time dashboards",
      "Custom report builder",
      "Export to CSV/Excel/PDF",
      "Scheduled email reports",
    ],
    icon: BarChart3,
    visual: "chart",
  },
]

function QRVisual() {
  return (
    <div className="relative mx-auto flex h-full max-w-md items-center justify-center">
      <div className="relative rounded-2xl border border-[var(--border)] bg-white p-6 shadow-xl">
        {/* Phone Frame */}
        <div className="relative aspect-[9/16] w-48 overflow-hidden rounded-3xl border-4 border-[var(--gray-charcoal)] bg-[var(--gray-charcoal)]">
          <div className="absolute top-2 left-1/2 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
          <div className="h-full bg-white p-4 pt-8">
            <div className="text-center">
              <div className="mx-auto h-8 w-8 rounded-full bg-[var(--orange-primary)]" />
              <p className="mt-2 text-xs font-semibold text-[var(--gray-charcoal)]">Clocksure</p>
            </div>
            <div className="mt-4 aspect-square w-full rounded-lg bg-[var(--gray-light)] p-2">
              <div className="grid h-full grid-cols-5 grid-rows-5 gap-1">
                {Array.from({ length: 25 }).map((_, i) => {
                  // Deterministic pattern based on index to avoid hydration errors
                  // Creates a QR-like pattern using a simple hash function
                  const shouldFill = ((i * 7 + 13) % 17) % 2 === 0
                  return (
                    <div
                      key={i}
                      className={`rounded-sm ${
                        shouldFill ? "bg-[var(--gray-charcoal)]" : "bg-transparent"
                      }`}
                    />
                  )
                })}
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-[var(--gray-medium)]">Scan to Clock In</p>
            <div className="mt-3 h-8 rounded-lg bg-[var(--orange-primary)] flex items-center justify-center">
              <span className="text-xs font-medium text-white">Clock In</span>
            </div>
          </div>
        </div>
        
        {/* Success Badge */}
        <div className="absolute -right-4 top-4 rounded-lg bg-[var(--success-green)] px-3 py-2 text-white shadow-lg">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            <span className="text-sm font-medium">Verified</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChartVisual() {
  return (
    <div className="relative mx-auto flex h-full max-w-md items-center justify-center">
      <div className="w-full rounded-2xl border border-[var(--border)] bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-[var(--gray-charcoal)]">Attendance Overview</h4>
            <p className="text-sm text-[var(--gray-medium)]">Last 7 days</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-[var(--success-green)]/10 px-3 py-1">
            <div className="h-2 w-2 rounded-full bg-[var(--success-green)]" />
            <span className="text-sm font-medium text-[var(--success-green)]">+12%</span>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-6 flex h-40 items-end gap-3">
          {[85, 92, 78, 95, 88, 91, 94].map((value, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-[var(--blue-sky)] to-[var(--blue-sky)]/50 transition-all hover:from-[var(--orange-primary)] hover:to-[var(--orange-light)]"
                style={{ height: `${value}%` }}
              />
              <span className="text-xs text-[var(--gray-medium)]">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[var(--border)] pt-4">
          {[
            { label: "Avg. Attendance", value: "89%" },
            { label: "On Time", value: "94%" },
            { label: "Overtime", value: "12h" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-lg font-bold text-[var(--gray-charcoal)]">{stat.value}</p>
              <p className="text-xs text-[var(--gray-medium)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function FeaturePreviewSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--gray-charcoal)] sm:text-4xl lg:text-5xl">
            Powerful Features for Modern Teams
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--gray-medium)]">
            Discover how Clocksure helps you manage your workforce more efficiently
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => { itemRefs.current[index] = el }}
              data-index={index}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              } transition-all duration-700 ${
                visibleItems.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:pl-8" : "lg:pr-8"}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--orange-primary)]/10">
                  <feature.icon className="h-6 w-6 text-[var(--orange-primary)]" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[var(--gray-charcoal)] sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg text-[var(--gray-medium)] leading-relaxed">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--success-green)]/10">
                        <Check className="h-3 w-3 text-[var(--success-green)]" />
                      </div>
                      <span className="text-[var(--gray-medium)]">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 gap-2 bg-[var(--orange-primary)] text-white hover:bg-[var(--orange-dark)]">
                  <Link href="/features">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? "" : ""}`}>
                {feature.visual === "qr" ? <QRVisual /> : <ChartVisual />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

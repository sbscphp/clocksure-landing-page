"use client"

import { useState } from "react"
import { ChevronDown, Key, Bell, Download, Smartphone } from "lucide-react"

const advancedFeatures = [
  {
    icon: Key,
    title: "Role-Based Access Control",
    description: "Fine-grained permissions for all features. Create custom roles and assign permissions to users based on their responsibilities.",
    details: [
      "Create unlimited custom roles",
      "Granular permission controls",
      "Role hierarchy support",
      "Easy role assignment interface",
    ],
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description: "System notifications for important events, attendance alerts, and updates to keep everyone informed.",
    details: [
      "Email notifications",
      "In-app alerts",
      "Custom notification rules",
      "Daily/weekly summaries",
    ],
  },
  {
    icon: Download,
    title: "Export & Integration",
    description: "Export data to CSV, Excel, PDF. API access for third-party integrations with your existing tools.",
    details: [
      "Multiple export formats",
      "Scheduled exports",
      "RESTful API access",
      "Webhook support",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Fully responsive design works seamlessly on desktop, tablet, and mobile devices for on-the-go access.",
    details: [
      "Progressive Web App",
      "Touch-optimized interface",
      "Offline capabilities",
      "Native app feel",
    ],
  },
]

export function AdvancedFeatures() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[var(--gray-light)] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--gray-charcoal)] sm:text-4xl">
            Advanced Capabilities
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--gray-medium)]">
            Enterprise-grade features for growing organizations
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {advancedFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`overflow-hidden rounded-xl border-2 bg-white transition-all duration-300 ${
                openIndex === index
                  ? "border-[var(--orange-primary)] shadow-lg"
                  : "border-transparent shadow"
              }`}
            >
              {/* Header */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center gap-4 p-6 text-left transition-colors hover:bg-[var(--gray-light)]/50"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                    openIndex === index
                      ? "bg-[var(--orange-primary)] text-white"
                      : "bg-[var(--orange-primary)]/10 text-[var(--orange-primary)]"
                  }`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[var(--gray-charcoal)]">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--gray-medium)]">
                    {feature.description}
                  </p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-[var(--gray-medium)] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[var(--border)] bg-[var(--gray-light)]/30 p-6">
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-[var(--orange-primary)]" />
                          <span className="text-[var(--gray-medium)]">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

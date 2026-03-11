"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";
import { registerLink } from "@/lib/constants";

const pricingPlans = [
  {
    name: "ClockSure Essential",
    price: 110000,
    description: "Perfect for small to medium organizations",
    staffRange: "1-500 Staff or Students",
    features: [
      "Dedicated ClockSure instance with your organisation's logo",
      "Branded system emails using your logo",
      "Full access to all ClockSure features",
      "QR code based attendance tracking",
      "Real time dashboards and reports",
      "Attendance rules, timesheets, and overtime tracking",
      "Role and permission management",
      "Secure data storage and audit logs",
      "Standard support and product updates",
    ],
    cta: "Get Started",
    highlighted: false,
    planId: "01JK8B7Y6X5A4H3G2F1E0D9C8B",
  },
  {
    name: "ClockSure Scale",
    price: 140000,
    description: "Designed for large organisations and institutions",
    staffRange: "500+ Staff or Students",
    features: [
      "Dedicated ClockSure instance with your organisation's logo",
      "Branded system emails using your logo",
      "Designed for large organisations and institutions",
      "Full access to all ClockSure features",
      "QR code based attendance tracking",
      "Real time dashboards and reports",
      "Attendance rules, timesheets, and overtime tracking",
      "Role and permission management",
      "Secure, scalable, and reliable platform",
      "Standard support and product updates",
    ],
    cta: "Get Started",
    highlighted: true,
    badge: "Most Popular",
    planId: "01JK8B8M5N4P3Q2R1S0T9V8W7X",
  },
];

export function PricingCards() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[var(--gray-light)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-[var(--orange-primary)] mb-4">
            ClockSure Subscription Pricing
          </p>
          <p className="text-lg text-[var(--gray-medium)] max-w-3xl mx-auto">
            ClockSure provides a fully white labelled attendance system for your
            organisation. Every subscription includes a dedicated instance
            branded with your organisation's logo, including all system
            generated emails. There are no feature restrictions across plans.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                plan.highlighted
                  ? "border-2 border-[var(--orange-primary)] bg-white shadow-xl scale-105 z-10"
                  : "border border-[var(--border)] bg-white shadow-lg"
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute right-4 top-4">
                  <Badge className="bg-[var(--orange-primary)] text-white">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-xl font-semibold text-[var(--gray-charcoal)]">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--gray-medium)]">
                  {plan.description}
                </p>
                {plan.staffRange && (
                  <p className="mt-1 text-sm font-medium text-[var(--orange-primary)]">
                    {plan.staffRange}
                  </p>
                )}

                {/* Price */}
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-[var(--gray-charcoal)]">
                      ₦{plan.price.toLocaleString()}
                    </span>
                    <span className="ml-2 text-[var(--gray-medium)]">
                      per year
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  className={`mt-8 w-full ${
                    plan.highlighted
                      ? "bg-[var(--orange-primary)] text-white hover:bg-[var(--orange-dark)]"
                      : "bg-[var(--orange-primary)] text-white hover:bg-[var(--orange-dark)]"
                  }`}
                >
                  <Link
                    href={`${registerLink}?planId=${plan.planId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </Link>
                </Button>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--success-green)]/10">
                        <Check className="h-3 w-3 text-[var(--success-green)]" />
                      </div>
                      <span className="text-sm text-[var(--gray-medium)]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

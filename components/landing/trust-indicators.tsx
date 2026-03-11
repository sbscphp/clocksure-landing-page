"use client";

import { Clock, CreditCard, Headphones, Lock } from "lucide-react";

const trustItems = [
  {
    icon: CreditCard,
    label: "Cancel Anytime",
    sublabel: "No Long-Term Contracts",
  },
  {
    icon: Clock,
    label: "99.9% Uptime SLA",
    sublabel: "Enterprise Reliability",
  },

  {
    icon: Headphones,
    label: "24/7 Support",
    sublabel: "Always Available",
  },
];

export function TrustIndicators() {
  return (
    <section className="bg-[var(--gray-light)]  py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 ">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--orange-primary)]/10">
                <item.icon className="h-6 w-6 text-[var(--orange-primary)]" />
              </div>
              <p className="mt-3 text-sm font-semibold text-[var(--gray-charcoal)]">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-[var(--gray-medium)]">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

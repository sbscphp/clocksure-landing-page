"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does the white-label branding work?",
    answer: "Every ClockSure subscription includes a dedicated instance branded with your organisation's logo. This includes your logo on the ClockSure platform and all system-generated emails sent from the platform. Your organisation's branding is applied throughout the entire system.",
  },
  {
    question: "Are there any feature restrictions between plans?",
    answer: "No, there are no feature restrictions across plans. Both ClockSure Essential and ClockSure Scale include full access to all ClockSure features. The difference is in the number of staff or students you can register.",
  },
  {
    question: "How is billing handled?",
    answer: "Subscription is billed annually and payment is required upfront. Your licence is valid for twelve months from activation. Seat limits are based on total registered staff or students.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers and other payment methods. Please contact us for specific payment options available in your region.",
  },
  {
    question: "Is there a setup fee?",
    answer: "No, there are no setup fees or hidden costs. You only pay for your annual subscription plan.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan when renewing your subscription. If you need to upgrade during your current subscription period, please contact us to discuss options.",
  },
  {
    question: "What happens if I exceed my staff limit?",
    answer: "Seat limits are based on total registered staff or students. If you need to register more users than your current plan allows, you'll need to upgrade to ClockSure Scale or contact us for a custom solution.",
  },
  {
    question: "What support is included?",
    answer: "All plans include standard support and product updates. Our support team is available to help you with any questions or issues you may have.",
  },
  {
    question: "Can I customize the application colours?",
    answer: "Application colours remain standard to ensure consistency across the platform. However, your organisation's logo will be prominently displayed throughout your dedicated ClockSure instance.",
  },
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[var(--gray-charcoal)] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--gray-medium)]">
            Everything you need to know about our pricing and plans
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-[var(--orange-primary)] bg-white shadow-lg"
                  : "border-[var(--border)] bg-[var(--gray-light)]/50"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-[var(--gray-charcoal)]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--orange-primary)] transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[var(--border)] px-6 pb-6 pt-4">
                    <p className="text-[var(--gray-medium)] leading-relaxed">
                      {faq.answer}
                    </p>
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

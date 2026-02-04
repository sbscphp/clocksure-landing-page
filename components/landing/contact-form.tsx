"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--gray-charcoal)] sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-[var(--gray-medium)]">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            {isSubmitted ? (
              <div className="mt-8 rounded-2xl border border-[var(--success-green)] bg-[var(--success-green)]/5 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--success-green)]/10">
                  <CheckCircle className="h-8 w-8 text-[var(--success-green)]" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--gray-charcoal)]">
                  Message Sent!
                </h3>
                <p className="mt-2 text-[var(--gray-medium)]">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-[var(--orange-primary)] text-white hover:bg-[var(--orange-dark)]"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      className="h-12 border-[var(--border)] focus:border-[var(--orange-primary)] focus:ring-[var(--orange-primary)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      className="h-12 border-[var(--border)] focus:border-[var(--orange-primary)] focus:ring-[var(--orange-primary)]"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Company Name"
                      className="h-12 border-[var(--border)] focus:border-[var(--orange-primary)] focus:ring-[var(--orange-primary)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="h-12 border-[var(--border)] focus:border-[var(--orange-primary)] focus:ring-[var(--orange-primary)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger className="h-12 border-[var(--border)] focus:border-[var(--orange-primary)] focus:ring-[var(--orange-primary)]">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales Inquiry</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="demo">Request a Demo</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="border-[var(--border)] focus:border-[var(--orange-primary)] focus:ring-[var(--orange-primary)]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-12 w-full bg-[var(--orange-primary)] text-white hover:bg-[var(--orange-dark)] sm:w-auto sm:px-8"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <div className="rounded-2xl bg-[var(--gray-light)] p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-[var(--gray-charcoal)]">
                Contact Information
              </h3>
              <p className="mt-2 text-[var(--gray-medium)]">
                We typically respond within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--orange-primary)]/10">
                    <Mail className="h-6 w-6 text-[var(--orange-primary)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--gray-charcoal)]">Email</p>
                    <a
                      href="mailto:support@clocksure.com"
                      className="text-[var(--orange-primary)] hover:underline"
                    >
                      support@clocksure.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--orange-primary)]/10">
                    <Phone className="h-6 w-6 text-[var(--orange-primary)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--gray-charcoal)]">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-[var(--orange-primary)] hover:underline"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--orange-primary)]/10">
                    <MapPin className="h-6 w-6 text-[var(--orange-primary)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--gray-charcoal)]">Address</p>
                    <p className="text-[var(--gray-medium)]">
                      123 Business Ave, Suite 100<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--orange-primary)]/10">
                    <Clock className="h-6 w-6 text-[var(--orange-primary)]" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--gray-charcoal)]">Business Hours</p>
                    <p className="text-[var(--gray-medium)]">
                      Monday - Friday, 9 AM - 6 PM EST
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

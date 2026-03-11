"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";
import { address, businessHours, email, phoneNumber } from "@/lib/constants";
import { usePost } from "@/hooks/use-api";
import { toast } from "sonner";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [inquiryType, setInquiryType] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutateAsync: sendMessage, isPending } = usePost(
    "/landlord/inquiries",
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;
    data.inquiryType = inquiryType;

    console.log(data);

    try {
      const response = await sendMessage(data);
      if (response?.success !== false) {
        toast.success("Message sent successfully.");
        setIsSuccess(true);
        form.reset();
        setInquiryType("");
      } else {
        toast.error(
          (response as { message?: string })?.message ??
            "Something went wrong.",
        );
      }
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "response" in err
          ? (err as { response?: { data?: { message?: string } } }).response
              ?.data?.message
          : err instanceof Error
            ? err.message
            : "Failed to send message.";
      toast.error(message ?? "Failed to send message.");
    }
  };

  const handleSendAnother = () => {
    setIsSuccess(false);
    formRef.current?.reset();
    setInquiryType("");
  };

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
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>

            {isSuccess ? (
              <div className="mt-8 rounded-2xl border border-[var(--success-green)] bg-[var(--success-green)]/5 p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--success-green)]/10">
                  <CheckCircle className="h-8 w-8 text-[var(--success-green)]" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--gray-charcoal)]">
                  Message Sent!
                </h3>
                <p className="mt-2 text-[var(--gray-medium)]">
                  Thank you for contacting us. We'll get back to you within 24
                  hours.
                </p>
                <Button
                  type="button"
                  onClick={handleSendAnother}
                  className="mt-6 bg-[var(--orange-primary)] text-white hover:bg-[var(--orange-dark)]"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="h-12 border-[var(--border)] focus:border-[var(--orange-primary)] focus:ring-[var(--orange-primary)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
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
                      name="company"
                      placeholder="Company Name"
                      className="h-12 border-[var(--border)] focus:border-[var(--orange-primary)] focus:ring-[var(--orange-primary)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="h-12 border-[var(--border)] focus:border-[var(--orange-primary)] focus:ring-[var(--orange-primary)]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry">Inquiry Type</Label>
                  <Select value={inquiryType} onValueChange={setInquiryType}>
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
                    name="message"
                    placeholder="How can we help you?"
                    required
                    rows={5}
                    className="border-[var(--border)] focus:border-[var(--orange-primary)] focus:ring-[var(--orange-primary)]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="h-12 w-full bg-[var(--orange-primary)]  text-white hover:bg-[var(--orange-dark)] sm:w-auto sm:px-8 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? (
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
            <div className="rounded-2xl bg-gray-light p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-gray-charcoal">
                Contact Information
              </h3>
              <p className="mt-2 text-gray-medium">
                We typically respond within 24 hours.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-primary/10">
                    <Mail className="h-6 w-6 text-orange-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-charcoal">Email</p>
                    <a
                      href={`mailto:${email}`}
                      className="text-orange-primary hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-primary/10">
                    <Phone className="h-6 w-6 text-orange-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-charcoal">Phone</p>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-orange-primary hover:underline"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-primary/10">
                    <MapPin className="h-6 w-6 text-orange-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-charcoal">Address</p>
                    <p className="text-gray-medium">{address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-primary/10">
                    <Clock className="h-6 w-6 text-orange-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-charcoal">
                      Business Hours
                    </p>
                    <p className="text-gray-medium">{businessHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

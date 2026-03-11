"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { registerLink } from "@/lib/constants";
import Link from "next/link";

export function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-deep via-blue-navy to-gray-charcoal py-20 lg:py-28">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(241,103,34,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1
          className={`text-4xl font-bold text-white transition-all duration-500 sm:text-5xl lg:text-6xl ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          Ready to Transform Your{" "}
          <span className="bg-linear-to-r from-orange-primary to-orange-light bg-clip-text text-transparent">
            Workforce Management?
          </span>
        </h1>
        <p
          className={`mx-auto mt-6 max-w-2xl text-lg text-gray-300 transition-all delay-100 duration-500 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          Join thousands of companies using Clocksure to streamline attendance
          tracking and boost productivity.
        </p>

        {/* CTAs */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all delay-200 duration-500 sm:flex-row ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="h-14 px-8 text-lg font-semibold bg-orange-primary text-white shadow-lg shadow-orange-primary/25 hover:bg-orange-dark"
          >
            <Link href={registerLink} target="_blank" rel="noopener noreferrer">
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ChevronDown, QrCode, BarChart3, Users, Shield, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-white via-white to-[var(--gray-light)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:px-8 lg:py-24">
        {/* Left Content */}
        <div 
          className={`flex flex-1 flex-col items-center text-center transition-all duration-700 lg:items-start lg:text-left ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Badge 
            variant="secondary" 
            className="mb-6 border-[var(--orange-primary)]/20 bg-[var(--orange-primary)]/10 text-[var(--orange-primary)]"
          >
            Trusted by 10,000+ Companies Worldwide
          </Badge>
          
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-[var(--gray-charcoal)] sm:text-5xl lg:text-6xl xl:text-7xl">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-[var(--orange-primary)] to-[var(--orange-light)] bg-clip-text text-transparent">
              Workforce Management
            </span>{" "}
            with Clocksure
          </h1>
          
          <p className="mt-6 max-w-xl text-pretty text-lg text-[var(--gray-medium)] sm:text-xl">
            The all-in-one platform for accurate time tracking, attendance management, and powerful analytics. Trusted by businesses worldwide.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg font-semibold bg-[var(--orange-primary)] text-white shadow-lg shadow-[var(--orange-primary)]/25 transition-all hover:bg-[var(--orange-dark)] hover:shadow-xl hover:shadow-[var(--orange-primary)]/30"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 gap-2 px-8 text-lg font-semibold border-[var(--gray-charcoal)]/20 text-[var(--gray-charcoal)] hover:bg-[var(--gray-charcoal)] hover:text-white bg-transparent"
            >
              <Play className="h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
            {[
              { icon: CheckCircle, label: "99.9% Uptime" },
              { icon: Shield, label: "SOC 2 Compliant" },
              { icon: Users, label: "24/7 Support" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-[var(--gray-medium)]">
                <item.icon className="h-4 w-4 text-[var(--success-green)]" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual - Dashboard Mockup */}
        <div 
          className={`flex-1 transition-all delay-300 duration-700 ${
            isVisible ? "translate-x-0 scale-100 opacity-100" : "translate-x-8 scale-95 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Main Dashboard */}
            <div className="rounded-2xl border border-[var(--border)] bg-white p-4 shadow-2xl shadow-[var(--gray-charcoal)]/10">
              {/* Dashboard Header */}
              <div className="mb-4 flex items-center justify-between rounded-lg bg-[var(--gray-light)] p-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[var(--error-red)]" />
                  <div className="h-3 w-3 rounded-full bg-[var(--warning-amber)]" />
                  <div className="h-3 w-3 rounded-full bg-[var(--success-green)]" />
                </div>
                <span className="text-xs text-[var(--gray-medium)]">dashboard.clocksure.com</span>
              </div>
              
              {/* Dashboard Content */}
              <div className="grid gap-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Present Today", value: "142", change: "+12%" },
                    { label: "On Leave", value: "8", change: "Normal" },
                    { label: "Late Arrivals", value: "3", change: "-67%" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-[var(--gray-light)] p-3">
                      <p className="text-xs text-[var(--gray-medium)]">{stat.label}</p>
                      <p className="text-2xl font-bold text-[var(--gray-charcoal)]">{stat.value}</p>
                      <p className="text-xs text-[var(--success-green)]">{stat.change}</p>
                    </div>
                  ))}
                </div>
                
                {/* Chart Placeholder */}
                <div className="h-32 rounded-lg bg-gradient-to-r from-[var(--blue-sky)]/10 to-[var(--orange-primary)]/10 p-4">
                  <div className="flex h-full items-end gap-2">
                    {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-gradient-to-t from-[var(--orange-primary)] to-[var(--orange-light)]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-8 top-1/4 animate-bounce rounded-xl border border-[var(--border)] bg-white p-4 shadow-lg delay-500" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--orange-primary)]/10">
                  <QrCode className="h-5 w-5 text-[var(--orange-primary)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--gray-medium)]">QR Scan</p>
                  <p className="font-semibold text-[var(--gray-charcoal)]">Clock In</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-1/2 animate-bounce rounded-xl border border-[var(--border)] bg-white p-4 shadow-lg" style={{ animationDuration: '2.5s' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--blue-sky)]/10">
                  <BarChart3 className="h-5 w-5 text-[var(--blue-sky)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--gray-medium)]">Analytics</p>
                  <p className="font-semibold text-[var(--success-green)]">+24%</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/4 animate-bounce rounded-xl border border-[var(--border)] bg-white p-4 shadow-lg" style={{ animationDuration: '3.5s' }}>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--success-green)]/10">
                  <Users className="h-5 w-5 text-[var(--success-green)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--gray-medium)]">Employees</p>
                  <p className="font-semibold text-[var(--gray-charcoal)]">156 Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  )
}

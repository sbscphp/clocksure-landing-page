"use client";

import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";

const comparisonFeatures = [
  {
    feature: "Biometric Tracking",
    clocksure: true,
    competitorA: false,
    competitorB: true,
  },
  {
    feature: "Real-Time Analytics",
    clocksure: true,
    competitorA: true,
    competitorB: false,
  },
  {
    feature: "Role-Based Permissions",
    clocksure: true,
    competitorA: false,
    competitorB: false,
  },
  {
    feature: "Audit Trail",
    clocksure: true,
    competitorA: true,
    competitorB: true,
  },
  {
    feature: "Mobile App",
    clocksure: true,
    competitorA: true,
    competitorB: false,
  },
  {
    feature: "API Access",
    clocksure: true,
    competitorA: false,
    competitorB: true,
  },
  {
    feature: "Custom Reports",
    clocksure: true,
    competitorA: false,
    competitorB: false,
  },
  {
    feature: "Multi-Location Support",
    clocksure: true,
    competitorA: true,
    competitorB: false,
  },
];

export function FeatureComparison() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <></>
    // <section ref={sectionRef} className="bg-white py-20 lg:py-28">
    //   <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    //     <div className="text-center">
    //       <h2 className="text-3xl font-bold text-[var(--gray-charcoal)] sm:text-4xl">
    //         Why Clocksure Stands Out
    //       </h2>
    //       <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--gray-medium)]">
    //         See how we compare to other solutions in the market
    //       </p>
    //     </div>

    //     <div className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] shadow-lg">
    //       {/* Table Header */}
    //       <div className="grid grid-cols-4 bg-[var(--blue-deep)] text-white">
    //         <div className="p-4 text-left font-semibold">Feature</div>
    //         <div className="bg-[var(--orange-primary)] p-4 text-center font-semibold">
    //           Clocksure
    //         </div>
    //         <div className="p-4 text-center font-semibold">Competitor A</div>
    //         <div className="p-4 text-center font-semibold">Competitor B</div>
    //       </div>

    //       {/* Table Body */}
    //       <div className="divide-y divide-[var(--border)]">
    //         {comparisonFeatures.map((row, index) => (
    //           <div
    //             key={row.feature}
    //             className={`grid grid-cols-4 transition-all duration-500 hover:bg-[var(--gray-light)]/50 ${
    //               isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
    //             }`}
    //             style={{ transitionDelay: `${index * 50}ms` }}
    //           >
    //             <div className="p-4 text-[var(--gray-charcoal)]">{row.feature}</div>
    //             <div className="flex items-center justify-center bg-[var(--orange-primary)]/5 p-4">
    //               {row.clocksure ? (
    //                 <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--success-green)]">
    //                   <Check className="h-4 w-4 text-white" />
    //                 </div>
    //               ) : (
    //                 <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--gray-medium)]/20">
    //                   <X className="h-4 w-4 text-[var(--gray-medium)]" />
    //                 </div>
    //               )}
    //             </div>
    //             <div className="flex items-center justify-center p-4">
    //               {row.competitorA ? (
    //                 <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--success-green)]">
    //                   <Check className="h-4 w-4 text-white" />
    //                 </div>
    //               ) : (
    //                 <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--gray-medium)]/20">
    //                   <X className="h-4 w-4 text-[var(--gray-medium)]" />
    //                 </div>
    //               )}
    //             </div>
    //             <div className="flex items-center justify-center p-4">
    //               {row.competitorB ? (
    //                 <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--success-green)]">
    //                   <Check className="h-4 w-4 text-white" />
    //                 </div>
    //               ) : (
    //                 <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--gray-medium)]/20">
    //                   <X className="h-4 w-4 text-[var(--gray-medium)]" />
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Table Footer - Pricing */}
    //       <div className="grid grid-cols-4 border-t-2 border-[var(--border)] bg-[var(--gray-light)]">
    //         <div className="p-4 font-semibold text-[var(--gray-charcoal)]">Starting Price</div>
    //         <div className="flex flex-col items-center justify-center bg-[var(--orange-primary)]/10 p-4">
    //           <span className="text-2xl font-bold text-[var(--orange-primary)]">₦110,000</span>
    //           <span className="text-sm text-[var(--gray-medium)]">/year</span>
    //         </div>
    //         <div className="flex flex-col items-center justify-center p-4">
    //           <span className="text-2xl font-bold text-[var(--gray-charcoal)]">$49</span>
    //           <span className="text-sm text-[var(--gray-medium)]">/month</span>
    //         </div>
    //         <div className="flex flex-col items-center justify-center p-4">
    //           <span className="text-2xl font-bold text-[var(--gray-charcoal)]">$39</span>
    //           <span className="text-sm text-[var(--gray-medium)]">/month</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Zap,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Activity,
  Layers,
  PhoneCall,
} from "lucide-react";
import { OPERATING_SYSTEMS } from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Governed Solutions | Revenue OS, Commerce OS & Ops Control Tower",
  description:
    "Explore Glitchless's three governed business operating systems: Revenue OS for sales velocity, Commerce OS for order execution, and Ops Control Tower for single-pane governance.",
  alternates: {
    canonical: "https://glitchless.ai/solutions",
  },
};

export default function SolutionsPage() {
  const systemIcons: Record<string, React.ReactNode> = {
    "revenue-os": <Zap className="w-6 h-6 text-blue-600" />,
    "commerce-os": <ShoppingBag className="w-6 h-6 text-emerald-600" />,
    "ops-control-tower": <ShieldCheck className="w-6 h-6 text-indigo-600" />,
  };

  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Glitchless Governed Operating Systems",
    itemListElement: OPERATING_SYSTEMS.map((sys, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Service",
        name: sys.name,
        description: sys.description,
        url: `https://glitchless.ai/solutions#${sys.id}`,
      },
    })),
  };

  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <JsonLd data={solutionsSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }]} />

        {/* Hero Section */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Governed Business Architectures</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-[-0.035em] text-slate-950 leading-[1.1]">
            Operating systems. <br />
            <span className="text-slate-400 font-bold tracking-[-0.03em]">Not disjointed AI tools.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed font-sans">
            Most businesses don&apos;t need another conversational widget or a stack of fragile zaps. We engineer three interconnected operating systems that actually run the daily work with human governance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all"
            >
              <span>Book an Operations Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 3 Core Systems Deep Dives */}
        <div className="space-y-16 mb-24">
          {OPERATING_SYSTEMS.map((system) => (
            <div
              key={system.id}
              id={system.id}
              className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-2xs scroll-mt-24"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    {systemIcons[system.id]}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {system.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                      {system.name}: {system.tagline}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {system.metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                      <span className="text-lg font-black text-slate-900 font-mono block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                {/* Left Description & Outcomes */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                      System Overview
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {system.description}
                    </p>
                  </div>

                  {/* Core Outcomes */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                      Core Operational Outcomes:
                    </span>
                    <div className="space-y-2">
                      {system.coreOutcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium bg-slate-50 p-3 rounded-xl border border-slate-200/70"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right UI Preview & Capabilities */}
                <div className="lg:col-span-5 bg-slate-950 text-slate-200 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between font-mono">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px]">
                      <span className="text-white font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        {system.mockData.title}
                      </span>
                      <span className="text-slate-400">{system.mockData.status}</span>
                    </div>

                    <div className="pt-4 space-y-2.5 text-xs">
                      {system.mockData.items.map((item, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="text-[10px] text-slate-400">{item.label}</div>
                          <div className="text-slate-100 font-bold mt-0.5">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/book-a-call"
                      className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors font-sans"
                    >
                      <span>Audit Your {system.name} Opportunities</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-black">
            Ready to review your business operations?
          </h3>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Book an Operations Audit and let our systems architects analyze where manual repetition and silent failures are costing your company.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/book-a-call"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30"
            >
              Book an Operations Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

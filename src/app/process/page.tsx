import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Clock,
  Layers,
  Activity,
  Terminal,
} from "lucide-react";
import { GOVERNED_STEPS } from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Governance Process & Sprint Cadence | Glitchless",
  description:
    "Explore Glitchless's 5-step governed engineering protocol: Audit, Blueprint, Deploy, Monitor, and Optimize. Predictable 2-3 week sprints with zero scope creep.",
  alternates: {
    canonical: "https://glitchless.ai/process",
  },
};

export default function ProcessPage() {
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Glitchless 5-Step Governed Engineering Protocol",
    step: GOVERNED_STEPS.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.title,
      text: s.description,
    })),
  };

  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <JsonLd data={processSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Process", href: "/process" }]} />

        {/* Hero Section */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>High-Velocity Engineering Protocol</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-[-0.035em] text-slate-950 leading-[1.1]">
            Predictable sprints. <br />
            <span className="text-slate-400 font-bold tracking-[-0.03em]">Governed execution.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed font-sans">
            Most agencies bill by ambiguous hours and disappear for months. At Glitchless, we run disciplined 2 to 3-week engineering sprints with working production code and live telemetry delivered every single Friday.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Book an Operations Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 5 Governed Steps */}
        <div className="space-y-12 mb-24">
          {GOVERNED_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-2xs hover:shadow-lg transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-blue-600">
                      {step.step}
                    </span>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {step.timeline}
                    </span>
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-400 mt-2 uppercase tracking-wider">
                    Phase // {step.phase}
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Deliverables:
                    </span>
                    <div className="space-y-2">
                      {step.keyOutputs.map((output) => (
                        <div
                          key={output}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-medium"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{output}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 bg-slate-50 p-5 rounded-2xl border border-slate-200 text-xs space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>Your Team&apos;s Time:</span>
                  </div>
                  <div className="text-slate-600 font-medium">
                    {idx === 0
                      ? "60 minutes access & data mapping"
                      : idx === 1
                      ? "30 minutes architecture review"
                      : idx === 2
                      ? "Zero. Our engineers build in staging"
                      : idx === 3
                      ? "45 minutes staging validation & demo"
                      : "30 minutes bi-weekly roadmap review"}
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-slate-500 text-[11px]">
                    We respect your operational time and never burden your core team.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Quality Guarantees */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-black text-slate-900">
              Three Non-Negotiable Governance Standards
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <ShieldCheck className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                Deterministic Bound Validation
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                All AI agents operate within hardcoded database bounds. They cannot invent discounts or alter order terms without explicit human approval.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <Layers className="w-6 h-6 text-slate-800 mb-3" />
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                100% IP & Code Ownership
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                You retain complete intellectual property over your workflows, database models, and git repositories. Zero proprietary lock-in.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <Activity className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="font-bold text-slate-900 text-sm mb-1">
                Single-Pane Telemetry
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                All production flows connect to Ops Control Tower with instant alerts to Slack or WhatsApp if an API fails or latency spikes.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-black">
            Ready to experience our engineering sprint cadence?
          </h3>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Book an Operations Audit and let us provide an exact 3-week sprint timeline for your business.
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

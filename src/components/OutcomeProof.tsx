import React from "react";
import Link from "next/link";
import { OUTCOME_PROOF } from "@/lib/constants";
import { CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";

export function OutcomeProof() {
  return (
    <section className="py-24 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4">
              <TrendingUp className="w-3.5 h-3.5 text-slate-800" />
              <span>MEASURABLE OUTCOMES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Real Workflows. <br />
              <span className="text-slate-500">Quantified Operational Proof.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We measure performance by business outcomes: response time slashed, manual order handling eliminated, and 100% database accuracy.
            </p>
          </div>

          <div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs transition-colors"
            >
              <span>Explore All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Outcome Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {OUTCOME_PROOF.map((proof) => (
            <div
              key={proof.id}
              className="p-8 rounded-2xl bg-[#fbfcfd] border border-slate-200 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 text-xs mb-5">
                  <span className="font-mono font-semibold text-slate-700">{proof.clientIndustry}</span>
                  <span className="text-slate-500 font-mono text-[11px]">{proof.region}</span>
                </div>

                {/* Big Metric Callout */}
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl sm:text-5xl font-bold font-mono text-slate-900 tracking-tight">
                    {proof.metricHighlight}
                  </span>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">{proof.metricLabel}</span>
                    <span className="text-slate-500 font-medium">
                      Secondary: <strong className="text-emerald-700 font-mono">{proof.secondaryMetric}</strong> {proof.secondaryLabel}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {proof.headline}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {proof.challenge}
                </p>

                {/* Outcomes list */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Verified Execution Metrics:
                  </span>
                  {proof.outcome.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Systems deployed */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
                <span>Architecture:</span>
                <div className="flex flex-wrap gap-1.5">
                  {proof.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white text-slate-700 font-medium border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

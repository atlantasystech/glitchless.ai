"use client";

import React from "react";
import Link from "next/link";
import { GOVERNED_STEPS } from "@/lib/constants";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export function GovernedWorkflow() {
  return (
    <section className="py-24 bg-[#090d16] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-medium text-slate-300 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>THE GOVERNED LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] text-white leading-[1.1]">
            How Glitchless works. <br />
            <span className="text-slate-400 font-bold tracking-[-0.03em]">Engineered for reliability.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-sans">
            We handle the full operational continuum: workflows, data quality, role permissions, human approvals, exception handling, and continuous performance measurement.
          </p>
        </div>

        {/* 5-Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {GOVERNED_STEPS.map((s) => (
            <div
              key={s.step}
              className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/70 hover:border-slate-600 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold font-mono text-white">
                    {s.step}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {s.timeline}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  {s.phase}
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {s.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 text-xs text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{s.keyOutputs[0]}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <span>Learn more about our engineering roadmap & governance SLAs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

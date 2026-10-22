"use client";

import React from "react";
import { Clock, Copy, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProblemSection() {
  const problems = [
    {
      icon: <Clock className="w-5 h-5 text-rose-600" />,
      title: "Inbound leads wait hours for a reply",
      problem: "Prospects fill out forms and wait hours for initial contact. Over 78% of deals go to the vendor that responds first.",
      solutionTitle: "Sub-90-Second Response",
      solution: "Revenue OS engages inbound inquiries on WhatsApp or email instantly, qualifies budget and intent, and books the call.",
      metric: "78% lost to latency",
    },
    {
      icon: <Copy className="w-5 h-5 text-amber-600" />,
      title: "Teams repeat the same manual busywork",
      problem: "Sales and operations reps waste 15+ hours weekly copy-pasting data between website forms, spreadsheets, and logistics portals.",
      solutionTitle: "Automated API Synchronization",
      solution: "Governed data pipelines sync orders, inventory, and customer records between Shopify, Odoo, and ERPNext with zero re-keying.",
      metric: "15+ hrs/week wasted",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-purple-600" />,
      title: "AI tools break or hallucinate without supervision",
      problem: "Fragile automations fail silently when APIs change, while uncontrolled chatbots invent unauthorized quotes and discounts.",
      solutionTitle: "Governed Guardrails & Approvals",
      solution: "Deterministic bounds ensure AI never promises illegal discounts. High-value transactions route to human managers for sign-off.",
      metric: "Zero silent drops",
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4">
            <span className="w-2 h-2 rounded-full bg-slate-900" />
            <span>THE OPERATIONAL GAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] text-slate-950 leading-[1.1]">
            AI tools are everywhere. <br />
            <span className="text-slate-400 font-bold tracking-[-0.03em]">Operational clarity is rare.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Most businesses adopt 10+ disconnected SaaS tools and standalone chatbots. The result isn&apos;t automation—it&apos;s more manual work verifying whether the tools did their job.
          </p>
        </div>

        {/* 3 Human-Friendly Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#fbfcfd] border border-slate-200 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5 text-xs">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.problem}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 bg-white -mx-8 -mb-8 p-6 rounded-b-2xl">
                <span className="text-[11px] font-mono font-bold text-blue-700 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  {item.solutionTitle}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

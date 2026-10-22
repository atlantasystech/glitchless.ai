"use client";

import React from "react";
import Link from "next/link";
import { Zap, ShoppingBag, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export function SystemsOverview() {
  const systems = [
    {
      id: "revenue-os",
      name: "Voice & Revenue OS",
      tagline: "Autonomous Phone & WhatsApp Agents",
      description:
        "Instant voice phone qualification and WhatsApp engagement under 60 seconds. Multilingual natural speech, automatic lead enrichment, and zero-touch CRM sync into Odoo, ERPNext, or Zoho.",
      bullets: [
        "Inbound voice phone calls in Hindi, English & Hinglish (<580ms latency)",
        "Instant conversational lead qualification on WhatsApp Business API",
        "Automated calendar booking and bi-directional CRM syncing",
      ],
      metrics: [
        { label: "Voice Latency", value: "< 580ms" },
        { label: "CRM Deduplication", value: "100%" },
        { label: "Pipeline Velocity", value: "+35%" },
      ],
      link: "/solutions",
      icon: <Zap className="w-5 h-5 text-blue-600" />,
      previewTitle: "Live Inbound Call: Singhania Logistics",
      previewDetail: "Qualified via Voice AI in 74s • Synced to Odoo CRM • Architecture demo booked for 3:30 PM",
    },
    {
      id: "commerce-os",
      name: "Commerce OS",
      tagline: "Ecommerce Operations & Exception Handling",
      description:
        "Automate the repetitive back-office work behind high-growth stores. Resolve courier pincode errors, verify risky COD orders, and synchronize multi-warehouse inventory.",
      bullets: [
        "Automated WhatsApp COD address verification reducing RTO by 32%",
        "Real-time multi-warehouse inventory sync preventing overselling",
        "Automated courier fallback routing when primary APIs fail",
      ],
      metrics: [
        { label: "RTO Reduction", value: "-32%" },
        { label: "Inventory Sync", value: "24ms" },
        { label: "Exceptions Automated", value: "70%" },
      ],
      link: "/services/ecommerce-management",
      icon: <ShoppingBag className="w-5 h-5 text-emerald-600" />,
      previewTitle: "Order #84920 Exception Resolved",
      previewDetail: "Address verified via WhatsApp OTP in 42s • Bhiwandi hub inventory locked • AWB generated",
    },
    {
      id: "ops-control-tower",
      name: "Ops Control Tower",
      tagline: "Single-Pane Governance & Human Approvals",
      description:
        "Maintain total executive control over your AI systems. Monitor every active agent, set financial approval thresholds, and guarantee zero hallucinated discounts.",
      bullets: [
        "Audit logs of every prompt, tool execution, and database write",
        "Human-in-the-loop approval gates for quotes above threshold limits",
        "Private VPC deployment ensuring your customer data never trains public AI models",
      ],
      metrics: [
        { label: "System Uptime", value: "99.98%" },
        { label: "Audit Logging", value: "100%" },
        { label: "Escalation SLA", value: "< 5 mins" },
      ],
      link: "/process",
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
      previewTitle: "Executive Governance Cockpit",
      previewDetail: "14 Agents running • Strict margin bounds enforced • High-value quotes routed to managers",
    },
  ];

  return (
    <section id="systems" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>OPERATING SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] text-slate-950 leading-[1.1]">
            Three governed operating systems. <br />
            <span className="text-slate-400 font-bold tracking-[-0.03em]">Zero operational chaos.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Glitchless replaces ad-hoc automations with three purpose-built systems that run your sales pipeline, ecommerce exceptions, and back-office governance.
          </p>
        </div>

        {/* 3 Clean System Panels */}
        <div className="space-y-12">
          {systems.map((sys, idx) => (
            <div
              key={sys.id}
              className="rounded-2xl border border-slate-200 bg-[#fbfcfd] p-6 sm:p-10 hover:border-slate-300 transition-all shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                      {sys.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                        SYSTEM // 0{idx + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        {sys.name}: <span className="font-normal text-slate-600">{sys.tagline}</span>
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {sys.description}
                  </p>

                  {/* 3 Metrics */}
                  <div className="grid grid-cols-3 gap-3 py-2">
                    {sys.metrics.map((m) => (
                      <div key={m.label} className="p-3 rounded-lg bg-white border border-slate-200">
                        <div className="text-lg font-bold font-mono text-slate-900">{m.value}</div>
                        <div className="text-[11px] text-slate-500">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key bullets */}
                  <div className="space-y-2 pt-1 text-xs text-slate-700">
                    {sys.bullets.map((b) => (
                      <div key={b} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href={sys.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      <span>Explore {sys.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Visual Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-xs space-y-3">
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
                      <span className="font-bold text-slate-900">{sys.previewTitle}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                        LIVE STATE
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sys.previewDetail}
                    </p>

                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-500 font-mono">
                      Telemetry: 100% Audited • SLA Verified • Zero Silent Drops
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

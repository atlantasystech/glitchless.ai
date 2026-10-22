"use client";

import React from "react";
import { CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export function LiveMetricsGauges() {
  const gauges = [
    {
      title: "First-Contact SLA",
      value: "< 90s",
      subtext: "vs 240 mins manual wait",
      percentage: 94,
      color: "#2563eb",
      highlight: "-94% Faster",
    },
    {
      title: "Order Work Automated",
      value: "70%",
      subtext: "without manual phone calls",
      percentage: 70,
      color: "#10b981",
      highlight: "3x Throughput",
    },
    {
      title: "CRM Record Accuracy",
      value: "100%",
      subtext: "zero duplicate entries",
      percentage: 100,
      color: "#8b5cf6",
      highlight: "Clean Sync",
    },
    {
      title: "Hallucination Rate",
      value: "0.00%",
      subtext: "strict deterministic bounds",
      percentage: 100,
      color: "#059669",
      highlight: "Zero Risk",
    },
  ];

  return (
    <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8 text-left">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              MEASURABLE OPERATIONAL PROOF
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Verified Performance Gauges
          </h3>
        </div>

        <span className="text-xs font-mono text-slate-500">
          Audited over 24,000+ daily operational transactions
        </span>
      </div>

      {/* 4 SVG Donut Gauges */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        {gauges.map((g) => {
          const radius = 38;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (g.percentage / 100) * circumference;

          return (
            <div key={g.title} className="flex flex-col items-center text-center p-3">
              <div className="relative w-28 h-28 mb-3 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 96 96">
                  {/* Background track */}
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    stroke="#f1f5f9"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  {/* Gauge indicator */}
                  <circle
                    cx="48"
                    cy="48"
                    r={radius}
                    stroke={g.color}
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold font-mono text-slate-900 tracking-tight">
                    {g.value}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-600 uppercase">
                    {g.highlight}
                  </span>
                </div>
              </div>

              <div className="text-sm font-bold text-slate-900 leading-tight">
                {g.title}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {g.subtext}
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Exception Breakdown Bar */}
      <div className="pt-6 border-t border-slate-100">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs mb-3 gap-2">
          <span className="font-bold text-slate-900">
            Order Exception Resolution Breakdown (Last 30 Days)
          </span>
          <span className="text-slate-500 font-mono text-[11px]">
            Total Exceptions Handled: 8,420
          </span>
        </div>

        {/* Multi-segment distribution bar */}
        <div className="w-full h-4 rounded-full bg-slate-100 overflow-hidden flex shadow-inner">
          <div style={{ width: "54%" }} className="bg-blue-600 h-full" title="Pincode & Address Auto-Corrected: 54%" />
          <div style={{ width: "28%" }} className="bg-emerald-500 h-full" title="COD-to-Prepaid Converted: 28%" />
          <div style={{ width: "18%" }} className="bg-purple-500 h-full" title="Customer WhatsApp OTP Verified: 18%" />
        </div>

        {/* Legend */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3.5 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
            <span>Pincode Auto-Corrected: <strong className="text-slate-900">54%</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <span>COD-to-Prepaid Converted: <strong className="text-slate-900">28%</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0" />
            <span>WhatsApp OTP Verified: <strong className="text-slate-900">18%</strong></span>
          </div>
        </div>
      </div>
    </div>
  );
}

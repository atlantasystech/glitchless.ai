"use client";

import React, { useState, useMemo } from "react";
import { Calculator, TrendingUp, DollarSign, Clock, ShieldCheck, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export function OperationsRoiCalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState<number>(25000);
  const [manualCostPerContact, setManualCostPerContact] = useState<number>(45);
  const [automationRate, setAutomationRate] = useState<number>(72);

  // Calculations
  const stats = useMemo(() => {
    const currentMonthlyExpense = monthlyVolume * manualCostPerContact;
    const automatedContacts = Math.round(monthlyVolume * (automationRate / 100));
    const manualRemainingContacts = monthlyVolume - automatedContacts;

    // AI cost per contact is ₹3.80
    const aiCostPerContact = 3.8;
    const aiMonthlyCost = automatedContacts * aiCostPerContact;
    const remainingManualCost = manualRemainingContacts * manualCostPerContact;
    const newTotalExpense = aiMonthlyCost + remainingManualCost;

    const monthlySavings = currentMonthlyExpense - newTotalExpense;
    const annualSavings = monthlySavings * 12;
    const hoursSavedPerMonth = Math.round((automatedContacts * 8.5) / 60);

    return {
      currentMonthlyExpense,
      newTotalExpense,
      monthlySavings,
      annualSavings,
      hoursSavedPerMonth,
      automatedContacts,
    };
  }, [monthlyVolume, manualCostPerContact, automationRate]);

  // Formatter for Indian Rupees (Lakhs & Crores)
  const formatINR = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} L`;
    }
    return `₹${val.toLocaleString("en-IN")}`;
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-medium text-blue-700 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ROI MODEL</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-slate-950">
            Calculate your operational <br className="hidden sm:inline" />
            <span className="text-slate-500 font-semibold">cost reduction with Voice & AI Agents.</span>
          </h3>
        </div>

        <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs font-mono">
          <div>
            <div className="text-slate-500">Benchmark Deflection</div>
            <div className="text-sm font-bold text-slate-900">70% – 82%</div>
          </div>
          <div className="w-px h-8 bg-slate-200" />
          <div>
            <div className="text-slate-500">Telemetry SLA</div>
            <div className="text-sm font-bold text-emerald-600">&lt; 90 Seconds</div>
          </div>
        </div>
      </div>

      {/* Main Grid: Controls vs Visual Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left: Sliders */}
        <div className="lg:col-span-6 space-y-6">
          {/* Slider 1: Monthly Calls / Conversations */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-slate-700">
                Monthly Inbound Calls & Conversations:
              </span>
              <span className="font-bold text-sm text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                {monthlyVolume.toLocaleString("en-IN")} calls/mo
              </span>
            </div>
            <input
              type="range"
              min="2000"
              max="100000"
              step="1000"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>2,000</span>
              <span>50,000</span>
              <span>1,00,000+</span>
            </div>
          </div>

          {/* Slider 2: Current Cost Per Call */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-slate-700">
                Current Cost Per Contact (Human Rep / BPO):
              </span>
              <span className="font-bold text-sm text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                ₹{manualCostPerContact} / contact
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="90"
              step="5"
              value={manualCostPerContact}
              onChange={(e) => setManualCostPerContact(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>₹20 (In-house basic)</span>
              <span>₹45 (Standard BPO)</span>
              <span>₹90 (Tier-1 support)</span>
            </div>
          </div>

          {/* Slider 3: AI Deflection Rate */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-slate-700">
                Glitchless Voice & AI Resolution Rate:
              </span>
              <span className="font-bold text-sm text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {automationRate}% automated
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="85"
              step="1"
              value={automationRate}
              onChange={(e) => setAutomationRate(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>50% (Conservative)</span>
              <span>72% (Production Avg)</span>
              <span>85% (Optimized)</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-bold text-slate-800">Deterministic Economics:</div>
            <p>
              Voice AI handles routine verification, order status, and lead qualification for ₹3.80/call. Complex escalations route seamlessly to human specialists with full transcript context.
            </p>
          </div>
        </div>

        {/* Right: Comparative Visual Bar Chart & Savings Cards */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          {/* Big Savings Highlight */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-900 text-white shadow-xs">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                Annual Net Savings
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                {formatINR(stats.annualSavings)}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                {formatINR(stats.monthlySavings)} saved per month
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f8fafc] border border-slate-200">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                Monthly Team Hours Saved
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900">
                {stats.hoursSavedPerMonth.toLocaleString("en-IN")} hrs
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Redirected to high-value revenue
              </div>
            </div>
          </div>

          {/* Visual Bar Comparison: Before vs After */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Monthly Cost Comparison:
            </div>

            {/* Before Bar: Human BPO */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-600">Without Glitchless (100% Manual):</span>
                <span className="font-bold text-rose-600">{formatINR(stats.currentMonthlyExpense)}</span>
              </div>
              <div className="h-4 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full transition-all duration-300" style={{ width: "100%" }} />
              </div>
            </div>

            {/* After Bar: Glitchless Governed AI */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-700 font-semibold">With Glitchless Voice & AI (Governed):</span>
                <span className="font-bold text-emerald-700">{formatINR(stats.newTotalExpense)}</span>
              </div>
              <div className="h-4 bg-slate-200 rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                  style={{
                    width: `${Math.max(8, (stats.newTotalExpense / stats.currentMonthlyExpense) * 100)}%`,
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-200">
              <span>SLA: 4.2 hours wait ➔ &lt; 90s instant</span>
              <span className="font-bold text-emerald-700">
                -{( (stats.monthlySavings / stats.currentMonthlyExpense) * 100 ).toFixed(0)}% cost reduction
              </span>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <div className="text-xs text-slate-600 font-mono">
              Ready to eliminate repetitive support and call overhead?
            </div>
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-all shrink-0 active:scale-98 shadow-xs"
            >
              <span>Get Tailored Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

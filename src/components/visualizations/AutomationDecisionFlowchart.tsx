"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  MessageSquare,
  Bot,
  GitBranch,
  CheckCircle2,
  Calendar,
  UserCheck,
  Zap,
  ArrowDown,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export function AutomationDecisionFlowchart() {
  const [selectedPath, setSelectedPath] = useState<"routine" | "vip" | "exception">("routine");

  return (
    <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-10 text-left">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-medium text-blue-700 mb-2">
            <GitBranch className="w-3.5 h-3.5" />
            <span>VISUAL AUTOMATION FLOWCHART</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-slate-950">
            How incoming requests flow <br className="hidden sm:inline" />
            <span className="text-slate-500 font-semibold">from inquiry to instant resolution.</span>
          </h3>
        </div>

        {/* Interactive Scenario Buttons */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
            Simulate a Customer Flow:
          </span>
          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-slate-200">
            <button
              onClick={() => setSelectedPath("routine")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedPath === "routine"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              1. Routine Voice Inquiry (74%)
            </button>
            <button
              onClick={() => setSelectedPath("vip")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedPath === "vip"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              2. High-Value Lead (18%)
            </button>
            <button
              onClick={() => setSelectedPath("exception")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedPath === "exception"
                  ? "bg-purple-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              3. Human Approval Gate (8%)
            </button>
          </div>
        </div>
      </div>

      {/* FLOWCHART CANVAS */}
      <div className="pt-8 space-y-6">
        {/* LEVEL 1: Inbound Trigger Node */}
        <div className="max-w-xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-center shadow-2xs">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-200 text-[10px] font-mono font-bold text-slate-700 uppercase mb-2">
            STEP 1 // INBOUND TRIGGER
          </div>
          <div className="flex items-center justify-center gap-3 text-sm font-bold text-slate-900">
            <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
              <PhoneCall className="w-3.5 h-3.5 text-blue-600" /> Phone Call
            </span>
            <span className="text-slate-400 font-normal">or</span>
            <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Message
            </span>
            <span className="text-slate-400 font-normal">or</span>
            <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs">
              Online Order Form
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            {selectedPath === "routine" && "Customer calls phone line asking to confirm COD order and correct delivery address."}
            {selectedPath === "vip" && "Enterprise buyer submits request for 400+ vehicle fleet management automation."}
            {selectedPath === "exception" && "Customer submits custom discount request exceeding standard rep permissions."}
          </p>
        </div>

        {/* Animated Connector Arrow */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-6 bg-slate-300" />
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          <div className="w-0.5 h-6 bg-slate-300" />
        </div>

        {/* LEVEL 2: AI Understanding & Intent Engine */}
        <div className="max-w-xl mx-auto p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-center shadow-2xs">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-[10px] font-mono font-bold text-blue-800 uppercase mb-2">
            <Sparkles className="w-3 h-3 text-blue-600" />
            STEP 2 // AI INTENT & VERIFICATION GATE
          </div>
          <h4 className="text-sm font-bold text-slate-900">
            Understands intent, extracts details & checks business rules
          </h4>
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-600 mt-2">
            <span>Latency: &lt; 400ms</span>
            <span>•</span>
            <span>Language: Auto-detected</span>
            <span>•</span>
            <span className="text-emerald-700 font-semibold">Guardrails: Enforced</span>
          </div>
        </div>

        {/* Animated Split Connector Wires */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-6 bg-slate-300" />
          <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold">
            CONDITIONAL DECISION ROUTE
          </div>
          <div className="w-full max-w-4xl h-4 border-t-2 border-x-2 border-slate-300 rounded-t-lg mt-2 hidden sm:block" />
        </div>

        {/* LEVEL 3: 3 BRANCHING PATHS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {/* PATH 1: Routine Self-Service (Voice & WhatsApp) */}
          <div
            onClick={() => setSelectedPath("routine")}
            className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
              selectedPath === "routine"
                ? "bg-emerald-50/70 border-emerald-400 shadow-md ring-2 ring-emerald-400/40"
                : "bg-white border-slate-200 hover:border-slate-300 opacity-70"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  [IF ROUTINE] • PATH A
                </span>
                <span className="text-xs font-mono text-slate-500">74% of Volume</span>
              </div>

              <h5 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Zero-Touch Resolution
              </h5>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Voice AI agent speaks with the customer, verifies OTP/address in natural conversation, and directly updates Shopify and shipping records.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/80 bg-white/70 -mx-5 -mb-5 p-4 rounded-b-xl">
              <div className="text-[11px] font-mono text-emerald-800 font-semibold">
                Outcome: Resolved in 42 seconds
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                No human rep required • ₹3.80 total cost
              </div>
            </div>
          </div>

          {/* PATH 2: High-Value Opportunity */}
          <div
            onClick={() => setSelectedPath("vip")}
            className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
              selectedPath === "vip"
                ? "bg-blue-50/70 border-blue-400 shadow-md ring-2 ring-blue-400/40"
                : "bg-white border-slate-200 hover:border-slate-300 opacity-70"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                <span className="text-[11px] font-mono font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded">
                  [IF VIP / REVENUE] • PATH B
                </span>
                <span className="text-xs font-mono text-slate-500">18% of Volume</span>
              </div>

              <h5 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-600" />
                Instant Sales Escalation
              </h5>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                AI verifies company turnover, prepares a brief on the account, and automatically locks a calendar meeting for your sales lead.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/80 bg-white/70 -mx-5 -mb-5 p-4 rounded-b-xl">
              <div className="text-[11px] font-mono text-blue-800 font-semibold">
                Outcome: Booked in under 90s
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Full transcript attached • Opportunity in CRM
              </div>
            </div>
          </div>

          {/* PATH 3: Human Approval Gate */}
          <div
            onClick={() => setSelectedPath("exception")}
            className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
              selectedPath === "exception"
                ? "bg-purple-50/70 border-purple-400 shadow-md ring-2 ring-purple-400/40"
                : "bg-white border-slate-200 hover:border-slate-300 opacity-70"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                <span className="text-[11px] font-mono font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded">
                  [IF EXCEPTION] • PATH C
                </span>
                <span className="text-xs font-mono text-slate-500">8% of Volume</span>
              </div>

              <h5 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-purple-600" />
                Human-in-the-Loop Sign-Off
              </h5>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                AI flags policy edge-cases, prepares an audited proposal, and alerts the manager for a 1-click approval before any quote is sent.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/80 bg-white/70 -mx-5 -mb-5 p-4 rounded-b-xl">
              <div className="text-[11px] font-mono text-purple-800 font-semibold">
                Outcome: Signed off in &lt; 5 mins
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Zero unauthorized discounts • Full audit trail
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              <strong>Every path is tracked:</strong> Real-time response times, complete conversation logs, and zero manual spreadsheet entry.
            </span>
          </div>
          <div className="font-mono text-slate-400 shrink-0">
            Current Active Scenario: <strong className="text-white uppercase">{selectedPath}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

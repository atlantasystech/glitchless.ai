"use client";

import React, { useState } from "react";
import { MessageSquare, ShieldCheck, Database, CheckCircle2, ArrowRight, Zap, RefreshCw } from "lucide-react";

export function VisualPipelineNodeGraph() {
  const [activeNode, setActiveNode] = useState(1);

  const nodes = [
    {
      id: 0,
      step: "01",
      name: "Inbound Ingestion",
      system: "Shopify • WhatsApp • Ads",
      latency: "420ms",
      status: "PASS",
      icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
      detailTitle: "Step 1: Omnichannel Webhook Ingestion",
      detailDescription: "Receives raw customer inquiry or order webhook, validates authentication headers, and normalizes into a unified enterprise JSON schema.",
      metrics: [
        { label: "Webhook Latency", value: "420ms" },
        { label: "Delivery Guarantee", value: "99.98%" },
        { label: "Input Sources", value: "Meta / Shopify / Webforms" },
      ],
    },
    {
      id: 1,
      step: "02",
      name: "Governed AI Validation",
      system: "Deterministic Guardrails",
      latency: "48ms",
      status: "PASS",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      detailTitle: "Step 2: Mathematical Boundary Check",
      detailDescription: "Deterministic checks verify margin caps, sanitize customer PII, and prevent hallucinations. If quote exceeds threshold, it pauses for human sign-off.",
      metrics: [
        { label: "Assertion Checks", value: "100% Passed" },
        { label: "Hallucination Risk", value: "0.00%" },
        { label: "Data Security", value: "DPDP 2023 Compliant" },
      ],
    },
    {
      id: 2,
      step: "03",
      name: "ERP & Database Sync",
      system: "Odoo 18 • ERPNext • Postgres",
      latency: "24ms",
      status: "PASS",
      icon: <Database className="w-5 h-5 text-purple-600" />,
      detailTitle: "Step 3: Bi-directional Core Sync",
      detailDescription: "Synchronizes verified lead contact records, GST invoices, and multi-warehouse inventory levels directly into your core enterprise database.",
      metrics: [
        { label: "Postgres Latency", value: "24ms" },
        { label: "Deduplication", value: "100% Unique" },
        { label: "Database State", value: "Bi-directional Active" },
      ],
    },
    {
      id: 3,
      step: "04",
      name: "Automated Dispatch",
      system: "WhatsApp API • Couriers",
      latency: "840ms",
      status: "PASS",
      icon: <CheckCircle2 className="w-5 h-5 text-blue-600" />,
      detailTitle: "Step 4: Customer Follow-up & Routing",
      detailDescription: "Sends personalized WhatsApp booking links or generates shipping airway bills (Delhivery / Shiprocket) in under 90 seconds from initial contact.",
      metrics: [
        { label: "First Contact SLA", value: "< 90 Seconds" },
        { label: "Read & Confirmed", value: "88.4%" },
        { label: "Manual Effort", value: "Zero Human Touches" },
      ],
    },
  ];

  return (
    <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              INTERACTIVE PIPELINE ARCHITECTURE
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            How Data Moves Across Your Business
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Click on any node in the pipeline to inspect data transformations and execution latency.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shrink-0">
          <Zap className="w-3.5 h-3.5" />
          <span>Pipeline Throughput: 24,190 runs today</span>
        </div>
      </div>

      {/* Visual Connected Nodes Flow */}
      <div className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {nodes.map((node, idx) => {
            const isSelected = activeNode === node.id;

            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node.id)}
                className={`p-4 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]"
                    : "bg-[#fbfcfd] border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isSelected ? "bg-slate-800 text-white" : "bg-white border border-slate-200"
                    }`}
                  >
                    {node.icon}
                  </div>
                  <span
                    className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-emerald-900/60 text-emerald-300 border border-emerald-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {node.latency}
                  </span>
                </div>

                <div
                  className={`text-[10px] font-mono font-semibold uppercase tracking-wider ${
                    isSelected ? "text-slate-400" : "text-slate-400"
                  }`}
                >
                  PHASE // {node.step}
                </div>
                <div className="font-bold text-sm leading-snug mt-0.5">{node.name}</div>
                <div
                  className={`text-xs mt-1 truncate ${
                    isSelected ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {node.system}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Node Detail Inspector Box */}
      <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/80 mb-4">
          <div>
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-700 block">
              SELECTED PIPELINE INSPECTION
            </span>
            <h4 className="text-base font-bold text-slate-900 mt-0.5">
              {nodes[activeNode].detailTitle}
            </h4>
          </div>
          <span className="text-xs font-mono text-emerald-700 font-semibold bg-emerald-100/70 px-2.5 py-0.5 rounded border border-emerald-200 self-start sm:self-auto">
            EXECUTION STATUS: NOMINAL (0 ERRORS)
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {nodes[activeNode].detailDescription}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {nodes[activeNode].metrics.map((m) => (
            <div key={m.label} className="p-3 rounded-lg bg-white border border-slate-200">
              <div className="text-[11px] font-mono text-slate-400 uppercase">{m.label}</div>
              <div className="text-base font-bold font-mono text-slate-900 mt-0.5">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

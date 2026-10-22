"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Database,
  Bot,
  MessageSquare,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Layers,
} from "lucide-react";
import { GOVERNED_STEPS } from "@/lib/constants";

export function WorkflowDiagram() {
  const [activeStep, setActiveStep] = useState(0);

  const mockPayloads = [
    {
      stage: "Audit & Pipeline Discovery",
      latency: "120ms",
      telemetry: "14 Data Sources Ingested",
      status: "COMPLETED",
      data: {
        crm: "Odoo 18 Community (Self-Hosted)",
        storefront: "Shopify Plus Multi-Currency",
        lead_capture: "Meta Ads + Webhook + WhatsApp API",
        manual_bottlenecks: ["Lead assignment delay (4.2 hrs)", "COD address confirmation (manual call team)"],
      },
    },
    {
      stage: "Governed Architecture Blueprint",
      latency: "15ms",
      telemetry: "Zero Hallucination Bounds Enforced",
      status: "APPROVED_BY_LEAD",
      data: {
        agent_permissions: "Read-Only Postgres Replica + Restricted Function Calls",
        approval_threshold: "Quotes > ₹1,00,000 require Slack confirmation",
        compliance: "DPDP Act 2023 / PII Redaction Filter Active",
      },
    },
    {
      stage: "Containerized VPC Deployment",
      latency: "42ms",
      telemetry: "AWS Mumbai (ap-south-1)",
      status: "ACTIVE_CONTAINERS",
      data: {
        orchestrator: "n8n Enterprise (Private VPC)",
        database: "PostgreSQL 16 + pgvector",
        llm_gateway: "OpenAI Enterprise API + Azure Fallback",
        error_fallback: "Auto-retry x3 with exponential backoff",
      },
    },
    {
      stage: "Real-Time Telemetry & Guardrails",
      latency: "8ms",
      telemetry: "99.98% Healthy Execution",
      status: "LIVE_STREAM",
      data: {
        active_agents: 14,
        total_runs_today: "24,190 executions",
        silent_error_count: "0 (All exceptions routed to WhatsApp desk)",
        average_response_time: "64 seconds",
      },
    },
    {
      stage: "SLA Optimization & Human Escalation",
      latency: "180ms",
      telemetry: "Human-in-the-Loop Active",
      status: "SYNC_NOMINAL",
      data: {
        human_escalation_queue: "1 pending review",
        escalation_reason: "High-value enterprise discount request (18%)",
        routed_to: "Operations Manager via WhatsApp / Slack",
        action_timeout: "5 minutes SLA before second-level alert",
      },
    },
  ];

  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 text-white p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-400 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Interactive Operational Flow Inspector</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Governed AI Lifecycle Execution
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Select a phase to inspect deterministic guardrails, payloads, and telemetry bounds.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-emerald-400 font-semibold">
            Telemetry Live // 62ms Latency
          </span>
        </div>
      </div>

      {/* Step Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6">
        {GOVERNED_STEPS.map((step, idx) => (
          <button
            key={step.step}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeStep === idx
                ? "bg-blue-600/20 border-blue-500 text-white shadow-xs"
                : "bg-slate-800/40 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            <div className="text-[10px] font-mono font-bold text-blue-400">
              PHASE // {step.step}
            </div>
            <div className="text-xs font-bold truncate mt-0.5">{step.title}</div>
            <div className="text-[10px] text-slate-500 font-mono mt-1">{step.timeline}</div>
          </button>
        ))}
      </div>

      {/* Active Phase Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
              Phase Overview
            </span>
            <h4 className="text-base font-bold text-white">
              {GOVERNED_STEPS[activeStep].title}
            </h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {GOVERNED_STEPS[activeStep].description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
              Deliverables & Guardrails
            </span>
            <ul className="space-y-2">
              {GOVERNED_STEPS[activeStep].keyOutputs.map((out) => (
                <li key={out} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Live Payload Mock Inspector */}
        <div className="lg:col-span-7">
          <div className="h-full rounded-xl bg-black/60 border border-slate-800 p-4 font-mono text-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                  <span>Payload: {mockPayloads[activeStep].stage}</span>
                </span>
                <span className="text-emerald-400 font-bold">
                  {mockPayloads[activeStep].status}
                </span>
              </div>

              <pre className="text-blue-300/90 overflow-x-auto text-[11px] leading-relaxed p-2 bg-slate-950/80 rounded-lg border border-slate-800/80">
                {JSON.stringify(mockPayloads[activeStep].data, null, 2)}
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>Telemetry: {mockPayloads[activeStep].telemetry}</span>
              <span className="text-slate-500 font-mono">Response: {mockPayloads[activeStep].latency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

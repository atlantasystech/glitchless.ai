"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  UserCheck,
  Zap,
  Layers,
  Bot,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function HeroOpsDashboard() {
  const [activeTab, setActiveTab] = useState<"leads" | "orders" | "agents" | "approvals">("leads");
  const [isApproved, setIsApproved] = useState(false);

  return (
    <div className="relative mx-auto max-w-5xl rounded-2xl bg-white border border-slate-200/90 shadow-xl overflow-hidden text-left">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3.5 bg-slate-50 border-b border-slate-200 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="h-4 w-px bg-slate-300" />
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-700">
            <span className="font-bold text-slate-900">OPSARA</span>
            <span className="text-slate-400">/</span>
            <span>Operations Control Tower</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-600">
          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live System Uptime: 99.98%
          </span>
          <span className="hidden sm:inline text-slate-400">Avg SLA: &lt; 90s</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-5 py-2.5 bg-white border-b border-slate-200 flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("leads")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "leads"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>Revenue OS (Leads)</span>
          </button>

          <button
            onClick={() => setActiveTab("orders")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "orders"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Commerce OS (Orders)</span>
          </button>

          <button
            onClick={() => setActiveTab("agents")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "agents"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-indigo-400" />
            <span>Active AI Agents</span>
          </button>

          <button
            onClick={() => setActiveTab("approvals")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === "approvals"
                ? "bg-slate-900 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>Approval Queue</span>
            <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
              isApproved ? "bg-slate-100 text-slate-500" : "bg-amber-100 text-amber-800"
            }`}>
              {isApproved ? "0" : "1"}
            </span>
          </button>
        </div>

        <span className="hidden md:inline text-[11px] font-mono text-slate-400">
          Governed Execution
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 bg-slate-50/60">
        {/* TAB 1: Leads */}
        {activeTab === "leads" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">Vikram Singhania</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Qualified in 68s
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">WhatsApp API</span>
                </div>
                <p className="text-xs text-slate-600">
                  Singhania Logistics Ltd • Annual Turnover: ₹65 Cr • Scope: Multi-branch Odoo CRM
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
                  Synced to Odoo CRM
                </span>
                <span className="text-xs text-slate-500">Call booked for 3:30 PM</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Avg Response Time</div>
                <div className="text-xl font-bold font-mono text-slate-900 mt-0.5">74 seconds</div>
                <div className="text-[11px] text-emerald-600 font-medium">94% faster than manual</div>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Leads Qualified Today</div>
                <div className="text-xl font-bold font-mono text-slate-900 mt-0.5">142 Leads</div>
                <div className="text-[11px] text-slate-500">Zero duplicate entries</div>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="text-[11px] font-mono text-slate-500 uppercase">CRM Sync Accuracy</div>
                <div className="text-xl font-bold font-mono text-emerald-600 mt-0.5">100% Verified</div>
                <div className="text-[11px] text-slate-500">Odoo, ERPNext, Zoho</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Orders */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">Shopify Order #84920</span>
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                    COD Verified & Rerouted
                  </span>
                  <span className="text-xs font-mono text-slate-400">₹14,990</span>
                </div>
                <p className="text-xs text-slate-600">
                  Customer confirmed address on WhatsApp OTP in 42s • Bhiwandi inventory locked
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                  Delhivery Airway Bill Ready
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="text-[11px] font-mono text-slate-500 uppercase">RTO Reduction</div>
                <div className="text-xl font-bold font-mono text-emerald-600 mt-0.5">-32% Returned</div>
                <div className="text-[11px] text-slate-500">WhatsApp OTP check</div>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Multi-Warehouse Sync</div>
                <div className="text-xl font-bold font-mono text-slate-900 mt-0.5">24ms Latency</div>
                <div className="text-[11px] text-slate-500">Zero overselling</div>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Exceptions Resolved</div>
                <div className="text-xl font-bold font-mono text-slate-900 mt-0.5">70% Automated</div>
                <div className="text-[11px] text-slate-500">Without manual calls</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Agents */}
        {activeTab === "agents" && (
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  01
                </div>
                <div>
                  <div className="font-bold text-slate-900">Inbound Lead Qualifier Agent</div>
                  <div className="text-slate-500 text-[11px]">Enforces deterministic qualification & WhatsApp messaging</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
                Active (0 Failures)
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  02
                </div>
                <div>
                  <div className="font-bold text-slate-900">Order Exception & Shipping Reconciler</div>
                  <div className="text-slate-500 text-[11px]">Detects courier pincode mismatches and prompts customer on WhatsApp</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
                Active (0 Failures)
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                  03
                </div>
                <div>
                  <div className="font-bold text-slate-900">Pricing & Margin Guardrail Agent</div>
                  <div className="text-slate-500 text-[11px]">Prevents unauthorized discounts; routes high-value quotes to humans</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-semibold text-[11px]">
                Guardrail Enforced
              </span>
            </div>
          </div>
        )}

        {/* TAB 4: Approvals */}
        {activeTab === "approvals" && (
          <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-semibold text-amber-600 block">
                  HUMAN-IN-THE-LOOP APPROVAL
                </span>
                <h4 className="font-bold text-slate-900 text-sm mt-0.5">
                  High-Value Quote #PT-8821: Apex Precision Engineering Ltd
                </h4>
                <p className="text-xs text-slate-500">
                  Quote value ₹3,40,000 exceeds single-agent limit of ₹1,00,000.
                </p>
              </div>

              <div className="text-right text-xs">
                <span className="text-slate-400">Escalated 2m ago</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4 text-slate-600">
                <span>Proposed Discount: <strong className="text-slate-900">12.5%</strong></span>
                <span>Terms: <strong className="text-slate-900">Net 30 Days</strong></span>
              </div>

              {isApproved ? (
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Approved & Synced to ERP</span>
                </div>
              ) : (
                <button
                  onClick={() => setIsApproved(true)}
                  className="w-full sm:w-auto px-5 py-2 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors shadow-xs active:scale-98"
                >
                  Approve Transaction
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer bar */}
      <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-slate-500">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Zero AI hallucinations. Hard deterministic business rules.
        </span>
        <span>Enterprise Data Privacy & Confidentiality</span>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  PhoneCall,
  MessageSquare,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Mic,
  TrendingUp,
  Clock,
  ArrowRight,
  Bot,
  BarChart3,
  Globe2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  WhatsAppLogo,
  ShopifyLogo,
  DelhiveryLogo,
  OdooLogo,
  ZohoLogo,
  ERPNextLogo,
  OpenAILogo,
} from "@/components/BrandLogos";

export function BentoHero() {
  const [activeTab, setActiveTab] = useState<"all" | "voice" | "whatsapp" | "commerce">("all");

  return (
    <section className="relative min-h-[90vh] bg-white text-slate-900 overflow-hidden pt-12 pb-20 border-b border-slate-200">
      {/* Background radial atmosphere — subtle, light, clean */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-3xl" />
        {/* Crisp subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Eyebrow & Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            AI-OPERATED BUSINESS SYSTEMS
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            Zero-Wait Omnichannel Operations
          </span>
        </div>

        {/* Main Header / Multi-System Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black tracking-[-0.035em] text-slate-950 leading-[1.06]">
            Autonomous operations that run your business.{" "}
            <br className="hidden sm:block" />
            <span className="text-slate-400 font-bold tracking-[-0.03em]">
              Not just another chatbot.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-sans">
            Glitchless deploys governed AI agents across Voice calls, WhatsApp pipelines, ERP databases, and Commerce fulfillment — qualifying leads in 60s, resolving orders, and booking pipeline without human overhead.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 active:scale-98"
            >
              Book an Operations Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#voice-ai"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs"
            >
              <PhoneCall className="w-4 h-4 text-blue-600" /> Test Interactive Demos
            </a>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-7 flex flex-wrap gap-5 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Sub-600ms Voice Latency
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Direct Odoo, Zoho &amp; Shopify Write
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100% Governed Audit Trail
            </span>
          </div>
        </div>

        {/* ── BENTO GRID SHOWCASE (Clean Light Theme) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 mt-2">
          
          {/* CARD 1: WhatsApp Revenue OS (Spans 7 columns) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center p-1.5">
                    <WhatsAppLogo className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">WhatsApp Lead-to-Meeting Pipeline</h3>
                    <span className="text-[11px] font-mono text-slate-500">Autonomous qualification in 60s</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>

              {/* Chat Simulation Bubble */}
              <div className="space-y-2.5 bg-slate-50/70 p-4 rounded-xl border border-slate-100 font-sans text-xs">
                <div className="flex gap-2.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    AI
                  </div>
                  <div className="bg-white p-3 rounded-xl rounded-tl-xs border border-slate-200/80 shadow-2xs max-w-[85%]">
                    <p className="text-slate-800 leading-relaxed">
                      “Hi Vikram! Thanks for requesting our ERP automation demo. How many users are in your sales and operations team?”
                    </p>
                    <span className="text-[9px] text-slate-400 font-mono mt-1 block">2:04 PM</span>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start flex-row-reverse">
                  <div className="w-6 h-6 rounded-full bg-slate-700 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    V
                  </div>
                  <div className="bg-[#d9fdd3] p-3 rounded-xl rounded-tr-xs border border-emerald-200/60 shadow-2xs max-w-[85%]">
                    <p className="text-slate-900 leading-relaxed font-medium">
                      “Around 45 users across 3 regional branches in North India.”
                    </p>
                    <span className="text-[9px] text-slate-500 font-mono mt-1 block text-right">2:05 PM</span>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    AI
                  </div>
                  <div className="bg-white p-3 rounded-xl rounded-tl-xs border border-slate-200/80 shadow-2xs max-w-[85%]">
                    <p className="text-slate-800 leading-relaxed">
                      “Perfect for our Growth tier! ✅ Google Meet booked for tomorrow at 3 PM with senior architecture team. Synced to your CRM.”
                    </p>
                    <span className="text-[9px] text-emerald-600 font-mono font-bold mt-1 block">
                      Meeting Locked • Odoo Opportunity #8841 Created
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 mt-4 pt-3 border-t border-slate-100 text-center font-mono">
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                <div className="text-base font-bold text-slate-900">74s</div>
                <div className="text-[10px] text-slate-500">Qualification</div>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                <div className="text-base font-bold text-emerald-600">+35%</div>
                <div className="text-[10px] text-slate-500">Pipeline Velocity</div>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                <div className="text-base font-bold text-blue-600">0</div>
                <div className="text-[10px] text-slate-500">Human Hours</div>
              </div>
            </div>
          </div>

          {/* CARD 2: Voice AI Agent (Spans 5 columns) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Zero-Wait Inbound Voice AI</h3>
                    <span className="text-[11px] font-mono text-slate-500">Hindi, English &amp; Hinglish</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono font-bold">
                  &lt; 580ms
                </span>
              </div>

              {/* Call Visualizer */}
              <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">Active Inbound Call</span>
                  <span className="text-emerald-400 font-bold">ANSWERED</span>
                </div>
                <div className="h-8 flex items-center justify-center gap-1">
                  {[20, 45, 75, 90, 60, 40, 85, 100, 70, 35, 55, 80, 95, 65, 30, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-blue-400 rounded-full"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="text-[11px] text-slate-300 leading-snug font-sans">
                  “Namaste Pooja ji, aapka order confirm ho chuka hai. Address Flat 403 update kar diya gaya hai.”
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-600">Cost: ₹3.80 vs ₹45 BPO</span>
              <span className="text-emerald-600 font-bold">92% Cost Cut</span>
            </div>
          </div>

          {/* CARD 3: Commerce OS & COD Return Reducer (Spans 5 columns) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center p-1.5">
                    <ShopifyLogo className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Commerce OS &amp; RTO Shield</h3>
                    <span className="text-[11px] font-mono text-slate-500">Shopify + Delhivery Sync</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 text-[10px] font-mono font-bold">
                  -32% RTO
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <strong className="text-slate-900 block font-mono">Order #84920 (COD)</strong>
                    <span className="text-[11px] text-slate-500">High-Risk Pincode Flagged</span>
                  </div>
                  <span className="text-xs font-bold text-slate-900">₹3,490</span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex items-center gap-2 text-xs text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>AI called buyer, confirmed address landmark &amp; issued Delhivery AWB label.</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <DelhiveryLogo className="w-3.5 h-3.5" /> AWB Auto-Generated
              </span>
              <span className="text-blue-600 font-bold">42s Total Time</span>
            </div>
          </div>

          {/* CARD 4: Enterprise Two-Way Connectors (Spans 7 columns) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Two-Way Enterprise Connectors</h3>
                  <span className="text-[11px] font-mono text-slate-500">Direct database &amp; ERP execution</span>
                </div>
                <span className="text-xs font-mono text-slate-500">Zero Middleware</span>
              </div>

              {/* Verified Logos Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "Odoo 18", desc: "Native RPC", logo: <OdooLogo className="w-5 h-5" /> },
                  { name: "ERPNext", desc: "REST Webhook", logo: <ERPNextLogo className="w-5 h-5" /> },
                  { name: "Zoho CRM", desc: "OAuth 2.0", logo: <ZohoLogo className="w-5 h-5" /> },
                  { name: "Delhivery", desc: "Direct AWB", logo: <DelhiveryLogo className="w-5 h-5" /> },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5"
                  >
                    <div className="shrink-0">{item.logo}</div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">{item.name}</div>
                      <div className="text-[10px] font-mono text-slate-500 truncate">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Governance note */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                100% Tamper-Proof Audit Ledger
              </span>
              <span className="text-emerald-600 font-bold">SOC-2 &amp; DPDP Compliant</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

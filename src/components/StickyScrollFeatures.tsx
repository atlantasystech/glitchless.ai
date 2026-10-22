"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  PhoneCall,
  MessageSquare,
  ShoppingCart,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import {
  WhatsAppLogo,
  ShopifyLogo,
  DelhiveryLogo,
  OdooLogo,
  ZohoLogo,
  GoogleCalendarLogo,
} from "@/components/BrandLogos";

export function StickyScrollFeatures() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const systems = [
    {
      id: "whatsapp",
      tab: "WhatsApp Revenue OS",
      tag: "Lead Qualification & Booking",
      headline: "Qualify leads in 60 seconds, not 4 hours",
      body: "The moment a prospect submits your form, your AI triggers an authentic WhatsApp conversation, answers customer queries, enriches their CRM profile, and books sales calls on Google Meet — completely autonomous.",
      stat1: { value: "74 sec", label: "avg qualification time" },
      stat2: { value: "+35%", label: "pipeline velocity" },
      link: "/solutions",
      visual: (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-full">
          {/* Mockup Header */}
          <div className="bg-slate-100/80 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 ml-2">WhatsApp Business API v20</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Connected
            </div>
          </div>

          {/* Chat Window */}
          <div className="p-4 bg-[#efeae2]/30 flex-1 space-y-3 overflow-y-auto">
            {/* Contact banner */}
            <div className="flex items-center gap-3 p-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
              <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center p-1.5 border border-emerald-100">
                <WhatsAppLogo className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-slate-900 truncate">Vikram Singhania (VP Operations)</div>
                <div className="text-[10px] text-slate-500 font-mono">Inbound Lead • Source: Website Form</div>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Verified
              </span>
            </div>

            {/* Chat Messages */}
            <div className="space-y-2.5 pt-2">
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#d9fdd3] text-slate-900 rounded-xl rounded-tr-xs p-3 text-xs shadow-2xs border border-emerald-200/50">
                  <p className="leading-relaxed">
                    Namaste Vikram! Thanks for reaching out to Glitchless. We noticed you run 450 fleet trucks. How many branches need Odoo dispatch automation?
                  </p>
                  <span className="block text-[9px] text-slate-500 text-right mt-1 font-mono">2:04 PM ✓✓</span>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-[85%] bg-white text-slate-900 rounded-xl rounded-tl-xs p-3 text-xs shadow-2xs border border-slate-200">
                  <p className="leading-relaxed">
                    We have 3 regional hubs (Delhi, Jaipur, Chandigarh) handling around 12,000 dispatches a month.
                  </p>
                  <span className="block text-[9px] text-slate-400 text-right mt-1 font-mono">2:05 PM</span>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#d9fdd3] text-slate-900 rounded-xl rounded-tr-xs p-3 text-xs shadow-2xs border border-emerald-200/50">
                  <p className="leading-relaxed">
                    That fits our Enterprise fleet connector! Would you like a 20-min architecture review tomorrow at 3:30 PM with our senior solution engineer?
                  </p>
                  <span className="block text-[9px] text-slate-500 text-right mt-1 font-mono">2:06 PM ✓✓</span>
                </div>
              </div>

              <div className="flex justify-start">
                <div className="max-w-[85%] bg-white text-slate-900 rounded-xl rounded-tl-xs p-3 text-xs shadow-2xs border border-slate-200">
                  <p className="leading-relaxed">Yes, send invite to vikram@mehtalogistics.in.</p>
                  <span className="block text-[9px] text-slate-400 text-right mt-1 font-mono">2:07 PM</span>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-[85%] bg-[#d9fdd3] text-slate-900 rounded-xl rounded-tr-xs p-3 text-xs shadow-2xs border border-emerald-200/50">
                  <p className="leading-relaxed font-semibold text-emerald-950">
                    ✅ Booked! Google Meet invite dispatched. Details synced to your Odoo pipeline.
                  </p>
                  <span className="block text-[9px] text-slate-500 text-right mt-1 font-mono">2:07 PM ✓✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Live Sync Footer */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center p-0.5">
                <OdooLogo className="w-3.5 h-3.5" />
              </div>
              <span className="text-slate-600">Odoo CRM: Deal Created (₹18L ARR)</span>
            </div>
            <span className="text-emerald-600 font-bold">Sync: 180ms</span>
          </div>
        </div>
      ),
    },
    {
      id: "voice",
      tab: "Voice AI Operations",
      tag: "Zero-Latency Phone Agent",
      headline: "Answer every customer call in under 600ms",
      body: "High-volume inbound phone calls are answered immediately without humans on hold. Native fluency in English, Hindi, and Hinglish. Direct database read/write for instant order updates.",
      stat1: { value: "₹3.80", label: "per call vs ₹45 BPO" },
      stat2: { value: "< 580ms", label: "first spoken word" },
      link: "/solutions",
      visual: (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-full">
          <div className="bg-slate-100/80 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 ml-2">Voice AI Inbound Channel</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-mono font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Active Call: 00:34
            </div>
          </div>

          <div className="p-5 flex-1 space-y-4">
            {/* Live Audio Visualizer */}
            <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Caller: +91 98201 54321 (Pooja Sharma)</span>
                <span className="text-emerald-400 font-bold">Latency: 520ms</span>
              </div>

              {/* Waveform Bars */}
              <div className="h-10 flex items-center justify-center gap-1">
                {[12, 24, 38, 54, 76, 92, 64, 45, 80, 100, 65, 30, 48, 85, 95, 70, 40, 20, 35, 60].map(
                  (h, idx) => (
                    <div
                      key={idx}
                      className="w-1.5 bg-blue-400 rounded-full transition-all duration-150"
                      style={{ height: `${h}%` }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Transcript Card */}
            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200/70 text-slate-800">
                <strong className="text-blue-700 block font-bold mb-1">AI Voice Agent (Hindi/English):</strong>
                “Namaste Pooja ji! GlamourStyle se bol rahe hain. Aapka order Flat 403, Silver Oak Towers update kar diya hai. Delivery Thursday tak pahunchegi.”
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                <strong className="text-slate-900 block font-bold mb-1">Customer:</strong>
                “Thank you so much! Mujhe SMS confirmation bhi mil gaya.”
              </div>
            </div>

            {/* Metrics pills */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="font-bold text-slate-900">Hindi</div>
                <div className="text-[10px] text-slate-500">Language</div>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                <div className="font-bold text-emerald-700">Resolved</div>
                <div className="text-[10px] text-emerald-600">Intent Fixed</div>
              </div>
              <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200">
                <div className="font-bold text-blue-700">₹3.80</div>
                <div className="text-[10px] text-blue-600">Unit Cost</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "commerce",
      tab: "Commerce & COD OS",
      tag: "Return Order (RTO) Reduction",
      headline: "Eliminate returns before the parcel ships",
      body: "High-risk Cash-on-Delivery orders are automatically flagged, verified via phone/WhatsApp, and synchronized with Shopify & Delhivery in real-time — saving thousands in return freight costs.",
      stat1: { value: "-32%", label: "return & RTO rate" },
      stat2: { value: "42 sec", label: "order verification time" },
      link: "/services/ecommerce-management",
      visual: (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-full">
          <div className="bg-slate-100/80 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 ml-2">Shopify &amp; Logistics Gateway</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-mono font-bold">
              High-Risk COD Flag
            </div>
          </div>

          <div className="p-5 flex-1 space-y-4">
            {/* Order Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShopifyLogo className="w-5 h-5" />
                  <span className="text-xs font-bold text-slate-900 font-mono">Order #84920</span>
                </div>
                <span className="text-xs font-bold text-slate-900">₹3,490 COD</span>
              </div>
              <div className="text-xs text-slate-600">
                Customer: Ananya Das • Malad West, Mumbai • Risk Score: 68/100
              </div>
            </div>

            {/* Automation resolution box */}
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Autonomous Verification Complete
                </span>
                <span className="font-mono text-[10px] text-emerald-700">in 42s</span>
              </div>
              <p className="text-xs text-emerald-800 leading-relaxed">
                AI called customer, verified intent to accept COD, corrected Landmark (Near Inorbit Mall), and cleared order for packaging.
              </p>
            </div>

            {/* Delhivery AWB Issued */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-2.5">
                <DelhiveryLogo className="w-5 h-5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Delhivery Express Dispatch</div>
                  <div className="text-[10px] font-mono text-slate-500">AWB #DL-88219381 • Label Generated</div>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-600 font-mono">Dispatched</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
            <span>RTO Cost Prevented: ₹240</span>
            <span className="text-blue-600 font-bold">Zero Human Reps Required</span>
          </div>
        </div>
      ),
    },
    {
      id: "governance",
      tab: "Governance & Control",
      tag: "Ops Control Tower",
      headline: "Full oversight. 100% audit log. Zero surprises.",
      body: "Every single AI decision, customer conversation, and CRM write is recorded in a tamper-proof audit ledger. High-value actions trigger instant human-in-the-loop approval gates before execution.",
      stat1: { value: "100%", label: "actions recorded" },
      stat2: { value: "0%", label: "unauthorized dispatches" },
      link: "/process",
      visual: (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col h-full">
          <div className="bg-slate-100/80 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 ml-2">Enterprise Governance Ledger</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
              14 Agents Active
            </div>
          </div>

          <div className="p-5 flex-1 space-y-3">
            {/* Live Feed List */}
            <div className="space-y-2">
              {[
                { time: "12s ago", agent: "Voice Qualifier", detail: "Called Vikram Singhania, qualified 45 users", ok: true },
                { time: "44s ago", agent: "COD Verifier", detail: "Order #84920 confirmed, Delhivery AWB dispatched", ok: true },
                { time: "2m ago", agent: "Pricing Guard", detail: "Quote ₹3.4L exceeds ₹1L limit — Escalate to Manager", ok: false },
                { time: "4m ago", agent: "CRM Sync Agent", detail: "Deduplicated 3 contacts in Zoho CRM", ok: true },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-lg border flex items-center justify-between text-xs ${
                    item.ok ? "bg-slate-50 border-slate-200" : "bg-amber-50/80 border-amber-200"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className={`w-2 h-2 rounded-full shrink-0 ${item.ok ? "bg-emerald-500" : "bg-amber-500 animate-ping"}`}
                    />
                    <div className="min-w-0">
                      <strong className="text-slate-900 block truncate">{item.agent}</strong>
                      <span className="text-[11px] text-slate-500 block truncate">{item.detail}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 shrink-0 ml-2">{item.time}</span>
                </div>
              ))}
            </div>

            {/* Human Gate Box */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-amber-900">
                <span>⚠️ HUMAN APPROVAL REQUIRED</span>
                <span className="text-[10px] font-mono text-amber-700">1-Click Signoff</span>
              </div>
              <p className="text-xs text-amber-800">
                Enterprise Quote #PT-8821 for ₹3,40,000 is on hold pending VP authorization.
              </p>
              <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shadow-xs cursor-pointer">
                Approve Proposal &amp; Send to Buyer
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#fbfcfd] border-y border-slate-200 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-700 mb-4">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            HOW OPSARA RUNS YOUR OPERATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] text-slate-950 leading-[1.12]">
            One platform.{" "}
            <span className="text-slate-400 font-bold tracking-[-0.03em]">Four autonomous systems.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every customer touchpoint — phone, messaging, commerce checkout, and backend database — executes automatically with zero human latency.
          </p>
        </div>

        {/* Interactive Tab Switcher at the Top — Guarantees Instant Access on Any Screen */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200">
          {systems.map((sys, idx) => (
            <button
              key={sys.id}
              onClick={() => {
                setActiveIdx(idx);
                itemRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                idx === activeIdx
                  ? "bg-slate-900 text-white shadow-sm scale-102"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              <span>{sys.tab}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  idx === activeIdx ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                0{idx + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Split Layout: Left Sticky Panel + Right Content Blocks */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: Pinned Visual Showcase (Always visible on desktop, no broken sticky or hidden overflows) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28 self-start">
            <div className="h-[520px] w-full">
              {systems[activeIdx].visual}
            </div>
            {/* Quick status caption */}
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500 px-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Live operational simulation
              </span>
              <span>System {activeIdx + 1} of {systems.length}</span>
            </div>
          </div>

          {/* RIGHT: Content Items */}
          <div className="lg:col-span-6 space-y-12 lg:space-y-20">
            {systems.map((sys, idx) => (
              <div
                key={sys.id}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  idx === activeIdx
                    ? "bg-white border-blue-200 shadow-md ring-1 ring-blue-500/10"
                    : "bg-white/60 border-slate-200 hover:bg-white"
                }`}
              >
                {/* Mobile visual fallback — inline so it's NEVER missing or blank */}
                <div className="lg:hidden mb-6 h-[400px]">
                  {sys.visual}
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-4">
                  <span>{sys.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-slate-950 leading-tight mb-4">
                  {sys.headline}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {sys.body}
                </p>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-2xl font-extrabold font-mono text-slate-900">{sys.stat1.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{sys.stat1.label}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80">
                    <div className="text-2xl font-extrabold font-mono text-blue-700">{sys.stat2.value}</div>
                    <div className="text-xs text-blue-600 mt-0.5">{sys.stat2.label}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link
                    href={sys.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors group"
                  >
                    Explore {sys.tab} Architecture
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className="text-xs font-mono text-slate-500 hover:text-blue-600"
                  >
                    View Simulation →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

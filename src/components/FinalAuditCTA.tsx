import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function FinalAuditCTA() {
  const encodedMessage = encodeURIComponent(SITE_CONFIG.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodedMessage}`;

  return (
    <section className="py-24 bg-[#f8fafc] text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-700 mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Limited to 4 Audits Per Month</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] text-slate-950 leading-tight">
            Schedule an Operations Audit
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-sans">
            Before deploying automation code, discover exactly where manual hours, leads, and customer retention are leaking. We conduct a rigorous forensic audit of your customer and commerce workflows.
          </p>

          {/* 4 Tangible Deliverables Received */}
          <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 text-xs block font-bold">1. Workflow Review</strong>
                <span className="text-[11px] text-slate-500 leading-snug block mt-0.5">
                  End-to-end mapping of current manual tasks across sales, orders, and fulfillment.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 text-xs block font-bold">2. Automation Opportunities</strong>
                <span className="text-[11px] text-slate-500 leading-snug block mt-0.5">
                  Prioritized opportunities with quantified ROI, time savings, and error reduction forecasts.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 text-xs block font-bold">3. CRM & Data Gaps</strong>
                <span className="text-[11px] text-slate-500 leading-snug block mt-0.5">
                  Identification of silent sync drops, dirty contact records, and software over-licensing.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 text-xs block font-bold">4. Practical Roadmap</strong>
                <span className="text-[11px] text-slate-500 leading-snug block mt-0.5">
                  Step-by-step engineering blueprint with technical specifications and sprint estimates.
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-a-call"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-md shadow-slate-900/10 active:scale-98"
            >
              <span>Book an Operations Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm transition-all shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Direct Inquiry</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-slate-500 flex flex-wrap items-center justify-center gap-4 font-mono">
            <span>Mutual Non-Disclosure Agreement (NDA) signed</span>
            <span>•</span>
            <span>100% audit fee credited toward implementation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

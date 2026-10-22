import React from "react";
import type { Metadata } from "next";
import {
  Calendar as CalendarIcon,
  CheckCircle2,
  Clock,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BookingCalendar } from "@/components/BookingCalendar";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Book an Operations Audit | Glitchless",
  description:
    "Schedule a 45-minute Operations Audit with Glitchless's senior systems architects. Forensic review of your lead flows, order workflows, and CRM data with zero sales pitch.",
  alternates: {
    canonical: "https://glitchless.ai/book-a-call",
  },
};

export default function BookACallPage() {
  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Book an Operations Audit | Glitchless",
    description: "45-minute forensic operational architecture consultation.",
  };

  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <JsonLd data={bookingSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Book an Audit", href: "/book-a-call" }]} />

        {/* Hero Section */}
        <section className="pt-8 pb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Executive Operations Review</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Schedule Your <br />
            <span className="text-blue-600">Operations Audit</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Pick a time slot below. You&apos;ll meet directly with a senior systems architect—not a commissioned sales rep—to map your operational bottlenecks and calculate automation ROI.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              45 minutes via Google Meet
            </span>
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
              Direct with Senior Architect
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-700" />
              Strict Confidentiality & NDA
            </span>
          </div>
        </section>

        {/* Interactive Booking Calendar Component */}
        <div className="mb-20">
          <BookingCalendar />
        </div>

        {/* What to Expect On the Audit Session */}
        <section className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 mb-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">
            What We Deliver During the Operations Audit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-mono font-black text-sm flex items-center justify-center mb-3">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                Friction & Leakage Audit
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We review your current tools (Shopify, CRM, spreadsheets, messaging) and pinpoint where your team spends too much manual time or drops leads.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 font-mono font-black text-sm flex items-center justify-center mb-3">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                Governed Blueprint
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We sketch the optimal data architecture: Revenue OS or Commerce OS, webhook triggers, API connectors, and approval boundaries.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-mono font-black text-sm flex items-center justify-center mb-3">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">
                Sprint Scope & Timeline
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                If there&apos;s a mutual fit, we provide a fixed-scope sprint roadmap deliverable in 2 to 3 weeks with clear milestones.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Terminal,
  Zap,
  Globe2,
  MapPin,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Glitchless | AI-Operated Business Systems",
  description:
    "Learn about Glitchless Systems, our Bengaluru and Mumbai engineering centers, and our mission to build governed AI operations systems that replace manual chaos with clarity.",
  alternates: {
    canonical: "https://glitchless.ai/about",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Glitchless Systems",
    description: SITE_CONFIG.subheadline,
    mainEntity: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      legalName: SITE_CONFIG.legalName,
      foundingLocation: "Bengaluru, India",
      knowsAbout: [
        "Governed AI Agents",
        "Revenue OS",
        "Commerce OS",
        "Ops Control Tower",
        "Odoo ERP",
        "ERPNext",
        "n8n Orchestration",
      ],
    },
  };

  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <JsonLd data={aboutSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

        {/* Hero Section */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Company & Mission</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            We Build Systems That <br />
            <span className="text-blue-600">Actually Run the Work.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed">
            Glitchless was founded on a simple conviction: modern companies don&apos;t need more AI tools or loose chatbots. They need governed, dependable operating systems that eliminate manual repetition, enforce data quality, and give leadership complete visibility.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Book an Operations Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-50 transition-colors"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </section>

        {/* 4 Guiding Principles */}
        <section className="py-16 border-t border-slate-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              What Sets Glitchless Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <ShieldCheck className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Governed Execution Over Loose AI
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We reject uncontrolled chatbots that hallucinate or make unauthorized commitments. Every Glitchless agent operates with deterministic database bounds, approval thresholds, and immutable audit logs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <Terminal className="w-8 h-8 text-slate-800 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Systems Architects, Not Middlemen
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You work directly with senior automation architects and fullstack engineers on Slack and WhatsApp. No bureaucratic account managers, no game of telephone.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <Zap className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                High-Velocity Sprint Delivery
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We deliver production-ready workflows in focused 2 to 3-week sprints with working demos and telemetry delivered every Friday. Zero multi-month consulting drift.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs">
              <Globe2 className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Private Cloud Data Sovereignty
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We deploy inside your private cloud VPC (AWS Mumbai, Azure India, or on-premise). You own 100% of your code, models, and data with zero recurring per-user software taxes.
              </p>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-16 border-t border-slate-200/80">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Physical Hubs
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Indian Engineering Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITE_CONFIG.contact.addresses.map((addr) => (
              <div
                key={addr.city}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      {addr.city} {addr.isHQ ? "(Engineering HQ)" : "(Regional Hub)"}
                    </span>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                      Operations Center
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 space-y-1">
                    <p className="font-semibold text-slate-800">{addr.addressLine1}</p>
                    <p>{addr.addressLine2}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
                  <span>Meetings by appointment • Video consults scheduled daily</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center my-12">
          <h3 className="text-2xl sm:text-3xl font-black">
            Ready to partner with a governed operations team?
          </h3>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Book an Operations Audit and discover how Revenue OS and Commerce OS can eliminate manual drag in your company.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/book-a-call"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30"
            >
              Book an Operations Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

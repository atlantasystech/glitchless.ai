import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { OUTCOME_PROOF } from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Case Studies & Measurable Operational Outcomes | Glitchless",
  description:
    "Explore how Glitchless engineered quantifiable operational results: <2 minute lead follow-up, 70% reduction in manual orders, clean CRM sync, and governed human escalation.",
  alternates: {
    canonical: "https://glitchless.ai/case-studies",
  },
};

export default function CaseStudiesPage() {
  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Glitchless Governed AI Operational Proof",
    itemListElement: OUTCOME_PROOF.map((study, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Article",
        headline: study.headline,
        description: study.challenge,
        author: {
          "@type": "Organization",
          name: "Glitchless Systems",
        },
        publisher: {
          "@type": "Organization",
          name: "Glitchless Systems",
          url: "https://glitchless.ai",
        },
      },
    })),
  };

  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <JsonLd data={caseStudiesSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }]} />

        {/* Hero Section */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800 mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Operational Evidence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Real Operations. <br />
            <span className="text-blue-600">Governed Results.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed">
            Every engagement at Glitchless is measured against hard unit economics: lead response latency, hours saved, and cost reduction. Explore our verified architecture case studies.
          </p>
        </section>

        {/* Case Studies Deep Dive List */}
        <div className="space-y-16 mb-24">
          {OUTCOME_PROOF.map((study) => (
            <article
              key={study.id}
              id={study.slug}
              className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-2xs scroll-mt-24"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-100 gap-4">
                <div className="flex items-center gap-2.5 text-xs text-slate-500 font-mono">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold">
                    {study.clientIndustry}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-blue-600" />
                    {study.region}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-center font-mono">
                    <span className="text-xl font-black text-slate-900 block">
                      {study.metricHighlight}
                    </span>
                    <span className="text-[10px] text-slate-500 font-sans font-semibold">
                      {study.metricLabel}
                    </span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-center font-mono">
                    <span className="text-xl font-black text-emerald-600 block">
                      {study.secondaryMetric}
                    </span>
                    <span className="text-[10px] text-slate-500 font-sans font-semibold">
                      {study.secondaryLabel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Narrative */}
              <div className="pt-6">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug mb-6">
                  {study.headline}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Challenge */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-500 block">
                      The Operational Problem:
                    </span>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-rose-50/30 p-5 rounded-2xl border border-rose-100">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block">
                      The Glitchless Solution Architecture:
                    </span>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Outcome Checklist */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Verified Outcomes:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {study.outcome.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 flex items-start gap-2.5 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips & CTA */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5 font-mono">
                    <span className="text-xs font-sans text-slate-400 mr-1">
                      Integrated Systems:
                    </span>
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/book-a-call"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 whitespace-nowrap"
                  >
                    <span>Request Similar Architecture Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-black">
            Want to build a similar governed system for your business?
          </h3>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Book an Operations Audit and let our architects analyze your friction points and calculate automation ROI.
          </p>
          <div className="mt-6 flex justify-center">
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

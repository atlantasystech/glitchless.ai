import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Terminal,
  Activity,
} from "lucide-react";
import { CAPABILITIES } from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { FAQSection } from "@/components/FAQSection";

const capability = CAPABILITIES.find((c) => c.slug === "ai-automation")!;

export const metadata: Metadata = {
  title: capability.metaTitle,
  description: capability.metaDescription,
  alternates: {
    canonical: `https://glitchless.ai/services/${capability.slug}`,
  },
  openGraph: {
    title: capability.metaTitle,
    description: capability.metaDescription,
    url: `https://glitchless.ai/services/${capability.slug}`,
  },
};

export default function AIAutomationPage() {
  const capabilitySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: capability.title,
    serviceType: "Governed AI Agents & Operational Automation",
    description: capability.summary,
    provider: {
      "@type": "Organization",
      name: "Glitchless Systems",
      url: "https://glitchless.ai",
    },
    areaServed: ["India", "Global"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Governed AI Deliverables",
      itemListElement: capability.deliverables.map((d) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: d,
        },
      })),
    },
  };

  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <JsonLd data={capabilitySchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Platform Capabilities", href: "/services" },
            { label: capability.title, href: `/services/${capability.slug}` },
          ]}
        />

        {/* Hero Section */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-800 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>{capability.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Governed AI Agents With <br />
            <span className="text-blue-600">Strict Audit Trails.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed">
            {capability.detailedDescription}
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
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-50 transition-colors"
            >
              <span>Explore System Sprints</span>
            </Link>
          </div>
        </section>

        {/* 3 Business Benefits */}
        <section className="py-12 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capability.businessBenefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-mono font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Deliverables Grid */}
        <section className="py-16">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Deliverables & Guardrails
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Deterministic Bounds, Zero Hallucinations
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We design agents that understand your authenticated database schemas and escalate to human managers whenever uncertainty arises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capability.deliverables.map((deliv) => (
              <div
                key={deliv}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{deliv}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Structured function calling, private cloud deployment, and immutable execution logs.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 border-t border-slate-200/80">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Governance Protocol
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              From Discovery to Live Governed Agent in 3 Weeks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capability.processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-blue-600 font-mono">
                    {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-3 mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion */}
        <FAQSection
          items={capability.faq}
          title="Governed AI Agents FAQ"
          subtitle="Specific answers about preventing hallucinations, private VPC hosting, and human-in-the-loop escalation."
        />

        {/* Bottom CTA */}
        <section className="my-16 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-black">
            Ready to deploy your first governed AI system?
          </h3>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Book an Operations Audit and let our architects design an autonomous workflow blueprint for your business.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/book-a-call"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
            >
              Book an Operations Audit
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

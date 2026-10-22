import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Database,
  ShoppingBag,
  MessageSquare,
  LayoutTemplate,
  Layers,
  Search,
  Activity,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { CAPABILITIES } from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Platform Capabilities | Governed AI Operations",
  description:
    "Explore Glitchless's 8 governed platform capabilities: AI Agents with audit trails, CRM Intelligence, Ecommerce Operations, Omnichannel Ingestion, and Ops Control Tower.",
  alternates: {
    canonical: "https://glitchless.ai/services",
  },
};

export default function ServicesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    "ai-agents-governance": <ShieldCheck className="w-6 h-6 text-blue-600" />,
    "crm-intelligence-automation": <Database className="w-6 h-6 text-slate-900" />,
    "ecommerce-operations-automation": <ShoppingBag className="w-6 h-6 text-emerald-600" />,
    "whatsapp-email-webform-workflows": <MessageSquare className="w-6 h-6 text-indigo-600" />,
    "custom-internal-tools-dashboards": <LayoutTemplate className="w-6 h-6 text-blue-600" />,
    "integrations-api-orchestration": <Layers className="w-6 h-6 text-slate-800" />,
    "seo-geo-ai-search": <Search className="w-6 h-6 text-amber-600" />,
    "operations-control-tower": <Activity className="w-6 h-6 text-emerald-600" />,
  };

  const servicesCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Glitchless Governed Platform Capabilities",
    itemListElement: CAPABILITIES.map((s, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.summary,
        url: `https://glitchless.ai/services/${s.slug}`,
      },
    })),
  };

  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <JsonLd data={servicesCollectionSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Platform Capabilities", href: "/services" }]} />

        {/* Hero Header */}
        <div className="max-w-3xl mt-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Platform Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            Governed Capabilities. <br />
            <span className="text-blue-600">Zero Operational Clutter.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every business operation can either be a chaotic cost center or an automated competitive advantage. Glitchless architects high-reliability governed systems with deterministic bounds and single-pane telemetry.
          </p>
        </div>

        {/* Capabilities In-Depth Grid */}
        <div className="space-y-12 mb-20">
          {CAPABILITIES.map((cap, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={cap.id}
                id={cap.slug}
                className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-2xs hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Capability Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                        {iconMap[cap.id]}
                      </div>
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {cap.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {cap.title}
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {cap.detailedDescription}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                        Included In Deployment:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {cap.deliverables.slice(0, 4).map((d) => (
                          <div
                            key={d}
                            className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-snug"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/services/${cap.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs transition-colors shadow-2xs"
                      >
                        <span>Deep-Dive Technical Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/book-a-call"
                        className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        <span>Request Architecture Audit →</span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Governance & Benefits Sidebar */}
                  <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Governance Guardrails
                    </span>
                    <div className="space-y-2">
                      {cap.governanceFeatures.map((gov) => (
                        <div key={gov} className="text-xs bg-white p-3 rounded-xl border border-slate-200 text-slate-700 font-medium">
                          • {gov}
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-slate-200 space-y-3">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                        Verified Outcome
                      </span>
                      {cap.businessBenefits.slice(0, 1).map((benefit) => (
                        <div key={benefit.title} className="text-xs bg-white p-3 rounded-xl border border-slate-200">
                          <strong className="text-slate-900 block font-bold mb-0.5">
                            {benefit.title}
                          </strong>
                          <span className="text-slate-600 leading-relaxed">
                            {benefit.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-black">
            Need a tailored multi-system combination?
          </h3>
          <p className="mt-3 text-slate-300 text-sm max-w-xl mx-auto">
            Most scaled businesses run a mix of Shopify, custom CRMs, and WhatsApp AI bots. We specialize in cross-platform governed orchestration.
          </p>
          <div className="mt-6">
            <Link
              href="/book-a-call"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30"
            >
              <span>Book an Operations Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

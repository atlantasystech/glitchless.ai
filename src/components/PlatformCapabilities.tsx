"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Database,
  ShoppingBag,
  MessageSquare,
  LayoutTemplate,
  Layers,
  Search,
  ArrowRight,
  Server,
} from "lucide-react";

export function PlatformCapabilities() {
  const capabilities = [
    {
      title: "Governed AI Agents with Audit Trails",
      summary: "Autonomous agents that parse documents, qualify leads, and check rates with deterministic boundaries and zero hallucinations.",
      badge: "Zero Hallucinations",
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      slug: "ai-automation",
    },
    {
      title: "CRM Intelligence & Open-Source Customization",
      summary: "Enterprise Odoo 18 and ERPNext customization. Automated sales pipelines without recurring per-user software taxes.",
      badge: "Odoo & ERPNext",
      icon: <Database className="w-5 h-5 text-slate-800" />,
      slug: "crm-customization",
    },
    {
      title: "Ecommerce Operations Automation",
      summary: "Multi-warehouse stock allocation, automated WhatsApp COD address verification, and automated courier fallback routing.",
      badge: "Shopify Plus",
      icon: <ShoppingBag className="w-5 h-5 text-emerald-600" />,
      slug: "ecommerce-management",
    },
    {
      title: "WhatsApp, Email & Webform Ingestion",
      summary: "Instant lead follow-up (<90s) via Meta WhatsApp Cloud API. Automated qualification and meeting scheduling.",
      badge: "Sub-90s SLA",
      icon: <MessageSquare className="w-5 h-5 text-purple-600" />,
      slug: "webform-saas-development",
    },
    {
      title: "Custom Internal Tools & Dashboards",
      summary: "High-speed internal web applications built on Next.js and Postgres with Role-Based Access Control (RBAC).",
      badge: "Next.js & Supabase",
      icon: <LayoutTemplate className="w-5 h-5 text-blue-600" />,
      slug: "web-app-development",
    },
    {
      title: "Enterprise API Orchestration",
      summary: "Self-healing event-driven pipelines on n8n Enterprise with automatic retries and dead-letter queues.",
      badge: "Zero Silent Drops",
      icon: <Layers className="w-5 h-5 text-slate-800" />,
      slug: "seo-geo-optimization",
    },
    {
      title: "Open-Source CRM VPC Self-Hosting",
      summary: "Deploy Odoo, ERPNext, and databases inside your sovereign AWS Mumbai VPC in compliance with India's DPDP Act.",
      badge: "AWS ap-south-1",
      icon: <Server className="w-5 h-5 text-emerald-600" />,
      slug: "crm-customization",
    },
    {
      title: "SEO, GEO & AI-Search Visibility",
      summary: "Deep JSON-LD structured schema ensuring authoritative entity citations in ChatGPT, Perplexity, and Claude.",
      badge: "AI Search Ready",
      icon: <Search className="w-5 h-5 text-amber-600" />,
      slug: "seo-geo-optimization",
    },
  ];

  return (
    <section id="capabilities" className="py-24 bg-[#fbfcfd] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4">
            <span className="w-2 h-2 rounded-full bg-slate-900" />
            <span>PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] text-slate-950 leading-[1.1]">
            Integrated platform capabilities. <br />
            <span className="text-slate-400 font-bold tracking-[-0.03em]">Engineered for reliability.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Every capability is designed to connect into your governed operations architecture with built-in telemetry, auditability, and human approval gates.
          </p>
        </div>

        {/* 8 Clean Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-center">
                    {cap.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                    {cap.badge}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {cap.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href={`/services/${cap.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

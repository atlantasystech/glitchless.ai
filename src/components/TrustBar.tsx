"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import {
  ShopifyLogo,
  WhatsAppLogo,
  OdooLogo,
  ERPNextLogo,
  ZohoLogo,
  DelhiveryLogo,
  N8nLogo,
  SupabaseLogo,
  OpenAILogo,
  HubSpotLogo,
  SalesforceLogo,
  StripeLogo,
} from "@/components/BrandLogos";

export interface IntegrationLogo {
  name: string;
  category: string;
  badge: string;
  svg: React.ReactNode;
}

export function TrustBar() {
  const integrations: IntegrationLogo[] = [
    {
      name: "Shopify Plus",
      category: "Storefront & Catalog",
      badge: "Certified API",
      svg: <ShopifyLogo className="w-6 h-6" />,
    },
    {
      name: "WhatsApp Cloud API",
      category: "Lead Ingestion",
      badge: "Meta Verified",
      svg: <WhatsAppLogo className="w-6 h-6" />,
    },
    {
      name: "Odoo 18",
      category: "Open-Source ERP",
      badge: "Native Connector",
      svg: <OdooLogo className="w-6 h-6" />,
    },
    {
      name: "ERPNext",
      category: "Frappe Framework",
      badge: "REST & Webhooks",
      svg: <ERPNextLogo className="w-6 h-6" />,
    },
    {
      name: "Delhivery",
      category: "Express Logistics",
      badge: "Automated AWB",
      svg: <DelhiveryLogo className="w-6 h-6" />,
    },
    {
      name: "Zoho CRM",
      category: "Enterprise Sales",
      badge: "OAuth v2",
      svg: <ZohoLogo className="w-6 h-6" />,
    },
    {
      name: "n8n Enterprise",
      category: "Workflow DAGs",
      badge: "Self-Hosted VPC",
      svg: <N8nLogo className="w-6 h-6" />,
    },
    {
      name: "Supabase",
      category: "Postgres 16 DB",
      badge: "Row-Level Security",
      svg: <SupabaseLogo className="w-6 h-6" />,
    },
    {
      name: "OpenAI",
      category: "Enterprise LLM",
      badge: "Zero-Retention",
      svg: <OpenAILogo className="w-6 h-6" />,
    },
    {
      name: "HubSpot",
      category: "Inbound Pipeline",
      badge: "Certified App",
      svg: <HubSpotLogo className="w-6 h-6" />,
    },
    {
      name: "Salesforce",
      category: "Enterprise CRM",
      badge: "REST Webhooks",
      svg: <SalesforceLogo className="w-6 h-6" />,
    },
    {
      name: "Stripe",
      category: "Global Billing",
      badge: "Direct Webhooks",
      svg: <StripeLogo className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-12 border-y border-slate-200/90 bg-[#fbfcfd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Tagline */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-7">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                VERIFIED OPERATIONAL ECOSYSTEM
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Glitchless connects natively with your existing commerce engines, ERP databases, and communication channels.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
              Zero Disruption
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Sovereign VPC
            </span>
          </div>
        </div>

        {/* Aceternity UI: Infinite Moving Cards / Logo Marquee */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="animate-marquee flex items-center gap-4 py-2">
            {[...integrations, ...integrations].map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-400 hover:shadow-md transition-all shrink-0 group cursor-default"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform">
                  {item.svg}
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500">
                    {item.badge}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

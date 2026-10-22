import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | DPDP & GDPR Compliance | Glitchless",
  description:
    "Privacy Policy for Glitchless Systems Private Limited. Learn how we handle customer data, enforce private cloud data sovereignty, and adhere to India's DPDP Act and GDPR standards.",
  alternates: {
    canonical: "https://glitchless.ai/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xs mt-6">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 mb-8 font-mono">
            Last Updated: October 17, 2026 • Compliant with DPDP Act 2023 & GDPR
          </p>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview & Scope</h2>
              <p>
                {SITE_CONFIG.legalName} (&quot;Glitchless&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy, confidentiality, and data sovereignty of your corporate and personal information. This Privacy Policy outlines how we collect, process, store, and protect data when you visit our website (glitchless.ai), engage our Operations Audit, or deploy our governed operating systems (Revenue OS, Commerce OS, and Ops Control Tower).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h2>
              <p>We collect information in the following contexts:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>
                  <strong>Audit & Consultation Requests:</strong> Full name, professional work email, phone/WhatsApp number, company name, operational stack details, and estimated monthly scope.
                </li>
                <li>
                  <strong>Integration & Systems Data:</strong> When engineering custom connectors, we access only the specific API keys, database models, and webhooks explicitly authorized under executed Non-Disclosure Agreements (NDAs).
                </li>
                <li>
                  <strong>Technical Telemetry:</strong> Standard browser user-agent, IP address, device type, and visit duration collected anonymously for performance monitoring.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                3. Private Cloud Data Sovereignty
              </h2>
              <p>
                Unlike multi-tenant SaaS vendors who pool customer records, Glitchless prioritizes <strong>data sovereignty</strong>. When we deploy open-source CRMs (Odoo, ERPNext) or agentic orchestrators (n8n), they are deployed within your sovereign private cloud VPCs (such as AWS Mumbai region, sovereign Indian datacenters, or your private servers). Glitchless never pools, trains public models on, or resells your customer data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                4. Compliance with Indian DPDP Act & GDPR
              </h2>
              <p>
                Under India’s Digital Personal Data Protection Act (DPDP Act 2023) and the General Data Protection Regulation (GDPR), you possess distinct legal rights including the right to access, rectify, restrict processing, and request the deletion of your personal data. You may exercise any of these rights by contacting our designated Data Protection Officer.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Data Protection Officer Contact</h2>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mt-2 text-xs space-y-1 font-mono">
                <div><strong>Desk:</strong> Data Protection & Compliance Officer</div>
                <div><strong>Entity:</strong> {SITE_CONFIG.legalName}</div>
                <div><strong>Address:</strong> Tower 2B, RMZ Infinity, Old Madras Road, Bennigana Halli, Bengaluru 560016, India</div>
                <div><strong>Email:</strong> privacy@glitchless.ai</div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

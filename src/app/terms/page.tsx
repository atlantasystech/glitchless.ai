import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Glitchless",
  description:
    "Terms of Service governing engineering agreements, intellectual property ownership, SLAs, and billing with Glitchless Systems Private Limited.",
  alternates: {
    canonical: "https://glitchless.ai/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-2xs mt-6">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 mb-8 font-mono">
            Last Updated: October 17, 2026 • Governing Law: Bengaluru, India
          </p>

          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-6 text-slate-600">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Agreement to Terms</h2>
              <p>
                By accessing this website, booking an Operations Audit, or executing a System Sprint or Governed Retainer Statement of Work (SOW) with {SITE_CONFIG.legalName} (&quot;Glitchless&quot;), you agree to be bound by these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                2. Scope of Services & SOW Execution
              </h2>
              <p>
                All engineering deliverables, governed workflows, and platform customizations are governed by mutually executed Statements of Work (SOW). Glitchless delivers systems in disciplined 2 to 3-week sprint iterations with weekly demos and formal staging sign-offs.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                3. Intellectual Property (IP) Ownership
              </h2>
              <p>
                Upon receipt of full payment for contracted sprints, you own 100% of the custom code, n8n workflow definitions, tailored database schemas, and proprietary business logic authored specifically for your organization. Glitchless retains rights only to its pre-existing open-source libraries and general workflow templates.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                4. Billing, Invoicing & Taxes
              </h2>
              <p>
                For domestic Indian clients, invoices are issued in Indian Rupees (INR ₹) inclusive of applicable Goods and Services Tax (GST 18%) with valid GSTIN tax credits. For international clients, invoices are denominated in United States Dollars (USD $) via wire transfer or major corporate cards.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                5. Confidentiality & Non-Disclosure
              </h2>
              <p>
                Both parties agree to protect and maintain confidential all non-public business data, credentials, customer records, and operational trade secrets. Mutual Non-Disclosure Agreements executed prior to or during engagement take precedence over these general terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms and any dispute arising out of or relating to them shall be governed by and construed in accordance with the laws of India. The competent courts located in Bengaluru, Karnataka, India shall have exclusive jurisdiction.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

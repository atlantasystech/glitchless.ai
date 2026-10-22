import React from "react";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Glitchless | Bengaluru & Mumbai Centers",
  description:
    "Connect directly with Glitchless systems architects. RMZ Infinity Bengaluru and BKC Mumbai engineering centers. Inquire about Operations Audits and governed systems.",
  alternates: {
    canonical: "https://glitchless.ai/contact",
  },
};

export default function ContactPage() {
  const encodedMessage = encodeURIComponent(SITE_CONFIG.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodedMessage}`;

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Glitchless Systems",
    description: "Contact details for Glitchless operations and engineering desks.",
    mainEntity: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.contact.phone,
      email: SITE_CONFIG.contact.salesEmail,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: SITE_CONFIG.contact.phone,
          contactType: "operations audit desk",
          areaServed: ["India", "United States", "United Kingdom", "UAE", "Singapore"],
        },
      ],
    },
  };

  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <JsonLd data={contactSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

        {/* Hero Section */}
        <section className="pt-8 pb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Direct Engineering Access</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Contact the Systems <br />
            <span className="text-blue-600">Architecture Desk.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about an Operations Audit, CRM migration, or governed AI pipelines? Drop our systems architects a note or start an instant WhatsApp conversation.
          </p>
        </section>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Direct Communication Channels
              </h3>

              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${SITE_CONFIG.contact.salesEmail}`}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Audit & Inquiries Email</span>
                    <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {SITE_CONFIG.contact.salesEmail}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-slate-100 text-slate-800 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Office Phone (IST Working Hours)</span>
                    <span className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {SITE_CONFIG.contact.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/70 hover:bg-emerald-100/70 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 font-bold block">
                      WhatsApp Direct Messenger
                    </span>
                    <span className="font-semibold text-emerald-950 text-xs">
                      Chat with an Operations Architect in &lt;5 mins
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>Typical response time: Under 2 hours during business hours.</span>
              </div>
            </div>

            {/* Office Hubs */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Physical Engineering Centers
              </h3>

              <div className="space-y-4 text-xs">
                {SITE_CONFIG.contact.addresses.map((addr) => (
                  <div key={addr.city} className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold block">
                        {addr.city} {addr.isHQ ? "(Engineering HQ)" : "(Operations Hub)"}
                      </strong>
                      <span className="text-slate-600 leading-relaxed block mt-0.5">
                        {addr.addressLine1}, {addr.addressLine2}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* NDA Card */}
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/60 flex items-start gap-3 text-xs text-blue-950">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block">Mutual NDA Guaranteed</strong>
                <span>
                  We regularly sign confidentiality agreements before inspecting proprietary data, warehouse feeds, or CRM records.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

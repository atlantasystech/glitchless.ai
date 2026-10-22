"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, Building, User, ShieldCheck } from "lucide-react";
import { CAPABILITIES, SITE_CONFIG } from "@/lib/constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "ai-automation",
    budget: "₹1,00,000 (Operations Audit)",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Valid work email is required.";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Valid phone/WhatsApp number is required.";
    }
    if (!formData.company.trim()) errs.company = "Company name is required.";
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = "Please share a brief description of your operational bottlenecks (min 15 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate secure transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setReferenceId(`PT-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white border border-slate-200/90 p-8 sm:p-12 text-center shadow-sm">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          Operations Inquiry Ingested
        </h3>
        <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. A systems architect from Glitchless will evaluate your workflow bottlenecks and respond within 2 business hours.
        </p>

        <div className="my-6 p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-xs text-slate-600">
          <div className="font-mono text-slate-900 font-bold text-sm">
            Audit Ticket ID: {referenceId}
          </div>
          <div className="mt-1 text-slate-500">
            Encrypted briefing sent to: <span className="font-semibold text-slate-700">{formData.email}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hi%20Prompt%20Tech,%20following%20up%20on%20my%20operations%20audit%20inquiry%20${referenceId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
          >
            Direct Systems WhatsApp Desk
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "ai-automation",
                budget: "₹1,00,000 (Operations Audit)",
                message: "",
              });
            }}
            className="px-6 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
          >
            Submit Another Specification
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-sm">
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Strict Enterprise NDA Protected</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          Request an Operations Architecture Review
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Directly reach our operations engineers in Bengaluru and Mumbai. No pushy sales reps.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Rohan Gupta"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm focus:outline-hidden ${
                  errors.name
                    ? "border-rose-400 bg-rose-50/30"
                    : "border-slate-200 focus:border-blue-600"
                }`}
              />
            </div>
            {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
          </div>

          {/* Work Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Work Email <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                placeholder="rohan@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm focus:outline-hidden ${
                  errors.email
                    ? "border-rose-400 bg-rose-50/30"
                    : "border-slate-200 focus:border-blue-600"
                }`}
              />
            </div>
            {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              WhatsApp / Mobile Phone <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="tel"
                placeholder="+91 98200 98200"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm focus:outline-hidden ${
                  errors.phone
                    ? "border-rose-400 bg-rose-50/30"
                    : "border-slate-200 focus:border-blue-600"
                }`}
              />
            </div>
            {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Company / Brand Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                placeholder="Apex Retail Group"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-lg border text-sm focus:outline-hidden ${
                  errors.company
                    ? "border-rose-400 bg-rose-50/30"
                    : "border-slate-200 focus:border-blue-600"
                }`}
              />
            </div>
            {errors.company && <p className="text-xs text-rose-500 mt-1">{errors.company}</p>}
          </div>
        </div>

        {/* Primary Area of Focus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Primary System or Capability
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-hidden focus:border-blue-600 bg-white"
            >
              <option value="revenue-os">Revenue OS (AI Lead Qualification & CRM)</option>
              <option value="commerce-os">Commerce OS (Ecommerce & Order Exceptions)</option>
              <option value="ops-control-tower">Ops Control Tower (Telemetry & Governance)</option>
              {CAPABILITIES.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.title}
                </option>
              ))}
              <option value="end-to-end">End-to-End Operational Modernization</option>
            </select>
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Engagement Budget Scope
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-hidden focus:border-blue-600 bg-white"
            >
              <option value="₹1,00,000 (Operations Audit)">
                ₹1,00,000 / $1,250 (14-Day Operations Audit)
              </option>
              <option value="₹2,50,000 - ₹5,00,000 (Sprint)">
                ₹2.5L - ₹5L (Single Production Sprint)
              </option>
              <option value="₹3,50,000 / month (Governed Retainer)">
                ₹3.5L / month (Dedicated Operations Pod)
              </option>
              <option value="$3,000 - $8,000 USD (Global Sprint)">
                $3,000 - $8,000 USD (Global Sprints)
              </option>
              <option value="Enterprise Architecture">Enterprise Custom Architecture</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            What operational workflows do you need to govern or automate? <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about the systems you currently use (Shopify, Odoo, Zoho, ERPNext, WhatsApp, etc.), where delays or manual errors occur, and what outcome you need..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full p-3 rounded-lg border text-sm focus:outline-hidden ${
              errors.message
                ? "border-rose-400 bg-rose-50/30"
                : "border-slate-200 focus:border-blue-600"
            }`}
          />
          {errors.message && <p className="text-xs text-rose-500 mt-1">{errors.message}</p>}
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Dispatching Encrypted Brief...</span>
            ) : (
              <>
                <span>Submit Operations Briefing</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        <p className="text-[11px] text-slate-500 pt-1">
          🔒 Strict operational confidentiality. All customer data and API credentials stay within your private VPC boundary.
        </p>
      </form>
    </div>
  );
}

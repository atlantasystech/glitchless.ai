"use client";

import React, { useState } from "react";
import { BookOpen, CheckCircle2, ArrowRight, Download, Sparkles } from "lucide-react";

export function NewsletterCapture() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid business email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-slate-900/80 border border-indigo-500/30 p-8 sm:p-12 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950 border border-indigo-700/60 text-xs font-bold text-indigo-300 mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Complimentary 48-Page Playbook</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                The 2026 Enterprise Operations & AI Automation Playbook
              </h3>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Learn how leading Indian D2C brands and global manufacturers are slashing RTO losses, migrating from Salesforce to Odoo, and deploying self-hosted n8n agentic pipelines.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Real n8n workflow schemas
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Odoo vs ERPNext benchmark
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  WhatsApp Cloud API templates
                </span>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-700/80">
              {submitted ? (
                <div className="text-center py-6 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Download className="w-6 h-6 animate-bounce" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Playbook Dispatched!</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    We&apos;ve sent the 48-page PDF guide to <span className="font-semibold text-white">{email}</span>. You can also download it right away below:
                  </p>
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Glitchless Enterprise Operations Blueprint downloaded successfully.");
                    }}
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF Direct (14.2 MB)</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Work Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="vikram@yourcompany.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-hidden focus:border-indigo-500"
                    />
                    {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-indigo-600/30"
                  >
                    <span>Get Free Operations Playbook</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-400 text-center">
                    Zero spam. Unsubscribe anytime with 1 click.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Clock, HelpCircle } from "lucide-react";
import { ENGAGEMENT_MODELS } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";

export function PricingSection() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-xs font-bold text-indigo-700 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Engagement Models</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Simple, Predictable Investments. <br />
            <span className="gradient-text">Zero Unpleasant Surprises.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose a focused sprint for quick wins, a dedicated monthly retainer for continuous operations, or a full bespoke platform build.
          </p>

          {/* Currency Toggle Switch */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                currency === "INR"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🇮🇳 INR (₹) GST Compliant
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                currency === "USD"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🌐 USD ($) Global Clients
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {ENGAGEMENT_MODELS.map((plan) => {
            const price = currency === "INR" ? plan.priceINR : plan.priceUSD;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 text-white shadow-2xl ring-2 ring-indigo-500 scale-102 lg:-translate-y-2"
                    : "bg-slate-50/70 border border-slate-200/90 text-slate-900 shadow-sm hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md ${
                        plan.popular
                          ? "bg-gradient-to-r from-indigo-500 to-cyan-400 text-white"
                          : "bg-white text-slate-800 border border-slate-200"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl font-black tracking-tight">{plan.name}</h3>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        plan.popular ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="my-6 pb-6 border-b border-slate-200/50">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                        {formatCurrency(price, currency)}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          plan.popular ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        /{plan.billingPeriod}
                      </span>
                    </div>

                    <div
                      className={`flex items-center gap-1.5 mt-2 text-xs font-medium ${
                        plan.popular ? "text-cyan-300" : "text-indigo-600"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{plan.deliveryTimeline}</span>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div
                    className={`text-xs p-3 rounded-xl mb-6 ${
                      plan.popular
                        ? "bg-slate-800/80 text-slate-300"
                        : "bg-white border border-slate-200 text-slate-600"
                    }`}
                  >
                    <span className="font-bold">Best fit:</span> {plan.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block ${
                        plan.popular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              plan.popular ? "text-cyan-400" : "text-indigo-600"
                            }`}
                          />
                          <span className={plan.popular ? "text-slate-200" : "text-slate-700"}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div>
                  <Link
                    href={plan.ctaLink}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                      plan.popular
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 active:scale-98"
                        : "bg-slate-900 hover:bg-indigo-600 text-white active:scale-98"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="text-center mt-3">
                    <span
                      className={`text-[11px] ${
                        plan.popular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      GST invoices provided • 100% IP ownership
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom enterprise callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Have multiple business entities or an enterprise RFQ?{" "}
            <Link
              href="/contact"
              className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Contact our enterprise sales desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

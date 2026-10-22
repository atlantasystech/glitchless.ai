"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Clock,
  Calculator,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { ENGAGEMENT_MODELS, HOMEPAGE_FAQS } from "@/lib/constants";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { formatCurrency } from "@/lib/utils";
import { FAQSection } from "@/components/FAQSection";

export default function PricingPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  // Interactive ROI Calculator State
  const [teamMembers, setTeamMembers] = useState(6);
  const [hoursWastedPerWeek, setHoursWastedPerWeek] = useState(12);
  const [hourlyCost, setHourlyCost] = useState(currency === "INR" ? 800 : 35);

  const annualHoursWasted = teamMembers * hoursWastedPerWeek * 50;
  const annualLoss = annualHoursWasted * hourlyCost;
  const auditCost = currency === "INR" ? 45000 : 600;
  const estimatedNetSavings = Math.max(0, annualLoss * 0.7 - auditCost);

  return (
    <div className="py-8 sm:py-12 bg-[#fbfcfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Pricing & Audit", href: "/pricing" }]} />

        {/* Hero Section */}
        <section className="pt-8 pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Transparent Engineering Investments</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Predictable Packages. <br />
            <span className="text-blue-600">Compounding ROI.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 leading-relaxed">
            No ambiguous billable hours or proprietary lock-in. Start with a comprehensive 5-day Operations Audit, a fixed-scope System Sprint, or an ongoing Governed Operations Retainer.
          </p>

          {/* Currency Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => {
                setCurrency("INR");
                setHourlyCost(800);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                currency === "INR"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🇮🇳 INR (₹) Domestic Billing
            </button>
            <button
              onClick={() => {
                setCurrency("USD");
                setHourlyCost(35);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                currency === "USD"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              🌐 USD ($) Global Clients
            </button>
          </div>
        </section>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {ENGAGEMENT_MODELS.map((plan) => {
            const price = currency === "INR" ? plan.priceINR : plan.priceUSD;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-slate-900 text-white shadow-2xl ring-2 ring-blue-500 scale-102 lg:-translate-y-2"
                    : "bg-white border border-slate-200/90 text-slate-900 shadow-2xs hover:border-slate-300 hover:shadow-lg"
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md ${
                        plan.popular
                          ? "bg-blue-600 text-white"
                          : "bg-white text-slate-800 border border-slate-200"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h2 className="text-xl font-black tracking-tight">{plan.name}</h2>
                    <p
                      className={`text-xs mt-1 leading-relaxed ${
                        plan.popular ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-slate-200/50">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono">
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
                        plan.popular ? "text-blue-300" : "text-blue-600"
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
                        : "bg-slate-50 border border-slate-200 text-slate-600"
                    }`}
                  >
                    <span className="font-bold">Best fit:</span> {plan.idealFor}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <span
                      className={`text-[11px] font-mono font-bold uppercase tracking-wider block ${
                        plan.popular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Included In Scope:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              plan.popular ? "text-blue-400" : "text-blue-600"
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
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 active:scale-98"
                        : "bg-slate-900 hover:bg-blue-600 text-white active:scale-98"
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
                      Audit fee credited 100% toward implementation
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive ROI Calculator */}
        <section className="mb-24 rounded-3xl bg-slate-900 text-white p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-blue-400 mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Operations ROI Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black">
              Calculate How Much Manual Work Is Costing You
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Drag the sliders below to estimate your annual leakage from repetitive data entry, delayed lead follow-up, and fragile point tools.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-300">Team Members Doing Repetitive Tasks:</span>
                  <span className="text-blue-400 text-sm font-black font-mono">{teamMembers} people</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={teamMembers}
                  onChange={(e) => setTeamMembers(parseInt(e.target.value))}
                  className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-300">Hours Lost Per Person Each Week:</span>
                  <span className="text-blue-400 text-sm font-black font-mono">{hoursWastedPerWeek} hours/wk</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={hoursWastedPerWeek}
                  onChange={(e) => setHoursWastedPerWeek(parseInt(e.target.value))}
                  className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-slate-300">
                    Average Fully Loaded Hourly Cost ({currency}):
                  </span>
                  <span className="text-blue-400 text-sm font-black font-mono">
                    {formatCurrency(hourlyCost, currency)}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min={currency === "INR" ? 300 : 15}
                  max={currency === "INR" ? 3000 : 150}
                  step={currency === "INR" ? 50 : 5}
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(parseInt(e.target.value))}
                  className="w-full accent-blue-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Output Box */}
            <div className="lg:col-span-5 bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-700 text-center">
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-400 block mb-1">
                Estimated Annual Manual Cost
              </span>
              <div className="text-3xl sm:text-4xl font-black text-rose-400 font-mono">
                {formatCurrency(annualLoss, currency)}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Based on {annualHoursWasted.toLocaleString()} total hours wasted per year
              </div>

              <div className="my-6 pt-6 border-t border-slate-700">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-emerald-400 block mb-1">
                  Projected Net Annual Savings
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                  {formatCurrency(estimatedNetSavings, currency)}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  After factoring in Glitchless Operations Audit & Implementation
                </div>
              </div>

              <Link
                href="/book-a-call"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <span>Book an Audit to Recover These Hours</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing FAQs */}
        <FAQSection
          items={HOMEPAGE_FAQS}
          title="Pricing & Audit FAQs"
          subtitle="Everything regarding audit deliverables, credit policies, and sovereign cloud deployments."
        />
      </div>
    </div>
  );
}

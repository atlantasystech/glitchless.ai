"use client";

import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function BookingCalendar() {
  const [selectedTopic, setSelectedTopic] = useState("Operations Audit (Comprehensive Review)");
  const [selectedDate, setSelectedDate] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("3:30 PM IST");
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "10-50 employees",
    notes: "",
  });

  const topics = [
    "Operations Audit (Comprehensive Review)",
    "Revenue OS (Inbound Leads & Sales CRM)",
    "Commerce OS (Order Exceptions & RTO)",
    "Ops Control Tower & Agent Governance",
    "Open-Source CRM Migration (Odoo / ERPNext)",
  ];

  const dates = [
    { label: "Today", date: "Oct 17", day: "Friday" },
    { label: "Tomorrow", date: "Oct 18", day: "Saturday" },
    { label: "Mon", date: "Oct 20", day: "Monday" },
    { label: "Tue", date: "Oct 21", day: "Tuesday" },
    { label: "Wed", date: "Oct 22", day: "Wednesday" },
    { label: "Thu", date: "Oct 23", day: "Thursday" },
  ];

  const timeSlots = [
    "11:00 AM IST",
    "12:30 PM IST",
    "2:00 PM IST",
    "3:30 PM IST",
    "5:00 PM IST",
    "6:30 PM IST",
    "8:00 PM IST (US Friendly)",
  ];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl p-6 sm:p-10 max-w-4xl mx-auto text-left">
      {/* Progress Steps Header */}
      <div className="flex items-center justify-between pb-8 border-b border-slate-100 mb-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
              step >= 1 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
            }`}
          >
            1
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-900">Agenda & Slot</span>
          <div className="h-0.5 w-6 sm:w-12 bg-slate-200" />
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
              step >= 2 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
            }`}
          >
            2
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-900">Company Details</span>
          <div className="h-0.5 w-6 sm:w-12 bg-slate-200" />
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono ${
              step === 3 ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"
            }`}
          >
            3
          </div>
          <span className="text-xs sm:text-sm font-semibold text-slate-900">Confirmed</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          <span>45-Min Executive Session</span>
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-8 animate-in fade-in duration-200">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
              1. What is your primary operational objective?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {topics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-semibold border transition-all ${
                    selectedTopic === topic
                      ? "bg-slate-900 border-slate-900 text-white shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                2. Select Preferred Date
              </label>
              <span className="text-xs text-blue-600 font-mono font-semibold">IST Timezone (+05:30)</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {dates.map((d) => (
                <button
                  key={d.label}
                  type="button"
                  onClick={() => setSelectedDate(d.label)}
                  className={`p-3 rounded-xl text-center border transition-all ${
                    selectedDate === d.label
                      ? "bg-blue-600 border-blue-600 text-white shadow-sm scale-102"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-[10px] text-slate-400 font-medium">{d.day}</div>
                  <div className="text-sm font-bold mt-0.5">{d.date}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
              3. Select Architecture Slot
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`py-2.5 px-3 rounded-xl text-center text-xs font-mono font-bold border transition-all ${
                    selectedTime === slot
                      ? "bg-slate-900 border-slate-900 text-white shadow-xs"
                      : "bg-white border-slate-200 text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm flex items-center gap-2 transition-colors shadow-md"
            >
              <span>Next: Enter Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <form onSubmit={handleConfirm} className="space-y-5 animate-in fade-in duration-200">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 flex flex-wrap items-center justify-between gap-2">
            <span>
              Selected Slot: <strong className="text-slate-900">{selectedDate} at {selectedTime}</strong>
            </span>
            <span className="font-semibold text-blue-600">Focus: {selectedTopic}</span>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs text-slate-600 underline font-bold"
            >
              Change slot
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singhania"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Work Email <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  placeholder="vikram@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                WhatsApp / Mobile Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98200 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Company Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Singhania Industries / D2C Brand"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-blue-600"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Briefly describe your current tools and primary operations bottleneck
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Using Shopify and Zoho CRM, but order processing and lead follow-up require too much manual copy-pasting..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-blue-600"
            />
          </div>

          <div className="pt-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs font-bold text-slate-500 hover:text-slate-800"
            >
              ← Back to Slot Selection
            </button>
            <button
              type="submit"
              className="px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-sm flex items-center gap-2 shadow-md transition-colors"
            >
              <span>Confirm Operations Audit</span>
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <div className="text-center py-10 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Operations Audit Reserved!
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-bold text-slate-900">{formData.name || "there"}</span>. We have reserved your 45-minute architecture session for{" "}
            <span className="font-semibold text-blue-600">{selectedDate} at {selectedTime}</span>.
          </p>

          <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 max-w-md mx-auto text-left text-xs space-y-2 font-mono">
            <div>
              <span className="text-slate-500">Attendee:</span>{" "}
              <strong className="text-slate-900">{formData.email}</strong>
            </div>
            <div>
              <span className="text-slate-500">Focus:</span>{" "}
              <strong className="text-slate-900">{selectedTopic}</strong>
            </div>
            <div>
              <span className="text-slate-500">Host:</span>{" "}
              <strong className="text-slate-900">Glitchless Systems Architect (Bengaluru RMZ Infinity)</strong>
            </div>
            <div>
              <span className="text-slate-500">Meeting Link:</span>{" "}
              <strong className="text-blue-600 font-sans font-bold">Google Meet invitation sent to your inbox</strong>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => alert("Calendar invitation .ics file downloaded.")}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              Add to Google / Outlook Calendar (.ics)
            </button>
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=Hi%20Prompt%20Tech,%20I%20just%20scheduled%20an%20Operations%20Audit%20for%20${encodeURIComponent(formData.company || "my business")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors"
            >
              Confirm on WhatsApp Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

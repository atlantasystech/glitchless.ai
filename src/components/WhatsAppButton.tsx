"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const encodedMessage = encodeURIComponent(SITE_CONFIG.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3.5 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200 relative mb-1 text-left">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
            aria-label="Dismiss WhatsApp preview"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-900">Glitchless Direct WhatsApp</span>
          </div>
          <p className="text-xs text-slate-600 leading-snug">
            Need fast operational guidance on Revenue OS, Commerce OS, or CRM migration? Connect directly with our solutions architects.
          </p>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Glitchless on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="sr-only">Chat with Glitchless on WhatsApp</span>
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/20 animate-ping pointer-events-none" />
      </a>
    </div>
  );
}

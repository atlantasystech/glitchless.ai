"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Globe,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG, OPERATING_SYSTEMS, CAPABILITIES } from "@/lib/constants";
import { GlitchlessLogo } from "@/components/GlitchlessLogo";

export function Footer() {
  const encodedMessage = encodeURIComponent(SITE_CONFIG.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodedMessage}`;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800/80">
          {/* Brand Info & Address */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex">
              <GlitchlessLogo variant="dark" />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Glitchless builds governed AI-operated business systems for ecommerce and B2B companies. We eliminate manual repetition, enforce data quality, and give leadership complete visibility.
            </p>

            {/* India Engineering Hubs */}
            <div className="space-y-3 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200">
                    Bengaluru Engineering Center:
                  </span>{" "}
                  Tower 2B, RMZ Infinity, Old Madras Road, Bennigana Halli, Bengaluru 560016
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200">
                    Mumbai Operations Hub:
                  </span>{" "}
                  The Capital, Level 7, Bandra Kurla Complex (BKC), Mumbai 400051
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href={`mailto:${SITE_CONFIG.contact.salesEmail}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>{SITE_CONFIG.contact.salesEmail}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-400 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Governed Systems Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Governed Systems
            </h3>
            <ul className="space-y-2.5 text-sm">
              {OPERATING_SYSTEMS.map((os) => (
                <li key={os.id}>
                  <Link
                    href={`/solutions#${os.id}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{os.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/solutions"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-xs flex items-center gap-1"
                >
                  Architecture Overview →
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Platform Capabilities
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CAPABILITIES.slice(0, 5).map((cap) => (
                <li key={cap.id}>
                  <Link
                    href={`/services/${cap.slug}`}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {cap.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-blue-400 hover:text-blue-300 font-semibold text-xs"
                >
                  View All Capabilities →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Company & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/process"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Governance Process
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Outcome Proof
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Pricing & Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Glitchless
                </Link>
              </li>
              <li>
                <Link
                  href="/book-a-call"
                  className="text-blue-400 font-bold hover:underline"
                >
                  Book an Operations Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy (DPDP & GDPR)
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Socials strictly LinkedIn, X, YouTube, GitHub (NO Instagram, NO Facebook) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>
              © 2026 {SITE_CONFIG.legalName}. All rights reserved.
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              Governed Systems Built in India for Global Scale
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Sovereign Cloud Data Isolation
            </span>
            <div className="flex items-center gap-4">
              <a
                href={SITE_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors font-semibold"
              >
                LinkedIn
              </a>
              <a
                href={SITE_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors font-semibold"
              >
                X (Twitter)
              </a>
              <a
                href={SITE_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors font-semibold"
              >
                GitHub
              </a>
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-300 transition-colors font-semibold"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

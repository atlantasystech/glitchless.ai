"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { OPERATING_SYSTEMS, CAPABILITIES } from "@/lib/constants";
import { GlitchlessLogo } from "@/components/GlitchlessLogo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [platformDropdown, setPlatformDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setPlatformDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Glitchless Brand Logo */}
          <Link href="/" className="inline-flex">
            <GlitchlessLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Platform Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPlatformDropdown(true)}
              onMouseLeave={() => setPlatformDropdown(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  pathname.startsWith("/services") || pathname.startsWith("/solutions")
                    ? "text-blue-600 bg-blue-50/50"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                }`}
                aria-expanded={platformDropdown}
              >
                <span>Platform</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    platformDropdown ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {platformDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5">
                    {/* 3 Core Operating Systems */}
                    <div className="pb-4 border-b border-slate-100">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 px-2 block mb-3">
                        Governed Operating Systems
                      </span>
                      <div className="grid grid-cols-3 gap-3">
                        {OPERATING_SYSTEMS.map((os) => (
                          <Link
                            key={os.id}
                            href={`/solutions#${os.id}`}
                            className="p-3 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                          >
                            <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 block">
                              {os.name}
                            </span>
                            <span className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-snug">
                              {os.tagline}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Platform Capabilities Grid */}
                    <div className="pt-4">
                      <div className="flex items-center justify-between px-2 mb-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                          Platform Capabilities
                        </span>
                        <Link
                          href="/services"
                          className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                        >
                          All Capabilities →
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {CAPABILITIES.slice(0, 4).map((cap) => (
                          <Link
                            key={cap.id}
                            href={`/services/${cap.slug}`}
                            className="p-2.5 rounded-lg hover:bg-slate-50 text-xs transition-colors flex items-center justify-between group"
                          >
                            <span className="font-medium text-slate-800 group-hover:text-blue-600">
                              {cap.title}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/solutions"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === "/solutions"
                  ? "text-blue-600 bg-blue-50/50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Solutions
            </Link>

            <Link
              href="/process"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === "/process"
                  ? "text-blue-600 bg-blue-50/50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Process
            </Link>

            <Link
              href="/case-studies"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === "/case-studies"
                  ? "text-blue-600 bg-blue-50/50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/pricing"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === "/pricing"
                  ? "text-blue-600 bg-blue-50/50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Pricing
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === "/about"
                  ? "text-blue-600 bg-blue-50/50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                pathname === "/contact"
                  ? "text-blue-600 bg-blue-50/50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-all duration-200 shadow-sm active:scale-98"
            >
              <span>Book an Operations Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/book-a-call"
              className="px-3.5 py-1.5 text-xs font-bold rounded-lg bg-slate-900 text-white"
            >
              Audit Call
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <div className="pb-3 border-b border-slate-100">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3">
                Governed Systems
              </span>
              <div className="mt-2 space-y-1">
                {OPERATING_SYSTEMS.map((os) => (
                  <Link
                    key={os.id}
                    href={`/solutions#${os.id}`}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span>{os.name}</span>
                    <span className="text-[11px] text-slate-400">{os.tagline}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-1">
              <Link
                href="/services"
                className="block px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                All Platform Capabilities →
              </Link>
              <Link
                href="/solutions"
                className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Solutions & Architecture
              </Link>
              <Link
                href="/process"
                className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Governance & 5-Step Process
              </Link>
              <Link
                href="/case-studies"
                className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Outcomes & Proof
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Pricing & Operations Audit
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                About Glitchless
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Contact & Hubs
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <Link
                href="/book-a-call"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-md"
              >
                <span>Book an Operations Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

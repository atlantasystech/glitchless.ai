"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sublabel: string;
  color: string;
}

function AnimatedCounter({ end, prefix = "", suffix = "", decimals = 0, label, sublabel, color }: StatProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const duration = 1800;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };

    requestAnimationFrame(animate);
  }, [started, end, decimals]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono tabular-nums ${color} leading-none`}>
        {prefix}{count.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
      </div>
      <div className="mt-3 text-base font-bold text-slate-900">{label}</div>
      <div className="mt-1 text-sm text-slate-500">{sublabel}</div>
    </div>
  );
}

export function ImpactMetrics() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700 mb-4">
            REAL PRODUCTION NUMBERS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.035em] text-slate-950 leading-tight">
            The numbers that matter{" "}
            <span className="text-slate-400 font-bold tracking-[-0.03em]">to your business.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <AnimatedCounter
            end={92}
            suffix="%"
            label="Call Cost Reduction"
            sublabel="₹3.80 vs ₹45 BPO"
            color="text-emerald-600"
          />
          <AnimatedCounter
            end={580}
            suffix="ms"
            label="Voice AI Latency"
            sublabel="First spoken word"
            color="text-blue-600"
          />
          <AnimatedCounter
            end={32}
            prefix="-"
            suffix="%"
            label="Return Order Rate"
            sublabel="COD verification"
            color="text-rose-500"
          />
          <AnimatedCounter
            end={99.98}
            suffix="%"
            decimals={2}
            label="System Uptime"
            sublabel="Production SLA"
            color="text-slate-900"
          />
        </div>

        {/* Visual comparison bar */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div>
              <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-4">Before Glitchless</div>
              <div className="space-y-3">
                {[
                  { label: "Lead response time", val: "4.2 hours", pct: 95, color: "bg-rose-400" },
                  { label: "Cost per customer contact", val: "₹45–65", pct: 85, color: "bg-rose-400" },
                  { label: "Queries resolved automatically", val: "12%", pct: 12, color: "bg-rose-400" },
                  { label: "Return / RTO rate", val: "28%", pct: 28, color: "bg-rose-400" },
                ].map(row => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">{row.label}</span>
                      <span className="font-mono font-bold text-rose-600">{row.val}</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full ${row.color} rounded-full`} style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div>
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-4">After Glitchless</div>
              <div className="space-y-3">
                {[
                  { label: "Lead response time", val: "< 60 seconds", pct: 8, color: "bg-emerald-500" },
                  { label: "Cost per customer contact", val: "₹3.80", pct: 9, color: "bg-emerald-500" },
                  { label: "Queries resolved automatically", val: "74%", pct: 74, color: "bg-emerald-500" },
                  { label: "Return / RTO rate", val: "< 18%", pct: 18, color: "bg-emerald-500" },
                ].map(row => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-600">{row.label}</span>
                      <span className="font-mono font-bold text-emerald-700">{row.val}</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full ${row.color} rounded-full transition-all duration-1000`} style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

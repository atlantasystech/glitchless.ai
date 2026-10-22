import React from "react";
import { WHY_PROMPT_TECH } from "@/lib/constants";
import {
  ShieldCheck,
  Target,
  Layers,
  Zap,
  Lock,
  Globe2,
} from "lucide-react";

export function WhyGlitchless() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    Target: <Target className="w-5 h-5 text-emerald-600" />,
    Layers: <Layers className="w-5 h-5 text-indigo-600" />,
    Zap: <Zap className="w-5 h-5 text-amber-500" />,
    Lock: <Lock className="w-5 h-5 text-slate-800" />,
    Globe2: <Globe2 className="w-5 h-5 text-blue-500" />,
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>The Glitchless Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Why High-Growth Companies <br />
            <span className="text-slate-500">Choose Glitchless.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We don’t experiment on production systems. We combine high-velocity engineering with enterprise governance, data sovereignty, and measurable unit economics.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_PROMPT_TECH.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5">
                {iconMap[item.iconName] || <ShieldCheck className="w-5 h-5 text-blue-600" />}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const WhyPromptTech = WhyGlitchless;

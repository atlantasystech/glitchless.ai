import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Zap, Mic, PhoneCall } from "lucide-react";
import { BentoHero } from "@/components/BentoHero";
import { TrustBar } from "@/components/TrustBar";
import { ImpactMetrics } from "@/components/ImpactMetrics";
import { StickyScrollFeatures } from "@/components/StickyScrollFeatures";
import { ZapierFlow } from "@/components/ZapierFlow";
import { VoiceAIAgents } from "@/components/VoiceAIAgents";
import { OperationsRoiCalculator } from "@/components/visualizations/OperationsRoiCalculator";
import { LiveMetricsGauges } from "@/components/visualizations/LiveMetricsGauges";
import { OutcomeProof } from "@/components/OutcomeProof";
import { FAQSection } from "@/components/FAQSection";
import { FinalAuditCTA } from "@/components/FinalAuditCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ── 1. LIGHT BENTO HERO — Clay/Linear light bento grid with live multi-system UIs ── */}
      <BentoHero />

      {/* ── 2. TRUST BAR — Auto-scrolling real integration logos ── */}
      <TrustBar />

      {/* ── 3. ANIMATED IMPACT NUMBERS — Scroll-triggered counters + Before/After bars ── */}
      <ImpactMetrics />

      {/* ── 4. STICKY SCROLL — Verloop-style left panel / right scroll with live mockups ── */}
      <StickyScrollFeatures />

      {/* ── 5. ZAPIER-STYLE FLOWS — Clickable workflow diagrams + integration tile grid ── */}
      <ZapierFlow />

      {/* ── 6. VOICE AI DEMO — Waveform player + bilingual call transcript ── */}
      <VoiceAIAgents />

      {/* ── 7. ROI CALCULATOR — Interactive sliders + cost comparison bars ── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OperationsRoiCalculator />
        </div>
      </section>

      {/* ── 8. LIVE METRICS — Circular donut gauges ── */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiveMetricsGauges />
        </div>
      </section>

      {/* ── 9. CASE STUDY PROOF ── */}
      <OutcomeProof />

      {/* ── 10. FAQ ── */}
      <FAQSection />

      {/* ── 11. FINAL CTA ── */}
      <FinalAuditCTA />
    </div>
  );
}

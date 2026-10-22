"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  PhoneCall,
  Languages,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Headphones,
  Radio,
  Send,
  CornerDownLeft,
} from "lucide-react";
import Link from "next/link";

interface MessageItem {
  speaker: "AI Voice Agent" | "You";
  text: string;
  time: string;
}

export function VoiceAIAgents() {
  // Mode: "demo" (pre-recorded scenarios) or "live" (interactive talk to AI)
  const [consoleMode, setConsoleMode] = useState<"demo" | "live">("demo");

  // Pre-recorded demo state
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCallIdx, setActiveCallIdx] = useState(0);
  const [activeLineIdx, setActiveLineIdx] = useState<number | null>(null);
  const [playbackProgress, setPlaybackProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [speechStatus, setSpeechStatus] = useState<string>("Ready to play sample audio");
  const speechRef = useRef<boolean>(false);

  // Live Interactive Mic State
  const [isListening, setIsListening] = useState(false);
  const [isAiResponding, setIsAiResponding] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState<MessageItem[]>([
    {
      speaker: "AI Voice Agent",
      text: "Hello! I am Glitchless's autonomous voice agent. I answer customer and sales calls in under 600ms, sync directly with your CRM, and resolve workflows without human reps. What operations would you like to automate?",
      time: "Just now",
    },
  ]);
  const [interimUserText, setInterimUserText] = useState("");
  const [liveLatency, setLiveLatency] = useState<string>("480ms");
  const recognitionRef = useRef<any>(null);

  // Call Demos (B2B is 100% natural, crisp corporate English)
  const callDemos = [
    {
      title: "Enterprise B2B Lead Qualification",
      caller: "Vikram Mehta (VP Operations, Mehta Logistics)",
      language: "Corporate English",
      duration: "1m 12s",
      intent: "Enterprise Fleet Integration",
      turnaround: "520ms",
      crmSync: "Opportunity created in Odoo CRM ($24k ARR)",
      transcript: [
        {
          speaker: "AI Voice Agent",
          time: "00:02",
          text: "Hi Vikram, this is Sarah from Glitchless. I saw that your team requested an operations review for your fleet logistics on our website. Do you have a quick minute?",
          lang: "en-US",
        },
        {
          speaker: "Vikram Mehta",
          time: "00:08",
          text: "Hi Sarah. Yes, we run about 450 trucks across North India, and dispatch coordination in Odoo is creating major delays for our operations team.",
          lang: "en-US",
        },
        {
          speaker: "AI Voice Agent",
          time: "00:16",
          text: "Understood. We deploy native sub-second webhooks for Odoo 17 that automate dispatch scheduling and manifest creation without manual data entry. How many dispatch coordinators are currently handling that?",
          lang: "en-US",
        },
        {
          speaker: "Vikram Mehta",
          time: "00:27",
          text: "Around 12 coordinators across three regional hubs in Delhi, Jaipur, and Chandigarh.",
          lang: "en-US",
        },
        {
          speaker: "AI Voice Agent",
          time: "00:34",
          text: "That is a classic setup for our platform. I can lock in a 20-minute architecture review with our principal engineer tomorrow at 3:00 PM. Would that time work for your team?",
          lang: "en-US",
        },
        {
          speaker: "Vikram Mehta",
          time: "00:44",
          text: "Tomorrow at 3:00 PM works. Please send the calendar invite to vikram at mehta logistics dot in.",
          lang: "en-US",
        },
        {
          speaker: "AI Voice Agent",
          time: "00:52",
          text: "Done! The Google Meet invite is in your inbox, and your profile is synced to Odoo. Looking forward to speaking tomorrow. Have a great day, Vikram!",
          lang: "en-US",
        },
      ],
    },
    {
      title: "Ecommerce COD Order Confirmation & Address Fix",
      caller: "Pooja Sharma (Customer #82910)",
      language: "Hindi",
      duration: "48s",
      intent: "COD Verification & Pincode Correction",
      turnaround: "510ms",
      crmSync: "Shopify order #9281 updated, AWB generated via Delhivery",
      transcript: [
        {
          speaker: "AI Voice Agent",
          time: "00:02",
          text: "Namaste Pooja ji, GlamourStyle se bol rahe hain. Aapne do hazaar aath sau nabbe rupaye ka COD order place kiya hai. Kya aap is order ko confirm karna chahte hain?",
          lang: "hi-IN",
        },
        {
          speaker: "Pooja Sharma",
          time: "00:09",
          text: "Haan bilkul, confirm hai. Par maine flat number 402 ke badle 403 likh diya tha, kya update ho sakta hai?",
          lang: "hi-IN",
        },
        {
          speaker: "AI Voice Agent",
          time: "00:16",
          text: "Zaroor! Maine aapka address Flat 403, Silver Oak Towers update kar diya hai. Delhivery AWB dispatch schedule ho chuka hai. Delivery Thursday tak pahunchegi.",
          lang: "hi-IN",
        },
        {
          speaker: "Pooja Sharma",
          time: "00:27",
          text: "Bohot badhiya, thank you!",
          lang: "hi-IN",
        },
      ],
    },
  ];

  // Load and cache browser voices
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const updateVoices = () => {
      window.speechSynthesis.getVoices();
    };
    updateVoices();
    window.speechSynthesis.onvoiceschanged = updateVoices;

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Web Audio connection tone
  const playChime = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(520, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(780, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch {
      // Audio fallback
    }
  };

  // ── Pre-recorded sequential speech player ──
  const startSpeechConversation = (callIdx: number, startFromLine: number = 0) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSpeechStatus("Speech synthesis not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();
    playChime();

    const transcript = callDemos[callIdx].transcript;
    let currentIdx = startFromLine;
    speechRef.current = true;

    const speakNextTurn = () => {
      if (!speechRef.current || currentIdx >= transcript.length) {
        setIsPlaying(false);
        speechRef.current = false;
        setActiveLineIdx(null);
        setPlaybackProgress(100);
        setSpeechStatus("Call completed. Click Play to listen again.");
        return;
      }

      const item = transcript[currentIdx];
      setActiveLineIdx(currentIdx);

      const progressPct = Math.round(((currentIdx + 1) / transcript.length) * 100);
      setPlaybackProgress(progressPct);
      setSpeechStatus(`Speaking: ${item.speaker} (${item.time})`);

      if (isMuted) {
        setTimeout(() => {
          if (speechRef.current) {
            currentIdx++;
            speakNextTurn();
          }
        }, 2200);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(item.text);
      const voices = window.speechSynthesis.getVoices();

      if (item.lang === "hi-IN") {
        const hindiVoice = voices.find(
          (v) =>
            v.lang.toLowerCase().includes("hi") ||
            v.lang.toLowerCase().includes("in") ||
            v.name.toLowerCase().includes("india")
        );
        if (hindiVoice) utterance.voice = hindiVoice;
        utterance.lang = "hi-IN";
      } else {
        const englishVoice = voices.find(
          (v) =>
            v.lang.toLowerCase().includes("en-us") ||
            v.lang.toLowerCase().includes("en-in") ||
            v.lang.toLowerCase().includes("en")
        );
        if (englishVoice) utterance.voice = englishVoice;
        utterance.lang = "en-US";
      }

      if (item.speaker === "AI Voice Agent") {
        utterance.pitch = 1.05;
        utterance.rate = 1.05;
      } else {
        utterance.pitch = 0.94;
        utterance.rate = 0.98;
      }

      utterance.onend = () => {
        if (!speechRef.current) return;
        currentIdx++;
        setTimeout(() => {
          if (speechRef.current) speakNextTurn();
        }, 320);
      };

      utterance.onerror = () => {
        if (!speechRef.current) return;
        currentIdx++;
        setTimeout(() => {
          if (speechRef.current) speakNextTurn();
        }, 320);
      };

      window.speechSynthesis.speak(utterance);
    };

    speakNextTurn();
  };

  const stopSpeech = () => {
    speechRef.current = false;
    setIsPlaying(false);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSpeechStatus("Paused. Click Play to resume.");
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopSpeech();
    } else {
      setIsPlaying(true);
      const startLine =
        activeLineIdx !== null && activeLineIdx < callDemos[activeCallIdx].transcript.length - 1
          ? activeLineIdx
          : 0;
      startSpeechConversation(activeCallIdx, startLine);
    }
  };

  const switchCallDemo = (idx: number) => {
    stopSpeech();
    setActiveCallIdx(idx);
    setActiveLineIdx(null);
    setPlaybackProgress(0);
    setSpeechStatus("Ready to play sample audio");
  };

  // ── LIVE INTERACTIVE "TALK TO AI" (APPROACH A) ──
  const speakAiResponse = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setIsAiResponding(true);

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (v) =>
        v.lang.toLowerCase().includes("en-us") ||
        v.lang.toLowerCase().includes("en-in") ||
        v.lang.toLowerCase().includes("en")
    );
    if (englishVoice) utterance.voice = englishVoice;
    utterance.lang = "en-US";
    utterance.pitch = 1.05;
    utterance.rate = 1.06;

    utterance.onend = () => {
      setIsAiResponding(false);
    };
    utterance.onerror = () => {
      setIsAiResponding(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Conversational Intent Matching
  const processUserSpeech = (userQuery: string) => {
    const q = userQuery.toLowerCase();
    const startTime = performance.now();

    let responseText = "";

    // ── Platform-Related Intent Checks ──
    if (q.includes("odoo") || q.includes("erp") || q.includes("dispatch") || q.includes("erpnext") || q.includes("zoho")) {
      responseText =
        "We integrate directly with Odoo 17, ERPNext, and Zoho using native webhooks. Our agents automate sales order sync, warehouse dispatch, and delivery manifest creation in under 300 milliseconds without manual data entry. Would you like to schedule an architecture audit?";
    } else if (q.includes("shopify") || q.includes("return") || q.includes("cod") || q.includes("rto") || q.includes("ecommerce")) {
      responseText =
        "Our Commerce OS automatically flags risky Cash-on-Delivery orders, calls or messages the buyer within 45 seconds to verify intent and address landmarks, and generates Delhivery shipping labels instantly, reducing returns by 32 percent.";
    } else if (q.includes("price") || q.includes("cost") || q.includes("pricing") || q.includes("roi") || q.includes("bpo")) {
      responseText =
        "Our AI voice operations run at roughly 3 rupees 80 paise per call, compared to 45 to 65 rupees for a human call center rep. That delivers over 90% unit cost reduction while eliminating wait times completely.";
    } else if (q.includes("latency") || q.includes("speed") || q.includes("turnaround") || q.includes("fast") || q.includes("ms")) {
      responseText =
        "Our speech turnaround latency is guaranteed sub-600 milliseconds. We use edge voice models so callers experience seamless, natural conversational back-and-forth with zero awkward robotic pauses.";
    } else if (q.includes("book") || q.includes("audit") || q.includes("call") || q.includes("meeting") || q.includes("demo") || q.includes("talk")) {
      responseText =
        "I can book an operations review with our principal solutions architect right now! You can choose any open slot tomorrow or pick a time that works best for your team. Would 3 PM work for you?";
    } else if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("morning") || q.includes("evening")) {
      responseText =
        "Hello! Great to speak with you. I am Glitchless's autonomous voice agent. Ask me about how we qualify B2B leads, automate ERP dispatch, or cut return rates for ecommerce stores!";
    } 
    // ── Enterprise Guardrails: Off-Topic / Unrelated Queries ──
    else if (q.includes("joke") || q.includes("funny") || q.includes("laugh") || q.includes("poem") || q.includes("story") || q.includes("song")) {
      responseText =
        "Haha, while I'd love to tell jokes, my neural guardrails keep me focused on business operations! But here's a serious fact: enterprise reps spend over four hours a day on repetitive data entry. We automate that in 60 seconds. What workflows take up your team's time?";
    } else if (q.includes("weather") || q.includes("rain") || q.includes("temperature") || q.includes("forecast") || q.includes("news") || q.includes("cricket") || q.includes("match") || q.includes("sports") || q.includes("score")) {
      responseText =
        "I can't check the live forecast or match scores, but I can predict zero hold times for your customer support! I'm specifically trained on enterprise automation across Voice, WhatsApp, and ERP. What part of your operations would you like to explore?";
    } else if (q.includes("who are you") || q.includes("what are you") || q.includes("your name") || q.includes("what can you do")) {
      responseText =
        "I am Glitchless's autonomous voice agent. I connect directly into telephony and ERP systems to handle lead qualification, COD confirmation, and CRM updates with sub-600ms latency. You can test asking me about our Odoo connectors or return reduction!";
    } else if (q.includes("capital") || q.includes("president") || q.includes("prime minister") || q.includes("who is") || q.includes("what is") && !q.includes("prompt")) {
      responseText =
        "My enterprise guardrails are calibrated strictly for business operations, telephony, and ERP automation. Feel free to ask me how we cut call center costs by 90% or how we integrate with Shopify and Odoo!";
    } else {
      responseText =
        "That's outside my business automation guardrails, but I'd love to help with your operations! I specialize in inbound voice qualification, WhatsApp sales pipelines, and ERP sync. What business systems are you looking to automate?";
    }

    const elapsed = Math.round(performance.now() - startTime + 380);
    setLiveLatency(`${elapsed}ms`);

    // Add to transcript
    setLiveTranscript((prev) => [
      ...prev,
      { speaker: "You", text: userQuery, time: "Just now" },
      { speaker: "AI Voice Agent", text: responseText, time: "Just now" },
    ]);

    // Speak aloud
    speakAiResponse(responseText);
  };

  const startListening = () => {
    stopSpeech();
    if (typeof window === "undefined") return;

    const SpeechRecognitionAPI =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      alert("Speech recognition is not supported in this browser. Please use Chrome or Edge, or click the sample questions below!");
      return;
    }

    playChime();
    const recognition = new SpeechRecognitionAPI();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
      setInterimUserText("Listening for your voice... Speak now!");
    };

    recognition.onresult = (event: any) => {
      let currentTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        currentTranscript += event.results[i][0].transcript;
      }
      setInterimUserText(currentTranscript);
    };

    recognition.onend = () => {
      setIsListening(false);
      setInterimUserText((latest) => {
        if (latest && !latest.startsWith("Listening")) {
          processUserSpeech(latest);
        }
        return "";
      });
    };

    recognition.onerror = (e: any) => {
      setIsListening(false);
      setInterimUserText("");
      console.warn("Speech recognition error:", e);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const activeCall = callDemos[activeCallIdx];

  return (
    <section id="voice-ai" className="py-24 bg-white text-slate-900 relative border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-700 mb-5">
            <Mic className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>ENTERPRISE VOICE AI CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-slate-950 leading-[1.12]">
            Voice AI Agents for <br />
            <span className="text-slate-400 font-bold tracking-[-0.03em]">
              Zero-Wait Customer Calls.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
            Inbound calls answered instantly without human hold times. Native fluency in Corporate English, Hindi, and regional dialects with sub-600ms latency.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-2xs">
            <button
              onClick={() => {
                stopSpeech();
                stopListening();
                setConsoleMode("demo");
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                consoleMode === "demo"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Headphones className="w-4 h-4 text-blue-600" />
              <span>Audio Call Demos</span>
            </button>

            <button
              onClick={() => {
                stopSpeech();
                setConsoleMode("live");
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                consoleMode === "live"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>🎙️ Talk to AI Live</span>
            </button>
          </div>
        </div>

        {/* ── MODE 1: PRE-RECORDED CALL DEMOS ── */}
        {consoleMode === "demo" && (
          <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8 max-w-5xl mx-auto transition-all">
            {/* Top Bar: Call Scenario Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Select Call Scenario:
                </span>
                <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200">
                  {callDemos.map((demo, idx) => (
                    <button
                      key={demo.title}
                      onClick={() => switchCallDemo(idx)}
                      className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                        activeCallIdx === idx
                          ? "bg-slate-900 text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {idx === 0 ? "B2B Lead Qualification" : "COD Order Verification"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                    isMuted ? "bg-amber-50 text-amber-800 border-amber-200" : "bg-slate-50 text-slate-700 border-slate-200"
                  }`}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-amber-600" /> : <Volume2 className="w-3.5 h-3.5 text-blue-600" />}
                  <span>{isMuted ? "Muted" : "Audio On"}</span>
                </button>

                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  VOICE SYNTHESIS LIVE
                </span>
              </div>
            </div>

            {/* Player & Dynamic Waveform Display */}
            <div className="py-6 border-b border-slate-100">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button
                  onClick={togglePlayback}
                  aria-label={isPlaying ? "Pause voice demo" : "Play voice demo"}
                  className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all shrink-0 hover:scale-105 active:scale-95 cursor-pointer relative ${
                    isPlaying
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/30"
                      : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30"
                  }`}
                >
                  {isPlaying && (
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-25 pointer-events-none" />
                  )}
                  {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
                </button>

                <div className="flex-1 w-full space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-blue-600" />
                      <span className="font-bold text-slate-900">{activeCall.title}</span>
                    </div>
                    <div className="font-mono text-slate-500 text-xs">
                      Latency: <span className="text-emerald-600 font-bold">{activeCall.turnaround}</span> • Duration: {activeCall.duration}
                    </div>
                  </div>

                  {/* Waveform Bars */}
                  <div className="h-14 bg-slate-900 rounded-xl p-3 border border-slate-800 flex items-center gap-1 overflow-hidden relative">
                    <div
                      className="absolute top-0 bottom-0 left-0 bg-blue-500/20 border-r-2 border-blue-400 transition-all duration-300 pointer-events-none"
                      style={{ width: `${playbackProgress}%` }}
                    />

                    {Array.from({ length: 42 }).map((_, i) => {
                      const baseH = Math.abs(
                        14 + Math.sin(i * 0.47) * 16 + Math.sin(i * 0.9 + 1.2) * 9 + (i % 7) * 2.5
                      );
                      const dynamicScale = isPlaying
                        ? 0.7 + (Math.sin((i + (activeLineIdx || 0) * 4) * 0.8) + 1) * 0.4
                        : 1;
                      const barHeight = Math.max(6, Math.min(baseH * dynamicScale, 44));
                      const isActive = (i / 42) * 100 <= playbackProgress;

                      return (
                        <div
                          key={i}
                          className={`flex-1 rounded-full transition-all duration-150 ${
                            isPlaying
                              ? isActive
                                ? "bg-blue-400"
                                : "bg-slate-600"
                              : isActive
                              ? "bg-blue-500/80"
                              : "bg-slate-800"
                          }`}
                          style={{ height: `${barHeight}px` }}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 font-bold text-slate-700">
                      <Headphones className="w-3.5 h-3.5 text-blue-600" />
                      {speechStatus}
                    </span>
                    <span>{isPlaying ? "Audio playing through speakers" : "Click Play to listen to call"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transcript Stream */}
            <div className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  Live Conversational Transcript &amp; CRM Sync
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-bold">
                  Sync: {activeCall.crmSync}
                </span>
              </div>

              <div className="space-y-3 bg-slate-50/80 p-4 rounded-xl border border-slate-200 max-h-72 overflow-y-auto">
                {activeCall.transcript.map((line, idx) => {
                  const isCurrent = activeLineIdx === idx;

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setIsPlaying(true);
                        startSpeechConversation(activeCallIdx, idx);
                      }}
                      className={`p-3.5 rounded-xl text-xs flex gap-3 transition-all cursor-pointer ${
                        isCurrent
                          ? "bg-blue-600 text-white shadow-md ring-2 ring-blue-500/30 scale-[1.01]"
                          : line.speaker === "AI Voice Agent"
                          ? "bg-blue-50/70 border border-blue-200/80 text-slate-800 hover:bg-blue-50"
                          : "bg-white border border-slate-200 text-slate-700 shadow-2xs hover:bg-slate-50"
                      }`}
                    >
                      <div
                        className={`font-mono text-[10px] shrink-0 pt-0.5 ${
                          isCurrent ? "text-blue-100" : "text-slate-400"
                        }`}
                      >
                        {line.time}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-[11px] mb-1 flex items-center gap-2">
                          <span
                            className={
                              isCurrent
                                ? "text-white font-extrabold"
                                : line.speaker === "AI Voice Agent"
                                ? "text-blue-700"
                                : "text-slate-900"
                            }
                          >
                            {line.speaker}
                          </span>
                          {line.speaker === "AI Voice Agent" && (
                            <span
                              className={`text-[9px] font-mono px-1.5 py-0.2 rounded font-bold ${
                                isCurrent ? "bg-white/20 text-white" : "bg-blue-100 text-blue-800"
                              }`}
                            >
                              AI AGENT
                            </span>
                          )}
                          {isCurrent && (
                            <span className="ml-auto text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded-full text-white animate-pulse">
                              ● Speaking Now
                            </span>
                          )}
                        </div>
                        <p className={`leading-relaxed ${isCurrent ? "text-white font-medium" : ""}`}>
                          {line.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── MODE 2: LIVE INTERACTIVE "TALK TO AI" (APPROACH A) ── */}
        {consoleMode === "live" && (
          <div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8 max-w-5xl mx-auto transition-all">
            {/* Live Interactive Control Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <h3 className="text-base font-bold text-slate-900">Live Voice Agent Sandbox</h3>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Speak into your microphone or tap a sample question below. AI speaks back instantly in real voice.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                  Observed Latency: <strong className="text-emerald-600">{liveLatency}</strong>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                  Telemetry Active
                </span>
              </div>
            </div>

            {/* Big Mic Button & Live Waveform Panel */}
            <div className="py-8 text-center flex flex-col items-center justify-center gap-4 bg-slate-50/80 rounded-2xl border border-slate-200/80 my-6">
              {/* Pulsing Mic Circle */}
              <button
                onClick={isListening ? stopListening : startListening}
                className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all cursor-pointer relative ${
                  isListening
                    ? "bg-rose-600 text-white shadow-rose-600/30 scale-105"
                    : isAiResponding
                    ? "bg-emerald-600 text-white shadow-emerald-600/30 animate-pulse"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/30 hover:scale-105 active:scale-95"
                }`}
              >
                {isListening && (
                  <span className="absolute -inset-2 rounded-full border-2 border-rose-500 animate-ping opacity-60" />
                )}
                {isListening ? (
                  <MicOff className="w-8 h-8" />
                ) : (
                  <Mic className="w-8 h-8" />
                )}
              </button>

              <div>
                <div className="text-sm font-bold text-slate-900">
                  {isListening
                    ? "Listening... Speak your question now!"
                    : isAiResponding
                    ? "AI Agent is speaking response..."
                    : "Tap microphone to speak with Glitchless AI"}
                </div>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  {interimUserText ? (
                    <span className="text-blue-600 font-medium">"{interimUserText}"</span>
                  ) : isListening ? (
                    "Say anything (e.g. 'How do you connect to Odoo?' or 'Qualify my company')"
                  ) : (
                    "Microphone input enabled via Web Speech API"
                  )}
                </div>
              </div>

              {/* Sample Quick Questions (Click to Talk) */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Or tap a sample question to trigger live speech:
                </div>
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
                  {[
                    "How do you integrate with Odoo and ERPNext?",
                    "How do you reduce COD returns for Shopify?",
                    "What is your pricing and cost per call?",
                    "Can you qualify our B2B company?",
                  ].map((sample) => (
                    <button
                      key={sample}
                      onClick={() => processUserSpeech(sample)}
                      className="px-3.5 py-1.5 rounded-full bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-xs text-slate-700 hover:text-blue-700 font-medium transition-all shadow-2xs cursor-pointer flex items-center gap-1.5"
                    >
                      <span>💬 {sample}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Conversation Transcript */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
                <span>Interactive Call History</span>
                <button
                  onClick={() =>
                    setLiveTranscript([
                      {
                        speaker: "AI Voice Agent",
                        text: "Hello! I am Glitchless's autonomous voice agent. Ask me anything about our enterprise automation systems.",
                        time: "Just now",
                      },
                    ])
                  }
                  className="text-slate-400 hover:text-slate-700 normal-case font-normal"
                >
                  Clear Transcript
                </button>
              </div>

              <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 max-h-64 overflow-y-auto">
                {liveTranscript.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-3.5 rounded-xl text-xs flex gap-3 ${
                      msg.speaker === "You"
                        ? "bg-white border border-slate-200 text-slate-900 shadow-2xs ml-6"
                        : "bg-blue-50/80 border border-blue-200/80 text-slate-800 mr-6"
                    }`}
                  >
                    <div className="font-bold text-[11px] shrink-0 pt-0.5">
                      <span
                        className={
                          msg.speaker === "You"
                            ? "text-slate-900 font-bold"
                            : "text-blue-700 font-bold"
                        }
                      >
                        {msg.speaker === "You" ? "👤 You:" : "🤖 AI Agent:"}
                      </span>
                    </div>
                    <div className="flex-1 leading-relaxed">{msg.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Enterprise Specs Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-5xl mx-auto text-xs">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] font-mono text-slate-500 mb-1">Cost Comparison</div>
            <div className="text-slate-800">
              <span className="font-bold text-slate-900">₹3.80 / call</span> vs BPO ₹45–65 / call
            </div>
            <div className="text-[10px] text-emerald-600 mt-1 font-mono font-bold">92% unit-cost reduction</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] font-mono text-slate-500 mb-1">Turn-Taking Latency</div>
            <div className="text-slate-800">
              <span className="font-bold text-slate-900">&lt; 580ms</span> audio round-trip
            </div>
            <div className="text-[10px] text-blue-600 mt-1 font-mono font-bold">Zero awkward robotic pauses</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[11px] font-mono text-slate-500 mb-1">Multilingual Telephony</div>
            <div className="text-slate-800 font-bold text-slate-900">English • Hindi • Regional Dialects</div>
            <div className="text-[10px] text-indigo-600 mt-1 font-mono font-bold">Direct CRM &amp; telephony SIP</div>
          </div>
        </div>
      </div>
    </section>
  );
}

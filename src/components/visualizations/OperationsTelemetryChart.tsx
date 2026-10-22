"use client";

import React, { useState } from "react";
import { Activity, TrendingDown, TrendingUp, Zap, Clock, ShieldCheck } from "lucide-react";

export function OperationsTelemetryChart() {
  const [metricView, setMetricView] = useState<"latency" | "throughput" | "exceptions">("latency");
  const [timeRange, setTimeRange] = useState<"24h" | "7d" | "30d">("24h");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 12 data points for the visual graph
  const datasets = {
    latency: {
      title: "Lead Response Latency (Minutes)",
      badge: "-94% Latency Reduction",
      current: "1.2 mins",
      comparison: "vs 240 mins traditional",
      color: "#2563eb",
      points: [
        { time: "00:00", value: 1.4, raw: "1m 24s", baseline: 240 },
        { time: "02:00", value: 1.1, raw: "1m 06s", baseline: 230 },
        { time: "04:00", value: 0.9, raw: "54s", baseline: 250 },
        { time: "06:00", value: 1.0, raw: "1m 00s", baseline: 220 },
        { time: "08:00", value: 1.3, raw: "1m 18s", baseline: 260 },
        { time: "10:00", value: 1.2, raw: "1m 12s", baseline: 280 },
        { time: "12:00", value: 1.5, raw: "1m 30s", baseline: 270 },
        { time: "14:00", value: 1.2, raw: "1m 12s", baseline: 290 },
        { time: "16:00", value: 1.1, raw: "1m 06s", baseline: 260 },
        { time: "18:00", value: 1.4, raw: "1m 24s", baseline: 250 },
        { time: "20:00", value: 1.0, raw: "1m 00s", baseline: 240 },
        { time: "22:00", value: 1.2, raw: "1m 12s", baseline: 235 },
      ],
    },
    throughput: {
      title: "Governed Operations Runs / Hour",
      badge: "24,190 Total Runs Today",
      current: "1,240 runs/hr",
      comparison: "Peak: 1,890 runs/hr",
      color: "#10b981",
      points: [
        { time: "00:00", value: 340, raw: "340/hr", baseline: 20 },
        { time: "02:00", value: 210, raw: "210/hr", baseline: 15 },
        { time: "04:00", value: 180, raw: "180/hr", baseline: 10 },
        { time: "06:00", value: 420, raw: "420/hr", baseline: 40 },
        { time: "08:00", value: 980, raw: "980/hr", baseline: 90 },
        { time: "10:00", value: 1540, raw: "1,540/hr", baseline: 140 },
        { time: "12:00", value: 1890, raw: "1,890/hr", baseline: 180 },
        { time: "14:00", value: 1640, raw: "1,640/hr", baseline: 150 },
        { time: "16:00", value: 1420, raw: "1,420/hr", baseline: 130 },
        { time: "18:00", value: 1780, raw: "1,780/hr", baseline: 160 },
        { time: "20:00", value: 1240, raw: "1,240/hr", baseline: 110 },
        { time: "22:00", value: 890, raw: "890/hr", baseline: 70 },
      ],
    },
    exceptions: {
      title: "Automated Exception Resolution Rate",
      badge: "70.4% Auto-Resolved",
      current: "74.2%",
      comparison: "Zero human call center load",
      color: "#8b5cf6",
      points: [
        { time: "00:00", value: 71, raw: "71%", baseline: 0 },
        { time: "02:00", value: 68, raw: "68%", baseline: 0 },
        { time: "04:00", value: 75, raw: "75%", baseline: 0 },
        { time: "06:00", value: 72, raw: "72%", baseline: 0 },
        { time: "08:00", value: 69, raw: "69%", baseline: 0 },
        { time: "10:00", value: 74, raw: "74%", baseline: 0 },
        { time: "12:00", value: 78, raw: "78%", baseline: 0 },
        { time: "14:00", value: 76, raw: "76%", baseline: 0 },
        { time: "16:00", value: 72, raw: "72%", baseline: 0 },
        { time: "18:00", value: 79, raw: "79%", baseline: 0 },
        { time: "20:00", value: 74, raw: "74%", baseline: 0 },
        { time: "22:00", value: 75, raw: "75%", baseline: 0 },
      ],
    },
  };

  const activeData = datasets[metricView];
  const maxVal = Math.max(...activeData.points.map((p) => p.value));
  const minVal = Math.min(...activeData.points.map((p) => p.value));

  // Compute SVG coordinates for the area chart
  const width = 800;
  const height = 220;
  const paddingX = 40;
  const paddingY = 30;

  const getCoordinates = (index: number, val: number) => {
    const x = paddingX + (index / (activeData.points.length - 1)) * (width - 2 * paddingX);
    const range = maxVal - minVal || 1;
    const y = height - paddingY - ((val - minVal) / range) * (height - 2 * paddingY);
    return { x, y };
  };

  const pathCoords = activeData.points.map((p, idx) => getCoordinates(idx, p.value));
  const svgPathD = pathCoords.reduce(
    (acc, pt, idx) => (idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`),
    ""
  );

  const areaPathD = `${svgPathD} L ${pathCoords[pathCoords.length - 1].x} ${height - paddingY} L ${pathCoords[0].x} ${height - paddingY} Z`;

  return (
    <div className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-5 sm:p-7 text-left">
      {/* Visual Chart Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
              REAL-TIME OPERATIONS TELEMETRY
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl sm:text-3xl font-bold font-mono text-slate-900">
              {activeData.current}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              {activeData.badge}
            </span>
            <span className="text-xs text-slate-400 font-sans hidden md:inline">
              {activeData.comparison}
            </span>
          </div>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-100 text-xs font-semibold self-start sm:self-auto">
          <button
            onClick={() => setMetricView("latency")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              metricView === "latency" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Response Latency
          </button>
          <button
            onClick={() => setMetricView("throughput")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              metricView === "throughput" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Runs Throughput
          </button>
          <button
            onClick={() => setMetricView("exceptions")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              metricView === "exceptions" ? "bg-white text-slate-900 shadow-xs" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Exception Resolution
          </button>
        </div>
      </div>

      {/* SVG Interactive Area Chart */}
      <div className="relative pt-6 pb-2">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-48 sm:h-56 overflow-visible"
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={activeData.color} stopOpacity="0.22" />
              <stop offset="100%" stopColor={activeData.color} stopOpacity="0.00" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line
            x1={paddingX}
            y1={paddingY}
            x2={width - paddingX}
            y2={paddingY}
            stroke="#f1f5f9"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
          <line
            x1={paddingX}
            y1={height / 2}
            x2={width - paddingX}
            y2={height / 2}
            stroke="#f1f5f9"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
          <line
            x1={paddingX}
            y1={height - paddingY}
            x2={width - paddingX}
            y2={height - paddingY}
            stroke="#e2e8f0"
            strokeWidth="1"
          />

          {/* Area under curve */}
          <path d={areaPathD} fill="url(#areaGradient)" />

          {/* Line stroke */}
          <path
            d={svgPathD}
            fill="none"
            stroke={activeData.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points */}
          {pathCoords.map((pt, idx) => (
            <g
              key={idx}
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <circle
                cx={pt.x}
                cy={pt.y}
                r={hoveredIndex === idx ? "6" : "3.5"}
                fill="#ffffff"
                stroke={activeData.color}
                strokeWidth={hoveredIndex === idx ? "3" : "2"}
                className="transition-all duration-150"
              />
            </g>
          ))}
        </svg>

        {/* Hovered Tooltip Floating Card */}
        {hoveredIndex !== null && (
          <div
            className="absolute -top-3 p-2 rounded-lg bg-slate-900 text-white text-xs font-mono shadow-xl pointer-events-none transition-all transform -translate-x-1/2 z-20"
            style={{
              left: `${(pathCoords[hoveredIndex].x / width) * 100}%`,
            }}
          >
            <div className="text-[10px] text-slate-400">
              Time: {activeData.points[hoveredIndex].time}
            </div>
            <div className="font-bold text-emerald-400">
              {activeData.points[hoveredIndex].raw}
            </div>
          </div>
        )}

        {/* X-Axis Time Labels */}
        <div className="flex justify-between px-6 text-[10px] font-mono text-slate-400 mt-2">
          <span>00:00</span>
          <span>04:00</span>
          <span>08:00</span>
          <span>12:00</span>
          <span>16:00</span>
          <span>20:00</span>
          <span>23:59</span>
        </div>
      </div>

      {/* Bottom Visual Telemetry Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-5 mt-4 border-t border-slate-100 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-500 text-[11px]">First Contact</div>
            <div className="font-bold text-slate-900 font-mono">&lt; 90 Seconds</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-500 text-[11px]">Daily Runs</div>
            <div className="font-bold text-slate-900 font-mono">24,190 Active</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-500 text-[11px]">COD Recovery</div>
            <div className="font-bold text-slate-900 font-mono">32.4% Saved</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-slate-500 text-[11px]">Hallucinations</div>
            <div className="font-bold text-slate-900 font-mono">0.00% Zero</div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    label: "Noise Types Suppressed",
    value: "100",
    suffix: "+",
    desc: "From cutlery and crowds to wind and traffic — learned, not hard-coded.",
  },
  {
    label: "Hours of Training Data",
    value: "2,000",
    suffix: "+",
    desc: "Real-world audio across homes, streets, offices, and vehicles.",
  },
  {
    label: "End-to-End Latency",
    value: "16",
    suffix: "ms",
    desc: "Faster than the blink of an eye — imperceptible in conversation.",
  },
  {
    label: "Power Consumption",
    value: "5",
    suffix: "mW",
    desc: "Always-on intelligence that doesn't touch your battery life.",
  },
  {
    label: "On-Chip Memory",
    value: "500",
    suffix: "KB",
    desc: "The entire model runs on-device. Nothing leaves the earbud.",
  },
  {
    label: "Silicon Footprint",
    value: "4",
    suffix: "mm²",
    desc: "The whole adaptive audio stack, smaller than a grain of rice.",
  },
];

const WAVE_BARS = [
  30, 55, 40, 75, 35, 85, 50, 65, 30, 80, 45, 70, 38, 60, 32, 78, 48, 88, 42,
  62, 28, 72, 52, 66, 36, 82, 44, 58, 34, 76, 46, 68, 40, 84, 50, 60,
];

export default function BenchmarksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        if (!el) return;
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = -el.getBoundingClientRect().top;
        setProgress(Math.min(1, Math.max(0, scrolled / total)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const active = Math.min(STATS.length - 1, Math.floor(progress * STATS.length));

  const jumpTo = (i: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: el.offsetTop + ((i + 0.5) / STATS.length) * total,
      behavior: "smooth",
    });
  };

  return (
    <section ref={sectionRef} className="relative h-[420vh] bg-white">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden text-[#121212]">
        {/* Header */}
        <div className="mx-auto w-full max-w-6xl px-4 pt-24 lg:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Benchmark Analysis
          </p>
          <h2 className="mt-3 text-subhead font-semibold tracking-tight">
            Engineered to Industry-Leading Standards
          </h2>
        </div>

        {/* Stat stage */}
        <div className="relative mx-auto w-full max-w-6xl flex-1 px-4 lg:px-6">
          {STATS.map((stat, i) => {
            const state = i === active ? "active" : i < active ? "past" : "next";
            return (
              <div
                key={stat.label}
                className="absolute inset-x-4 top-1/2 transition-all duration-500 ease-out lg:inset-x-6"
                style={{
                  opacity: state === "active" ? 1 : 0,
                  transform: `translateY(calc(-50% + ${
                    state === "active" ? 0 : state === "past" ? -60 : 60
                  }px))`,
                  pointerEvents: state === "active" ? "auto" : "none",
                }}
              >
                <p className="flex items-baseline gap-4">
                  <span className="font-geometric text-sm text-[#D4AF37]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    {stat.label}
                  </span>
                </p>
                <p className="mt-2 font-geometric text-[clamp(5rem,17vw,15rem)] font-semibold leading-[0.95] tracking-tighter tabular-nums">
                  {stat.value}
                  <span className="ml-2 align-top text-[0.35em] font-semibold text-[#D4AF37]">
                    {stat.suffix}
                  </span>
                </p>
                <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-500">
                  {stat.desc}
                </p>
              </div>
            );
          })}

          {/* Progress rail */}
          <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-4 sm:flex lg:right-6">
            {STATS.map((stat, i) => (
              <button
                key={stat.label}
                onClick={() => jumpTo(i)}
                aria-label={stat.label}
                className="group flex cursor-pointer items-center gap-3"
              >
                <span
                  className={`font-geometric text-[10px] transition-colors duration-300 ${
                    i === active
                      ? "text-[#D4AF37]"
                      : "text-zinc-400 group-hover:text-zinc-600"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`h-px transition-all duration-300 ${
                    i === active
                      ? "w-10 bg-[#D4AF37]"
                      : "w-5 bg-zinc-300 group-hover:bg-zinc-500"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Live waveform floor */}
        <div className="mx-auto flex w-full max-w-6xl items-end justify-between gap-[3px] px-4 pb-10 lg:px-6">
          {WAVE_BARS.map((h, i) => (
            <span
              key={i}
              className="w-1 origin-bottom rounded-full bg-[#D4AF37]/40"
              style={{
                height: `${h * 0.5}px`,
                animation: "iphipiWave 1.8s ease-in-out infinite",
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>

        {/* Footnote */}
        <p className="mx-auto w-full max-w-6xl px-4 pb-6 text-xs text-zinc-400 lg:px-6">
          Optimized for indoor &amp; outdoor reverb — built for always-on edge AI.
        </p>
      </div>
    </section>
  );
}

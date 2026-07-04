"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Four core technologies — one infographic board each. The boards    */
/*  carry their own titles/copy, so the stage stays overlay-free.      */
/*  (headline/line kept in data in case we want captions back.)        */
/* ------------------------------------------------------------------ */

const TECHS = [
  {
    id: "single-mic",
    tag: "Single Mic Solution",
    headline: "Single-Mic Enhancement",
    line: "Suppresses everyday indoor noise so your voice stays clear during calls.",
    image: "/tech/single-mic.png",
  },
  {
    id: "dual-mic",
    tag: "Dual Mic Solution",
    headline: "Dual-Mic ENC. Go Beyond Indoors",
    line: "Handles indoor noise, outdoor distractions, and wind for clearer conversations.",
    image: "/tech/dual-mic.png",
  },
  {
    id: "kws",
    tag: "Keyword Spotting",
    headline: "Keyword Detection",
    line: "Always Listening. Only When Needed.",
    image: "/tech/kws.png",
  },
  {
    id: "far-field",
    tag: "Far-Field",
    headline: "Far-Field Voice",
    line: "Long-Range Voice Capture",
    image: "/tech/far-field.png",
  },
];

const DWELL_SECONDS = 8;

export default function TechnologiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  // Bumped on manual tab clicks so the timer bar restarts cleanly.
  const [cycle, setCycle] = useState(0);

  // Only run the tour while the section is on screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const select = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  return (
    <section ref={sectionRef} className="px-4 py-28 lg:px-6" id="technologies">
      <style>{`
        @keyframes iphipiTabFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          IPHIPI Technologies
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Adaptive Audio Intelligence
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-500">
          Four core technologies — engineered for every wearable category.
        </p>

        {/* Tab bar with auto-advance timer */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">
          {TECHS.map((tech, i) => {
            const isActive = i === active;
            return (
              <button
                key={tech.id}
                onClick={() => select(i)}
                className="group relative cursor-pointer pt-5 text-left"
              >
                {/* Timer track */}
                <span className="absolute left-0 top-0 block h-[3px] w-full overflow-hidden rounded-full bg-zinc-200">
                  {isActive && (
                    <span
                      key={`${active}-${cycle}`}
                      onAnimationEnd={() => setActive((active + 1) % TECHS.length)}
                      className="block h-full bg-[#D9A544]"
                      style={{
                        animation: `iphipiTabFill ${DWELL_SECONDS}s linear forwards`,
                        animationPlayState: visible ? "running" : "paused",
                      }}
                    />
                  )}
                </span>
                {/* Inactive headings fade lightly while another tech plays */}
                <span
                  className={`block transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-55 group-hover:opacity-90"
                  }`}
                >
                  <span className="font-mono text-xs text-[#A87B24]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`mt-1 block text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-zinc-950" : "text-zinc-500"
                    }`}
                  >
                    {tech.tag}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Stage — full infographic boards, crossfading per tab */}
        <div className="relative mt-8 aspect-[3/2] max-h-[780px] w-full overflow-hidden rounded-[32px] bg-zinc-950">
          {TECHS.map((tech, i) => (
            <Image
              key={tech.id}
              src={tech.image}
              alt={`${tech.tag} — ${tech.headline}`}
              fill
              sizes="(max-width: 1200px) 100vw, 1152px"
              priority={i === 0}
              // Eager-load the hidden boards too — lazy + opacity-0 would
              // leave a black stage on the first tab switch.
              loading="eager"
              className={`object-contain transition-opacity duration-700 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

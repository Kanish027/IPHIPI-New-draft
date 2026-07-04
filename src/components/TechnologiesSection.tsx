"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Four core technologies — one video + one catchy line each.         */
/*  Local low-bitrate placeholders; swap for real footage later.       */
/* ------------------------------------------------------------------ */

const TECHS = [
  {
    id: "single-mic",
    tag: "Single Mic Solution",
    headline: "One mic. Zero distractions.",
    line: "Take the call anywhere — the room fades away, your voice stays.",
    video: "/videos/tech-hero-single.mp4",
  },
  {
    id: "dual-mic",
    tag: "Dual Mic Solution",
    headline: "Step outside. Sound unstoppable.",
    line: "Wind, traffic, crowds — gone. They only ever hear you.",
    video: "/videos/tech-hero-dual.mp4",
  },
  {
    id: "kws",
    tag: "Keyword Spotting",
    headline: "Say the word. It's already listening.",
    line: "Your own wake word — 'Hey Mivi', 'Hey Boat' — running on-device.",
    video: "/videos/tech-hero-keyword.mp4",
  },
  {
    id: "far-field",
    tag: "Far-Field",
    headline: "Heard clearly, across the room.",
    line: "Kiosks, drive-throughs, meeting rooms — distance is no barrier.",
    video: "/videos/tech-hero-far.mp4",
  },
];

const DWELL_SECONDS = 8;

/* Stage video: plays only while it's the active layer and on screen. */
function StageVideo({ src, active }: { src: string; active: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && active) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

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

        {/* Stage */}
        <div className="relative mt-8 h-[68vh] max-h-[720px] min-h-[440px] overflow-hidden rounded-[32px] bg-zinc-950">
          {TECHS.map((tech, i) => (
            <StageVideo key={tech.id} src={tech.video} active={i === active} />
          ))}

          {/* Legibility gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

          {/* Copy — re-animates on every tab change */}
          <div
            key={active}
            className="absolute inset-x-0 bottom-0 animate-slide-up p-7 sm:p-10 md:p-12"
          >
            <h3 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              {TECHS[active].headline}
            </h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              {TECHS[active].line}
            </p>
          </div>

          {/* Waveform signature */}
          <div className="absolute bottom-10 right-10 hidden items-end gap-[3px] lg:flex">
            {[35, 60, 30, 75, 45, 85, 40, 65, 30, 80, 50, 70].map((h, i) => (
              <span
                key={i}
                className="w-1 origin-bottom rounded-full bg-[#D9A544]/70"
                style={{
                  height: `${h * 0.5}px`,
                  animation: "iphipiWave 1.8s ease-in-out infinite",
                  animationDelay: `${i * 0.08}s`,
                  animationPlayState: visible ? "running" : "paused",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

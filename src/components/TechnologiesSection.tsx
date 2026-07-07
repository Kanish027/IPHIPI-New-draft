"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Four core technologies — each is a real, full-height section in    */
/*  normal document flow (nothing hijacks scroll, nothing can be       */
/*  skipped). A sticky rail tracks progress and IntersectionObserver   */
/*  drives entrance animation + the active highlight as each panel     */
/*  crosses into view.                                                 */
/* ------------------------------------------------------------------ */
const TECHS = [
  {
    id: "single-mic",
    tag: "Single Mic Solution",
    headline: "Single-mic enhancement",
    line: "Suppresses everyday indoor noise so your voice stays clear on calls.",
    image: "/tech/single-mic.png",
    glow: "#D4AF37",
  },
  {
    id: "dual-mic",
    tag: "Dual Mic Solution",
    headline: "Dual-mic ENC, go beyond indoors",
    line: "Handles indoor noise, outdoor distractions, and wind for clearer conversations.",
    image: "/tech/dual-mic.png",
    glow: "#7FB3D5",
  },
  {
    id: "kws",
    tag: "Keyword Spotting",
    headline: "Keyword detection",
    line: "Always listening, only when needed.",
    image: "/tech/kws.png",
    glow: "#C97BB8",
  },
  {
    id: "far-field",
    tag: "Far-Field",
    headline: "Far-field voice",
    line: "Long-range voice capture, without lifting a hand.",
    image: "/tech/far-field.png",
    glow: "#6FBF8B",
  },
];

export default function TechnologiesSection() {
  const [active, setActive] = useState(0);
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const panels = panelRefs.current.filter(
      (el): el is HTMLDivElement => el !== null
    );
    if (panels.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        let bestIndex: number | null = null;
        let bestRatio = 0;

        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          const indexAttr = target.dataset.index;
          if (indexAttr === undefined) return;
          const i = Number(indexAttr);

          if (entry.isIntersecting) {
            setVisibleSet((prev) => {
              if (prev.has(i)) return prev;
              const next = new Set(prev);
              next.add(i);
              return next;
            });
            if (entry.intersectionRatio > bestRatio) {
              bestRatio = entry.intersectionRatio;
              bestIndex = i;
            }
          }
        });

        if (bestIndex !== null) setActive(bestIndex);
      },
      { threshold: [0.2, 0.4, 0.6, 0.8], rootMargin: "-10% 0px -10% 0px" }
    );

    panels.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const setPanelRef = (i: number) => (el: HTMLDivElement | null) => {
    panelRefs.current[i] = el;
  };

  const scrollToTech = (i: number) => {
    panelRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const activeTech = TECHS[active];

  return (
    <section
      className="relative px-4 py-28 lg:px-6"
      id="technologies"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.06), transparent 70%)",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
          IPHIPI Technologies
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl">
          Adaptive audio
          <br />
          intelligence
        </h2>
        <p className="mt-5 max-w-xl text-lg text-zinc-500">
          Four core technologies, engineered for every wearable category.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
          {/* Sticky rail nav */}
          <div className="hidden lg:block">
            <div className="sticky top-24 flex flex-col gap-1">
              {TECHS.map((tech, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={tech.id}
                    type="button"
                    onClick={() => scrollToTech(i)}
                    className="group relative flex items-start gap-3 rounded-2xl px-3 py-3 text-left transition-colors duration-300"
                    style={{
                      background: isActive ? "rgba(18,18,18,0.04)" : "transparent",
                    }}
                  >
                    <span
                      className="mt-0.5 h-full w-[2px] shrink-0 rounded-full transition-all duration-500"
                      style={{
                        background: isActive ? tech.glow : "rgba(0,0,0,0.1)",
                        height: isActive ? "38px" : "18px",
                      }}
                    />
                    <span>
                      <span
                        className="block text-[11px] font-medium tracking-wider transition-colors duration-300"
                        style={{ color: isActive ? tech.glow : "#a1a1aa" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`mt-1 block text-sm font-medium transition-colors duration-300 ${
                          isActive ? "text-zinc-900" : "text-zinc-400 group-hover:text-zinc-600"
                        }`}
                      >
                        {tech.tag}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile tab bar */}
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:hidden">
            {TECHS.map((tech, i) => {
              const isActive = i === active;
              return (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => scrollToTech(i)}
                  className="shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300"
                  style={{
                    borderColor: isActive ? tech.glow : "rgba(0,0,0,0.1)",
                    color: isActive ? tech.glow : "#71717a",
                    background: isActive ? `${tech.glow}14` : "transparent",
                  }}
                >
                  {tech.tag}
                </button>
              );
            })}
          </div>

          {/* Panels */}
          <div className="flex flex-col gap-24">
            {TECHS.map((tech, i) => {
              const isVisible = visibleSet.has(i);
              const isActive = i === active;
              return (
                <div
                  key={tech.id}
                  ref={setPanelRef(i)}
                  data-index={i}
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? "translateY(0) scale(1)"
                      : "translateY(28px) scale(0.98)",
                  }}
                >
                  <div
                    className="relative aspect-[3/2] w-full max-h-[720px] overflow-hidden rounded-[28px] bg-zinc-950 transition-shadow duration-700"
                    style={{
                      boxShadow: isActive
                        ? `0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -20px ${tech.glow}55`
                        : "0 0 0 1px rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* ambient glow behind the board */}
                    <div
                      className="pointer-events-none absolute -inset-24 opacity-40 blur-3xl transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(circle at 30% 20%, ${tech.glow}55, transparent 60%)`,
                        opacity: isActive ? 0.5 : 0.15,
                      }}
                    />
                    <Image
                      src={tech.image}
                      alt={`${tech.tag} — ${tech.headline}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 900px"
                      priority={i === 0}
                      loading={i === 0 ? "eager" : "lazy"}
                      className="relative object-contain"
                    />
                  </div>

                  {/* Caption below the board */}
                  <div className="mt-6 flex items-start gap-4">
                    <span
                      className="text-sm font-semibold tabular-nums"
                      style={{ color: tech.glow }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-900">
                        {tech.headline}
                      </h3>
                      <p className="mt-1 text-zinc-500">{tech.line}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
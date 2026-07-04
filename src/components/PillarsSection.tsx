// const PILLARS = [
//   {
//     title: "Work Intelligence",
//     body: "An always-on work companion. Manages conversations, notifications, and workflows — reducing cognitive load.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-5 w-5"
//         aria-hidden="true"
//       >
//         <rect x="3" y="7" width="18" height="13" rx="2" />
//         <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
//       </svg>
//     ),
//   },
//   {
//     title: "Living Intelligence",
//     body: "Transforms living spaces into intelligent environments. Anticipates needs, simplifies routines, automates homes.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-5 w-5"
//         aria-hidden="true"
//       >
//         <path d="M3 10.5 12 3l9 7.5" />
//         <path d="M5 9.5V21h14V9.5" />
//       </svg>
//     ),
//   },
//   {
//     title: "Personal Intelligence",
//     body: "Beyond health tracking. Understands physical, emotional, and environmental context for healthier decisions.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-5 w-5"
//         aria-hidden="true"
//       >
//         <path d="M12 21s-7.5-4.7-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 12c-2 4.3-9.5 9-9.5 9z" />
//       </svg>
//     ),
//   },
//   {
//     title: "Spatial Intelligence",
//     body: "Vision that sees and understands. Analyzes scenes in real time, giving AI the context edge in the visual era.",
//     icon: (
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         className="h-5 w-5"
//         aria-hidden="true"
//       >
//         <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
//         <circle cx="12" cy="12" r="3" />
//       </svg>
//     ),
//   },
// ];

// function PillarCard({
//   title,
//   body,
//   icon,
//   index,
// }: {
//   title: string;
//   body: string;
//   icon: React.ReactNode;
//   index: number;
// }) {
//   return (
//     <article className="group relative overflow-hidden rounded-3xl border border-zinc-100 bg-zinc-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
//       <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-white/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//       <div className="absolute right-[-2rem] top-[-2rem] h-24 w-24 rounded-full bg-white/70 blur-2xl" />
//       <div className="relative">
//         <div className="flex items-start justify-between gap-4">
//           <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-100 bg-white text-zinc-700 shadow-sm">
//             {icon}
//           </div>
//           <span className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-300">
//             0{index + 1}
//           </span>
//         </div>

//         <h3 className="mt-6 text-lg font-semibold tracking-tight text-zinc-950">
//           {title}
//         </h3>
//         <p className="mt-3 text-sm leading-7 text-zinc-500">{body}</p>
//       </div>
//     </article>
//   );
// }

// export default function PillarsSection() {
//   return (
//     <section className="relative overflow-hidden px-4 py-28 lg:px-6">
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-zinc-100 blur-3xl" />
//         <div className="absolute right-[-10rem] top-32 h-96 w-96 rounded-full bg-zinc-100 blur-3xl" />
//         <div className="absolute bottom-[-10rem] left-1/3 h-80 w-80 rounded-full bg-zinc-100 blur-3xl" />
//       </div>

//       <div className="relative mx-auto max-w-6xl">
//         <div className="max-w-3xl">
//           <p className="inline-flex items-center gap-3 rounded-full border border-zinc-100 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 shadow-sm backdrop-blur-sm">
//             <span className="h-2 w-2 rounded-full bg-zinc-400" />
//             Agentic AI Experience
//           </p>

//           <h2 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
//             Intelligence Everywhere You Go
//           </h2>

//           <p className="mt-5 max-w-2xl text-zinc-500 sm:text-lg sm:leading-8">
//             Reduces cognitive load. Lets you focus on what matters. Proactive support
//             across work, home, health, and the world around you.
//           </p>
//         </div>

//         <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
//           {PILLARS.map((pillar, index) => (
//             <PillarCard
//               key={pillar.title}
//               title={pillar.title}
//               body={pillar.body}
//               icon={pillar.icon}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useCallback, useEffect, useState } from "react";

const PILLARS = [
  {
    title: "Work Intelligence",
    body: "An always-on work companion. Manages conversations, notifications, and workflows — reducing cognitive load.",
    image: "https://picsum.photos/seed/work-intelligence/800/1000",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    title: "Living Intelligence",
    body: "Transforms living spaces into intelligent environments. Anticipates needs, simplifies routines, automates homes.",
    image: "https://picsum.photos/seed/living-intelligence/800/1000",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
      </svg>
    ),
  },
  {
    title: "Personal Intelligence",
    body: "Beyond health tracking. Understands physical, emotional, and environmental context for healthier decisions.",
    image: "https://picsum.photos/seed/personal-intelligence/800/1000",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M12 21s-7.5-4.7-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 12c-2 4.3-9.5 9-9.5 9z" />
      </svg>
    ),
  },
  {
    title: "Spatial Intelligence",
    body: "Vision that sees and understands. Analyzes scenes in real time, giving AI the context edge in the visual era.",
    image: "https://picsum.photos/seed/spatial-intelligence/800/1000",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const CARD_WIDTH = 300;
const CARD_GAP = 28;
const STEP = CARD_WIDTH + CARD_GAP;

function PillarCard({
  title,
  body,
  icon,
  image,
  index,
  distance,
  onClick,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
  image: string;
  index: number;
  distance: number;
  onClick: () => void;
}) {
  const isActive = distance === 0;
  const absDistance = Math.abs(distance);

  const scale = isActive ? 1 : absDistance === 1 ? 0.84 : 0.72;
  const opacity = isActive ? 1 : absDistance === 1 ? 0.55 : 0.25;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Show ${title}`}
      aria-current={isActive}
      style={{
        left: "50%",
        width: CARD_WIDTH,
        transform: `translate(calc(-50% + ${distance * STEP}px), -50%) scale(${scale})`,
        opacity,
        zIndex: 20 - absDistance,
      }}
      className="group absolute top-1/2 h-[420px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 text-left shadow-2xl transition-[transform,opacity] duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out ${
          isActive ? "group-hover:scale-105" : ""
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

      <div className="relative flex h-full flex-col justify-end p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-sm">
            {icon}
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
            0{index + 1}
          </span>
        </div>

        <h3
          className={`mt-6 text-lg font-semibold tracking-tight transition-colors duration-300 ${
            isActive ? "text-white group-hover:text-amber-300" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-3 text-sm leading-7 transition-colors duration-300 ${
            isActive ? "text-zinc-300 group-hover:text-white" : "text-zinc-400"
          }`}
        >
          {body}
        </p>
      </div>
    </button>
  );
}

export default function PillarsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = PILLARS.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % count) + count) % count);
    },
    [count]
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext]);

  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-28 lg:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-[-10rem] top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-zinc-400" />
              Agentic AI Experience
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Intelligence Everywhere You Go
            </h2>

            <p className="mt-5 max-w-2xl text-zinc-400 sm:text-lg sm:leading-8">
              Reduces cognitive load. Lets you focus on what matters. Proactive support
              across work, home, health, and the world around you.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous pillar"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next pillar"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative mt-16 h-[440px] w-full overflow-hidden">
          {PILLARS.map((pillar, index) => {
            let distance = index - activeIndex;
            if (distance > count / 2) distance -= count;
            if (distance < -count / 2) distance += count;

            return (
              <PillarCard
                key={pillar.title}
                title={pillar.title}
                body={pillar.body}
                icon={pillar.icon}
                image={pillar.image}
                index={index}
                distance={distance}
                onClick={() => goTo(index)}
              />
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous pillar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            {PILLARS.map((pillar, index) => (
              <button
                key={pillar.title}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to ${pillar.title}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-6 bg-amber-300" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next pillar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-6 hidden items-center justify-center gap-2 sm:flex">
          {PILLARS.map((pillar, index) => (
            <button
              key={pillar.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${pillar.title}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-amber-300" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
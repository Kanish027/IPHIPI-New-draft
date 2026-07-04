"use client";

import ScrollHero, { type HeroVariant } from "@/components/ScrollHero";

const AREA_LINKS = [
  { label: "Productive", href: "#productive-intelligence" },
  { label: "Living", href: "#living-intelligence" },
  { label: "Personal", href: "#personal-intelligence" },
  { label: "Spatial", href: "#spatial-intelligence" },
];

function AreaPills(variant: HeroVariant) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {AREA_LINKS.map((area) => (
        <a
          key={area.label}
          href={area.href}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            variant === "dark"
              ? "border-zinc-300 text-zinc-900 hover:bg-zinc-950 hover:border-zinc-950 hover:text-white"
              : "border-white/50 text-white"
          }`}
        >
          {area.label} Intelligence
        </a>
      ))}
    </div>
  );
}

export default function ResearchHero() {
  return (
    <ScrollHero
      taglineTop="R&D at IPHIPI"
      taglineSub="Four research areas power the agentic AI platform"
      title="The technology behind the experience"
      titleClassName="max-w-[16ch] text-[clamp(2.25rem,5.5vw,6.25rem)] leading-[1.05]"
      videoSrc="/videos/rd-hero.mp4"
      poster="/our-story-poster.jpg"
      extra={AreaPills}
    />
  );
}

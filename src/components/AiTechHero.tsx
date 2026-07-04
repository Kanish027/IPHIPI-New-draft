"use client";

import ScrollHero from "@/components/ScrollHero";

export default function AiTechHero() {
  return (
    <ScrollHero
      taglineTop="AI Technologies"
      taglineSub="Engineered for every wearable category"
      title="Audio Intelligence Across Every Form Factor"
      titleClassName="max-w-[18ch] text-[clamp(2.25rem,5.5vw,6.25rem)] leading-[1.05]"
      videoSrc="/videos/ai-tech-hero.mp4"
      poster="/our-story-poster.jpg"
    />
  );
}

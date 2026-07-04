"use client";

import ScrollHero from "@/components/ScrollHero";

export default function EventsHero() {
  return (
    <ScrollHero
      taglineTop="Events"
      taglineSub="Experience agentic audio intelligence first-hand"
      title="Meet us where it matters"
      titleClassName="max-w-[14ch] text-[clamp(2.5rem,6vw,7rem)] leading-[1.03]"
      videoSrc="/videos/events-hero.mp4"
      poster="/our-story-poster.jpg"
    />
  );
}

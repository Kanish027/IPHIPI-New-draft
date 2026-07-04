"use client";

import { useEffect, useRef, useState } from "react";

/* Shared scroll-pinned hero (homepage + subpages). The hero pins for the
   section height; while pinned, the video grows from an inset band at the
   bottom of the screen to full-bleed, and a white copy of the headline —
   clipped to the video's rectangle — replaces the black one wherever the
   video passes behind it. */

const SIDE_MARGIN = 36; // px inset of the video at rest
const TOP_START = 62; // vh — where the video's top edge starts
const RADIUS = 16; // px corner radius at rest

export type HeroVariant = "dark" | "light";

type ScrollHeroProps = {
  taglineTop: string;
  taglineSub: string;
  title: string;
  /** Controls headline size/wrapping, e.g. "max-w-[14ch] text-[clamp(...)]" */
  titleClassName?: string;
  videoSrc: string;
  poster?: string;
  /** Extra content under the headline (e.g. anchor pills), styled per copy. */
  extra?: (variant: HeroVariant) => React.ReactNode;
};

function HeroText({
  variant,
  taglineTop,
  taglineSub,
  title,
  titleClassName,
  extra,
}: ScrollHeroProps & { variant: HeroVariant }) {
  return (
    <div
      className={`absolute inset-x-0 top-[18vh] flex flex-col items-center gap-10 px-4 text-center ${
        variant === "dark" ? "text-zinc-950" : "text-white"
      }`}
    >
      <div className="text-base font-medium leading-relaxed">
        <p>{taglineTop}</p>
        <p className="opacity-60">{taglineSub}</p>
      </div>
      <h1 className={`font-semibold tracking-tight ${titleClassName}`}>{title}</h1>
      {extra?.(variant)}
    </div>
  );
}

export default function ScrollHero(props: ScrollHeroProps) {
  const {
    videoSrc,
    poster,
    titleClassName = "max-w-[14ch] text-[clamp(2.5rem,6.5vw,7.5rem)] leading-[1.02]",
  } = props;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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

  // Pause the muted loop when the hero scrolls out of view or the tab hides.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    const onVisibility = () => {
      if (document.hidden) v.pause();
      else v.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // The video finishes expanding at 55% of the pinned scroll, then holds
  // fullscreen for the rest — like the reference site.
  const expand = Math.min(1, progress / 0.55);
  const remaining = 1 - expand;
  const topVh = TOP_START * remaining;
  const side = SIDE_MARGIN * remaining;
  const radius = RADIUS * remaining;

  return (
    <section ref={sectionRef} className="relative h-[350vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <HeroText {...props} titleClassName={titleClassName} variant="dark" />

        {/* Video, expanding from an inset band to full-bleed */}
        <div
          className="absolute bottom-0 overflow-hidden bg-zinc-900"
          style={{
            top: `${topVh}vh`,
            left: side,
            right: side,
            borderRadius: radius,
          }}
        >
          <video
            ref={videoRef}
            src={videoSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>

        {/* White text, visible only where the video is */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            clipPath: `inset(${topVh}vh ${side}px 0 ${side}px round ${radius}px)`,
          }}
        >
          <HeroText {...props} titleClassName={titleClassName} variant="light" />
        </div>
      </div>
    </section>
  );
}

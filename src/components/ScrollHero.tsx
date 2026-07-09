"use client";

import { useEffect, useRef, useState } from "react";

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
  /** Provide a video for a playing banner (homepage). Omit for a static one. */
  videoSrc?: string;
  /** Static banner image — used when videoSrc is omitted (subpages). */
  image?: string;
  /** Premium gradient class for the banner when there's no video or image. */
  gradient?: string;
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
        variant === "dark" ? "text-[#27272A]" : "text-white"
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
    image,
    gradient = "bg-[radial-gradient(circle_at_25%_15%,rgba(6,182,212,0.22),transparent_55%),linear-gradient(160deg,#0d0d14_0%,#0a0a0f_60%)]",
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

        {/* Banner, expanding from an inset band to full-bleed. Video on the
            homepage; a static image on subpages (no videoSrc). */}
        <div
          className="absolute bottom-0 overflow-hidden bg-[#27272A]"
          style={{
            top: `${topVh}vh`,
            left: side,
            right: side,
            borderRadius: radius,
          }}
        >
          {videoSrc ? (
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
          ) : image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className={`h-full w-full ${gradient}`} />
          )}
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

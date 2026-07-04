// import Image from "next/image";

// const TECHNOLOGIES = [
//   {
//     title: "Single Mic Enhancement",
//     image: "/samples/tech-single.jpg",
//     body: "Perfect for indoor calls. Reduces common household noise like TV, kitchen appliances, cutlery, and conversations — so your voice stays the focus. Take professional calls confidently without searching for a quiet room.",
//   },
//   {
//     title: "Dual Mic Enhancement",
//     image: "/samples/tech-dual.jpg",
//     body: "Best suited for indoor, outdoor, and multi-speaker environments. Blocks wind noise — even during high-speed travel — and suppresses traffic, crowds, and surrounding conversations, so the person on the other end hears you clearly.",
//   },
//   {
//     title: "Far-Field Enhancement",
//     image: "/samples/tech-farfield.jpg",
//     body: "Designed for long-range voice capture. Captures clear speech from a distance while suppressing ambient noise and reverberation — ideal for drive-through systems, smart kiosks, meeting rooms, and hands-free voice interfaces.",
//   },
//   {
//     title: "Keyword Detection",
//     image: "/samples/tech-keyword.jpg",
//     body: "Custom wake-word and voice command recognition. Brands can integrate their own voice triggers — 'Hey Mivi', 'Hey Boat', 'Hey Jio' — creating seamless, branded voice experiences on-device.",
//   },
// ];

// export default function TechnologiesSection() {
//   return (
//     <section className="px-4 py-28 lg:px-6" id="technologies">
//       <div className="mx-auto max-w-6xl">
//         <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
//           IPHIPI Technologies
//         </p>
//         <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
//           Adaptive Audio Intelligence
//         </h2>
//         <p className="mt-4 max-w-2xl text-zinc-500">
//           Proprietary environmental noise suppression and speech enhancement —
//           engineered for every wearable category.
//         </p>

//         <div className="mt-14 grid gap-6 md:grid-cols-2">
//           {TECHNOLOGIES.map((tech) => (
//             <div
//               key={tech.title}
//               className="overflow-hidden rounded-xl border border-zinc-200 bg-white"
//             >
//               {/* Media slot — sample image until the product videos are ready */}
//               <div className="aspect-[2.4/1] overflow-hidden">
//                 <Image
//                   src={tech.image}
//                   alt={tech.title}
//                   width={1200}
//                   height={500}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-lg font-medium">{tech.title}</h3>
//                 <p className="mt-2 text-sm leading-relaxed text-zinc-500">{tech.body}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Data — short local low-bitrate placeholder clips (~100-400KB each) */
/*  so the homepage stays fast; swap for real product footage later.   */
/* ------------------------------------------------------------------ */

const STORIES = [
  {
    id: "single-mic",
    heroVideo: "/videos/tech-hero-single.mp4",
    heroHeading: "Works in every room it's never heard",
    cardTitle: "Single Mic Enhancement",
    cardBody:
      "Perfect for indoor calls. Reduces common household noise like TV, kitchen appliances, cutlery, and conversations — so your voice stays the focus. Take professional calls confidently without searching for a quiet room.",
    cards: [
      {
        video: "/videos/tech-card-1.mp4",
        badge: { label: "Adaptive", speed: "1×" },
        caption: "Suppressing kitchen noise",
      },
      {
        video: "/videos/tech-card-2.mp4",
        badge: { label: "Adaptive", speed: "1×" },
        caption: "Isolating your voice on a call",
      },
    ],
  },
  {
    id: "dual-mic",
    heroVideo: "/videos/tech-hero-dual.mp4",
    heroHeading: "Built for the world outside",
    cardTitle: "Dual Mic Enhancement",
    cardBody:
      "Best suited for indoor, outdoor, and multi-speaker environments. Blocks wind noise — even during high-speed travel — and suppresses traffic, crowds, and surrounding conversations, so the person on the other end hears you clearly.",
    cards: [
      {
        video: "/videos/tech-card-3.mp4",
        badge: { label: "Adaptive", speed: "1×" },
        caption: "Uncut audio in high wind",
      },
    ],
  },
  {
    id: "far-field",
    heroVideo: "/videos/tech-hero-far.mp4",
    heroHeading: "Hears you from across the room",
    cardTitle: "Far-Field Enhancement",
    cardBody:
      "Designed for long-range voice capture. Captures clear speech from a distance while suppressing ambient noise and reverberation — ideal for drive-through systems, smart kiosks, meeting rooms, and hands-free voice interfaces.",
    cards: [
      {
        video: "/videos/tech-card-4.mp4",
        badge: { label: "Far-Field", speed: "1×" },
        caption: "Capturing speech at 5 metres",
      },
    ],
  },
  {
    id: "keyword",
    heroVideo: "/videos/tech-hero-keyword.mp4",
    heroHeading: "Say the word, it listens",
    cardTitle: "Keyword Detection",
    cardBody:
      "Custom wake-word and voice command recognition. Brands can integrate their own voice triggers — 'Hey Mivi', 'Hey Boat', 'Hey Jio' — creating seamless, branded voice experiences on-device.",
    cards: [
      {
        video: "/videos/tech-card-5.mp4",
        badge: { label: "On-device", speed: "1×" },
        caption: "Custom wake-word triggering",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Lazy playback: a video only loads/plays while it's on screen, and  */
/*  a manual pause always wins. Keeps many videos on one page cheap.   */
/* ------------------------------------------------------------------ */

function useLazyVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const userPausedRef = useRef(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPausedRef.current) {
          el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          el.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (playing) {
      userPausedRef.current = true;
      el.pause();
      setPlaying(false);
    } else {
      userPausedRef.current = false;
      el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  const onError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoEl = e.target as HTMLVideoElement;
    const err = videoEl.error;
    const errorMessages: Record<number, string> = {
      1: "MEDIA_ERR_ABORTED — fetch aborted by user",
      2: "MEDIA_ERR_NETWORK — network error while loading",
      3: "MEDIA_ERR_DECODE — error decoding the file",
      4: "MEDIA_ERR_SRC_NOT_SUPPORTED — src not supported / not found",
    };
    console.error(
      "Video failed to load:",
      videoEl.src,
      err ? errorMessages[err.code] ?? `Unknown error code ${err.code}` : "no MediaError object"
    );
    setFailed(true);
  };

  return { videoRef, playing, failed, toggle, onError };
}

/* ------------------------------------------------------------------ */
/*  Small play/pause control shared by hero + cards                    */
/* ------------------------------------------------------------------ */

function PlayPauseButton({
  playing,
  onClick,
}: {
  playing: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={playing ? "Pause video" : "Play video"}
      className="absolute bottom-4 left-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
    >
      {playing ? (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <rect x="1" y="0" width="3.2" height="12" rx="0.8" />
          <rect x="7.2" y="0" width="3.2" height="12" rx="0.8" />
        </svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M1 0.6C1 0.06 1.6-.24 2.05.06l9 5.4a.6.6 0 0 1 0 1.03l-9 5.4C1.6 12.24 1 11.94 1 11.4V0.6Z" />
        </svg>
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Full-bleed hero video with big overlaid heading                    */
/* ------------------------------------------------------------------ */

function VideoHero({ video, heading }: { video: string; heading: string }) {
  const { videoRef, playing, failed, toggle, onError } = useLazyVideo();
  return (
    <div className="relative h-[90vh] max-h-[920px] min-h-[480px] w-full overflow-hidden rounded-[28px] bg-zinc-200">
      {!failed && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          onError={onError}
          className="h-full w-full object-cover"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-black/10" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
        <h3 className="max-w-3xl text-center text-3xl font-medium leading-tight text-white sm:text-5xl">
          {heading}
        </h3>
      </div>
      {!failed && <PlayPauseButton playing={playing} onClick={toggle} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cream text card                                                    */
/* ------------------------------------------------------------------ */

function TextCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col justify-center rounded-[28px] border border-zinc-200/70 bg-[#faf6ee] p-8 md:p-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
        {title}
      </p>
      <p className="mt-4 text-lg leading-relaxed text-zinc-800 md:text-xl">
        {body}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dark "Autonomous"-style video card                                 */
/* ------------------------------------------------------------------ */

function VideoCard({
  video,
  badge,
  caption,
}: {
  video: string;
  badge: { label: string; speed: string };
  caption: string;
}) {
  const { videoRef, playing, failed, toggle, onError } = useLazyVideo();
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-black md:aspect-auto">
      {!failed && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="metadata"
          onError={onError}
          className="h-full w-full object-cover"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute left-3 top-3 flex gap-2">
        <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {badge.label}
        </span>
        <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {badge.speed}
        </span>
      </div>

      {!failed && <PlayPauseButton playing={playing} onClick={toggle} />}

      <div className="absolute bottom-4 left-14 right-4 truncate text-sm font-medium text-white">
        {caption}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                             */
/* ------------------------------------------------------------------ */

export default function TechnologiesSection() {
  return (
    <section className="px-4 py-28 lg:px-6" id="technologies">
      {/* Readable header column */}
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          IPHIPI Technologies
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Adaptive Audio Intelligence
        </h2>
        <p className="mt-4 max-w-2xl text-zinc-500">
          Proprietary environmental noise suppression and speech enhancement —
          engineered for every wearable category.
        </p>
      </div>

      {/* Full-bleed story rows — nearly full page width, matching the reference */}
      <div className="mx-auto mt-16 max-w-[1800px] space-y-6 md:space-y-8">
        {STORIES.map((story) => (
          <div key={story.id}>
            <VideoHero video={story.heroVideo} heading={story.heroHeading} />

            <div
              className={`mt-6 grid gap-4 md:mt-8 md:gap-6 ${
                story.cards.length === 2
                  ? "md:grid-cols-[1fr_1fr_1fr]"
                  : "md:grid-cols-2"
              }`}
            >
              <TextCard title={story.cardTitle} body={story.cardBody} />
              {story.cards.map((card, i) => (
                <VideoCard
                  key={i}
                  video={card.video}
                  badge={card.badge}
                  caption={card.caption}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

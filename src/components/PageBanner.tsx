import type { ReactNode } from "react";

/* A simple, normal page banner — light premium gradient, centered text, no
   scroll/pin effects. Used on subpages (the homepage keeps its video hero). */

export default function PageBanner({
  eyebrow,
  title,
  tagline,
  titleClassName = "text-[clamp(2.5rem,5vw,4.5rem)]",
  gradient = "bg-[radial-gradient(circle_at_25%_15%,rgba(6,182,212,0.14),transparent_55%),linear-gradient(160deg,#faf6ee_0%,#ffffff_60%)]",
  children,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  titleClassName?: string;
  gradient?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative flex min-h-[100vh] items-center overflow-hidden px-4 pb-20 pt-32 lg:px-6 ${gradient}`}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        {/* Eyebrow pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-600/30 bg-cyan-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
          {eyebrow}
        </span>

        <h1
          className={`mt-7 font-semibold leading-[1.04] tracking-tight text-zinc-950 ${titleClassName}`}
        >
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-500">
          {tagline}
        </p>

        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}

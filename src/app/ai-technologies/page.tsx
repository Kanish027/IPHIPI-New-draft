import type { Metadata } from "next";
import Image from "next/image";
import AiTechHero from "@/components/AiTechHero";

export const metadata: Metadata = {
  title: "AI Technologies — IPHIPI",
  description:
    "Proprietary environmental noise suppression and speech enhancement — engineered for every wearable category.",
};

const HIGHLIGHTS = [
  { value: "16 ms", label: "Low-latency", sub: "End-to-end processing" },
  { value: "5 mW", label: "Consumption", sub: "Always-on edge AI" },
  { value: "500 KB", label: "On-chip", sub: "Memory footprint" },
  { value: "Smart trigger", label: "Wake words", sub: "Branded voice triggers" },
];

const STAGES = [
  {
    title: "Audio Capture",
    desc: "High-performance mic input",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D9A544" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v4" />
      </svg>
    ),
  },
  {
    title: "Pre-Processing",
    desc: "Noise profiling, echo management, VAD",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D9A544" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
        <path d="M4 8h10M18 8h2M4 16h2M10 16h10" />
        <circle cx="16" cy="8" r="2" />
        <circle cx="8" cy="16" r="2" />
      </svg>
    ),
  },
  {
    title: "AI Noise Suppression",
    desc: "Proprietary AI models remove background noise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D9A544" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
      </svg>
    ),
  },
  {
    title: "Speech Enhancement",
    desc: "Enhances clarity, preserves natural voice",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D9A544" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
        <path d="M3 12h2l2-5 3 10 3-14 3 12 2-6 1 3h2" />
      </svg>
    ),
  },
  {
    title: "Dynamic Optimization",
    desc: "Automatic gain control, equalization, adaptation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D9A544" strokeWidth="1.8" strokeLinecap="round" className="h-4 w-4" aria-hidden="true">
        <path d="M4 17a8 8 0 1 1 16 0" />
        <path d="M12 17l4-5" />
        <circle cx="12" cy="17" r="1.2" fill="#D9A544" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Output Generation",
    desc: "Crystal-clear audio output",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#D9A544" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
        <path d="M4 9v6h4l5 4V5L8 9H4Z" />
        <path d="M16.5 9a4.5 4.5 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11" />
      </svg>
    ),
  },
];

const SEPARATION_INPUTS = ["Speaker voice", "Background noise", "Surrounding voices"];

const MIC_TECHNOLOGIES = [
  {
    title: "Single Mic Enhancement",
    spec: "Suppresses up to 70 dB SPL",
    body: "Engineered for interiors — household noise, appliances, and nearby conversations fade away so your voice stays the focus.",
    wave: [35, 55, 30, 60, 40, 65, 35, 50],
    meter: { label: "Noise suppression", value: "70 dB", percent: 70 },
    chips: ["Home", "Office", "Calls"],
  },
  {
    title: "Dual Mic Enhancement",
    spec: "Suppresses up to 85 dB SPL",
    body: "Built for multi-speaker environments. Isolates the user's voice and handles wind noise — even during high-speed travel.",
    wave: [45, 75, 35, 90, 50, 80, 40, 70, 55, 85, 30, 65],
    meter: { label: "Noise suppression", value: "85 dB", percent: 85 },
    chips: ["Streets", "Travel", "Crowds"],
  },
  {
    title: "Far-Field Enhancement",
    spec: "Long-range voice capture",
    body: "Clear speech from a distance for drive-through and outdoor scenarios — the HME use case — suppressing ambient noise and reverberation.",
    wave: [25, 40, 30, 55, 35, 60, 30, 50, 25, 45, 30, 55, 35, 60, 25, 50],
    meter: { label: "Capture range", value: "Distant voice", percent: 100 },
    chips: ["Drive-through", "Kiosks", "Meeting rooms"],
  },
];

/* Union of the deck (slide 8) and the Gamma doc lists — trim as needed */
const FORM_FACTORS = [
  {
    name: "TWS Earbuds",
    desc: "In-ear, dual-mic ready",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <circle cx="9" cy="8" r="4" />
        <path d="M9 12v6a2 2 0 0 0 4 0" />
        <path d="M17 5a4 4 0 0 1 0 6M19.5 3a7 7 0 0 1 0 10" />
      </svg>
    ),
  },
  {
    name: "OWS / Open Ear",
    desc: "Open-ear comfort",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M8 20c-3-2-5-5-5-8a7 7 0 0 1 14 0" />
        <path d="M17 12v4a4 4 0 0 1-4 4" />
        <circle cx="17" cy="9" r="1.5" />
      </svg>
    ),
  },
  {
    name: "Hearing Devices",
    desc: "Assistive enhancement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M8 14c-2-1-3-3-3-5a5 5 0 0 1 10 0c0 2 1.5 2.5 1.5 4.5A3.5 3.5 0 0 1 13 17c-1 0-1.5-.5-1.5-1.5" />
        <path d="M6 20a3 3 0 0 0 5 1" />
      </svg>
    ),
  },
  {
    name: "Smart Glasses",
    desc: "Multimodal + spatial",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <circle cx="7" cy="14" r="3.5" />
        <circle cx="17" cy="14" r="3.5" />
        <path d="M10.5 14a2 2 0 0 1 3 0M3.5 13 2 8M20.5 13 22 8" />
      </svg>
    ),
  },
  {
    name: "Neckbands",
    desc: "All-day battery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M5 4c0 6 2 10 7 10s7-4 7-10" />
        <circle cx="5" cy="18" r="1.8" />
        <circle cx="19" cy="18" r="1.8" />
        <path d="M5 14v2.2M19 14v2.2" />
      </svg>
    ),
  },
  {
    name: "Smart Ring",
    desc: "Ultra-low power",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="14" r="7" />
        <circle cx="12" cy="14" r="3.5" />
        <path d="m10 4 2-2 2 2" />
      </svg>
    ),
  },
  {
    name: "Smart Watch",
    desc: "On-wrist voice",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="3" />
        <path d="M9 7V3h6v4M9 17v4h6v-4M12 10v2.5l1.5 1" />
      </svg>
    ),
  },
  {
    name: "Pendant",
    desc: "Ambient wearable",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M4 3c2 4 5 6 8 6s6-2 8-6" />
        <path d="M12 9v3" />
        <circle cx="12" cy="16" r="4" />
      </svg>
    ),
  },
];

function Waveform({
  bars,
  className = "",
  barClassName = "bg-[#D9A544]",
}: {
  bars: number[];
  className?: string;
  barClassName?: string;
}) {
  return (
    <div className={`flex items-end gap-[3px] ${className}`}>
      {bars.map((h, i) => (
        <span
          key={i}
          className={`w-1 origin-bottom rounded-full ${barClassName}`}
          style={{
            height: `${h}%`,
            animation: "iphipiWave 1.8s ease-in-out infinite",
            animationDelay: `${i * 0.06}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function AiTechnologiesPage() {
  return (
    <main className="flex-1 bg-white pb-28 text-zinc-950">
      <style>{`
        @keyframes iphipiWave {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1); }
        }
      `}</style>

      <AiTechHero />

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Lead-in */}
        <div className="mt-28">
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-500">
            In a world saturated with persistent disruptions, achieving precise
            and efficient communication poses a substantial obstacle. IPHIPI&apos;s
            adaptive audio intelligence heralds a transformative era of voice
            interaction — even within the noisiest of settings.
          </p>
          <Waveform
            bars={[30, 55, 40, 70, 35, 60, 45, 80, 30, 65, 40, 55, 35, 70, 45, 60, 30, 50]}
            className="mt-10 h-10"
          />
        </div>

        {/* Redefine the auditory experience */}
        <section className="mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Redefine the auditory experience
          </p>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Revolutionize every conversation
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">
            In noisy environments like bustling cafés, busy offices, or crowded
            streets, effective communication can be challenging. Conventional
            devices struggle to isolate the intended conversation from the
            surrounding noise. IPHIPI integrates microphone beamforming and
            low-latency AI-based denoising algorithms to deliver exceptional
            sound quality and clarity for every conversation.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.label}
                className="rounded-[20px] border border-zinc-200/70 bg-[#faf6ee] p-6 text-center"
              >
                <p className="text-3xl font-semibold tracking-tight text-zinc-900">
                  {item.value}
                </p>
                <p className="mt-2 font-medium text-zinc-800">{item.label}</p>
                <p className="text-sm text-zinc-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* NDP 115 — audio processing flow (full-bleed, like the Partners band) */}
      <section className="mt-28 bg-[#0D0D0F] px-4 py-28 text-white lg:px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D9A544]">
            The NDP 115 — AI Audio Processor
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Audio Processing Flow
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Our proprietary AI chip seamlessly processes audio from raw input
            to crystal-clear output.
          </p>

          {/* Architecture diagram: input → six stages → output */}
          <div className="mt-12 flex flex-col gap-2 xl:flex-row xl:items-stretch">
            {/* Raw input endpoint */}
            <div className="flex flex-col items-center justify-center gap-2.5 rounded-[14px] border border-white/10 bg-white/[0.03] px-4 py-5 xl:w-28 xl:shrink-0">
              <Waveform
                bars={[55, 25, 70, 40, 85, 30, 60]}
                className="h-8"
                barClassName="bg-zinc-500"
              />
              <p className="text-center text-[10px] font-semibold uppercase leading-tight tracking-[0.15em] text-zinc-400">
                Raw audio input
              </p>
            </div>

            <div className="flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 rotate-90 text-zinc-600 xl:rotate-0" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </div>

            {STAGES.map((stage, i) => (
              <div key={stage.title} className="flex flex-1 flex-col gap-2 xl:flex-row xl:items-stretch">
                <div className="flex-1 rounded-[14px] border border-white/15 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-2">
                    {stage.icon}
                    <span className="font-mono text-[10px] text-[#D9A544]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium leading-tight">{stage.title}</p>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-zinc-400">
                    {stage.desc}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0 rotate-90 text-zinc-600 xl:rotate-0" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>
              </div>
            ))}

            {/* Enhanced output endpoint */}
            <div className="flex flex-col items-center justify-center gap-2.5 rounded-[14px] border border-[#D9A544]/40 bg-[#D9A544]/10 px-4 py-5 xl:w-28 xl:shrink-0">
              <Waveform bars={[45, 60, 50, 65, 52, 62, 48]} className="h-8" />
              <p className="text-center text-[10px] font-semibold uppercase leading-tight tracking-[0.15em] text-[#D9A544]">
                Enhanced audio output
              </p>
            </div>
          </div>

          {/* Dashed bus down to the acceleration block (desktop) — spans the
              six processing stages, not the input/output endpoints */}
          <div className="hidden xl:block">
            <div className="relative mt-3 h-7" style={{ marginInline: "10.5rem" }}>
              <div className="absolute inset-x-0 top-0 border-t border-dashed border-[#D9A544]/40" />
              <div className="absolute left-0 top-0 h-3 border-l border-dashed border-[#D9A544]/40" style={{ transform: "translateY(-100%)" }} />
              <div className="absolute right-0 top-0 h-3 border-r border-dashed border-[#D9A544]/40" style={{ transform: "translateY(-100%)" }} />
              <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-[#D9A544]/40" />
            </div>
          </div>

          {/* On-chip acceleration */}
          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-[16px] border border-dashed border-[#D9A544]/50 bg-[#D9A544]/10 px-6 py-4 xl:mt-0">
            <p className="flex items-center gap-2.5 text-sm font-semibold">
              <svg viewBox="0 0 24 24" fill="none" stroke="#D9A544" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
                <rect x="7" y="7" width="10" height="10" rx="2" />
                <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
              </svg>
              On-Chip AI Acceleration
            </p>
            <p className="text-sm text-zinc-400">
              Ultra-low latency · Low power · Real-time processing
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* NN-based separation engine */}
        <section className="mt-28 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Low latency AI-based denoising
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              NN-based separation engine
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-500">
              IPHIPI&apos;s denoising specialises in isolating speech signals
              between a user and their interlocutors in noisy environments. It
              enables clear and understandable conversations even in settings
              where noise typically hampers communication — such as
              non-stationary and harmonic noises and low signal-to-noise
              ratios.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-500">
              Utilising IPHIPI&apos;s proprietary machine learning technology,
              the separation engine enables unhindered communication
              irrespective of the location.
            </p>
          </div>

          {/* Separation visual */}
          <div className="rounded-[28px] border border-zinc-200/70 bg-[#faf6ee] p-8">
            <div className="flex flex-wrap justify-center gap-2">
              {SEPARATION_INPUTS.map((input) => (
                <span key={input} className="rounded-full border border-zinc-300 bg-white px-3.5 py-1.5 text-sm text-zinc-600">
                  {input}
                </span>
              ))}
            </div>
            <div className="my-5 flex justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 rotate-90 text-zinc-400" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </div>
            <div className="rounded-[16px] bg-[#0D0D0F] px-6 py-5 text-center">
              <p className="text-sm font-medium text-white">NN-based separation engine</p>
              <Waveform
                bars={[40, 70, 35, 85, 45, 75, 40, 60, 35, 80, 45, 65]}
                className="mx-auto mt-3 h-6"
              />
            </div>
            <div className="my-5 flex justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 rotate-90 text-zinc-400" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-[#D9A544] px-3.5 py-1.5 text-sm font-medium text-[#0D0D0F]">
                Speaker voice — isolated
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm text-zinc-400 line-through">
                Background noise
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-sm text-zinc-400 line-through">
                Surrounding voices
              </span>
            </div>
          </div>
        </section>

        {/* Beamforming */}
        <section className="mt-28 grid items-center gap-12 lg:grid-cols-2">
          <div className="order-last overflow-hidden rounded-[28px] lg:order-first">
            {/* Sample image — swap for real beamforming/product visuals */}
            <Image
              src="/samples/beamforming.jpg"
              alt="Directional speech enhancement via wearables"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Beamforming &amp; voice enhancement
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Directional speech enhancement
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-500">
              IPHIPI&apos;s technology integrates microphone beamforming and
              speech enhancement, delivering a unique directional speech
              enhancement experience.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-500">
              By precisely focusing on the speaker and employing sophisticated
              NN-based denoising, it guarantees optimal audio clarity — even in
              challenging acoustic conditions — providing an unparalleled
              communication experience in any environment.
            </p>
          </div>
        </section>

        {/* Mic technology enhancements */}
        <section className="mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Adaptive Processing
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Mic Technology Enhancements
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-500">
            IPHIPI&apos;s advanced audio processing adapts to any environment.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {MIC_TECHNOLOGIES.map((tech) => (
              <div
                key={tech.title}
                className="group flex flex-col rounded-[24px] border border-white/10 bg-[#0D0D0F] p-6 transition-colors duration-300 hover:border-[#D9A544]/50"
              >
                <Waveform bars={tech.wave} className="h-10" />
                <h3 className="mt-6 text-lg font-medium text-white">{tech.title}</h3>
                <p className="mt-1 text-sm font-semibold text-[#D9A544]">{tech.spec}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tech.body}</p>

                {/* Suppression / range meter */}
                <div className="mt-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-500">{tech.meter.label}</span>
                    <span className="font-semibold text-[#D9A544]">{tech.meter.value}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#D9A544] transition-[width] duration-700"
                      style={{ width: `${tech.meter.percent}%` }}
                    />
                  </div>
                </div>

                {/* Best-for chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {tech.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form factors */}
        <section className="mt-28">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Supported Wearable Form Factors
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-500">
            Engineered for seamless integration across a wide range of devices.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {FORM_FACTORS.map((factor) => (
              <div
                key={factor.name}
                className="group flex flex-col items-center gap-4 rounded-[20px] border border-zinc-200 px-4 py-8 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D9A544] hover:bg-[#faf6ee]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-50 text-zinc-700 transition-colors duration-300 group-hover:bg-white group-hover:text-[#A87B24]">
                  {factor.icon}
                </span>
                <span>
                  <span className="block text-sm font-medium">{factor.name}</span>
                  <span className="mt-1 block text-xs text-zinc-500">{factor.desc}</span>
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
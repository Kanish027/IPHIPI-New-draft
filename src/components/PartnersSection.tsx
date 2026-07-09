"use client";

// Brand palette — "Cognitive Partner" (Option 1)
const COLORS = {
  cognitiveBlueDeep: "#152A63", // Primary, darkened — section background
  cyan: "#22D3EE", // Accent — replaces ad-hoc #00D2FF
  techWhite: "#F5F7FA", // Neutral — headings / wordmarks
  softGray: "#A0A4AC", // Neutral — body copy
};

const PARTNERS = [
  {
    name: "Mivi",
    tag: "Audio",
    body: "Delivered advanced dual-microphone ENC and keyword detection technology to enable clear, natural voice interactions.",
    wave: [40, 65, 30, 80, 55, 90, 45, 70, 35, 85, 50, 95, 40, 60, 75, 30, 88, 45, 65, 55, 80, 35, 70, 50],
  },
  {
    name: "HME",
    tag: "Hearing",
    body: "Delivered a far-field voice solution for hands-free communication systems, enabling accurate voice capture in noisy environments.",
    wave: [55, 35, 75, 45, 90, 60, 30, 85, 50, 70, 40, 95, 55, 30, 80, 60, 45, 75, 35, 90, 50, 65, 40, 85],
  },
  {
    name: "LAVA",
    tag: "Mobile",
    body: "Delivered single-mic noise suppression technology for Lava feature phones, enhancing voice clarity during everyday calls.",
    wave: [30, 90, 45, 60, 80, 35, 70, 50, 95, 40, 65, 55, 85, 30, 75, 45, 90, 60, 35, 80, 50, 70, 40, 65],
  },
];

export default function PartnersSection() {
  return (
    <section className="px-4 py-28 lg:px-6" style={{ backgroundColor: COLORS.cognitiveBlueDeep }}>
      <style>{`
        @keyframes iphipiWave {
          0%, 100% { transform: scaleY(0.45); }
          50% { transform: scaleY(1); }
        }
      `}</style>
      <div className="mx-auto max-w-6xl">
        <p
          className="text-xs font-semibold uppercase tracking-[0.2em]"
          style={{ color: COLORS.cyan }}
        >
          Our Partners
        </p>
        <h2
          className="mt-3 text-headline font-semibold tracking-tight"
          style={{ color: COLORS.techWhite }}
        >
          Trusted by Industry Leaders
        </h2>
        <p className="mt-4 max-w-2xl" style={{ color: COLORS.softGray }}>
          IPHIPI partners with leading OEMs and consumer electronics brands —
          bringing agentic AI to millions of users worldwide.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              {/* Signature element: ambient waveform, reacts on hover */}
              <div className="mb-10 flex h-16 items-end gap-[3px]">
                {partner.wave.map((h, i) => (
                  <span
                    key={i}
                    className="w-1 origin-bottom rounded-full bg-white/25 transition-colors duration-300 group-hover:bg-[#22D3EE]"
                    style={{
                      height: `${h}%`,
                      animation: "iphipiWave 1.8s ease-in-out infinite",
                      animationDelay: `${i * 0.06}s`,
                    }}
                  />
                ))}
              </div>
              <span
                className="inline-flex w-fit items-center rounded-full border border-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wide transition-colors duration-300 group-hover:border-[#22D3EE]/40 group-hover:text-[#22D3EE]"
                style={{ color: COLORS.softGray }}
              >
                {partner.tag}
              </span>
              {/* Wordmark placeholder — swap for partner logo assets */}
              <p
                className="mt-5 text-3xl font-semibold tracking-tight"
                style={{ color: COLORS.techWhite }}
              >
                {partner.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: COLORS.softGray }}>
                {partner.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
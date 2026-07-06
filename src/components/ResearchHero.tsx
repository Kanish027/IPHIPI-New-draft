import PageBanner from "@/components/PageBanner";

const AREA_LINKS = [
  { label: "Productive", href: "#productive-intelligence" },
  { label: "Living", href: "#living-intelligence" },
  { label: "Personal", href: "#personal-intelligence" },
  { label: "Spatial", href: "#spatial-intelligence" },
];

export default function ResearchHero() {
  return (
    <PageBanner
      eyebrow="R&D at IPHIPI"
      title="The technology behind the experience"
      tagline="Four research areas power the agentic AI platform."
      gradient="bg-[radial-gradient(circle_at_80%_20%,rgba(217,165,68,0.16),transparent_52%),linear-gradient(200deg,#faf6ee_0%,#ffffff_62%)]"
    >
      <div className="flex flex-wrap justify-center gap-2">
        {AREA_LINKS.map((area) => (
          <a
            key={area.label}
            href={area.href}
            className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-[#D9A544] hover:text-[#A87B24]"
          >
            {area.label} Intelligence
          </a>
        ))}
      </div>
    </PageBanner>
  );
}

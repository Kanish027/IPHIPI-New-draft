import type { Metadata } from "next";
import Image from "next/image";
import EventsHero from "@/components/EventsHero";

export const metadata: Metadata = {
  title: "Events — IPHIPI",
  description: "Where to meet the IPHIPI team — upcoming and past events.",
};

/* Event details are placeholders — edit dates, booths, and blurbs here as
   they get confirmed. */

const UPCOMING = [
  {
    name: "CES 2027",
    date: "January 2027",
    location: "Las Vegas, NV",
    status: "Booth details coming soon",
    body: "We'll be back at CES with the next generation of the agentic audio platform — live demos across hearables, wearables, and smart glasses.",
  },
];

const PAST = [
  {
    name: "CES 2026",
    date: "January 2026",
    location: "Las Vegas, NV",
    image: "/samples/events-banner.jpg",
    body: "We showcased adaptive audio intelligence live on the show floor — real-time single- and dual-mic noise suppression demos, far-field voice capture, and branded wake words running fully on-device with partner hardware.",
  },
];

export default function EventsPage() {
  return (
    <main className="flex-1 bg-white pb-28 text-zinc-950">
      <EventsHero />

      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        {/* Upcoming */}
        <section className="mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Upcoming
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Where you can find us next
          </h2>

          <div className="mt-10 space-y-5">
            {UPCOMING.map((event) => (
              <div
                key={event.name}
                className="grid gap-6 rounded-xl border border-zinc-200 p-6 sm:p-8 md:grid-cols-[1fr_2fr_auto] md:items-center"
              >
                <div>
                  <p className="text-2xl font-semibold tracking-tight">{event.name}</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {event.date} · {event.location}
                  </p>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#faf6ee] px-3 py-1.5 text-xs font-medium text-[#A87B24]">
                    <span className="h-1.5 w-1.5 animate-[blinking_0.75s_ease-in-out_infinite] rounded-full bg-[#D9A544]" />
                    {event.status}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-zinc-500">{event.body}</p>
                <a
                  href="mailto:hello@iphipi.com?subject=Meeting request — CES 2027"
                  className="justify-self-start rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 md:justify-self-end"
                >
                  Request a meeting
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Past */}
        <section className="mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Past events
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Where we&apos;ve been
          </h2>

          <div className="mt-10 space-y-5">
            {PAST.map((event) => (
              <div
                key={event.name}
                className="grid overflow-hidden rounded-xl border border-zinc-200 md:grid-cols-2"
              >
                {/* Sample image — swap for real booth/show-floor photos */}
                <div className="relative min-h-56">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <p className="text-2xl font-semibold tracking-tight">{event.name}</p>
                  <p className="mt-1 text-sm text-zinc-500">
                    {event.date} · {event.location}
                  </p>
                  <p className="mt-4 leading-relaxed text-zinc-500">{event.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Private demo CTA */}
        <section className="mt-28 rounded-xl bg-zinc-950 p-8 text-white sm:p-12">
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Can&apos;t make it to a show?
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            We run private demos year-round — hear the difference adaptive
            audio intelligence makes on your own hardware.
          </p>
          <a
            href="mailto:hello@iphipi.com?subject=Private demo request"
            className="mt-8 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            Request a private demo
          </a>
        </section>
      </div>
    </main>
  );
}

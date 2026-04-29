import { Reveal } from "./Reveal";

const towns = [
  "San Giorgio di Piano",
  "Funo",
  "Argelato",
  "Bentivoglio",
  "Castel Maggiore",
  "San Pietro in Casale",
];

export function LocalSection() {
  return (
    <section className="bg-[var(--color-bg-warm)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="section-number text-3xl">07</span>
                <span className="h-px flex-1 max-w-16 bg-[var(--color-accent)]/40" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Sul territorio
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2
                className="mt-8 font-display font-medium leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)" }}
              >
                Un progetto pensato
                <span className="block italic text-[var(--color-accent-deep)]">
                  per San Giorgio di Piano e dintorni.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                FLOW nasce con l'obiettivo di portare un'esperienza Pilates
                Reformer curata e accessibile a chi vive tra San Giorgio di
                Piano, Funo, Argelato, Bentivoglio, Castel Maggiore e San
                Pietro in Casale.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <a
                href="#founder-list"
                className="group mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-dark)] px-8 py-4 text-sm font-medium tracking-wide text-[var(--color-cream)] transition hover:bg-[var(--color-dark-warm)]"
              >
                Entra in lista prioritaria
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={260}>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-[var(--color-line-light)] pt-8 sm:gap-y-4">
                {towns.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 text-[15px] text-[var(--color-ink)]/80"
                  >
                    <span
                      aria-hidden="true"
                      className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

export function HeroSection() {
  return (
    <section className="grain relative min-h-screen overflow-hidden text-[var(--color-cream)]">
      <img
        src="/photos/flow-photo4-studio-empty.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,19,19,0.78)_0%,rgba(26,26,26,0.72)_45%,rgba(42,37,32,0.88)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(196,154,108,0.18),transparent_60%)]"
      />
      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col px-6 pt-28 pb-20 sm:px-10 sm:pt-32 sm:pb-24 lg:px-16 lg:pt-36">
        <div className="flex flex-1 flex-col justify-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--color-cream)]/15 bg-[var(--color-cream)]/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-cream)]/70 backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              </span>
              In apertura a San Giorgio di Piano
            </span>
          </Reveal>

          <Reveal delay={120}>
            <img
              src="/logo.png"
              alt="FLOW Pilates Studio"
              className="mt-10 h-16 w-auto select-none sm:h-20"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Reveal>

          <Reveal delay={200}>
            <h1
              className="mt-6 max-w-5xl font-display font-medium leading-[0.96] tracking-[-0.025em] text-[var(--color-cream-bright)]"
              style={{ fontSize: "clamp(2.75rem, 8.5vw, 6.5rem)" }}
            >
              Pilates Reformer a San Giorgio di Piano con FLOW.
              <span className="block italic text-[var(--color-accent-soft)]">
                In piccoli gruppi, con metodo.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--color-cream)]/70 sm:text-lg">
              Stiamo preparando uno studio boutique dedicato a postura, tono
              muscolare e benessere quotidiano. Iscriviti alla lista
              prioritaria per accedere ai primi posti founder.
            </p>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#founder-list"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-medium tracking-wide text-[var(--color-dark)] transition hover:bg-[var(--color-accent-soft)]"
              >
                Entra nella lista prioritaria
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[var(--color-cream)]/25 px-8 py-4 text-sm font-medium tracking-wide text-[var(--color-cream)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-soft)]"
              >
                Scopri il metodo
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={600}>
          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-[var(--color-cream)]/10 pt-8 text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]/55 sm:mt-20">
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--color-accent)]" />
              Posti founder limitati
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--color-accent)]" />
              Prezzo lancio riservato
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--color-accent)]" />
              Nessun obbligo
            </span>
          </div>
        </Reveal>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-32 hidden text-[200px] font-display italic leading-none text-[var(--color-cream)]/[0.03] sm:block lg:right-16 lg:text-[280px]"
      >
        01
      </div>
    </section>
  );
}

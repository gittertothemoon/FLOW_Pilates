import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="grain relative overflow-hidden text-[var(--color-cream)]">
      <img
        src="/photos/flow-photo2-reformer-detail.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26,26,26,0.92)_0%,rgba(42,37,32,0.78)_50%,rgba(26,26,26,0.92)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(196,154,108,0.18),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[420px] font-display italic leading-none text-[var(--color-cream)]/[0.025] sm:block lg:text-[600px]"
      >
        08
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 py-28 text-center sm:px-10 sm:py-36 lg:px-16 lg:py-44">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-accent-soft)]">
            Validazione del progetto
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2
            className="mx-auto mt-8 max-w-4xl font-display font-medium leading-[1.0] tracking-[-0.025em] text-[var(--color-cream-bright)]"
            style={{ fontSize: "clamp(2.5rem, 6.5vw, 5.5rem)" }}
          >
            Vuoi uno studio Pilates Reformer
            <span className="block italic text-[var(--color-accent-soft)]">
              a San Giorgio di Piano?
            </span>
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-[var(--color-cream)]/70 sm:text-lg">
            Lascia il tuo contatto. Se la risposta del territorio sarà forte,
            apriremo i primi posti founder.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-12 flex justify-center">
            <a
              href="#founder-list"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-10 py-4 text-sm font-medium tracking-wide text-[var(--color-dark)] transition hover:bg-[var(--color-accent-soft)]"
            >
              Entra nella lista prioritaria
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

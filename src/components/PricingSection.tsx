import { Reveal } from "./Reveal";

const tiers = [
  {
    name: "Prima prova",
    price: "Prezzo comunicato in pre-apertura",
    description:
      "Una lezione introduttiva per conoscere il metodo FLOW e capire se il Reformer è adatto a te.",
    highlight: false,
  },
  {
    name: "Pacchetto di avvio",
    price: "Accesso prioritario per la lista",
    description:
      "Un primo percorso per iniziare con continuità e prendere confidenza con il metodo.",
    highlight: true,
  },
  {
    name: "Percorso mensile",
    price: "Dettagli in fase di definizione",
    description:
      "Soluzioni per chi vuole allenarsi una o due volte a settimana con costanza.",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section className="bg-[var(--color-bg)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="section-number text-3xl">06</span>
              <span className="h-px flex-1 max-w-16 bg-[var(--color-accent)]/40" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Listino
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2
              className="mt-8 font-display font-medium leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
            >
              Percorsi e prezzi
              <span className="block italic text-[var(--color-accent-deep)]">
                in definizione
              </span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              Stiamo costruendo l'offerta in base all'interesse reale della
              zona. Chi entra in lista prioritaria riceverà per primo
              informazioni su prove, pacchetti e condizioni di lancio.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={100 + i * 100}>
              <div
                className={[
                  "relative flex h-full flex-col rounded-[var(--radius-card)] p-8 transition sm:p-10",
                  t.highlight
                    ? "bg-[var(--color-dark)] text-[var(--color-cream)] shadow-[var(--shadow-glow)] lg:-translate-y-4 lg:scale-[1.02]"
                    : "border border-[var(--color-line-light)] bg-white text-[var(--color-ink)] shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
                ].join(" ")}
              >
                {t.highlight && (
                  <span className="absolute -top-3 left-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-dark)]">
                    Lista prioritaria
                  </span>
                )}

                <div className="flex items-baseline justify-between">
                  <span className="font-display text-xs italic text-[var(--color-accent)]">
                    0{i + 1}
                  </span>
                  {t.highlight && (
                    <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
                      Più scelto
                    </span>
                  )}
                </div>

                <h3
                  className={[
                    "mt-6 font-display font-medium leading-tight",
                    t.highlight ? "text-[var(--color-cream-bright)]" : "text-[var(--color-ink)]",
                  ].join(" ")}
                  style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.875rem)" }}
                >
                  {t.name}
                </h3>

                <p
                  className={[
                    "mt-6 font-display italic",
                    t.highlight ? "text-[var(--color-accent-soft)]" : "text-[var(--color-accent-deep)]",
                  ].join(" ")}
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}
                >
                  {t.price}
                </p>

                <div
                  className={[
                    "mt-6 h-px w-12",
                    t.highlight ? "bg-[var(--color-accent)]/50" : "bg-[var(--color-line-light)]",
                  ].join(" ")}
                />

                <p
                  className={[
                    "mt-6 text-[14px] leading-relaxed",
                    t.highlight ? "text-[var(--color-cream)]/70" : "text-[var(--color-muted)]",
                  ].join(" ")}
                >
                  {t.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
            Le condizioni definitive saranno comunicate prima dell'apertura
            alle persone iscritte alla lista prioritaria.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

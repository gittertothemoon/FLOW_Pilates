import { Reveal } from "./Reveal";

const points = [
  {
    title: "Poco tempo e poca continuità",
    body: "Allenarsi diventa difficile quando manca un percorso chiaro e sostenibile.",
  },
  {
    title: "Postura, rigidità e schiena",
    body: "Il corpo chiede attenzione, ma spesso viene allenato in modo troppo casuale.",
  },
  {
    title: "Bisogno di guida",
    body: "Non basta muoversi: serve qualcuno che corregga, adatti e accompagni.",
  },
  {
    title: "Ambiente sbagliato",
    body: "Se il contesto non ti fa sentire a tuo agio, è difficile restare costante.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative bg-[var(--color-bg)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="section-number text-3xl">02</span>
                <span className="h-px flex-1 max-w-16 bg-[var(--color-accent)]/40" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Perché FLOW
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2
                className="mt-8 font-display font-medium leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                Non ti serve un'altra palestra
                <span className="italic text-[var(--color-accent-deep)]"> affollata.</span>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Molte persone vogliono allenarsi meglio, sentirsi più forti e
                migliorare la postura, ma non si riconoscono negli ambienti
                rumorosi, dispersivi e poco seguiti delle palestre
                tradizionali.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="space-y-1">
              {points.map((p, i) => (
                <Reveal key={p.title} delay={120 + i * 80} as="li">
                  <div className="group relative flex gap-6 border-l border-[var(--color-line-light)] py-7 pl-8 transition hover:border-[var(--color-accent)]">
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-7 h-px w-6 -translate-x-px bg-[var(--color-line-light)] transition group-hover:bg-[var(--color-accent)]"
                    />
                    <span className="font-display text-sm italic text-[var(--color-accent)]">
                      0{i + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl leading-tight text-[var(--color-ink)]">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

const features = [
  {
    title: "Classi Reformer in piccoli gruppi",
    body: "Massimo poche persone per sessione. Più attenzione, più qualità del lavoro.",
  },
  {
    title: "Attenzione alla tecnica",
    body: "Ogni esercizio viene osservato e corretto. Il movimento giusto, non quello veloce.",
  },
  {
    title: "Percorsi progressivi",
    body: "Programmi pensati per crescere nel tempo, da principianti a praticanti esperti.",
  },
  {
    title: "Ambiente tranquillo",
    body: "Uno spazio curato, silenzioso, dove la concentrazione è parte dell'allenamento.",
  },
  {
    title: "Istruttori qualificati",
    body: "Professionisti formati sul metodo Reformer, con esperienza nel lavoro posturale.",
  },
  {
    title: "Prenotazione semplice",
    body: "Calendario chiaro, posto garantito, nessuna confusione tra orari e attese.",
  },
];

export function SolutionSection() {
  return (
    <section
      id="metodo"
      className="dark-section-gradient relative scroll-mt-20 text-[var(--color-cream)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="section-number text-3xl">03</span>
                <span className="h-px flex-1 max-w-16 bg-[var(--color-accent)]/40" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted-dark)]">
                  Il metodo
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2
                className="mt-8 font-display font-medium leading-[1.05] tracking-[-0.02em] text-[var(--color-cream-bright)]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                Uno studio più piccolo.
                <span className="block italic text-[var(--color-accent-soft)]">
                  Un lavoro più preciso.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-cream)]/65 sm:text-lg">
                FLOW nasce con un'idea semplice: meno persone per sessione,
                più qualità in ogni movimento. Un percorso costruito sulla
                tecnica, sulla progressione e sul rispetto del tuo corpo.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px bg-[var(--color-cream)]/10 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={100 + i * 60}>
                  <div className="group relative h-full bg-[var(--color-dark)] p-7 transition hover:bg-[var(--color-dark-warm)] sm:p-8">
                    <span className="font-display text-xs italic text-[var(--color-accent)]">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 font-display text-xl leading-tight text-[var(--color-cream-bright)]">
                      {f.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-cream)]/60">
                      {f.body}
                    </p>
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 right-4 text-[var(--color-accent)] opacity-0 transition group-hover:opacity-100"
                    >
                      →
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

const benefits = [
  { icon: "◐", title: "Postura più stabile", body: "Un lavoro mirato su controllo, allineamento e consapevolezza del corpo." },
  { icon: "◇", title: "Tono muscolare", body: "Esercizi progressivi per rinforzare il corpo senza allenamenti aggressivi." },
  { icon: "◯", title: "Schiena meno rigida", body: "Movimenti guidati per migliorare mobilità e percezione del corpo." },
  { icon: "◈", title: "Più controllo", body: "Ogni esercizio richiede precisione, respiro e presenza." },
  { icon: "◉", title: "Allenamento senza caos", body: "Piccoli gruppi, prenotazione e un ambiente più tranquillo." },
  { icon: "◆", title: "Costanza reale", body: "Un metodo sostenibile, pensato per entrare nella tua routine." },
];

export function BenefitsSection() {
  return (
    <section className="bg-[var(--color-bg-warm)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="section-number text-3xl">04</span>
                <span className="h-px flex-1 max-w-16 bg-[var(--color-accent)]/40" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  Cosa cambia
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2
                className="mt-8 font-display font-medium leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
              >
                Cosa vogliamo
                <span className="block italic text-[var(--color-accent-deep)]">
                  aiutarti a costruire
                </span>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
                Un percorso pensato per farti muovere meglio, sentirti più
                stabile e allenarti con costanza.
              </p>
            </Reveal>
          </div>
          <Reveal delay={300} className="lg:col-span-5">
            <figure className="group relative overflow-hidden rounded-[12px] border border-[var(--color-line-light)] shadow-[var(--shadow-soft)]">
              <img
                src="/photos/flow-photo3-group-class.jpg"
                alt="Classe Pilates Reformer in piccolo gruppo con istruttore FLOW"
                loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(26,26,26,0.45)_100%)]"
              />
              <figcaption className="absolute bottom-5 left-6 right-6 font-display text-sm italic text-white/90">
                Piccoli gruppi, attenzione individuale.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={80 + i * 60}>
              <div className="group relative h-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line-light)] bg-white p-8 transition duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl text-[var(--color-accent-deep)] transition group-hover:scale-110">
                    {b.icon}
                  </span>
                  <span className="font-display text-xs italic text-[var(--color-muted)]/50">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl leading-tight text-[var(--color-ink)]">
                  {b.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-muted)]">
                  {b.body}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[var(--color-accent)] transition-transform duration-500 group-hover:scale-x-100"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-[var(--color-muted)]/80 sm:text-sm">
            Il Pilates non sostituisce percorsi medici o fisioterapici. In
            caso di dolore o patologie, è sempre consigliato confrontarsi
            con un professionista sanitario.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

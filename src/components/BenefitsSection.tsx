import { Reveal } from "./Reveal";

const benefits = [
  { icon: "◐", title: "Postura più forte", body: "Una colonna allineata e un baricentro stabile, ogni giorno." },
  { icon: "◇", title: "Corpo più tonico", body: "Tono muscolare progressivo, senza sovraccarichi inutili." },
  { icon: "◯", title: "Schiena più libera", body: "Mobilità lombare, meno tensioni, più leggerezza nei movimenti." },
  { icon: "◈", title: "Mobilità e controllo", body: "Articolazioni fluide e movimenti sotto controllo, sempre." },
  { icon: "◉", title: "Allenamento senza caos", body: "Spazi curati, ritmo personale, attenzione individuale." },
  { icon: "◆", title: "Percorso guidato", body: "Un programma chiaro e progressivo, costruito attorno a te." },
];

export function BenefitsSection() {
  return (
    <section className="bg-[var(--color-bg-warm)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="max-w-3xl">
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
              Risultati concreti,
              <span className="block italic text-[var(--color-accent-deep)]">
                sostenibili nel tempo.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              Il Reformer lavora a corpo intero in modo controllato. Postura,
              tono, mobilità: cambiamenti reali, senza promesse esagerate.
            </p>
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
      </div>
    </section>
  );
}

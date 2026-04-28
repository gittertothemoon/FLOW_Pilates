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
    <section className="bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">
            Cosa cambia
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Risultati concreti, sostenibili nel tempo.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Il Reformer lavora a corpo intero in modo controllato. Postura,
            tono, mobilità: cambiamenti reali, senza promesse esagerate.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-bg)] text-xl text-[var(--color-accent-deep)] transition group-hover:bg-[var(--color-accent)]/15">
                {b.icon}
              </div>
              <h3 className="mt-5 font-display text-xl text-[var(--color-ink)]">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

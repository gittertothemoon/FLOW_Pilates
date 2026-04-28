const tiers = [
  {
    name: "Prova introduttiva",
    price: "Da 15–20 €",
    description: "Una prima sessione guidata per conoscere il Reformer e il metodo.",
    highlight: false,
  },
  {
    name: "Pacchetto founder · 4 lezioni",
    price: "Prezzo riservato ai primi iscritti",
    description: "Quattro sessioni a tariffa founder, dedicate a chi entra nella lista prioritaria.",
    highlight: true,
  },
  {
    name: "Percorso mensile",
    price: "1 o 2 lezioni a settimana",
    description: "Una pratica costante, costruita su un calendario chiaro e gestibile.",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section className="bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">
            Listino
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Prezzi founder in fase di definizione
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Stiamo costruendo un listino sostenibile e trasparente. Le tariffe
            qui sotto sono indicative: i prezzi definitivi saranno comunicati
            in anteprima alla lista prioritaria.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "flex flex-col rounded-[var(--radius-card)] border p-7 transition sm:p-8",
                t.highlight
                  ? "border-[var(--color-accent)] bg-[var(--color-ink)] text-white shadow-[var(--shadow-lift)]"
                  : "border-[var(--color-line)] bg-white text-[var(--color-ink)] shadow-[var(--shadow-soft)]",
              ].join(" ")}
            >
              {t.highlight && (
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-accent)]/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
                  Founder
                </span>
              )}
              <h3
                className={[
                  "font-display text-xl",
                  t.highlight ? "text-white" : "text-[var(--color-ink)]",
                ].join(" ")}
              >
                {t.name}
              </h3>
              <p
                className={[
                  "mt-3 font-display text-2xl",
                  t.highlight ? "text-white" : "text-[var(--color-accent-deep)]",
                ].join(" ")}
              >
                {t.price}
              </p>
              <p
                className={[
                  "mt-3 text-sm leading-relaxed",
                  t.highlight ? "text-white/75" : "text-[var(--color-muted)]",
                ].join(" ")}
              >
                {t.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
          I prezzi definitivi saranno comunicati solo agli iscritti alla lista
          prioritaria prima dell'apertura.
        </p>
      </div>
    </section>
  );
}

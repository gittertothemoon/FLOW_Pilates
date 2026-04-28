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
    <section id="metodo" className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">
              Il metodo
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Uno studio più piccolo. <br />
              Un lavoro più preciso.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              Core Studio nasce con un'idea semplice: meno persone per sessione,
              più qualità in ogni movimento. Un percorso costruito sulla
              tecnica, sulla progressione e sul rispetto del tuo corpo.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f.title}
                  className="bg-white p-6 transition hover:bg-[var(--color-bg-soft)]"
                >
                  <h3 className="font-display text-lg text-[var(--color-ink)]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {f.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const points = [
  {
    title: "Poco tempo",
    body: "Sessioni efficaci, programmate per integrarsi davvero nella settimana.",
  },
  {
    title: "Dolori o rigidità",
    body: "Lavoro mirato su mobilità, stabilità e allineamento, senza forzature.",
  },
  {
    title: "Bisogno di guida",
    body: "Istruttori qualificati che seguono ogni movimento, con correzione costante.",
  },
  {
    title: "Allenamento elegante e controllato",
    body: "Un ambiente curato, silenzioso, dove il movimento ha la giusta priorità.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">
            Perché Core Studio
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Non ti serve un'altra palestra piena e caotica.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Molte persone vogliono rimettersi in forma, migliorare postura e
            sentirsi meglio, ma non si riconoscono nell'ambiente rumoroso e
            dispersivo delle palestre tradizionali.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-bg)] text-[var(--color-accent-deep)]">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </div>
              <h3 className="mt-4 font-display text-xl text-[var(--color-ink)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

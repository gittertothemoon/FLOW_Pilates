export function FinalCTA() {
  return (
    <section className="bg-[var(--color-bg-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div
          className="relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-16 text-center text-white shadow-[var(--shadow-lift)] sm:px-12 sm:py-20"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 80% 0%, rgba(184,138,90,0.35) 0%, transparent 55%), radial-gradient(circle at 0% 100%, rgba(184,138,90,0.18) 0%, transparent 50%)",
            }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent-soft)]">
              Validazione del progetto
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Vuoi uno studio Pilates Reformer a San Giorgio di Piano?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Lascia il tuo contatto. Se la risposta del territorio sarà
              forte, apriremo i primi posti founder.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#founder-list"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--color-accent-soft)]"
              >
                Entra nella lista prioritaria
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

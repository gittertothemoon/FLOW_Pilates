export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-dark-deep)] text-[var(--color-cream)]/70">
      <div className="mx-auto max-w-[1400px] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
        <div className="flex flex-col gap-10 border-t border-[var(--color-cream)]/10 pt-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl tracking-[0.18em] text-[var(--color-cream-bright)] sm:text-4xl">
              FLOW
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--color-cream)]/55">
              Pilates Reformer Studio · progetto in fase di validazione
            </p>
          </div>

          <div className="text-sm leading-relaxed text-[var(--color-cream)]/55 sm:text-right">
            <p className="text-[var(--color-cream)]/85">
              San Giorgio di Piano, Bologna
            </p>
            <p className="mt-1">Contatti disponibili prossimamente</p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-[var(--color-cream)]/40">
              © {year} FLOW Pilates Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

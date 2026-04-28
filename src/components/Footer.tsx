export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-bg)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl tracking-[0.18em] text-[var(--color-ink)]">
            FLOW<span className="ml-2 tracking-normal text-[var(--color-accent-deep)]">— progetto in fase di validazione</span>
          </p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Pilates Reformer Studio
          </p>
        </div>

        <div className="text-sm text-[var(--color-muted)] sm:text-right">
          <p>San Giorgio di Piano, Bologna</p>
          <p className="mt-1">Contatti disponibili prossimamente</p>
          <p className="mt-3 text-xs text-[var(--color-muted)]/80">
            © {year} FLOW Pilates Studio
          </p>
        </div>
      </div>
    </footer>
  );
}

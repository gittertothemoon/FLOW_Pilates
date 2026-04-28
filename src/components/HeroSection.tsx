export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-bg-soft)] px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              In apertura a San Giorgio di Piano
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              Pilates Reformer a San Giorgio di Piano.
              <span className="block text-[var(--color-accent-deep)]">
                In piccoli gruppi, con metodo.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              Stiamo preparando uno studio boutique dedicato a postura, tono
              muscolare e benessere quotidiano. Iscriviti alla lista
              prioritaria per accedere ai primi posti founder.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#founder-list"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--color-accent-deep)]"
              >
                Entra nella lista prioritaria
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line)] bg-white px-7 py-3.5 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent-deep)]"
              >
                Scopri il metodo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--color-muted)]">
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                Posti founder limitati
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                Prezzo lancio riservato
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                Nessun obbligo
              </span>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] shadow-[var(--shadow-lift)]"
              style={{
                background:
                  "linear-gradient(160deg, #f0e6d6 0%, #e6d8c1 45%, #d8c5a6 100%)",
              }}
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="reformerGrad" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <circle
                  cx="320"
                  cy="110"
                  r="160"
                  fill="url(#reformerGrad)"
                />
                <g
                  stroke="#5b4a3c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.65"
                >
                  <line x1="60" y1="360" x2="340" y2="360" />
                  <line x1="80" y1="380" x2="320" y2="380" />
                  <rect x="120" y="320" width="160" height="40" rx="20" />
                  <line x1="60" y1="370" x2="60" y2="410" />
                  <line x1="340" y1="370" x2="340" y2="410" />
                </g>
                <g
                  stroke="#1f1f1f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                >
                  <path d="M150 320 C 165 280, 175 250, 185 230" />
                  <path d="M185 230 C 200 215, 230 215, 245 235" />
                  <circle cx="255" cy="220" r="10" fill="#1f1f1f" />
                  <path d="M245 235 L 280 270" />
                  <path d="M150 320 L 130 340" />
                  <path d="M245 320 L 270 320" />
                </g>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-white/95 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur sm:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Reformer Studio
              </p>
              <p className="mt-1 font-display text-lg text-[var(--color-ink)]">
                Piccoli gruppi · Tecnica · Calma
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

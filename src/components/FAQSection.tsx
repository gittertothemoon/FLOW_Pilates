import { useState } from "react";

const faqs = [
  {
    q: "Lo studio è già aperto?",
    a: "No, siamo in fase di pre-lancio e raccolta interesse.",
  },
  {
    q: "Serve esperienza?",
    a: "No, i percorsi saranno pensati anche per principianti.",
  },
  {
    q: "È adatto anche agli uomini?",
    a: "Sì, il Reformer è utile per postura, forza, mobilità e controllo.",
  },
  {
    q: "Posso iscrivermi senza obbligo?",
    a: "Sì, la lista prioritaria non comporta obblighi.",
  },
  {
    q: "Dove sarà lo studio?",
    a: "A San Giorgio di Piano o nelle immediate vicinanze. La sede definitiva sarà comunicata agli iscritti.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">
            Domande frequenti
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Tutto chiaro, prima di iscriverti.
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white shadow-[var(--shadow-soft)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={[
                  "border-b border-[var(--color-line)] last:border-b-0",
                  isOpen ? "bg-[var(--color-bg-soft)]" : "",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-[var(--color-bg-soft)] sm:px-7 sm:py-6"
                >
                  <span className="font-display text-lg text-[var(--color-ink)] sm:text-xl">
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className={[
                      "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-accent-deep)] transition",
                      isOpen ? "rotate-45" : "",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>
                <div
                  className={[
                    "grid overflow-hidden px-6 transition-all duration-300 ease-out sm:px-7",
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] pb-0 opacity-0",
                  ].join(" ")}
                >
                  <div className="min-h-0 max-w-3xl text-base leading-relaxed text-[var(--color-muted)]">
                    {f.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

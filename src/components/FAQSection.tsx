import { useState } from "react";
import { Reveal } from "./Reveal";

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
    <section className="bg-[var(--color-bg-warm)] text-[var(--color-ink)]">
      <div className="mx-auto max-w-[1100px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="section-number text-3xl">07</span>
                <span className="h-px flex-1 max-w-16 bg-[var(--color-accent)]/40" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Domande frequenti
              </p>
            </Reveal>
            <Reveal delay={180}>
              <h2
                className="mt-4 font-display font-medium leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Tutto chiaro,
                <span className="block italic text-[var(--color-accent-deep)]">
                  prima di iscriverti.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ul className="border-t border-[var(--color-line-light)]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={80 + i * 60} as="li">
                    <div className="border-b border-[var(--color-line-light)]">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="group flex w-full items-center justify-between gap-6 py-7 text-left transition"
                      >
                        <span className="flex items-baseline gap-5">
                          <span className="font-display text-sm italic text-[var(--color-accent)]">
                            0{i + 1}
                          </span>
                          <span className="font-display text-xl leading-tight text-[var(--color-ink)] sm:text-2xl">
                            {f.q}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={[
                            "relative flex h-8 w-8 flex-shrink-0 items-center justify-center transition",
                            isOpen ? "rotate-180" : "",
                          ].join(" ")}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-4 w-4"
                          >
                            <path
                              d="M6 9l6 6 6-6"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-[var(--color-accent-deep)]"
                            />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={[
                          "grid overflow-hidden transition-all duration-400 ease-out",
                          isOpen
                            ? "grid-rows-[1fr] pb-7 opacity-100"
                            : "grid-rows-[0fr] pb-0 opacity-0",
                        ].join(" ")}
                      >
                        <div className="min-h-0 max-w-2xl pl-9 text-base leading-relaxed text-[var(--color-muted)]">
                          {f.a}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

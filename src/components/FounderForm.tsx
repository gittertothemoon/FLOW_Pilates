import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { supabase, type FounderLeadInsert } from "../lib/supabase";

const goals = [
  "postura",
  "tonificazione",
  "mal di schiena / rigidità",
  "rimettermi in forma",
  "mobilità",
  "curiosità / prova",
] as const;

const frequencies = [
  "1 volta a settimana",
  "2 volte a settimana",
  "più volte a settimana",
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  goal: string;
  frequency: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  goal: "",
  frequency: "",
  consent: false,
};

const benefitsList = [
  "priorità sui primi posti",
  "prezzo lancio riservato",
  "invito agli open day",
  "aggiornamenti prima dell'apertura",
  "nessun obbligo di acquisto",
];

function validate(state: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!state.name.trim()) errors.name = "Inserisci il tuo nome.";
  if (!state.email.trim()) {
    errors.email = "Inserisci la tua email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.email = "Email non valida.";
  }
  if (state.phone.trim() && state.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Numero non valido.";
  }
  if (!state.consent) errors.consent = "Conferma il consenso per continuare.";
  return errors;
}

export function FounderForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
    if (errors[key]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[key];
        return next;
      });
    }
    if (submitError) setSubmitError(null);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const v = validate(state);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }

    if (!supabase) {
      setSubmitError(
        "Servizio non ancora configurato. Riprova tra qualche minuto.",
      );
      return;
    }

    const payload: FounderLeadInsert = {
      nome: state.name.trim(),
      email: state.email.trim().toLowerCase(),
      telefono: state.phone.trim() || null,
      comune: state.city.trim() || null,
      obiettivo: state.goal || null,
      frequenza: state.frequency || null,
    };

    setSubmitting(true);
    setSubmitError(null);

    const { error } = await supabase.from("founder_leads").insert(payload);

    setSubmitting(false);

    if (error) {
      // 23505 = unique_violation (duplicate email)
      if (error.code === "23505") {
        setErrors({ email: "Questa email è già registrata." });
        return;
      }
      console.error("[FLOW] founder_leads insert failed", error);
      setSubmitError(
        "Qualcosa è andato storto. Riprova fra qualche istante.",
      );
      return;
    }

    setSubmitted(true);
    setState(initialState);
    setErrors({});
  }

  return (
    <section
      className="dark-section-gradient grain relative overflow-hidden text-[var(--color-cream)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-20 hidden text-[200px] font-display italic leading-none text-[var(--color-cream)]/[0.03] sm:block lg:text-[280px]"
      >
        05
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-36">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="section-number text-3xl">05</span>
                <span className="h-px flex-1 max-w-16 bg-[var(--color-accent)]/40" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--color-muted-dark)]">
                  Lista founder
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2
                className="mt-8 font-display font-medium leading-[1.0] tracking-[-0.02em] text-[var(--color-cream-bright)]"
                style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
              >
                Entra nella
                <span className="block italic text-[var(--color-accent-soft)]">
                  lista founder
                </span>
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--color-cream)]/70 sm:text-lg">
                FLOW sta raccogliendo le prime adesioni per capire quante
                persone sono realmente interessate a uno studio Pilates
                Reformer a San Giorgio di Piano.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 space-y-4">
                {benefitsList.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-4 text-[15px] text-[var(--color-cream)]/85"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center"
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        className="h-full w-full"
                      >
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke="#c49a6c"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <div
                id="founder-list"
                className="relative scroll-mt-24 rounded-[28px] border border-[var(--color-cream)]/10 bg-[var(--color-cream)]/[0.02] p-6 backdrop-blur-md sm:p-10 lg:p-12"
                style={{
                  boxShadow:
                    "inset 0 1px 0 rgba(245,240,232,0.06), 0 30px 80px rgba(0,0,0,0.4)",
                }}
              >
                {submitted ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="flex flex-col items-start gap-5 py-6 sm:py-8"
                  >
                    <span className="success-check inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 text-[var(--color-accent-soft)]">
                      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
                        <path
                          d="M7 16.5l6 6 12-13"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          pathLength={1}
                          style={{
                            strokeDasharray: 1,
                            strokeDashoffset: 0,
                            animation: "checkdraw 600ms ease-out 80ms both",
                          }}
                        />
                      </svg>
                    </span>
                    <h3
                      className="font-display font-medium text-[var(--color-cream-bright)]"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                    >
                      Sei nella
                      <span className="italic text-[var(--color-accent-soft)]">
                        {" "}
                        lista prioritaria.
                      </span>
                    </h3>
                    <p className="max-w-md text-base leading-relaxed text-[var(--color-cream)]/70">
                      Ti contatteremo presto: appena FLOW aprirà le prime prove
                      founder ti scriviamo per primo.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-sm font-medium text-[var(--color-accent-soft)] underline-offset-4 transition hover:underline"
                    >
                      Iscrivi un'altra persona →
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="grid gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-7"
                  >
                    <Field label="Nome" error={errors.name}>
                      <input
                        type="text"
                        autoComplete="given-name"
                        value={state.name}
                        onChange={(e) => update("name", e.target.value)}
                        className={`input-underline ${errors.name ? "invalid" : ""}`}
                        placeholder="Il tuo nome"
                      />
                    </Field>

                    <Field label="Email" error={errors.email}>
                      <input
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        value={state.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={`input-underline ${errors.email ? "invalid" : ""}`}
                        placeholder="nome@esempio.it"
                      />
                    </Field>

                    <Field
                      label="Telefono / WhatsApp (opzionale)"
                      error={errors.phone}
                    >
                      <input
                        type="tel"
                        autoComplete="tel"
                        inputMode="tel"
                        value={state.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={`input-underline ${errors.phone ? "invalid" : ""}`}
                        placeholder="+39 ..."
                      />
                    </Field>

                    <Field label="Comune (opzionale)" error={errors.city}>
                      <input
                        type="text"
                        autoComplete="address-level2"
                        value={state.city}
                        onChange={(e) => update("city", e.target.value)}
                        className={`input-underline ${errors.city ? "invalid" : ""}`}
                        placeholder="San Giorgio di Piano, Funo, ..."
                      />
                    </Field>

                    <Field label="Obiettivo principale" error={errors.goal}>
                      <select
                        value={state.goal}
                        onChange={(e) => update("goal", e.target.value)}
                        className={`input-underline appearance-none ${errors.goal ? "invalid" : ""}`}
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23c49a6c'><path d='M5.25 7.5L10 12.25 14.75 7.5z'/></svg>\")",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0 center",
                          backgroundSize: "14px",
                          paddingRight: "1.75rem",
                        }}
                      >
                        <option value="" style={{ background: "#1a1a1a" }}>
                          Seleziona (opzionale)
                        </option>
                        {goals.map((g) => (
                          <option key={g} value={g} style={{ background: "#1a1a1a" }}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Frequenza desiderata" error={errors.frequency}>
                      <select
                        value={state.frequency}
                        onChange={(e) => update("frequency", e.target.value)}
                        className={`input-underline appearance-none ${errors.frequency ? "invalid" : ""}`}
                        style={{
                          backgroundImage:
                            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23c49a6c'><path d='M5.25 7.5L10 12.25 14.75 7.5z'/></svg>\")",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 0 center",
                          backgroundSize: "14px",
                          paddingRight: "1.75rem",
                        }}
                      >
                        <option value="" style={{ background: "#1a1a1a" }}>
                          Seleziona (opzionale)
                        </option>
                        {frequencies.map((f) => (
                          <option key={f} value={f} style={{ background: "#1a1a1a" }}>
                            {f}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <div className="sm:col-span-2">
                      <label className="flex items-start gap-3 text-sm text-[var(--color-cream)]/80">
                        <input
                          type="checkbox"
                          checked={state.consent}
                          onChange={(e) => update("consent", e.target.checked)}
                          className="mt-1 h-4 w-4 flex-shrink-0 accent-[var(--color-accent)]"
                        />
                        <span className="leading-relaxed">
                          Accetto di essere ricontattato/a per ricevere
                          informazioni sul progetto FLOW Pilates Studio.
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="mt-2 text-xs text-[#e0a48a]">
                          {errors.consent}
                        </p>
                      )}
                    </div>

                    {submitError && (
                      <div
                        className="sm:col-span-2 rounded-md border border-[#e0a48a]/30 bg-[#e0a48a]/5 px-4 py-3 text-sm text-[#e0a48a]"
                        role="alert"
                      >
                        {submitError}
                      </div>
                    )}

                    <div className="sm:col-span-2 sm:mt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        aria-busy={submitting}
                        className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-accent)] px-8 py-4 text-sm font-medium tracking-wide text-[var(--color-dark)] transition hover:bg-[var(--color-accent-soft)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                      >
                        {submitting ? (
                          <>
                            <span
                              aria-hidden="true"
                              className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-dark)]/30 border-t-[var(--color-dark)]"
                            />
                            Invio in corso...
                          </>
                        ) : (
                          <>
                            Voglio ricevere l'accesso founder
                            <span
                              aria-hidden="true"
                              className="transition-transform group-hover:translate-x-0.5"
                            >
                              →
                            </span>
                          </>
                        )}
                      </button>
                      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-cream)]/45">
                        Iscrizione gratuita · Nessun obbligo di acquisto
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-cream)]/55">
        {label}
      </span>
      {children}
      {error && (
        <p className="mt-2 text-xs text-[#e0a48a]">{error}</p>
      )}
    </label>
  );
}

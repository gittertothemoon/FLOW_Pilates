import { useState, type FormEvent } from "react";

const STORAGE_KEY = "flow_pilates_founder_leads_v1";

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

type Lead = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  goal: string;
  frequency: string;
};

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
  if (!state.phone.trim()) {
    errors.phone = "Inserisci un recapito telefonico.";
  } else if (state.phone.replace(/\D/g, "").length < 7) {
    errors.phone = "Numero non valido.";
  }
  if (!state.city.trim()) errors.city = "Indica il tuo comune.";
  if (!state.goal) errors.goal = "Seleziona un obiettivo.";
  if (!state.frequency) errors.frequency = "Seleziona una frequenza.";
  if (!state.consent) errors.consent = "Conferma il consenso per continuare.";
  return errors;
}

function generateId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function FounderForm() {
  const [state, setState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
    if (errors[key]) {
      setErrors((e) => {
        const next = { ...e };
        delete next[key];
        return next;
      });
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = validate(state);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }

    const lead: Lead = {
      id: generateId(),
      createdAt: new Date().toISOString(),
      name: state.name.trim(),
      email: state.email.trim().toLowerCase(),
      phone: state.phone.trim(),
      city: state.city.trim(),
      goal: state.goal,
      frequency: state.frequency,
    };

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const list: Lead[] = raw ? JSON.parse(raw) : [];
      list.push(lead);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch (err) {
      console.warn("Impossibile salvare il lead in localStorage", err);
    }

    console.log("[FLOW] Founder lead:", lead);

    setSubmitted(true);
    setState(initialState);
    setErrors({});
  }

  return (
    <section
      id="founder-list"
      className="bg-[var(--color-bg)] scroll-mt-12"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent-deep)]">
              Lista founder
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Entra nella lista founder
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              FLOW sta raccogliendo le prime adesioni per capire quante
              persone sono realmente interessate a uno studio Pilates
              Reformer a San Giorgio di Piano.
            </p>

            <ul className="mt-8 space-y-3">
              {benefitsList.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-[var(--color-ink)]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[var(--radius-card)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-lift)] sm:p-10">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-start gap-4 py-6"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-2xl text-[var(--color-accent-deep)]">
                    ✓
                  </span>
                  <h3 className="font-display text-2xl text-[var(--color-ink)] sm:text-3xl">
                    Grazie, sei nella lista prioritaria.
                  </h3>
                  <p className="text-base leading-relaxed text-[var(--color-muted)]">
                    Ti ricontatteremo appena FLOW aprirà le prime prove
                    founder. Nel frattempo conserviamo il tuo posto in
                    priorità.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-medium text-[var(--color-accent-deep)] underline-offset-4 hover:underline"
                  >
                    Iscrivi un'altra persona
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <Field
                    label="Nome"
                    error={errors.name}
                    className="sm:col-span-1"
                  >
                    <input
                      type="text"
                      autoComplete="given-name"
                      value={state.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass(!!errors.name)}
                      placeholder="Il tuo nome"
                    />
                  </Field>

                  <Field
                    label="Email"
                    error={errors.email}
                    className="sm:col-span-1"
                  >
                    <input
                      type="email"
                      autoComplete="email"
                      value={state.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass(!!errors.email)}
                      placeholder="nome@esempio.it"
                    />
                  </Field>

                  <Field
                    label="Telefono / WhatsApp"
                    error={errors.phone}
                    className="sm:col-span-1"
                  >
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={state.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass(!!errors.phone)}
                      placeholder="+39 ..."
                    />
                  </Field>

                  <Field
                    label="Comune"
                    error={errors.city}
                    className="sm:col-span-1"
                  >
                    <input
                      type="text"
                      autoComplete="address-level2"
                      value={state.city}
                      onChange={(e) => update("city", e.target.value)}
                      className={inputClass(!!errors.city)}
                      placeholder="San Giorgio di Piano, Funo, ..."
                    />
                  </Field>

                  <Field
                    label="Obiettivo principale"
                    error={errors.goal}
                    className="sm:col-span-1"
                  >
                    <select
                      value={state.goal}
                      onChange={(e) => update("goal", e.target.value)}
                      className={selectClass(!!errors.goal)}
                    >
                      <option value="" disabled>
                        Seleziona un obiettivo
                      </option>
                      {goals.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="Frequenza desiderata"
                    error={errors.frequency}
                    className="sm:col-span-1"
                  >
                    <select
                      value={state.frequency}
                      onChange={(e) => update("frequency", e.target.value)}
                      className={selectClass(!!errors.frequency)}
                    >
                      <option value="" disabled>
                        Seleziona una frequenza
                      </option>
                      {frequencies.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <label className="flex items-start gap-3 text-sm text-[var(--color-ink)]">
                      <input
                        type="checkbox"
                        checked={state.consent}
                        onChange={(e) => update("consent", e.target.checked)}
                        className="mt-1 h-4 w-4 flex-shrink-0 rounded border-[var(--color-line)] accent-[var(--color-accent-deep)]"
                      />
                      <span className="leading-relaxed">
                        Accetto di essere ricontattato/a per ricevere
                        informazioni sul progetto FLOW Pilates Studio.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-2 text-xs text-[#a64a2c]">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-medium text-white transition hover:bg-[var(--color-accent-deep)] sm:w-auto"
                    >
                      Voglio ricevere l'accesso founder
                    </button>
                    <p className="mt-3 text-xs text-[var(--color-muted)]">
                      Iscrizione gratuita. Nessun obbligo di acquisto.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
        {label}
      </span>
      {children}
      {error && <p className="mt-1.5 text-xs text-[#a64a2c]">{error}</p>}
    </label>
  );
}

function inputClass(invalid: boolean) {
  return [
    "block w-full rounded-xl border bg-[var(--color-bg-soft)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition",
    "placeholder:text-[var(--color-muted)]/70",
    invalid
      ? "border-[#d49377] focus:border-[#a64a2c]"
      : "border-[var(--color-line)] focus:border-[var(--color-accent)] focus:bg-white",
  ].join(" ");
}

function selectClass(invalid: boolean) {
  return `${inputClass(invalid)} pr-10 appearance-none bg-[length:14px] bg-no-repeat bg-[right_1rem_center] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%236f6a63%22><path d=%22M5.25 7.5L10 12.25 14.75 7.5z%22/></svg>')]`;
}

# FLOW Pilates Studio

Landing page di **pre-apertura** per uno studio boutique di Pilates Reformer a
San Giorgio di Piano (Bologna). Raccoglie la _lista prioritaria_ dei futuri
clienti tramite un form di waitlist, validando la domanda prima dell'apertura.

🔗 **Live:** https://flow-pilates-studio-bo.vercel.app

## Cosa fa

- **Landing single-page** mobile-first: hero, racconto del metodo (problema →
  soluzione → benefici), pricing placeholder, zona servita, FAQ.
- **Form lista prioritaria** con validazione client-side, label flottanti,
  gestione duplicati e stato di successo animato. I lead vengono salvati su
  **Supabase** e notificati via email con una **Vercel Edge Function** (Resend).
- **Micro-interazioni** con un componente `Reveal` basato su `IntersectionObserver`
  (fade-in allo scroll), senza librerie di animazione.

## Stack

| Ambito | Tecnologia |
| --- | --- |
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (config CSS-first) |
| Dati | Supabase (tabella `founder_leads`, RLS insert-only) |
| Serverless | Vercel Edge Function + Resend (notifica lead) |
| Hosting | Vercel |

## Sviluppo

```bash
npm install
cp .env.example .env.local   # imposta le variabili Supabase
npm run dev                  # http://localhost:5173
```

### Script

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Dev server Vite |
| `npm run build` | Type-check (`tsc -b`) + build di produzione |
| `npm run lint` | ESLint |
| `npm run preview` | Anteprima della build |

## Variabili d'ambiente

| Variabile | Dove | Scopo |
| --- | --- | --- |
| `VITE_SUPABASE_URL` | client | URL progetto Supabase |
| `VITE_SUPABASE_ANON_KEY` | client | Publishable key (protetta da RLS) |
| `RESEND_API_KEY` | edge function | Invio email di notifica lead |
| `NOTIFICATION_EMAIL` | edge function | Destinatario delle notifiche |

Le chiavi server stanno solo in env su Vercel — vedi `.env.example` per il
template. Nessun segreto è committato nel repo.

## Struttura

```
src/
├── App.tsx              # composizione della pagina
├── components/          # sezioni (Hero, FounderForm, FAQ, ...) + Reveal
└── lib/supabase.ts      # client + tipi
api/notify-lead.ts       # edge function: rate-limit + validazione + email
supabase/migrations/     # schema tabella lead
```

# FLOW Pilates Studio

![FLOW Pilates Studio](public/photos/flow-photo3-group-class.jpg)

**Pre-launch waitlist** landing page for a boutique Reformer Pilates studio in
San Giorgio di Piano (Bologna, Italy). It collects the studio's *priority list*
of future clients through a waitlist form, validating demand before opening.

🔗 **Live:** https://flow-pilates-studio-bo.vercel.app

## What it does

- **Mobile-first single-page** landing: hero, method narrative
  (problem → solution → benefits), placeholder pricing, served area, FAQ.
- **Waitlist form** with client-side validation, floating labels, duplicate
  handling and an animated success state. Leads are stored in **Supabase** and
  notified by email through a **Vercel Edge Function** (Resend).
- **Micro-interactions** via a `Reveal` component built on `IntersectionObserver`
  (scroll fade-in), with no animation library.

## Stack

| Area | Technology |
| --- | --- |
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Data | Supabase (`founder_leads` table, insert-only RLS) |
| Serverless | Vercel Edge Function + Resend (lead notification) |
| Hosting | Vercel |

## Development

```bash
npm install
cp .env.example .env.local   # set the Supabase variables
npm run dev                  # http://localhost:5173
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Vite dev server |
| `npm run build` | Type-check (`tsc -b`) + production build |
| `npm run lint` | ESLint |
| `npm run preview` | Preview the production build |

## Environment variables

| Variable | Where | Purpose |
| --- | --- | --- |
| `VITE_SUPABASE_URL` | client | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | client | Publishable key (protected by RLS) |
| `RESEND_API_KEY` | edge function | Sends lead notification emails |
| `NOTIFICATION_EMAIL` | edge function | Notification recipient |

Server keys live only in Vercel env vars — see `.env.example` for the template.
No secrets are committed to the repo.

## Structure

```
src/
├── App.tsx              # page composition
├── components/          # sections (Hero, FounderForm, FAQ, ...) + Reveal
└── lib/supabase.ts      # client + types
api/notify-lead.ts       # edge function: rate-limit + validation + email
supabase/migrations/     # lead table schema
```

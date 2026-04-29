-- founder_leads: pre-launch waitlist for FLOW Pilates Studio.
create extension if not exists "pgcrypto";

create table if not exists public.founder_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text not null,
  email text not null unique,
  telefono text,
  comune text,
  obiettivo text,
  frequenza text
);

alter table public.founder_leads enable row level security;

-- Anonymous form submissions: insert-only, no read.
create policy "anon can insert leads"
  on public.founder_leads
  for insert
  to anon
  with check (true);

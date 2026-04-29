import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

export const isSupabaseConfigured = Boolean(url && anonKey);

export type FounderLeadInsert = {
  nome: string;
  email: string;
  telefono: string | null;
  comune: string | null;
  obiettivo: string | null;
  frequenza: string | null;
};

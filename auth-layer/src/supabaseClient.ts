// lib/supabaseClient.ts
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

let supabaseClient: ReturnType<typeof createClientComponentClient> | null = null;

// Client optimisé pour Next.js qui utilise les cookies au lieu de localStorage
export const createSupabaseBrowserClient = () => {
  if (supabaseClient) {
    return supabaseClient;
  }

  supabaseClient = createClientComponentClient();
  return supabaseClient;
}

// Exporter une instance unique pour la compatibilité avec le code existant
export const supabase = createSupabaseBrowserClient();
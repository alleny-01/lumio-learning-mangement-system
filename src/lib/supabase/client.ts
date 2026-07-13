import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/shared/types/database';

const supabaseURL: string = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey : string = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient<Database>(supabaseURL, supabasePublishableKey);

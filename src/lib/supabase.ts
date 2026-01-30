import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
	if (_supabase) return _supabase;

	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
	const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

	if (!supabaseUrl || !supabaseAnonKey) {
		// Return null when env vars are missing so builds and static analysis
		// that import this module don't throw during build-time.
		return null;
	}

	_supabase = createClient(supabaseUrl, supabaseAnonKey);
	return _supabase;
}

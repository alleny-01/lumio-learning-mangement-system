import { supabase } from "@/lib/supabase/client";
import type { Inserts, Updates } from "@/shared/types/database";

export function getProfile(userId: string) {
  return supabase.from("profiles").select("*").eq("id", userId).single();
}

export function upsertProfile(profile: Inserts<"profiles">) {
  return supabase.from("profiles").upsert(profile).select("*").single();
}

export function updateProfile(userId: string, values: Updates<"profiles">) {
  return supabase
    .from("profiles")
    .update({ ...values, updated_at: new Date().toISOString() })
    .eq("id", userId)
    .select("*")
    .single();
}

export function removeAvatar(userId: string) {
  return updateProfile(userId, { avatar_url: null });
}

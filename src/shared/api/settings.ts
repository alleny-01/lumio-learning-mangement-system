import { supabase } from "@/lib/supabase/client";
import { updateProfile } from "./profiles";
import type { ThemePreference } from "@/shared/types/database";

export function updateThemePreference(userId: string, theme: ThemePreference) {
  return updateProfile(userId, { theme_preference: theme });
}

export function uploadAvatar(path: string, file: File) {
  return supabase.storage.from("avatars").upload(path, file, { upsert: true });
}

export async function requestAccountDeletion() {
  return {
    error: new Error(
      "Account deletion must be handled by a secure Supabase Edge Function or server route.",
    ),
  };
}

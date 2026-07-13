import { supabase } from "@/lib/supabase/client";

export function getCurrentSession() {
  return supabase.auth.getSession();
}

export function signInWithPassword(email: string, password: string) {
  return supabase.auth.signInWithPassword({
    email: email.toLowerCase(),
    password,
  });
}

export function signUpWithPassword(email: string, password: string) {
  return supabase.auth.signUp({
    email: email.toLowerCase(),
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/email-confirmation`,
    },
  });
}

export function signInWithGoogle() {
  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
}

export function signOut() {
  return supabase.auth.signOut();
}

export function resendVerificationEmail(email: string) {
  return supabase.auth.resend({
    type: "signup",
    email: email.toLowerCase(),
  });
}

export function requestPasswordReset(email: string) {
  return supabase.auth.resetPasswordForEmail(email.toLowerCase(), {
    redirectTo: `${window.location.origin}/reset-password`,
  });
}

export function updatePassword(password: string) {
  return supabase.auth.updateUser({ password });
}

export function exchangeAuthCodeForSession(code: string) {
  return supabase.auth.exchangeCodeForSession(code);
}

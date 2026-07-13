import { supabase } from "@/lib/supabase/client";

export function getEnrollment(userId: string, courseId: string) {
  return supabase
    .from("enrollments")
    .select("*")
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .maybeSingle();
}

export function enrollInCourse(userId: string, courseId: string) {
  return supabase
    .from("enrollments")
    .insert({ user_id: userId, course_id: courseId })
    .select("*")
    .single();
}

export function listUserEnrollments(userId: string) {
  return supabase
    .from("enrollments")
    .select("*, courses(*)")
    .eq("user_id", userId)
    .order("last_watched_at", { ascending: false, nullsFirst: false });
}

export function updateEnrollmentProgress(
  userId: string,
  courseId: string,
  values: {
    progress_percent?: number;
    last_watched_lesson_id?: string | null;
    completed_at?: string | null;
  },
) {
  return supabase
    .from("enrollments")
    .update({ ...values, last_watched_at: new Date().toISOString() })
    .eq("user_id", userId)
    .eq("course_id", courseId)
    .select("*")
    .single();
}

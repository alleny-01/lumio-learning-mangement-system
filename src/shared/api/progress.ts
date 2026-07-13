import { supabase } from "@/lib/supabase/client";

export function listLessonProgress(userId: string, courseId: string) {
  return supabase
    .from("lesson_progress")
    .select("*")
    .eq("user_id", userId)
    .eq("course_id", courseId);
}

export function markLessonComplete(
  userId: string,
  courseId: string,
  lessonId: string,
) {
  const completedAt = new Date().toISOString();
  return supabase
    .from("lesson_progress")
    .upsert({
      user_id: userId,
      course_id: courseId,
      lesson_id: lessonId,
      is_completed: true,
      completed_at: completedAt,
      updated_at: completedAt,
    })
    .select("*")
    .single();
}

export function listStudyActivity(
  userId: string,
  fromDate: string,
  toDate: string,
) {
  return supabase
    .from("study_activity")
    .select("*")
    .eq("user_id", userId)
    .gte("activity_date", fromDate)
    .lte("activity_date", toDate)
    .order("activity_date", { ascending: true });
}

export function upsertStudyActivity(values: {
  user_id: string;
  activity_date: string;
  minutes_studied?: number;
  lessons_completed?: number;
}) {
  return supabase
    .from("study_activity")
    .upsert(values, { onConflict: "user_id,activity_date" })
    .select("*")
    .single();
}

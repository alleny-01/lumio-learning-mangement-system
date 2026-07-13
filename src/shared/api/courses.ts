import { supabase } from "@/lib/supabase/client";
import type {
  CourseDifficulty,
  CourseStatus,
  Inserts,
  Updates,
} from "@/shared/types/database";

export interface CourseFilters {
  search?: string;
  category?: string;
  difficulty?: CourseDifficulty;
  minimumRating?: number;
  page?: number;
  pageSize?: number;
}

export interface LessonDraftInput {
  id?: string;
  module_id: string;
  title: string;
  description?: string | null;
  youtube_url: string;
  duration_minutes?: number;
  core_concept?: string | null;
  sort_order: number;
}

export function listPublishedCourses(filters: CourseFilters = {}) {
  const page = filters.page ?? 1;
  const pageSize = filters.pageSize ?? 12;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  let query = supabase
    .from("courses")
    .select("*, profiles!courses_instructor_id_fkey(*)", { count: "exact" })
    .eq("status", "published")
    .order("published_at", { ascending: false, nullsFirst: false })
    .range(from, to);

  if (filters.search) {
    query = query.ilike("title", `%${filters.search}%`);
  }

  if (filters.category) {
    query = query.eq("category", filters.category);
  }

  if (filters.difficulty) {
    query = query.eq("difficulty", filters.difficulty);
  }

  if (filters.minimumRating) {
    query = query.gte("rating", filters.minimumRating);
  }

  return query;
}

export function getCourse(courseId: string) {
  return supabase
    .from("courses")
    .select(
      "*, profiles!courses_instructor_id_fkey(*), course_modules(*, lessons(*)), lesson_resources(*)",
    )
    .eq("id", courseId)
    .single();
}

export function listInstructorCourses(instructorId: string) {
  return supabase
    .from("courses")
    .select("*, course_modules(count), lessons(count)")
    .eq("instructor_id", instructorId)
    .order("updated_at", { ascending: false });
}

export function createCourseDraft(course: Inserts<"courses">) {
  return supabase
    .from("courses")
    .insert({ ...course, status: course.status ?? "draft" })
    .select("*")
    .single();
}

export function updateCourse(courseId: string, values: Updates<"courses">) {
  return supabase
    .from("courses")
    .update({ ...values, updated_at: new Date().toISOString() })
    .eq("id", courseId)
    .select("*")
    .single();
}

export function setCourseStatus(courseId: string, status: CourseStatus) {
  return updateCourse(courseId, {
    status,
    published_at: status === "published" ? new Date().toISOString() : null,
  });
}

export function deleteCourse(courseId: string) {
  return supabase.from("courses").delete().eq("id", courseId);
}

export function upsertCourseModules(modules: Inserts<"course_modules">[]) {
  return supabase.from("course_modules").upsert(modules).select("*");
}

export function deleteCourseModule(moduleId: string) {
  return supabase.from("course_modules").delete().eq("id", moduleId);
}

export function upsertLessons(courseId: string, lessons: LessonDraftInput[]) {
  const rows = lessons.map((lesson) => ({ ...lesson, course_id: courseId }));
  return supabase.from("lessons").upsert(rows).select("*");
}

export function deleteLesson(lessonId: string) {
  return supabase.from("lessons").delete().eq("id", lessonId);
}

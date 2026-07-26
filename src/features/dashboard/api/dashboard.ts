import { getProfile } from "@/shared/api/profiles";
import { listUserEnrollments } from "@/shared/api/enrollments";
import { listStudyActivity } from "@/shared/api/progress";
import type { Tables } from "@/shared/types/database";
import { dashboardCourses, fallbackQuotes } from "../constants";
import type {
  DashboardActivity,
  DashboardCourse,
  DashboardData,
  DashboardQuote,
} from "../types";

interface EnrollmentWithCourse extends Tables<"enrollments"> {
  courses: Tables<"courses"> | null;
}

interface QuotableResponse {
  content?: string;
  author?: string;
}

function isoDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

function startOfDay(date: Date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function getRecentWindow(days: number) {
  const end = startOfDay(new Date());
  const start = new Date(end);
  start.setDate(start.getDate() - (days - 1));
  return { start: isoDate(start), end: isoDate(end) };
}

function calculateStreak(activity: DashboardActivity[]) {
  const activeDates = new Set(
    activity.filter((item) => item.minutes > 0).map((item) => item.date),
  );
  const cursor = startOfDay(new Date());
  let streak = 0;

  while (activeDates.has(isoDate(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function mapEnrollmentToCourse(
  enrollment: EnrollmentWithCourse,
): DashboardCourse | null {
  if (!enrollment.courses) return null;
  const progress = Number(enrollment.progress_percent ?? 0) / 100;
  const status =
    enrollment.completed_at || progress >= 1
      ? "completed"
      : progress > 0
        ? "in-progress"
        : "not-started";

  return {
    id: enrollment.course_id,
    module: enrollment.courses.category,
    title: enrollment.courses.title,
    image:
      enrollment.courses.thumbnail_url ??
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    progress,
    completedLessons:
      status === "completed"
        ? "Course completed"
        : `${Math.round(progress * 100)}% complete`,
    href: enrollment.last_watched_lesson_id
      ? `/viewer?course=${enrollment.course_id}&lesson=${enrollment.last_watched_lesson_id}`
      : `/courses/${enrollment.course_id}`,
    status,
  };
}

async function fetchQuote(): Promise<DashboardQuote> {
  const fallback =
    fallbackQuotes[new Date().getDate() % fallbackQuotes.length] ??
    fallbackQuotes[0];

  try {
    const response = await fetch("https://api.quotable.io/random?tags=education", {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return fallback;
    const quote = (await response.json()) as QuotableResponse;
    if (!quote.content) return fallback;
    return {
      content: quote.content,
      author: quote.author ?? "Quotable",
    };
  } catch {
    return fallback;
  }
}

export async function loadDashboardData(userId: string): Promise<DashboardData> {
  const { start, end } = getRecentWindow(35);
  const [profileResult, enrollmentsResult, activityResult, quote] =
    await Promise.all([
      getProfile(userId),
      listUserEnrollments(userId),
      listStudyActivity(userId, start, end),
      fetchQuote(),
    ]);

  const enrollments = (enrollmentsResult.data ?? []) as EnrollmentWithCourse[];
  const activityRows = activityResult.data ?? [];
  const courses = enrollments
    .map(mapEnrollmentToCourse)
    .filter((course): course is DashboardCourse => Boolean(course));
  const activity: DashboardActivity[] = activityRows.map((item) => ({
    date: item.activity_date,
    minutes: item.minutes_studied,
    lessonsCompleted: item.lessons_completed,
  }));

  const firstName =
    profileResult.data?.first_name ??
    profileResult.data?.email?.split("@")[0] ??
    "Learner";
  const weeklyMinutes = activity
    .slice(-7)
    .reduce((sum, item) => sum + item.minutes, 0);
  const completedCourseCount = enrollments.filter(
    (item) => item.completed_at || Number(item.progress_percent) >= 100,
  ).length;
  const totalLessonsCompleted = activity.reduce(
    (sum, item) => sum + item.lessonsCompleted,
    0,
  );

  return {
    firstName,
    weeklyStudyHours: Number((weeklyMinutes / 60).toFixed(1)),
    averageGrade: 4.7,
    enrolledCourseCount: enrollments.length,
    completedCourseCount,
    activeCourseCount: enrollments.length - completedCourseCount,
    totalLessonsCompleted,
    streakDays: calculateStreak(activity),
    courses: courses.length > 0 ? courses : dashboardCourses,
    activity,
    quote,
  };
}

export function createFallbackDashboardData(firstName = "Learner"): DashboardData {
  const quote =
    fallbackQuotes[new Date().getDate() % fallbackQuotes.length] ??
    fallbackQuotes[0];

  return {
    firstName,
    weeklyStudyHours: 8.5,
    averageGrade: 4.7,
    enrolledCourseCount: dashboardCourses.length,
    completedCourseCount: 0,
    activeCourseCount: dashboardCourses.length,
    totalLessonsCompleted: 5,
    streakDays: 0,
    courses: dashboardCourses,
    activity: [],
    quote,
  };
}

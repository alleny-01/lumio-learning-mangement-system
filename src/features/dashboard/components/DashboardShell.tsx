import { DashboardHero } from "./DashboardHero";
import { DailyQuoteModal } from "./DailyQuoteModal";
import { LearningStreakModal } from "./LearningStreakModal";
import { StatsGrid } from "./StatsGrid";
import { CoursesSection } from "./CoursesSection";
import { CreateCoursePrompt } from "./CreateCoursePrompt";
import { ContinueLearningCard } from "./ContinueLearningCard";
import { WeeklyGoalCard } from "./WeeklyGoalCard";
import { Calendar } from "@/components/ui/Calendar";
import type { DashboardData, DashboardStat } from "../types";

function buildStats(data: DashboardData): DashboardStat[] {
  const courseCompletion =
    data.enrolledCourseCount > 0
      ? data.completedCourseCount / data.enrolledCourseCount
      : 0;

  return [
    {
      id: "study-time",
      label: "Weekly Study Time",
      value: `${data.weeklyStudyHours} hours`,
      chartType: "line",
      accent: "#f4d94f",
    },
    {
      id: "avg-grade",
      label: "Avg Grade",
      value: `${data.averageGrade}/5`,
      chartType: "line",
      accent: "#93c5fd",
    },
    {
      id: "modules",
      label: "Lessons Completed",
      value: String(data.totalLessonsCompleted),
      chartType: "ring",
      accent: "#67e8f9",
      progress: Math.min(data.totalLessonsCompleted / 25, 1),
    },
    {
      id: "courses",
      label: "Courses Completed",
      value: `${data.completedCourseCount}/${data.enrolledCourseCount}`,
      chartType: "ring",
      accent: "#d8b4fe",
      progress: courseCompletion,
    },
  ];
}

export function DashboardShell({
  data,
}: {
  data: DashboardData;
}): React.JSX.Element {
  const recentCourses = data.courses.slice(0, 3);

  return (
    <div className="min-h-screen text-on-surface antialiased">
      <DailyQuoteModal quote={data.quote} />
      <LearningStreakModal
        streakDays={data.streakDays}
        activity={data.activity}
      />

      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-6 space-y-6">
        <DashboardHero
          firstName={data.firstName}
          weeklyStudyHours={data.weeklyStudyHours}
        />

        <StatsGrid stats={buildStats(data)} />

        <section className="grid gap-4 xl:grid-cols-2">
          <ContinueLearningCard courses={data.courses} />
          <WeeklyGoalCard
            activity={data.activity}
            weeklyStudyHours={data.weeklyStudyHours}
          />
        </section>

        <CoursesSection courses={recentCourses} />

        <CreateCoursePrompt />

        {/* Full-width Calendar section at the bottom */}
        <section className="w-full">
          <Calendar selected={new Date()} />
        </section>
      </div>
    </div>
  );
}

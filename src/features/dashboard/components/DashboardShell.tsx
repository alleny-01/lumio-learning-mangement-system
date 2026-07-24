import { DashboardHero } from "./DashboardHero";
import { StatsGrid } from "./StatsGrid";
import { CoursesSection } from "./CoursesSection";
import { ScheduleSection } from "./ScheduleSection";
import { RightPanel } from "./RightPanel";
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

export function DashboardShell({ data }: { data: DashboardData }): React.JSX.Element {
  const recentCourses = data.courses.slice(0, 3);

  return (
    <div className="min-h-screen text-on-surface antialiased">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6">
          <div className="space-y-4">
            {/* <TopBar /> */}
            <DashboardHero
              firstName={data.firstName}
              weeklyStudyHours={data.weeklyStudyHours}
              quote={data.quote}
            />

            <StatsGrid stats={buildStats(data)} />

            <CoursesSection courses={recentCourses} />

            <ScheduleSection activity={data.activity} />
          </div>

          <div className="space-y-4 lg:pt-10">
            <RightPanel streakDays={data.streakDays} activity={data.activity} />
          </div>
        </div>
      </div>
    </div>
  );
}

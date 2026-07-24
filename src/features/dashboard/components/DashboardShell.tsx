import { DashboardHero } from "./DashboardHero";
import { StatsGrid } from "./StatsGrid";
import { CoursesSection } from "./CoursesSection";
import { ScheduleSection } from "./ScheduleSection";
import { RightPanel } from "./RightPanel";
import { dashboardStats, dashboardCourses } from "../constants";

export function DashboardShell(): React.JSX.Element {
  return (
    <div className="min-h-screen text-on-surface antialiased">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6">
          <div className="space-y-4">
            {/* <TopBar /> */}
            <DashboardHero />

            <StatsGrid stats={dashboardStats} />

            <CoursesSection courses={dashboardCourses} />

            <ScheduleSection />
          </div>

          <div className="space-y-4 lg:pt-10">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

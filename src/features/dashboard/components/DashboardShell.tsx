import { DashboardHero } from "./DashboardHero";
import { TopBar } from "./TopBar";
import { StatsGrid } from "./StatsGrid";
import { CoursesSection } from "./CoursesSection";
import { ScheduleSection } from "./ScheduleSection";
import { RightPanel } from "./RightPanel";
import { dashboardStats, dashboardCourses } from "../constants";
import Sidebar from "@/components/layout/Sidebar"

export function DashboardShell(): React.JSX.Element {
  return (
    <div className="min-h-screen text-on-surface antialiased">
      <main className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-1 lg:py-4">
        <Sidebar />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-6 pl-10">
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
      </main>
    </div>
  );
}

import { ChevronLeft, ChevronRight } from "lucide-react";
import LearningStreakCard from "@/features/dashboard/components/LearningStreakCard";
import { notifications } from "../constants";
import type { DashboardActivity } from "../types";

const calendarGrid = [
  [29, 30, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 1, 2],
];

interface RightPanelProps {
  streakDays: number;
  activity: DashboardActivity[];
}

function activityForDay(activity: DashboardActivity[], day: number) {
  const target = `2026-07-${String(day).padStart(2, "0")}`;
  return activity.find((item) => item.date === target);
}

export function RightPanel({ streakDays, activity }: RightPanelProps) {
  return (
    <aside className="space-y-4">
      <LearningStreakCard streakDays={streakDays} activity={activity} />

      <section className="rounded-2xl border border-border/60 bg-surface-container-lowest p-4 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.35)]">
        <div className="mb-4 flex items-center justify-between">
          <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/60 bg-surface-container-lowest text-on-surface shadow-sm">
            <ChevronLeft className="size-3.5" />
          </button>
          <h2 className="text-[13px] font-semibold text-on-surface">
            July 2025
          </h2>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/60 bg-surface-container-lowest text-on-surface shadow-sm">
            <ChevronRight className="size-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-outline-variant">
          {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
            <div key={day} className="py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="mt-2 space-y-1">
          {calendarGrid.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-7 gap-1 text-center text-[10px]"
            >
              {row.map((day) => {
                const isMuted = day < 3 || (rowIndex === 4 && day > 28);
                const dayActivity = activityForDay(activity, day);
                const isRange = Boolean(dayActivity?.minutes);
                const isSelected =
                  day === new Date().getDate() && !isMuted;
                return (
                  <button
                    key={`${rowIndex}-${day}`}
                    title={
                      dayActivity
                        ? `${dayActivity.minutes} minutes studied`
                        : "No study activity"
                    }
                    className={`flex h-7 items-center justify-center rounded-md transition-colors ${isSelected ? "bg-primary text-white shadow-sm" : isRange ? "bg-primary/10 text-on-surface" : "text-on-surface"} ${isMuted ? "text-outline-variant" : ""}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-surface-container-lowest p-4 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.35)]">
        <h2 className="mb-4 text-[14px] font-semibold text-on-surface">
          Notifications
        </h2>

        <div className="space-y-4">
          {notifications.map((item) => (
            <article key={item.id} className="flex gap-3">
              <div
                className={`mt-1 h-10 w-px rounded-full ${
                  item.id === "research"
                    ? "bg-violet-500"
                    : item.id === "feedback"
                      ? "bg-emerald-500"
                      : item.id === "module"
                        ? "bg-sky-500"
                        : "bg-amber-500"
                }`}
              />
              <div className="min-w-0 flex-1 border-b border-border/40 pb-3 last:border-b-0 last:pb-0">
                <p className="text-[10px] font-light text-outline-variant">
                  {item.tag}
                </p>
                <h3 className="mt-1 text-[12px] font-medium leading-tight text-on-surface">
                  {item.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-outline-variant">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full border border-current" />
                    {item.time}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full border border-current" />
                    {item.date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </aside>
  );
}

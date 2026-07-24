import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import type { DashboardActivity } from "../types";

type TimeTicks = string;

const timeTicks : TimeTicks[] = ["0m", "15m", "30m", "45m", "60m"];

function buildWeek(activity: DashboardActivity[]) {
  const activityByDate = new Map(activity.map((item) => [item.date, item]));
  const today = new Date();
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));
    const iso = date.toISOString().slice(0, 10);
    return {
      label: date.toLocaleDateString(undefined, { weekday: "short" }),
      date: date.getDate(),
      isSelected: index === 6,
      activity: activityByDate.get(iso),
    };
  });
}

export function ScheduleSection({ activity }: { activity: DashboardActivity[] }) {
  const week = buildWeek(activity);
  const maxMinutes = Math.max(60, ...week.map((day) => day.activity?.minutes ?? 0));

  return (
    <section className="rounded-2xl border border-border/40 bg-surface-container-lowest p-4 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.35)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-[14px] font-semibold text-on-surface">Schedule</h2>

        <button className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-surface-container-lowest px-3 py-1.5 text-[11px] text-on-surface shadow-sm">
          <CalendarDays className="size-3.5 text-outline" />
          Study activity
        </button>
      </div>

      <div className="mb-4 grid grid-cols-7 items-stretch gap-2">
        {week.map((day) => (
          <div
            key={`${day.label}-${day.date}`}
            className={`rounded-2xl px-3 py-2 text-center transition-colors ${day.isSelected ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-transparent text-on-surface"}`}
          >
            <p className="text-[11px] font-light opacity-70">{day.label}</p>
            <p className="mt-1 text-[16px] font-semibold leading-none">
              {day.date}
            </p>
            <p className="mt-1 text-[10px] font-light opacity-70">
              {day.activity ? `${day.activity.minutes}m` : "0m"}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[22px_repeat(5,minmax(0,1fr))] gap-2">
        <div className="flex items-start justify-center pt-10 text-[10px] text-outline-variant">
          <button className="flex h-6 w-6 items-center justify-center rounded-md border border-border/60 bg-surface-container-lowest text-on-surface shadow-sm">
            <ChevronLeft className="size-3.5" />
          </button>
        </div>

        <div className="col-span-5 grid gap-2 overflow-hidden rounded-2xl border border-border/40 bg-surface-container-low px-2 py-3">
          <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-light text-outline-variant">
            {timeTicks.map((tick) => (
              <div key={tick}>{tick}</div>
            ))}
          </div>

          <div className="relative h-37.5">
            <div className="absolute left-0 right-0 top-4 h-px bg-border/50" />
            <div className="absolute left-0 right-0 top-12 h-px bg-border/50" />
            <div className="absolute left-0 right-0 top-20 h-px bg-border/50" />
            <div className="absolute left-0 right-0 top-28 h-px bg-border/50" />

            {week.map((day, index) => {
              const minutes = day.activity?.minutes ?? 0;
              const height = Math.max(12, (minutes / maxMinutes) * 112);
              return (
              <div
                key={day.label}
                className="absolute bottom-8 rounded-lg border border-black/5 bg-cyan-200 px-2 py-1.5 text-[10px] shadow-sm"
                style={{
                  left: `${index * 14.2}%`,
                  width: "12%",
                  height,
                }}
              >
                <p className="font-medium text-slate-900">{day.label}</p>
                <p className="mt-0.5 font-semibold text-slate-950">
                  {minutes}m
                </p>
              </div>
            )})}

            <div className="absolute bottom-3 left-[20%] text-[10px] text-outline-variant">
              9:00
            </div>
            <div className="absolute bottom-3 left-[40%] text-[10px] text-outline-variant">
              10:00
            </div>
            <div className="absolute bottom-3 left-[60%] text-[10px] text-outline-variant">
              11:00
            </div>
            <div className="absolute bottom-3 left-[80%] text-[10px] text-outline-variant">
              12:00
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center pt-10">
          <button className="flex h-6 w-6 items-center justify-center rounded-md border border-border/60 bg-surface-container-lowest text-on-surface shadow-sm">
            <ChevronRight className="size-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

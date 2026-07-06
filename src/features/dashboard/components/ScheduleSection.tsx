import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { scheduleEvents, scheduleWeek } from "../constants";

type TimeTicks = string;

const timeTicks : TimeTicks[] = ["9:00", "10:00", "11:00", "12:00", "13:00"];

function AvatarStack({ avatars = [] }: { avatars?: string[] }) {
  return (
    <div className="flex -space-x-2">
      {avatars.slice(0, 2).map((avatar, index) => (
        <img
          key={avatar}
          src={avatar}
          alt=""
          className={`relative h-5 w-5 rounded-full border border-white object-cover ${index === 0 ? "z-10" : "z-0"}`}
        />
      ))}
    </div>
  );
}

export function ScheduleSection() {
  return (
    <section className="rounded-2xl border border-border/40 bg-surface-container-lowest p-4 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.35)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-[14px] font-semibold text-on-surface">Schedule</h2>

        <button className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-surface-container-lowest px-3 py-1.5 text-[11px] text-on-surface shadow-sm">
          <CalendarDays className="size-3.5 text-outline" />
          July 2025
        </button>
      </div>

      <div className="mb-4 grid grid-cols-7 items-stretch gap-2">
        {scheduleWeek.map((day) => (
          <div
            key={`${day.label}-${day.date}`}
            className={`rounded-2xl px-3 py-2 text-center transition-colors ${day.isSelected ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-transparent text-on-surface"}`}
          >
            <p className="text-[11px] font-light opacity-70">{day.label}</p>
            <p className="mt-1 text-[16px] font-semibold leading-none">
              {day.date}
            </p>
            <p className="mt-1 text-[10px] font-light opacity-70">
              {day.isSelected
                ? "3 classes"
                : day.date % 2 === 0
                  ? "1 class"
                  : day.date % 3 === 0
                    ? "4 classes"
                    : "2 classes"}
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

            {scheduleEvents.map((event) => (
              <div
                key={event.id}
                className={`absolute rounded-lg border border-black/5 px-2 py-1.5 text-[10px] shadow-sm ${
                  event.id === "webinar"
                    ? "left-0 top-9 w-[20%] bg-amber-200"
                    : event.id === "frameworks"
                      ? "left-[20%] top-20 w-[20%] bg-pink-200"
                      : "left-[40%] top-7 w-[40%] bg-cyan-200"
                }`}
              >
                <p className="font-medium text-slate-900">{event.category}</p>
                <p className="mt-0.5 font-semibold text-slate-950">
                  {event.title}
                </p>
                <p className="mt-0.5 text-[9px] text-slate-700">{event.time}</p>
                <div className="mt-2 flex items-center justify-between gap-2">
                  <AvatarStack avatars={event.avatarStack} />
                  <span className="text-[9px] text-slate-700">
                    {event.duration}
                  </span>
                </div>
              </div>
            ))}

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

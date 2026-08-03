import { useEffect, useState } from "react";
import { Flame, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { DashboardActivity } from "../types";

interface LearningStreakModalProps {
  streakDays: number;
  activity: DashboardActivity[];
}

const dayLabels = ["S", "M", "T", "W", "T", "F", "S"];

function buildWeek(activity: DashboardActivity[]) {
  const activeDates = new Set(
    activity.filter((item) => item.minutes > 0).map((item) => item.date),
  );
  const today = new Date();
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (6 - index));
    return {
      label: dayLabels[date.getDay()] ?? "",
      completed: activeDates.has(date.toISOString().slice(0, 10)),
      dateStr: date.toLocaleDateString(undefined, {
        weekday: "short",
        day: "numeric",
      }),
    };
  });
}

export function LearningStreakModal({
  streakDays,
  activity,
}: LearningStreakModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const days = buildWeek(activity);
  const studiedToday = days[days.length - 1]?.completed ?? false;

  useEffect(() => {
    const todayKey = new Date().toISOString().slice(0, 10);
    const storageKey = `lumio_streak_modal_seen_${todayKey}`;
    const alreadySeen = sessionStorage.getItem(storageKey);

    // Auto popup if studied today and not yet seen today
    if (studiedToday && !alreadySeen) {
      setIsOpen(true);
    }
  }, [studiedToday]);

  const handleClose = () => {
    const todayKey = new Date().toISOString().slice(0, 10);
    const storageKey = `lumio_streak_modal_seen_${todayKey}`;
    sessionStorage.setItem(storageKey, "true");
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed floating button at bottom-right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 rounded-full border border-outline-variant/30 bg-surface-container-lowest/90 px-4 py-2.5 text-[12px] font-medium text-on-surface shadow-[0_10px_30px_-10px_rgba(15,23,42,0.25)] backdrop-blur-md transition-all hover:scale-105 hover:bg-surface-container-lowest hover:shadow-2xl"
        >
          <div className="flex size-6 items-center justify-center rounded-full bg-primary/10">
            <Flame className="size-3.5 fill-primary text-primary animate-pulse" />
          </div>
          <span>View Streak ({streakDays}d)</span>
        </button>
      </div>

      {/* Wide Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-xl overflow-hidden rounded-sm border border-outline-variant/30 bg-surface-container-lowest p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close streak modal"
              className="absolute right-4 top-4 z-20 inline-flex size-8 items-center justify-center rounded-sm text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            {/* Modal Body */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Flame Icon Badge */}
              <div className="relative">
                <div className="absolute inset-0 animate-pulse rounded-full bg-primary/30 blur-xl" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-gradient-to-br from-primary/15 via-surface-container-lowest to-surface-container-low shadow-md">
                  <Flame
                    className="h-8 w-8 fill-primary text-primary"
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Number & Label */}
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-on-surface sm:text-5xl">
                {streakDays}
              </h2>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-on-surface-variant">
                Day Learning Streak
              </p>

              {/* 7-Day Track Row */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {days.map((day, index) => (
                  <div
                    key={`${day.label}-${index}`}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full text-[12px] font-semibold transition-all",
                        day.completed
                          ? "bg-primary text-white shadow-sm"
                          : "border border-outline-variant/40 bg-surface-container-low text-on-surface-variant",
                      )}
                    >
                      {day.label}
                    </div>
                    <span className="text-[9px] font-light text-on-surface-variant">
                      {day.dateStr}
                    </span>
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="mt-6 space-y-1">
                <p className="text-[15px] font-medium text-on-surface">
                  {studiedToday
                    ? "🔥 Streak active for today!"
                    : "Keep your streak alive!"}
                </p>
                <p className="max-w-md text-[12px] font-light leading-relaxed text-on-surface-variant">
                  {studiedToday
                    ? "Great work! You completed learning activity today. Consistency is your superpower."
                    : "Watch a lesson or mark learning content complete to extend your streak today."}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-7 w-full sm:w-auto">
                <Button
                  type="button"
                  size="lg"
                  className="w-full px-8"
                  onClick={handleClose}
                >
                  Got it, Keep Going
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

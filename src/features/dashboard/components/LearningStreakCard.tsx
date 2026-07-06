import { Flame } from "lucide-react";

const days = [
  { label: "M", completed: true },
  { label: "T", completed: true },
  { label: "W", completed: true },
  { label: "T", completed: true },
  { label: "F", completed: false },
  { label: "S", completed: false },
  { label: "S", completed: false },
];

export default function LearningStreakCard() {
  return (
    <div className="group relative overflow-hidden rounded-sm border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-7 shadow-[0_15px_50px_-18px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-18px_rgba(79,70,229,0.22)]">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-lime-300/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.6),transparent_55%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,23,42,.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,.15) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Icon */}
        <div className="relative">
          <div className="absolute inset-0 animate-pulse rounded-full bg-lime-400/40 blur-xl" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-lime-200 bg-gradient-to-br from-lime-100 via-lime-50 to-white shadow-lg">
            <Flame
              className="h-9 w-9 fill-lime-500 text-lime-500"
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Number */}
        <h2 className="mt-7 text-5xl font-semibold tracking-tight text-slate-900">
          {0}
        </h2>

        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500">
          Day Streak
        </p>

        {/* Days */}
        <div className="mt-8 flex items-center gap-2">
          {days.map((day) => (
            <div
              key={day.label}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-semibold transition-all
                ${
                  day.completed
                    ? "border border-lime-200 bg-gradient-to-br from-lime-300 to-lime-400 text-slate-900 shadow-[0_8px_20px_rgba(163,230,53,0.35)]"
                    : "border border-slate-200 bg-slate-100 text-slate-400"
                }`}
            >
              {day.label}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Message */}
        <p className="text-center text-[14px] font-medium text-slate-800">
          Don't break your streak 🔥
        </p>

        <p className="mt-2 max-w-[240px] text-center text-[12px] leading-6 text-slate-500">
          You're only{" "}
          <span className="font-semibold text-lime-600">
            15 minutes
          </span>{" "}
          away from extending your learning streak today.
        </p>

        {/* Progress */}
        <div className="mt-7 flex items-center gap-2">
          <div className="h-1.5 w-10 rounded-full bg-lime-400" />
          <div className="h-1.5 w-4 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
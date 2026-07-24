import type { DashboardQuote } from "../types";

interface DashboardHeroProps {
  firstName: string;
  weeklyStudyHours: number;
  quote: DashboardQuote;
}

export function DashboardHero({
  firstName,
  weeklyStudyHours,
  quote,
}: DashboardHeroProps): React.JSX.Element {
  return (
    <section className="relative overflow-hidden rounded-sm bg-on-surface px-5 py-6 text-white shadow-[0_16px_40px_-20px_rgba(68,56,190,0.7)] sm:px-6 sm:py-5">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-transparent to-primary/10" />

        {/* Glows */}
        <div className="absolute -left-16 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-[90px]" />
        <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-violet-400/20 blur-[90px]" />
        <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-[100px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,.18) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,.18) 1px, transparent 1px)
        `,
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        {/* Welcome */}
        <div className="max-w-2xl">
          <h1 className="text-[18px] font-normal tracking-[-0.02em] sm:text-[20px]">
            Welcome back, {firstName}
          </h1>

          <p className="mt-2 text-[12px] leading-6 tracking-wide text-white/80 sm:text-[13px]">
            You logged{" "}
            <span className="font-medium text-white">
              {weeklyStudyHours} study hours
            </span>{" "}
            this week. Keep showing up and your progress graph will do the
            bragging for you.
          </p>
        </div>

        {/* Quote of the Day */}
        <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-primary-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.5 11H6.75A2.75 2.75 0 019.5 8.25V6A4 4 0 005.5 10v5a3 3 0 003 3h1a2 2 0 002-2v-3a2 2 0 00-2-2zm8 0h-2.75A2.75 2.75 0 0117.5 8.25V6A4 4 0 0013.5 10v5a3 3 0 003 3h1a2 2 0 002-2v-3a2 2 0 00-2-2z" />
              </svg>
            </div>

            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/60">
              Quote of the Day
            </span>
          </div>

          <p className="text-[13px] leading-6 text-white/90">
            &quot;{quote.content}&quot;
          </p>

          <p className="mt-3 text-[11px] text-white/50">
            - {quote.author}
          </p>
        </div>
      </div>
    </section>
  );
}

import {
  GraduationCap,
  CalendarRange,
  ChartColumnBig,
  Layers3,
} from "lucide-react";
import { motion } from "framer-motion";
import type { DashboardStat } from "../types";

const linePaths: Record<string, string> = {
  "study-time":
    "M0 18C12 18 18 16 28 17C38 18 44 23 54 22C64 21 70 10 80 9C90 8 96 18 108 17C116 16 122 9 132 7",
  "avg-grade":
    "M0 22C12 22 18 15 28 18C38 21 44 8 54 9C64 10 70 22 80 22C90 22 96 11 108 9C118 7 124 20 136 14",
};

function RingChart({ value, accent }: { value: number; accent: string }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - circumference * value;

  return (
    <svg
      className="h-12 w-12 -rotate-90"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r={radius}
        className="fill-none stroke-surface-container-high"
        strokeWidth="5"
      />
      <circle
        cx="24"
        cy="24"
        r={radius}
        className="fill-none"
        stroke={accent}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
      />
    </svg>
  );
}

function MiniLine({ stat }: { stat: DashboardStat }) {
  return (
    <svg
      className="h-12 w-full max-w-[118px]"
      viewBox="0 0 136 28"
      aria-hidden="true"
    >
      <path
        d={linePaths[stat.id]}
        className="fill-none"
        stroke={stat.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d={`${linePaths[stat.id]} L136 28 L0 28 Z`}
        className={
          stat.id === "study-time" ? "fill-yellow-100/80" : "fill-sky-100/80"
        }
      />
    </svg>
  );
}

function StatIcon({ stat }: { stat: DashboardStat }) {
  if (stat.id === "study-time")
    return <CalendarRange className="size-4 text-yellow-500" />;
  if (stat.id === "avg-grade")
    return <ChartColumnBig className="size-4 text-sky-500" />;
  if (stat.id === "modules")
    return <Layers3 className="size-4 text-cyan-500" />;
  return <GraduationCap className="size-4 text-violet-500" />;
}

export function StatsGrid({ stats }: { stats: DashboardStat[] }) {
  return (
    <section>
      <div className="mb-3 mt-5 flex items-center gap-2">
        <h2 className="text-[14px] font-semibold text-on-surface">
          STATS
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {stats.map((stat) => (
          <motion.article
            key={stat.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-sm border border-border/40 bg-surface-container-lowest p-4 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.35)] transition-shadow hover:shadow-[0_18px_36px_-28px_rgba(53,37,205,0.35)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-surface-container-low">
                  <StatIcon stat={stat} />
                </div>
                <p className="text-[10px] font-light text-outline-variant">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-[15px] font-medium tracking-[-0.02em] text-on-surface">
                  {stat.value}
                </p>
              </div>

              {stat.chartType === "ring" ? (
                <RingChart
                  value={stat.progress ?? 0}
                  accent={stat.accent}
                />
              ) : (
                <div className="w-[118px] pt-3">
                  <MiniLine stat={stat} />
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

import { Lock, LogOut } from "lucide-react";
import { courseChapters } from "../constants";

export function ViewerSidebar(): React.JSX.Element {
  return (
    <aside className="flex min-h-screen w-full flex-col  bg-on-surface text-inverse-on-surface lg:w-74 lg:shrink-0">
      <div className="border-b border-white/10 px-4 py-4">
        <div className="inline-flex items-center gap-2 rounded-sm bg-white/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-inverse-on-surface">
          <span className="text-[11px] font-bold text-secondary-container">
            Lumio
          </span>
          <span className="rounded-sm bg-white/20 px-1.5 py-0.5 text-[8px] tracking-[0.12em] text-white/90">
            Scholar
          </span>
        </div>

        <div className="mt-4">
          <h1 className="text-[22px] font-light leading-tight tracking-[-0.03em] text-white">
            Advanced UI Architecture
          </h1>
          <p className="mt-1 text-[10px] font-light text-white/55">
            Module 4: Spatial Design Systems
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-5">
        {courseChapters.map((chapter) => (
          <section key={chapter.id} className="mb-6 last:mb-0">
            <div className="mb-2 flex items-center justify-between px-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
              <span>{chapter.title}</span>
              <span>{chapter.lessonsLabel}</span>
            </div>

            <div className="space-y-2">
              {chapter.lessons.map((lesson) => {
                const isActive = Boolean(lesson.active);
                const isLocked = Boolean(lesson.locked) || chapter.locked;

                return (
                  <button
                    key={lesson.id}
                    className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                      isActive
                        ? "bg-primary/20 text-white shadow-[0_10px_20px_-14px_rgba(53,37,205,0.8)]"
                        : "bg-white/0 text-white/78 hover:bg-white/6"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                        isActive ? "bg-secondary-container" : "bg-primary"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-inverse-surface" />
                    </span>

                    <span className="min-w-0 flex-1 text-[12px] leading-tight tracking-[-0.01em]">
                      {lesson.title}
                    </span>

                    {isLocked ? (
                      <Lock className="size-3.5 text-white/30" />
                    ) : isActive ? (
                      <span className="h-2 w-2 rounded-full bg-secondary-container shadow-[0_0_0_3px_rgba(76,215,246,0.15)]" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="border-t border-white/10 p-4">
        <div className="rounded-sm bg-primary-container p-4 text-white shadow-[0_14px_30px_-20px_rgba(53,37,205,0.9)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
            Current Progress
          </p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <div>
              <p className="text-[28px] font-medium leading-none">42%</p>
              <p className="mt-1 text-[10px] font-light text-white/70">
                6/14 Lessons
              </p>
            </div>
            <div className="relative h-16 w-16 shrink-0 rounded-full border-4 border-secondary-container/35">
              <div className="absolute inset-0 rounded-full border-4 border-secondary-container border-t-transparent border-r-transparent rotate-230" />
            </div>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-[42%] rounded-full bg-secondary-container" />
          </div>
        </div>

        <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-[12px] text-white/75 transition-colors hover:bg-white/8">
          <LogOut className="size-4" />
          Exit Course
        </button>
      </div>
    </aside>
  );
}

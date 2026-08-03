import type { ViewerLesson } from "../types";

interface ViewerHeaderProps {
  lesson: ViewerLesson;
  onMarkComplete: () => void;
  isCompleting: boolean;
}

export function ViewerHeader({
  lesson,
  onMarkComplete,
  isCompleting,
}: ViewerHeaderProps) {
  return (
    <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-start gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-[15px] font-medium tracking-[-0.02em] text-on-background">
              {lesson.title}
            </h2>
          </div>
          <p className="mt-0.5 text-[10px] font-light text-on-surface-variant">
            {lesson.durationMinutes} Minutes
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 self-start lg:self-auto">
        <button
          type="button"
          onClick={onMarkComplete}
          disabled={lesson.completed || isCompleting}
          className="rounded-sm bg-primary-container px-4 py-2 text-[11px] font-medium text-white shadow-[0_10px_25px_-15px_rgba(53,37,205,0.85)] transition-transform hover:scale-[1.01] disabled:opacity-60"
        >
          {lesson.completed ? "Completed" : isCompleting ? "Saving..." : "Mark as Complete"}
        </button>
      </div>
    </header>
  );
}

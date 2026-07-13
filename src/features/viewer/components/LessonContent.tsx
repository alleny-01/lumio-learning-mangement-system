import { BookOpenCheck, CircleCheckBig } from "lucide-react";
import { executionSteps } from "../constants";

export function LessonContent() {
  return (
    <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_260px]">
      <div className="space-y-4">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-container">
            Core Concept
          </p>
          <h1 className="mt-3 text-[28px] font-medium tracking-[-0.04em] text-on-background sm:text-[34px]">
            Understanding Surface Hierarchy
          </h1>
          <p className="mt-3 max-w-2xl text-[13px] font-light leading-7 text-on-surface-variant">
            The transition from standard industrial layouts to the “Digital
            Atelier” starts with how we perceive depth in this lesson. We
            explore the layering principle, which dictates that depth should be
            achieved through tonal shifts rather than traditional shadows.
          </p>
        </div>

        <div className="rounded-[24px] border border-border/40 bg-surface-container-lowest p-5 shadow-[0_12px_30px_-26px_rgba(15,23,42,0.35)]">
          <div className="mb-5 flex items-center gap-2">
            <BookOpenCheck className="size-4 text-primary" />
            <h2 className="text-[14px] font-semibold text-on-background">
              Key Execution Steps
            </h2>
          </div>

          <div className="space-y-4">
            {executionSteps.map((step, index) => (
              <div key={step.id} className="flex items-start gap-3">
                <div
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${index === 0 ? "bg-tertiary-fixed text-on-tertiary-fixed" : index === 1 ? "bg-primary/15 text-primary" : "bg-surface-container-high text-outline"}`}
                >
                  {index === 0 ? (
                    <CircleCheckBig className="size-4" />
                  ) : (
                    <span className="text-[11px] font-semibold">
                      {index + 2}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  <p className="text-[12px] font-medium text-on-background">
                    {step.title}
                  </p>
                  <p className="max-w-xl text-[12px] font-light leading-6 text-on-surface-variant">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="max-w-2xl text-[13px] font-light leading-7 text-on-surface-variant">
          By treating the UI as a series of physical layers—much like stacked
          sheets of premium vellum—we create an environment that feels
          weightless yet deeply organized. This editorial approach is what
          separates high-end spatial products from basic utility apps.
        </p>
      </div>

      <div className="space-y-4">
        <div className="overflow-hidden rounded-sm border border-border/40 bg-surface-container-lowest shadow-[0_12px_30px_-26px_rgba(15,23,42,0.35)]">
          <div className="px-4 pt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-on-surface">
              Next Lesson
            </p>
          </div>
          <div className="p-4">
            <div className="relative overflow-hidden rounded-sm bg-[radial-gradient(circle_at_30%_25%,#7f3fb6_0%,#4d1f78_35%,#1d1026_78%)] p-4 shadow-[0_14px_30px_-24px_rgba(53,37,205,0.65)]">
              <div className="flex h-28 items-center justify-center gap-4 overflow-hidden">
                <div className="h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f0d7ff_0%,#8755b2_45%,#351b4e_100%)] blur-[0.2px]" />
                <div className="h-20 w-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f2d0ff_0%,#8b57c3_45%,#311842_100%)]" />
                <div className="h-16 w-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#f0d7ff_0%,#8755b2_45%,#351b4e_100%)]" />
              </div>
            </div>
            <p className="mt-3 text-[13px] font-semibold text-on-background">
              Asymmetric Visual Rhythm
            </p>
            <p className="mt-1 text-[10px] font-light text-on-surface-variant">
              Coming up next · 15:00 mins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

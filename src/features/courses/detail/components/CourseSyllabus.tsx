import { useState } from "react";
import { ChevronDown, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CourseModule } from "../types/types";
import { motion, AnimatePresence } from "framer-motion";

interface CourseSyllabusProps {
  modules: CourseModule[];
}

export const CourseSyllabus: React.FC<CourseSyllabusProps> = ({ modules }) => {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    if (modules.length > 0) {
      initial.add(modules[0].id);
    }
    return initial;
  });

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => {
      const next = new Set(prev);
      if (next.has(moduleId)) {
        next.delete(moduleId);
      } else {
        next.add(moduleId);
      }
      return next;
    });
  };

  return (
    <motion.section
      id="course-syllabus"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-8 w-full space-y-6"
    >
      <div>
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary mb-2">
          Curriculum
        </h2>
        <h3 className="text-xl sm:text-2xl font-light text-on-surface">
          Course Modules & Lessons
        </h3>
      </div>

      <div className="space-y-3">
        {modules.map((module, index) => {
          const isExpanded = expandedModules.has(module.id);
          const lessonItems = module.lessonItems ?? [];

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-sm  bg-surface-container-lowest overflow-hidden transition-all shadow-sm"
            >
              {/* Module Header Button */}
              <button
                type="button"
                onClick={() => toggleModule(module.id)}
                className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-surface-container-low"
              >
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-[12px] font-semibold text-primary">
                    {String(module.number).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[14px] font-light text-on-surface truncate">
                      {module.title}
                    </h4>
                    <p className="mt-0.5 text-[11px] font-light text-on-surface-variant">
                      {module.lessons} Lessons • {module.duration}
                    </p>
                  </div>
                </div>

                <ChevronDown
                  size={16}
                  strokeWidth={1.5}
                  className={cn(
                    "shrink-0 text-on-surface-variant transition-transform duration-200",
                    isExpanded ? "rotate-180" : "rotate-0",
                  )}
                />
              </button>

              {/* Animated Collapsible Lesson Info List */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-outline-variant/20 p-4 sm:p-5 space-y-2 bg-surface-container-low/40">
                      {lessonItems.length > 0 ? (
                        lessonItems.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center justify-between gap-3 rounded-sm p-2 text-[12px] transition-colors hover:bg-surface-container-lowest"
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              <PlayCircle className="size-4 shrink-0 text-primary" />
                              <span className="truncate font-light text-on-surface">
                                {lesson.title}
                              </span>
                            </div>
                            <span className="shrink-0 text-[11px] font-light text-on-surface-variant">
                              {lesson.duration}
                            </span>
                          </div>
                        ))
                      ) : (
                        <p className="text-[12px] font-light italic text-on-surface-variant">
                          {module.lessons} lessons included in this module.
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

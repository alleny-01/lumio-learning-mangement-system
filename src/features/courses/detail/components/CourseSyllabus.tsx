import React, { useState } from "react";
import type { CourseModule } from "../types/types";

interface CourseSyllabusProps {
  modules: CourseModule[];
}

export const CourseSyllabus: React.FC<CourseSyllabusProps> = ({ modules }) => {
  const [expandedModule, setExpandedModule] = useState<string | null>(
    modules.find((m) => m.isExpanded)?.id || null,
  );

  const toggleModule = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <section id="course-syllabus" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 w-full">
      <div className="mb-12 sm:mb-16">
        <h2 className="text-xs font-label font-bold text-primary uppercase tracking-[0.2em] mb-3 sm:mb-4">
          Curriculum
        </h2>
        <h3 className="text-2xl font-extralight">Master the System</h3>
      </div>

      <div className="space-y-4">
        {modules.map((module) => {
          const isExpanded = expandedModule === module.id;
          const isHighlighted = isExpanded;

          return (
            <div
              key={module.id}
              className={`group rounded-sm overflow-hidden transition-all ${
                isHighlighted
                  ? "bg-surface-container-lowest border border-primary/20 shadow-lg shadow-primary/5"
                  : "bg-surface"
              }`}
            >
              <div
                onClick={() => toggleModule(module.id)}
                className={`flex items-center justify-between p-6 sm:p-8 cursor-pointer transition-colors ${
                  isHighlighted
                    ? "bg-surface-container-low"
                    : "bg-surface-container-low hover:bg-surface-container-high"
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-6 flex-1">
                  <span
                    className={`text-md font-extralight ${
                      isHighlighted ? "text-primary" : "text-outline"
                    }`}
                  >
                    {String(module.number).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-extralight truncate">
                      {module.title}
                    </h4>
                    <p className="text-xs font-extralight  text-on-surface-variant">
                      {module.lessons} Lessons • {module.duration}
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-primary flex-shrink-0 ml-4">
                  {isExpanded ? "expand_less" : "expand_more"}
                </span>
              </div>

              {isExpanded && module.lessonItems && (
                <div className="p-6 sm:p-8 space-y-4 sm:space-y-6 border-t border-outline-variant/20">
                  {module.lessonItems.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between group/item cursor-pointer hover:text-primary transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className="font-extralight text-on-surface group-hover/item:text-primary transition-colors text-sm truncate">
                          {lesson.title}
                        </span>
                      </div>
                      <span className="text-xs text-on-surface-variant font-label ml-4 flex-shrink-0">
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

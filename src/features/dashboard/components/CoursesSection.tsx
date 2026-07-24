import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { DashboardCourse } from "../types";

interface CoursesSectionProps {
  courses: DashboardCourse[];
  title?: string;
  showAllLink?: boolean;
}

export function CoursesSection({
  courses,
  title = "My courses",
  showAllLink = true,
}: CoursesSectionProps) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between gap-3">
        <h2 className="text-[14px] font-semibold text-on-surface">
          {title}
        </h2>
        {showAllLink && (
          <Link
            to="/learning"
            className="inline-flex items-center gap-1 text-[12px] text-primary-container font-medium text-primary transition-colors hover:text-primary/80"
          >
            All courses
            <ChevronRight className="size-3.5" />
          </Link>
        )}
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={course.href}
            className="overflow-hidden rounded-sm border border-border/40 bg-surface-container-lowest shadow-[0_8px_20px_-18px_rgba(15,23,42,0.35)]"
          >
            <div className="aspect-4/3 overflow-hidden bg-surface-container-low">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-3 px-4 py-3">
              <div>
                <p className="text-[10px] font-light text-outline-variant">
                  {course.module}
                </p>
                <h3 className="mt-1 text-[13px] font-semibold leading-tight text-on-surface">
                  {course.title}
                </h3>
              </div>

              <div className="space-y-1.5">
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-container-high">
                  <div
                    className="h-full rounded-full bg-primary-container"
                    style={{ width: `${Math.round(course.progress * 100)}%` }}
                  />
                </div>
                <div className="flex items-center justify-between gap-3 text-[10px] font-light text-outline-variant">
                  <p>{course.completedLessons}</p>
                  <span className="capitalize">{course.status.replace("-", " ")}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

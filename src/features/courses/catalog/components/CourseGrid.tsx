import { CourseCard } from "../ui/CourseCard";
import type { Course } from "../types/types";

export function CourseGrid({ courses }: { courses: Course[] }) {
  if (!courses.length) {
    return (
      <section className="rounded-sm border border-border/40 bg-surface-container-lowest p-8 text-center">
        <h2 className="text-sm font-medium text-on-surface">No courses found</h2>
        <p className="mt-2 text-xs font-light text-on-surface-variant">
          Try a different search term or loosen your filters.
        </p>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </section>
  );
}

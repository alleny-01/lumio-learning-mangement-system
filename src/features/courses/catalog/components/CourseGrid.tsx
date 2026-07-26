import { CourseCard } from "../ui/CourseCard";
import type { Course } from "../types/types";
import { Skeleton } from "@/components/ui/Skeleton";

export function CourseGrid({
  courses,
  isLoading = false,
}: {
  courses: Course[];
  isLoading?: boolean;
}) {
  if (isLoading) {
    return (
      <section className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <article key={index} className="px-2">
            <Skeleton className="mb-4 aspect-[4/3] w-full" />
            <Skeleton className="h-3 w-20" />
            <Skeleton className="mt-3 h-4 w-4/5" />
            <Skeleton className="mt-2 h-3 w-full" />
            <Skeleton className="mt-2 h-3 w-2/3" />
            <div className="mt-4 flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
            </div>
          </article>
        ))}
      </section>
    );
  }

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

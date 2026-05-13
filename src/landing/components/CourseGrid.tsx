import type { CompactCourse, FeaturedCourse } from "../types/types";
import { CompactCourseCard, FeaturedCourseCard } from "./ui/CourseCards";

interface CourseGridProps {
  featuredCourse: FeaturedCourse;
  compactCourses: CompactCourse[];
}

function CourseGrid({ featuredCourse, compactCourses }: CourseGridProps) {
  return (
    <section className="px-6 py-24 bg-surface-container-low/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-on-surface-variant font-label uppercase tracking-widest text-xs font-semibold">
              Featured Tracks
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Curated for Excellence
            </h2>
          </div>
          <a
            className="text-primary text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
            href="#"
          >
            View All Courses{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 group">
            <FeaturedCourseCard course={featuredCourse} />
          </div>

          <div className="md:col-span-5 flex flex-col gap-8">
            {compactCourses.map((course) => (
              <CompactCourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseGrid;

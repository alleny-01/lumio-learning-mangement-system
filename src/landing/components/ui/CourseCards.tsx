import type { CompactCourse, FeaturedCourse } from "../../types/types";
import Badge from "./Badge";

interface FeaturedCourseCardProps {
  course: FeaturedCourse;
}

interface CompactCourseCardProps {
  course: CompactCourse;
}

export function FeaturedCourseCard({ course }: FeaturedCourseCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 h-full flex flex-col">
      <div className="relative h-72 w-full overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          src={course.image}
          alt={course.imageAlt}
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
            {course.tag}
          </Badge>
        </div>
      </div>
      <div className="p-8 flex-grow">
        <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
        <p className="text-on-surface-variant mb-6 line-clamp-2">
          {course.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">
                {course.instructorIcon}
              </span>
            </div>
            <span className="text-sm font-semibold">
              {course.instructorName}
            </span>
          </div>
          <span className="text-primary font-bold">{course.price}</span>
        </div>
      </div>
    </div>
  );
}

export function CompactCourseCard({ course }: CompactCourseCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group">
      <div className="flex h-full flex-col sm:flex-row">
        <div className="sm:w-2/5 relative overflow-hidden">
          <img
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
            src={course.image}
            alt={course.imageAlt}
          />
        </div>
        <div className="p-6 sm:w-3/5">
          <h3 className="text-lg font-bold mb-2">{course.title}</h3>
          <p className="text-on-surface-variant text-sm mb-4">
            {course.description}
          </p>
          <div className="flex items-center justify-between">
            <Badge className={course.levelClassName}>{course.levelLabel}</Badge>
            <span className="text-on-surface font-bold text-sm">
              {course.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Course } from "../types/types";
import { GoArrowUpRight } from "react-icons/go";

interface CourseCardProps {
  course: Course;
}

const badgeColorMap = {
  tertiary: "bg-tertiary-fixed text-on-tertiary-fixed",
  secondary: "bg-secondary-container text-on-secondary-container",
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="group cursor-pointer px-2">
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-surface-container">
        <img
          alt={course.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={course.imageUrl}
        />
        {course.badge && (
          <div
            className={`absolute top-3 left-3 px-3 py-1 text-[10px] font-bold rounded-full uppercase ${
              course.badgeColor ? badgeColorMap[course.badgeColor] : ""
            }`}
          >
            {course.badge}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex items-center gap-1 text-primary-container text-xs font-semibold">
          <span
            className="material-symbols-outlined text-[14px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span>{course.rating}</span>
          <span className="text-on-surface-variant/60 font-medium ml-1">
            ({course.reviews})
          </span>
        </div>
        <h3 className="text-sm font-extralight group-hover:text-primary transition-colors leading-snug">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-xs font-medium">
          {course.instructor}
        </p>
        <div className="pt-2 flex items-center justify-end">
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">
            <GoArrowUpRight className="text-[17px]" />
          </span>
        </div>
      </div>
    </div>
  );
}

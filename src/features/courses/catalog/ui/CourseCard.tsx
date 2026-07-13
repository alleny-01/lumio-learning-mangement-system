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
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-sm bg-surface-container">
        <img
          alt={course.imageAlt}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-110"
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
        <div className="flex items-center gap-1 text-tertiary-fixed-dim text-xs font-semibold">
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
        <h3 className="text-md text-on-surface font-normal upper group-hover:text-primary transition-colors leading-snug">
          {course.title}
        </h3>

        <p className="font-light text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur unde nemo libero quisquam sunt autem nesciunt eveniet repudiandae magni eaque laboriosam, vitae hic minima nis</p>
        <p className="text-[13px] text-muted-foreground mt-3 font-medium">
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

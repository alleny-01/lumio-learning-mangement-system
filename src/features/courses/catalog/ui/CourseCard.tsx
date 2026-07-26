import type { Course } from "../types/types";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CourseCardProps {
  course: Course;
}

const badgeColorMap = {
  tertiary: "bg-tertiary-fixed text-on-tertiary-fixed",
  secondary: "bg-secondary-container text-on-secondary-container",
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28 }}
    >
    <Link className="group block px-2" to={`/courses/${course.id}`}>
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

        <p className="line-clamp-3 font-light text-xs">{course.description}</p>
        <p className="text-[13px] text-muted-foreground mt-3 font-medium">
          {course.instructor}
        </p>
        <div className="flex flex-wrap gap-2 pt-2 text-[10px] font-light text-on-surface-variant">
          <span className="rounded-sm bg-surface-container-low px-2 py-1 capitalize">
            {course.difficulty}
          </span>
          <span className="rounded-sm bg-surface-container-low px-2 py-1">
            {course.duration}
          </span>
          <span className="rounded-sm bg-surface-container-low px-2 py-1">
            {course.enrolledCount} learners
          </span>
        </div>
        <div className="pt-2 flex items-center justify-end">
          <span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">
            <GoArrowUpRight className="text-[17px]" />
          </span>
        </div>
      </div>
    </Link>
    </motion.div>
  );
}

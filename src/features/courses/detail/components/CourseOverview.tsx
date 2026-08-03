import type { CourseDetail } from "../types/types";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

interface CourseOverviewProps {
  course: CourseDetail;
}

export const CourseOverview: React.FC<CourseOverviewProps> = ({ course }) => {
  return (
    <section className="bg-surface-container-low py-12 sm:py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          {/* Left Column — Course Description */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Course Overview
            </h2>
            <h3 className="text-xl sm:text-xl font-light leading-normal text-on-surface">
              {course.description}
            </h3>
          </div>

          {/* Right Column — What You'll Learn */}
          <div className="lg:col-span-7">
            <div className="rounded-sm bg-surface-container-lowest p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-light text-on-surface">
                What you'll learn
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, index) => (
                  <motion.div
                    key={outcome.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex gap-3 items-start"
                  >
                    <div className="flex size-5 shrink-0 items-center justify-center text-primary mt-0.5">
                      <Check className="size-3 stroke-[2.5]" />
                    </div>
                    <span className="text-[12px] font-light text-on-surface leading-relaxed">
                      {outcome.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

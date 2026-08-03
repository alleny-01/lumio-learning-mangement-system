import type { Instructor } from "../types/types";
import { motion } from "framer-motion";

interface InstructorSectionProps {
  instructor: Instructor;
}

export const InstructorSection: React.FC<InstructorSectionProps> = ({
  instructor,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className=" p-6 sm:p-8 space-y-4"
      >
        <p className="text-[10px] font-normal uppercase tracking-[0.2em] text-on-surface-variant">
          Course Instructor
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="size-16 rounded-full object-cover border border-outline-variant/40 shrink-0"
          />
          <div className="space-y-2 min-w-0 flex-1">
            <h3 className="text-[16px] font-normal text-on-surface">
              {instructor.name}
            </h3>
            <p className="text-[12px] font-light leading-relaxed text-on-surface-variant max-w-3xl">
              {instructor.bio}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

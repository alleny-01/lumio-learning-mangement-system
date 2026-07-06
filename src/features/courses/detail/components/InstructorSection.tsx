import React from "react";
import type { Instructor } from "../types/types";

interface InstructorSectionProps {
  instructor: Instructor;
}

export const InstructorSection: React.FC<InstructorSectionProps> = ({
  instructor,
}) => {
  return (
    <div className="px-6">
      <div className="bg-background border border-border rounded-sm p-5 flex flex-col gap-4 mt-5">
        <div className="flex items-center gap-3">
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-10 h-10 rounded-full object-cover border border-border shrink-0"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
              Instructor
            </span>
            <span className="text-sm font-medium text-foreground">
              {instructor.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {instructor.title}
            </span>
          </div>
        </div>

        <hr className="border-t border-border" />

        <p className="text-xs text-muted-foreground leading-relaxed">
          {instructor.bio}
        </p>

        <div className="flex gap-6">
          <div className="flex flex-col gap-0.5">
            <span className="text-[13px] font-medium text-foreground">
              {(instructor.studentsCount / 1000).toFixed(0)}k+
            </span>
            <span className="text-[11px] text-muted-foreground">Students</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[13px] font-medium text-foreground">
              {instructor.rating}
            </span>
            <span className="text-[11px] text-muted-foreground">Rating</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[13px] font-medium text-foreground">
              {instructor.yearsExperience} yrs
            </span>
            <span className="text-[11px] text-muted-foreground">
              Experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

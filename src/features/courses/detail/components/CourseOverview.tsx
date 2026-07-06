import React from "react";
import type { CourseDetail } from "../types/types";
import { PiCheckLight } from "react-icons/pi";

interface CourseOverviewProps {
  course: CourseDetail;
}

export const CourseOverview: React.FC<CourseOverviewProps> = ({ course }) => {
  return (
    <section className="bg-surface-container-low py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-label font-bold text-primary uppercase tracking-[0.2em] mb-4 sm:mb-6">
              Course Overview
            </h2>
            <h3 className="text-2xl sm:text-2xl font-light mb-6 sm:mb-8 leading-snug">
              The Architectural Mindset for the Modern Designer.
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed text-xs">
              {course.overview}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-6 sm:p-10 rounded-sm shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 font-light">
                What you'll learn
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 gap-y-4 sm:gap-y-5">
                {course.learningOutcomes.map((outcome) => (
                  <div key={outcome.id} className="flex gap-2">
                    <div className="flex-shrink-0 w-6 h-6  flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px] font-bold">
                        <PiCheckLight size={12} />
                      </span>
                    </div>
                    <span className="text-on-surface font-extralight text-xs break-all">
                      {outcome.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import type { CourseDetail } from "../types/types";
import { Button } from "@/components/ui/Button";
import { PiTimerThin } from "react-icons/pi";
import { Link } from "react-router-dom";

interface CourseHeroProps {
  course: CourseDetail;
}

export const CourseHero: React.FC<CourseHeroProps> = ({ course }) => {
  const [titleMain, titleSub] = course.title.split("&").map((s) => s.trim());

  return (
    <section className="px-4 sm:px-8 py-10 sm:py-14 bg-background">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/courses"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          Back to catalog
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-teal-800 bg-teal-50 border border-teal-200 rounded-full px-3 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Design Systems
            </div>

            <h1 className="text-2xl sm:text-[28px] font-normal leading-snug tracking-tight text-foreground mb-2">
              {titleMain}
              {titleSub && (
                <>
                  <br />
                  <span className="text-muted-foreground font-light">
                    &amp; {titleSub}
                  </span>
                </>
              )}
            </h1>

            <p className="text-[13px] text-muted-foreground leading-relaxed mb-6">
              {course.description ??
                "A structured deep-dive into scalable design systems — from token architecture to component documentation."}
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              {[
                { icon: "star", label: `${course.rating} rating` },
                {
                  icon: <PiTimerThin size={20} />,
                  label: course.duration,
                  noOfLectures: 20,
                },
                {
                  icon: "calendar_month",
                  label: `Updated ${course.lastUpdated}`,
                },
                { icon: " ", label: `567 lectures` },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 text-xs text-black py-1"
                >
                  <span className="material-symbols-outlined text-[13px]">
                    {icon}
                  </span>
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2 mb-5">
              <Button
                variant="default"
                size="lg"
                className="inline-flex items-center gap-1.5 text-[13px] text-background bg-foreground rounded- px-5 py-2.5 transition-opacity"
              >
                Enroll now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="inline-flex items-center text-[13px] text-foreground border border-border rounded-lg px-5 py-2.5 hover:bg-muted transition-colors"
              >
                Preview syllabus
              </Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex">
                {["AK", "JR", "ML"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-6 h-6 rounded-full border-2 border-background bg-muted text-[9px] font-medium flex items-center justify-center -ml-1.5 first:ml-0"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span>{course.enrolledCount} people enrolled this course</span>
            </div>
          </div>

          {/* Right — course image card */}
          <div className="order-first md:order-last">
            <div className="rounded-sm border border-border overflow-hidden bg-background hover:border-border/80 transition-colors">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQ7pFGmYTGFPJ911F9Tvn5yAioXsrmqXtk0fubjqNeaJap4nmQbxq9uLpr-vF6JxLWTq1IQVWYHVZnGST-BgzLPlbpw7OLMhzpWn3j-XZsNo12Ucr2bC-7DbjocYcBRwAQivy47g7gVV3hTMkzNe3fT_iPKzM5eqNQBANT3cFzxFKbF12ILinC8fXwG5y4GcLsjMjyKsfkDcOB_wdAtt00nnRm6Fic7IUxCt59kYquNYBZCRwPLfVcxdWaQiqkwoH9SLa4X_U1io"
                alt={`${course.title} preview`}
                className="w-full aspect-[4/3] object-cover block"
              />
              <div className="flex items-center justify-between px-4 py-3 border-t border-border">
                <span className="text-[11px] text-muted-foreground">
                  Course preview
                </span>
                <button className="inline-flex items-center gap-1 text-[11px] text-muted-foreground bg-muted border border-border rounded-md px-2.5 py-1 hover:bg-muted/80 transition-colors">
                  <span className="material-symbols-outlined text-[12px]">
                    play_arrow
                  </span>
                  Watch intro
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

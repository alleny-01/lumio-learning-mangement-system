import { useCallback, useContext, useEffect, useState } from "react";
import { Copy, Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";
import { motion } from "framer-motion";
import { LMSContext } from "@/contexts/LMSContext";
import {
  deleteCourse,
  duplicateCourse,
  listInstructorCourses,
} from "@/shared/api/courses";
import type { Tables } from "@/shared/types/database";
import { CourseBuilderDialog } from "../components/CourseBuilderDialog";
import type { CourseBuilderDraft, InstructorCourse } from "../types";
import { draftFromCourse } from "../utils";

function fallbackCourses(): InstructorCourse[] {
  return [
    {
      id: "demo-authored",
      instructor_id: "demo",
      title: "Draft: Product Design Foundations",
      slug: "product-design-foundations",
      description: "A draft course showing how authored courses will appear.",
      thumbnail_url:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      category: "Design",
      difficulty: "beginner",
      preview_video_url: null,
      status: "draft",
      duration_minutes: 120,
      rating: 0,
      enrolled_count: 0,
      published_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];
}

function statusClass(status: Tables<"courses">["status"]) {
  if (status === "published") return "bg-secondary-container text-on-secondary-container";
  if (status === "saved") return "bg-primary-fixed text-on-primary-fixed";
  return "bg-surface-container-high text-on-surface-variant";
}

function InstructorCoursesPage(): React.JSX.Element {
  const { session, setAuthError } = useContext(LMSContext);
  const [courses, setCourses] = useState<InstructorCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [builderDraft, setBuilderDraft] = useState<CourseBuilderDraft | null>(
    null,
  );
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

  const loadCourses = useCallback(async () => {
    if (!session?.user.id) return;
    setIsLoading(true);
    try {
      const { data, error } = await listInstructorCourses(session.user.id);
      if (error) throw error;
      setCourses((data as InstructorCourse[] | null) ?? []);
    } catch (error) {
      setAuthError(
        error instanceof Error
          ? error.message
          : "Unable to load your authored courses.",
      );
      setCourses(fallbackCourses());
    } finally {
      setIsLoading(false);
    }
  }, [session?.user.id, setAuthError]);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  const openBuilder = (course?: InstructorCourse) => {
    setBuilderDraft(course ? draftFromCourse(course) : null);
    setIsBuilderOpen(true);
  };

  const handleDelete = async (courseId: string) => {
    if (!window.confirm("Delete this course? This cannot be undone.")) return;
    const { error } = await deleteCourse(courseId);
    if (error) {
      setAuthError(error.message);
      return;
    }
    setCourses((current) => current.filter((course) => course.id !== courseId));
  };

  const handleDuplicate = async (courseId: string) => {
    if (!session?.user.id) return;
    const { error } = await duplicateCourse(courseId, session.user.id);
    if (error) {
      setAuthError(error.message);
      return;
    }
    await loadCourses();
  };

  return (
    <div className="min-h-screen px-4 py-4 sm:px-6 lg:px-6">
      <header className="mb-5 flex flex-col gap-4 rounded-sm border border-border/40 bg-surface-container-lowest p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] font-light uppercase tracking-[0.24em] text-primary">
            Instructor Studio
          </p>
          <h1 className="mt-2 text-[20px] font-medium text-on-surface">
            Your courses
          </h1>
          <p className="mt-2 max-w-2xl text-[12px] font-light leading-6 text-on-surface-variant">
            Create, edit, duplicate, and publish your Lumio courses.
          </p>
        </div>
        <Button type="button" size="lg" onClick={() => openBuilder()}>
          <Plus /> New course
        </Button>
      </header>

      <section>
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <article
                key={index}
                className="rounded-sm border border-border/40 bg-surface-container-lowest p-4"
              >
                <Skeleton className="aspect-[4/3] w-full" />
                <Skeleton className="mt-4 h-4 w-3/4" />
                <Skeleton className="mt-3 h-3 w-full" />
                <div className="mt-5 flex gap-2">
                  <Skeleton className="h-7 w-16" />
                  <Skeleton className="h-7 w-24" />
                </div>
              </article>
            ))}
          </div>
        ) : courses.length === 0 ? (
          <div className="rounded-sm border border-border/40 bg-surface-container-lowest p-8 text-center">
            <h2 className="text-sm font-medium">No authored courses yet</h2>
            <p className="mt-2 text-xs text-on-surface-variant">
              Start with a draft, then add modules and YouTube lessons.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {courses.map((course) => (
              <motion.article
                key={course.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="rounded-sm border border-border/40 bg-surface-container-lowest p-4 shadow-[0_8px_20px_-18px_rgba(15,23,42,0.35)] transition-shadow hover:shadow-[0_18px_36px_-28px_rgba(53,37,205,0.35)]"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-surface-container-low">
                  {course.thumbnail_url ? (
                    <img
                      src={course.thumbnail_url}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-xs text-on-surface-variant">
                      No thumbnail
                    </div>
                  )}
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-sm font-medium text-on-surface">
                        {course.title}
                      </h2>
                      <p className="mt-1 line-clamp-2 text-xs font-light text-on-surface-variant">
                        {course.description}
                      </p>
                    </div>
                    <span
                      className={`rounded-sm px-2 py-1 text-[10px] capitalize ${statusClass(course.status)}`}
                    >
                      {course.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[10px] text-on-surface-variant">
                    <span>{course.category}</span>
                    <span className="capitalize">{course.difficulty}</span>
                    <span>{course.duration_minutes} min</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => openBuilder(course)}
                    >
                      <Pencil /> Edit
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleDuplicate(course.id)}
                    >
                      <Copy /> Duplicate
                    </Button>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(course.id)}
                    >
                      <Trash2 /> Delete
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {isBuilderOpen && session?.user.id && (
        <CourseBuilderDialog
          instructorId={session.user.id}
          initialDraft={builderDraft ?? undefined}
          onClose={() => setIsBuilderOpen(false)}
          onSaved={() => {
            setIsBuilderOpen(false);
            loadCourses();
          }}
        />
      )}
    </div>
  );
}

export default InstructorCoursesPage;

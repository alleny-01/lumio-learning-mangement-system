import { useContext, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LMSContext } from "@/contexts/LMSContext";
import { buildFallbackViewerData } from "@/features/courses/api/courseData";
import { markLessonComplete } from "@/shared/api/progress";
import { ViewerShell } from "../components";

export default function ViewerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { session, setAuthError } = useContext(LMSContext);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(
    () => new Set(),
  );
  const [isCompleting, setIsCompleting] = useState(false);
  const activeLessonId = searchParams.get("lesson") ?? "tonal-depth";
  const courseId = searchParams.get("course") ?? "demo-course";

  const data = useMemo(() => {
    const viewerData = buildFallbackViewerData(activeLessonId);
    return {
      ...viewerData,
      activeLesson: {
        ...viewerData.activeLesson,
        completed:
          viewerData.activeLesson.completed ||
          completedLessons.has(viewerData.activeLesson.id),
      },
    };
  }, [activeLessonId, completedLessons]);

  const selectLesson = (lessonId: string) => {
    setSearchParams((params) => {
      params.set("course", courseId);
      params.set("lesson", lessonId);
      return params;
    });
  };

  const handleMarkComplete = async () => {
    setIsCompleting(true);
    try {
      if (session?.user.id && courseId !== "demo-course") {
        const { error } = await markLessonComplete(
          session.user.id,
          courseId,
          data.activeLesson.id,
        );
        if (error) {
          setAuthError(error.message);
          return;
        }
      }
      setCompletedLessons((current) => new Set(current).add(data.activeLesson.id));
    } finally {
      setIsCompleting(false);
    }
  };

  return (
    <ViewerShell
      data={data}
      onLessonSelect={selectLesson}
      onMarkComplete={handleMarkComplete}
      onNextLesson={() => {
        if (data.nextLesson) selectLesson(data.nextLesson.id);
      }}
      isCompleting={isCompleting}
    />
  );
}

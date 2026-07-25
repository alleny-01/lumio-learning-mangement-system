import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LMSContext } from "@/contexts/LMSContext";
import { enrollInCourse, getEnrollment } from "@/shared/api/enrollments";
import { CourseHero } from "../components/CourseHero";
import { CourseOverview } from "../components/CourseOverview";
import { CourseSyllabus } from "../components/CourseSyllabus";
import { AIFeatures} from "../components/AIFeatures";
import { InstructorSection } from "../components/InstructorSection";
import { COURSE_DETAIL } from "../constants";
import { loadCourseDetail } from "../../api/courseData";
import type { CourseDetail } from "../types/types";

function CourseDetailPage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { session, setAuthError } = useContext(LMSContext);
  const [course, setCourse] = useState<CourseDetail>(COURSE_DETAIL);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isEnrolling, setIsEnrolling] = useState(false);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      if (!courseId) return;
      setIsLoading(true);
      try {
        const detail = await loadCourseDetail(courseId);
        if (!isMounted) return;
        setCourse(detail);

        if (session?.user.id && !/^\\d+$/.test(courseId)) {
          const { data } = await getEnrollment(session.user.id, courseId);
          if (isMounted) setIsEnrolled(Boolean(data));
        }
      } catch (error) {
        setAuthError(
          error instanceof Error ? error.message : "Unable to load course.",
        );
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, [courseId, session?.user.id, setAuthError]);

  const handleEnroll = async () => {
    if (!courseId) return;
    if (isEnrolled || /^\\d+$/.test(courseId)) {
      navigate(`/viewer?course=${course.id}`);
      return;
    }
    if (!session?.user.id) return;

    setIsEnrolling(true);
    try {
      const { error } = await enrollInCourse(session.user.id, courseId);
      if (error) {
        setAuthError(error.message);
        return;
      }
      setIsEnrolled(true);
    } finally {
      setIsEnrolling(false);
    }
  };

  return (
      <main className={`flex-grow ${isLoading ? "animate-pulse" : ""}`}>
      <CourseHero
        course={course}
        isEnrolled={isEnrolled}
        isEnrolling={isEnrolling}
        onEnroll={handleEnroll}
      />
      <CourseOverview course={course} />
      <AIFeatures />
      <InstructorSection instructor={course.instructor} />
      <CourseSyllabus modules={course.modules} />
    </main>
  );
}

export default CourseDetailPage;

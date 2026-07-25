import { getCourse, listPublishedCourses } from "@/shared/api/courses";
import type { Tables } from "@/shared/types/database";
import { courses as fallbackCatalogCourses } from "../catalog/constants";
import type { Course } from "../catalog/types/types";
import { COURSE_DETAIL } from "../detail/constants";
import type {
  CourseDetail,
  CourseLesson,
  CourseModule,
  Instructor,
} from "../detail/types/types";
import { courseChapters } from "@/features/viewer/constants";
import type { ViewerData, ViewerLesson } from "@/features/viewer/types";

const fallbackImage =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80";

interface CourseWithProfile extends Tables<"courses"> {
  profiles?: Tables<"profiles"> | null;
}

interface LessonRow extends Tables<"lessons"> {
  isCompleted?: boolean;
}

interface ModuleWithLessons extends Tables<"course_modules"> {
  lessons?: LessonRow[] | null;
}

interface DetailCourseRow extends CourseWithProfile {
  course_modules?: ModuleWithLessons[] | null;
}

function formatDuration(minutes: number) {
  if (!minutes) return "Self-paced";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (!hours) return `${mins}m`;
  return mins ? `${hours}h ${mins}m` : `${hours}h`;
}

function profileName(profile?: Tables<"profiles"> | null) {
  const fullName = [profile?.first_name, profile?.last_name]
    .filter(Boolean)
    .join(" ");
  return fullName || profile?.email?.split("@")[0] || "Lumio Instructor";
}

function toCatalogCourse(course: CourseWithProfile): Course {
  return {
    id: course.id,
    title: course.title,
    instructor: profileName(course.profiles),
    rating: Number(course.rating || 0),
    reviews: `${course.enrolled_count}`,
    enrolledCount: course.enrolled_count,
    category: course.category,
    difficulty: course.difficulty,
    duration: formatDuration(course.duration_minutes),
    description: course.description,
    imageUrl: course.thumbnail_url ?? fallbackImage,
    imageAlt: `${course.title} thumbnail`,
    badge: course.status === "published" ? "Published" : undefined,
    badgeColor: "secondary",
  };
}

export async function loadCatalogCourses(params: {
  search: string;
  category: string;
  difficulty: string;
  minimumRating: number;
  page: number;
  pageSize: number;
}) {
  try {
    const { data, error, count } = await listPublishedCourses({
      search: params.search || undefined,
      category:
        params.category && params.category !== "All Categories"
          ? params.category
          : undefined,
      difficulty:
        params.difficulty === "all"
          ? undefined
          : (params.difficulty as Course["difficulty"]),
      minimumRating: params.minimumRating || undefined,
      page: params.page,
      pageSize: params.pageSize,
    });

    if (error) throw error;
    const courses = ((data ?? []) as CourseWithProfile[]).map(toCatalogCourse);
    return {
      courses: courses.length ? courses : fallbackCatalogCourses,
      total: count ?? courses.length,
      isFallback: courses.length === 0,
    };
  } catch {
    const search = params.search.trim().toLowerCase();
    let localCourses = fallbackCatalogCourses.filter((course) => {
      const matchesSearch =
        !search ||
        course.title.toLowerCase().includes(search) ||
        course.description.toLowerCase().includes(search) ||
        course.instructor.toLowerCase().includes(search);
      const matchesCategory =
        params.category === "All Categories" || course.category === params.category;
      const matchesDifficulty =
        params.difficulty === "all" || course.difficulty === params.difficulty;
      const matchesRating = course.rating >= params.minimumRating;
      return matchesSearch && matchesCategory && matchesDifficulty && matchesRating;
    });

    const total = localCourses.length;
    const start = (params.page - 1) * params.pageSize;
    localCourses = localCourses.slice(start, start + params.pageSize);
    return { courses: localCourses, total, isFallback: true };
  }
}

function toCourseModules(modules: ModuleWithLessons[] = []): CourseModule[] {
  return modules
    .slice()
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((module, index) => {
      const lessons = (module.lessons ?? [])
        .slice()
        .sort((a, b) => a.sort_order - b.sort_order);
      const duration = lessons.reduce(
        (sum, lesson) => sum + lesson.duration_minutes,
        0,
      );
      const lessonItems: CourseLesson[] = lessons.map((lesson) => ({
        id: lesson.id,
        title: lesson.title,
        duration: formatDuration(lesson.duration_minutes),
      }));

      return {
        id: module.id,
        number: index + 1,
        title: module.title,
        lessons: lessons.length,
        duration: formatDuration(duration),
        lessonItems,
        isExpanded: index === 0,
      };
    });
}

function toInstructor(profile?: Tables<"profiles"> | null): Instructor {
  return {
    id: profile?.id ?? "instructor",
    name: profileName(profile),
    title: "Lumio Instructor",
    bio:
      profile?.bio ??
      "A Lumio instructor focused on practical, project-led learning.",
    image:
      profile?.avatar_url ??
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    studentsCount: 0,
    yearsExperience: 3,
    rating: 4.8,
  };
}

export async function loadCourseDetail(courseId: string): Promise<CourseDetail> {
  if (/^\\d+$/.test(courseId)) return COURSE_DETAIL;

  try {
    const { data, error } = await getCourse(courseId);
    if (error || !data) throw error;
    const course = data as DetailCourseRow;
    const modules = toCourseModules(course.course_modules ?? []);

    return {
      id: course.id,
      title: course.title,
      category: course.category,
      rating: Number(course.rating || 0),
      reviews: course.enrolled_count,
      lastUpdated: new Date(course.updated_at).toLocaleDateString(),
      duration: formatDuration(course.duration_minutes),
      description: course.description,
      overview: course.description,
      learningOutcomes: [
        { id: "outcome-1", title: `Build confidence with ${course.category}` },
        { id: "outcome-2", title: "Practice through structured lessons" },
        { id: "outcome-3", title: "Track your progress lesson by lesson" },
        { id: "outcome-4", title: "Apply concepts to real projects" },
      ],
      modules: modules.length ? modules : COURSE_DETAIL.modules,
      instructor: toInstructor(course.profiles),
      enrolledCount: course.enrolled_count,
      price: 0,
      courseImage: course.thumbnail_url ?? fallbackImage,
      previewVideoUrl: course.preview_video_url,
    };
  } catch {
    return COURSE_DETAIL;
  }
}

function toViewerLesson(lesson: LessonRow): ViewerLesson {
  return {
    id: lesson.id,
    courseId: lesson.course_id,
    title: lesson.title,
    description: lesson.description ?? "This lesson is ready to watch.",
    youtubeUrl: lesson.youtube_url,
    durationMinutes: lesson.duration_minutes,
    coreConcept:
      lesson.core_concept ??
      "Capture the main idea, then apply it in the next practical step.",
    completed: Boolean(lesson.isCompleted),
  };
}

export function buildFallbackViewerData(activeLessonId = "tonal-depth"): ViewerData {
  const demoLessons: LessonRow[] = [
    {
      id: "foundations",
      course_id: "demo-course",
      module_id: "chapter-1",
      title: "Foundations of Lumio",
      description: "Get oriented with the course structure and learning goals.",
      youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      duration_minutes: 10,
      core_concept: "Clear learning paths make progress visible and motivating.",
      sort_order: 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      isCompleted: true,
    },
    {
      id: "tonal-depth",
      course_id: "demo-course",
      module_id: "chapter-2",
      title: "Tonal Depth Execution",
      description:
        "Understand how surface hierarchy creates depth without heavy borders.",
      youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      duration_minutes: 12,
      core_concept:
        "Depth in a learning interface should come from tonal shifts, spacing, and clear hierarchy.",
      sort_order: 2,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      isCompleted: false,
    },
    {
      id: "visual-rhythm",
      course_id: "demo-course",
      module_id: "chapter-2",
      title: "Asymmetric Visual Rhythm",
      description: "Use contrast and spacing to keep complex layouts readable.",
      youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      duration_minutes: 15,
      core_concept:
        "Visual rhythm guides attention by creating intentional pauses and emphasis.",
      sort_order: 3,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      isCompleted: false,
    },
  ];
  const activeIndex = Math.max(
    0,
    demoLessons.findIndex((lesson) => lesson.id === activeLessonId),
  );
  const activeLesson = toViewerLesson(demoLessons[activeIndex] ?? demoLessons[0]);
  const next = demoLessons[activeIndex + 1];

  return {
    courseTitle: "Advanced UI Architecture",
    chapters: courseChapters.map((chapter) => ({
      ...chapter,
      lessons: chapter.lessons.map((lesson) => ({
        ...lesson,
        active: lesson.id === activeLesson.id,
      })),
    })),
    activeLesson,
    nextLesson: next ? toViewerLesson(next) : null,
    progressPercent: 42,
    completedLessons: 6,
    totalLessons: 14,
  };
}

export function getYoutubeEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");
    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }
    if (host === "youtube.com" && parsed.pathname === "/watch") {
      const id = parsed.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (host === "youtube.com" && parsed.pathname.startsWith("/embed/")) {
      return url;
    }
    return url;
  } catch {
    return url;
  }
}

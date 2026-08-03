import type { CourseBuilderDraft, BuilderModule } from "./types";
import type { Tables } from "@/shared/types/database";
import { courseCategories } from "@/shared/constants/courseOptions";

export { courseCategories };

export function createId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function createEmptyLesson() {
  return {
    id: createId("lesson"),
    title: "Untitled lesson",
    description: "",
    youtubeUrl: "",
    durationMinutes: 0,
    coreConcept: "",
    resources: [],
  };
}

export function createEmptyModule(): BuilderModule {
  return {
    id: createId("module"),
    title: "Untitled module",
    lessons: [createEmptyLesson()],
  };
}

export function createEmptyDraft(): CourseBuilderDraft {
  return {
    title: "",
    description: "",
    thumbnailUrl: "",
    category: courseCategories[0],
    difficulty: "beginner",
    previewVideoUrl: "",
    status: "draft",
    learningOutcomes: ["", "", "", ""],
    modules: [createEmptyModule()],
  };
}

export function draftFromCourse(course: Tables<"courses">): CourseBuilderDraft {
  let storedOutcomes: string[] = (course as any).learning_outcomes || (course as any).learningOutcomes || [];
  if (!storedOutcomes.length) {
    try {
      const cached = localStorage.getItem(`lumio_course_outcomes_${course.id}`);
      if (cached) storedOutcomes = JSON.parse(cached);
    } catch {}
  }

  return {
    id: course.id,
    slug: course.slug,
    title: course.title,
    description: course.description,
    thumbnailUrl: course.thumbnail_url ?? "",
    category: course.category,
    difficulty: course.difficulty,
    previewVideoUrl: course.preview_video_url ?? "",
    status: course.status,
    learningOutcomes: storedOutcomes.length > 0 ? storedOutcomes.slice(0, 6) : ["", "", "", ""],
    modules: [createEmptyModule()],
  };
}

export function isValidYoutubeUrl(value: string) {
  if (!value) return true;
  try {
    const url = new URL(value);
    const host = url.hostname.replace("www.", "");
    return host === "youtube.com" || host === "youtu.be";
  } catch {
    return false;
  }
}

export function moveItem<T>(items: T[], index: number, direction: -1 | 1) {
  const target = index + direction;
  if (target < 0 || target >= items.length) return items;
  const next = [...items];
  const [item] = next.splice(index, 1);
  if (item) next.splice(target, 0, item);
  return next;
}

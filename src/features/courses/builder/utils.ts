import type { CourseBuilderDraft, BuilderModule } from "./types";
import type { Tables } from "@/shared/types/database";

export const courseCategories = [
  "Design",
  "Development",
  "Marketing",
  "Business",
  "Data",
  "Product",
] as const;

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
    modules: [createEmptyModule()],
  };
}

export function draftFromCourse(course: Tables<"courses">): CourseBuilderDraft {
  return {
    id: course.id,
    title: course.title,
    description: course.description,
    thumbnailUrl: course.thumbnail_url ?? "",
    category: course.category,
    difficulty: course.difficulty,
    previewVideoUrl: course.preview_video_url ?? "",
    status: course.status,
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

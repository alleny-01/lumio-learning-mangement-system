import type { ChapterItem, LessonStep, ResourceItem } from "../types";

export const lessonResources: ResourceItem[] = [
  { id: "resources", label: "Resources", count: "(3)" },
  { id: "attachments", label: "Attachments", count: "2" },
  { id: "notes", label: "Lesson Notes" },
];

export const courseChapters: ChapterItem[] = [
  {
    id: "chapter-1",
    title: "CHAPTER 01",
    lessonsLabel: "4/4 Lessons",
    lessons: [
      {
        id: "foundations",
        title: "Foundations of Lumio",
        completed: true,
      },
      {
        id: "grid-theory",
        title: "Grid Theory vs Spatiality",
        completed: true,
      },
    ],
  },
  {
    id: "chapter-2",
    title: "CHAPTER 02",
    lessonsLabel: "1/4 Lessons",
    lessons: [
      {
        id: "line-rule",
        title: "The No-Line Rule",
        completed: true,
      },
      {
        id: "tonal-depth",
        title: "Tonal Depth Execution",
        active: true,
      },
      {
        id: "visual-rhythm",
        title: "Asymmetric Visual Rhythm",
      },
    ],
  },
  {
    id: "chapter-3",
    title: "CHAPTER 03",
    lessonsLabel: "Locked",
    locked: true,
    lessons: [
      {
        id: "editorial-canvas",
        title: "The Editorial Canvas",
        locked: true,
      },
    ],
  },
];

export const executionSteps: LessonStep[] = [
  {
    id: "step-1",
    title: "Eliminate Hard Borders",
    description:
      "Use surface-container variants to create natural separation between elements.",
  },
  {
    id: "step-2",
    title: "The 20px Backdrop Blur",
    description:
      "Apply glassmorphism to your navigation layers to integrate them into the canvas.",
  },
  {
    id: "step-3",
    title: "Master the Ambient Lift",
    description:
      "Reserve shadows only for temporary floating objects like modals.",
  },
];

export const instructorQuote =
  "Remember, it is all about layers. Look like a shadow is there, so the UI feels higher. Focus on the subtle tonal differences between surface and surface-container-low.";

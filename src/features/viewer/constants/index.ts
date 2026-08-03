import type { ChapterItem, LessonStep } from "../types";

export const courseChapters: ChapterItem[] = [
  {
    id: "chapter-1",
    title: "Foundations",
    lessonsLabel: "4/4 Lessons",
    lessons: [
      {
        id: "foundations",
        title: "Foundations of Lumio",
        durationMinutes: 14,
        completed: true,
      },
      {
        id: "grid-theory",
        title: "Grid Theory vs Spatiality",
        durationMinutes: 18,
        completed: true,
      },
    ],
  },
  {
    id: "chapter-2",
    title: "Visual Language",
    lessonsLabel: "1/4 Lessons",
    lessons: [
      {
        id: "line-rule",
        title: "The No-Line Rule",
        durationMinutes: 12,
        completed: true,
      },
      {
        id: "tonal-depth",
        title: "Tonal Depth Execution",
        durationMinutes: 22,
        active: true,
      },
      {
        id: "visual-rhythm",
        title: "Asymmetric Visual Rhythm",
        durationMinutes: 16,
      },
    ],
  },
  {
    id: "chapter-3",
    title: "Advanced Techniques",
    lessonsLabel: "Locked",
    locked: true,
    lessons: [
      {
        id: "editorial-canvas",
        title: "The Editorial Canvas",
        durationMinutes: 20,
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

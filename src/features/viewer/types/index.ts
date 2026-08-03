export interface LessonItem {
  id: string;
  title: string;
  duration?: string;
  durationMinutes?: number;
  locked?: boolean;
  completed?: boolean;
  active?: boolean;
}

export interface ChapterItem {
  id: string;
  title: string;
  lessonsLabel: string;
  lessons: LessonItem[];
  locked?: boolean;
}

export interface LessonStep {
  id: string;
  title: string;
  description: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  label?: string;
  count?: string;
  fileUrl?: string;
  filePath?: string;
  externalUrl?: string;
  fileName?: string;
  fileSize?: string;
  resourceKind?: "document" | "code" | "archive" | "image" | "link" | "other";
}

export interface ViewerLesson {
  id: string;
  courseId: string;
  title: string;
  description: string;
  youtubeUrl: string;
  durationMinutes: number;
  coreConcept: string;
  completed: boolean;
  resources?: ResourceItem[];
}

export interface ViewerData {
  courseTitle: string;
  chapters: ChapterItem[];
  activeLesson: ViewerLesson;
  nextLesson: ViewerLesson | null;
  progressPercent: number;
  completedLessons: number;
  totalLessons: number;
}

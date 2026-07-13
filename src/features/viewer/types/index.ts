export interface LessonItem {
  id: string;
  title: string;
  duration?: string;
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
  label: string;
  count?: string;
}

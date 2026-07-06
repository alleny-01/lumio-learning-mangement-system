export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  lessons: number;
  duration: string;
  lessonItems?: CourseLesson[];
  isExpanded?: boolean;
}

export interface LearningOutcome {
  id: string;
  title: string;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  studentsCount: number;
  yearsExperience: number;
  rating: number;
}


export interface CourseDetail {
  id: string;
  title: string;
  category: string;
  rating: number;
  reviews: number;
  lastUpdated: string;
  duration: string;
  description: string;
  overview: string;
  learningOutcomes: LearningOutcome[];
  modules: CourseModule[];
  instructor: Instructor;
  enrolledCount: number;
  price: number;
  courseImage: string;
}

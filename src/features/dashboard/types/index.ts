export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  chartType: "line" | "ring";
  accent: string;
  chartLabel?: string;
  progress?: number;
}

export interface DashboardCourse {
  id: string;
  module: string;
  title: string;
  image: string;
  progress: number;
  completedLessons: string;
  href: string;
  status: "not-started" | "in-progress" | "completed";
}

export interface DashboardQuote {
  content: string;
  author: string;
}

export interface DashboardActivity {
  date: string;
  minutes: number;
  lessonsCompleted: number;
}

export interface DashboardData {
  firstName: string;
  weeklyStudyHours: number;
  averageGrade: number;
  enrolledCourseCount: number;
  completedCourseCount: number;
  activeCourseCount: number;
  totalLessonsCompleted: number;
  streakDays: number;
  courses: DashboardCourse[];
  activity: DashboardActivity[];
  quote: DashboardQuote;
}

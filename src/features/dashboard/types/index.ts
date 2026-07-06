export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  chartType: "line" | "ring";
  accent: string;
  chartLabel?: string;
}

export interface DashboardCourse {
  id: string;
  module: string;
  title: string;
  image: string;
  progress: number;
  completedLessons: string;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  category: string;
  time: string;
  duration: string;
  dayIndex: number;
  startColumn: number;
  columnSpan: number;
  accent: string;
  avatarStack?: string[];
}

export interface NotificationItem {
  id: string;
  tag: string;
  title: string;
  time: string;
  date: string;
  accent: string;
}

export interface CalendarDay {
  label: string;
  date: number;
  isMuted?: boolean;
  isSelected?: boolean;
  isRange?: boolean;
}

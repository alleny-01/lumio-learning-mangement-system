import type {
  CalendarDay,
  DashboardCourse,
  DashboardStat,
  NotificationItem,
  ScheduleEvent,
} from "../types";

export const dashboardStats: DashboardStat[] = [
  {
    id: "study-time",
    label: "Weekly Study Time",
    value: "8.5 hours",
    chartType: "line",
    accent: "#000",
  },
  {
    id: "avg-grade",
    label: "Avg Grade",
    value: "4.7/5",
    chartType: "line",
    accent: "#000",
  },
  {
    id: "modules",
    label: "Modules",
    value: "12/25 (48%)",
    chartType: "ring",
    accent: "#000",
  },
  {
    id: "courses",
    label: "Courses",
    value: "3/5 (60%)",
    chartType: "ring",
    accent: "#000",
  },
];

export const dashboardCourses: DashboardCourse[] = [
  {
    id: "ui-basics",
    module: "Module 1",
    title: "UI/UX Basics",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    progress: 0.25,
    completedLessons: "3/7 lessons completed",
    href: "/viewer",
    status: "in-progress",
  },
  {
    id: "design-practice",
    module: "Module 2",
    title: "Design in practice",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    progress: 0.14,
    completedLessons: "1/7 lessons completed",
    href: "/viewer",
    status: "in-progress",
  },
  {
    id: "commercial-orders",
    module: "Module 3",
    title: "Commercial orders and employment",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    progress: 0.14,
    completedLessons: "1/7 lessons completed",
    href: "/viewer",
    status: "in-progress",
  },
];

export const fallbackQuotes = [
  {
    content:
      "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier",
  },
  {
    content:
      "Learning never exhausts the mind when curiosity is doing the walking.",
    author: "Lumio",
  },
  {
    content:
      "The expert in anything was once a beginner who kept returning.",
    author: "Lumio",
  },
];

export const scheduleWeek: CalendarDay[] = [
  { label: "Monday", date: 14, isMuted: false },
  { label: "Tuesday", date: 15, isSelected: true },
  { label: "Wednesday", date: 16 },
  { label: "Thursday", date: 17 },
  { label: "Friday", date: 18 },
  { label: "Saturday", date: 19 },
  { label: "Sunday", date: 20 },
];

export const scheduleEvents: ScheduleEvent[] = [
  {
    id: "webinar",
    title: "UI/UX Webinar",
    category: "Theory",
    time: "8:30-9:30",
    duration: "1h",
    dayIndex: 1,
    startColumn: 1,
    columnSpan: 1,
    accent: "#f6e58d",
    avatarStack: [
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    category: "Talk",
    time: "10:00-11:00",
    duration: "1h",
    dayIndex: 2,
    startColumn: 2,
    columnSpan: 1,
    accent: "#fbcfe8",
    avatarStack: [
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    ],
  },
  {
    id: "design-thinking",
    title: "Design Thinking",
    category: "Theory",
    time: "11:30-13:00",
    duration: "1.5h",
    dayIndex: 3,
    startColumn: 3,
    columnSpan: 2,
    accent: "#a5f3fc",
    avatarStack: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80",
    ],
  },
];

export const notifications: NotificationItem[] = [
  {
    id: "research",
    tag: "Webinar Reminder",
    title: "New Approaches to UX Research",
    time: "10:00 AM - 11:00 AM",
    date: "Wed, 25 June",
    accent: "#8b5cf6",
  },
  {
    id: "feedback",
    tag: "Feedback Received",
    title: "New feedback on your latest assignment",
    time: "10:00 AM - 11:00 AM",
    date: "Tue, 26 June",
    accent: "#22c55e",
  },
  {
    id: "module",
    tag: "New Module Available",
    title: "Prototyping in Figma",
    time: "9:00 AM - 10:30 AM",
    date: "Mon, 7 July",
    accent: "#38bdf8",
  },
  {
    id: "project",
    tag: "Webinar Reminder",
    title: "Submit your UI Analysis Project by the end of the day",
    time: "4:30 PM",
    date: "Tue, 10 July",
    accent: "#f59e0b",
  },
];

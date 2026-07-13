export const queryKeys = {
  profile: (userId: string) => ["profile", userId] as const,
  catalog: (params: Record<string, unknown>) => ["catalog", params] as const,
  course: (courseId: string) => ["course", courseId] as const,
  instructorCourses: (userId: string) => ["instructor-courses", userId] as const,
  enrollment: (userId: string, courseId: string) =>
    ["enrollment", userId, courseId] as const,
  userEnrollments: (userId: string) => ["user-enrollments", userId] as const,
  lessonProgress: (userId: string, courseId: string) =>
    ["lesson-progress", userId, courseId] as const,
  studyActivity: (userId: string, fromDate: string, toDate: string) =>
    ["study-activity", userId, fromDate, toDate] as const,
};

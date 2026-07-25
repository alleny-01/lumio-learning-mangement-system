import type { Course } from "../types/types";
import type { Category, SortOption } from "../types/types";

export const courses: Course[] = [
  {
    id: "1",
    title: "Advanced Visual Systems & Interface Architecture",
    instructor: "Prof. Julian Vane",
    rating: 4.9,
    reviews: "2.4k",
    enrolledCount: 2400,
    category: "Design",
    difficulty: "advanced",
    duration: "8h 20m",
    description:
      "Build stronger interfaces through visual systems, component logic, and hierarchy.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQkObAc1oFIiJNCfHByjtk53xC8A5gVQ775zSZdwnjWLmCXpgoFcvmtN_9kTMu9qQMsZAqOzXkSppmwpaTLJjNvCbtCDYSk57Qiac-5RLYKxLsiAZml60t5IEuTi0Tgp6xkEGcPqm5oL_vK7RxIgzeO5jMDafAWiSDdxSlKsNjPa-rGn7cFBy_Ao-XotXdUka9yvJNGVFvaaeO7DAfduoX-UFnfDFFerXHNrHM494yXgyz_w2PYJa1T3c2k9eE__BkEhiQ69y07Og",
    imageAlt: "UX Design Course",
    badge: "New",
    badgeColor: "tertiary",
  },
  {
    id: "2",
    title: "Modern React & The Future of Web Engineering",
    instructor: "Sarah Drasner",
    rating: 5.0,
    reviews: "1.2k",
    enrolledCount: 1200,
    category: "Development",
    difficulty: "intermediate",
    duration: "11h 45m",
    description:
      "Modern React patterns for resilient front-end engineering and product teams.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJwTkUeQKnGInE_DDrn2RmrSpAbE_vrXLRFc5L78rVic83R3MJ2tjVpPXVY66dZYQzcQoaTyc2TCGjLXl0EoYYVrjXvouUoRnWKLlDxulfft5uePk-gIpXMQTpagItQelhOKgTnDvCbH4TnLNwPylfisogz0_n9JHKhxHPuIF2j9vi0GIo63zbea0W5Ucqh9pJz2f-UOzxmZYYmgD_xn8FHHmA9IzSHTsMqNMqqMbddSVFB1CQgEb9ARchRYy-I71Yk8dkwAOQCBw",
    imageAlt: "Frontend Mastery",
  },
  {
    id: "3",
    title: "Scalable Venture Models & Growth Economics",
    instructor: "Marcus Aurelius",
    rating: 4.8,
    reviews: "890",
    enrolledCount: 890,
    category: "Business",
    difficulty: "intermediate",
    duration: "6h 15m",
    description:
      "Learn growth economics, operating models, and scalable venture planning.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOpUCWr5vgNtci63j5X6R4S-Gg3k3D9GsPJvTPiFaaPO7pe0LIckWAgyovIpyxXSXQwAd_4-4g1TFVa9AK0aL_dOqcASekoKGA1nXh6SgeNs9L2rz74lUIsrf9FeYHTFdVAsTSRGPm34FlAgJMJUTlfmpvOLqZ_5uvlWq6uFyW42gtXWPwCuBm_xZ5GZHH6wG9LxKeSlTTcKEfbLWTvZLX976Xh0Diy9VPcoX2jge4VfZUbUTRrPnAjZGgVfsI12W20GVzIF8HZpw",
    imageAlt: "Business Strategy",
  },
  {
    id: "4",
    title: "Neuromarketing: The Science of Brand Attraction",
    instructor: "Elena Rigby",
    rating: 4.7,
    reviews: "3.1k",
    enrolledCount: 3100,
    category: "Marketing",
    difficulty: "beginner",
    duration: "4h 50m",
    description:
      "Understand attention, brand memory, and persuasion through ethical research.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_L6kp6R7JaswZZrm3WlUKmk86MzJue4OBYDhsW94InVOsfHsMaz0YLlbO99cRo-Z_DC-H2lIDWlbQbIxfwrRc6p9E8z29LhwuxW8zzQxwknLHbAGRcJpIogP1aEKHi74dBseiLdY4pAu5Z6A4sSBdXVKgjFuMtfZlbqfCoa01A-EtAzCY10kKuo-PAPLyCwm9loXzeBjQjgZHGVUPy5sjNXUBm2VnmFGWSAaPNkdyG5C3_NgvqAkJQBrRjY1x5EFnX3BAKoiVPSc",
    imageAlt: "Marketing Strategy",
    badge: "Bestseller",
    badgeColor: "secondary",
  },
  {
    id: "5",
    title: "Applied Machine Learning for Digital Products",
    instructor: "Dr. Kevin Wu",
    rating: 4.9,
    reviews: "1.5k",
    enrolledCount: 1500,
    category: "Development",
    difficulty: "advanced",
    duration: "13h 10m",
    description:
      "Apply machine learning workflows to practical product features and decisions.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcQ7pFGmYTGFPJ911F9Tvn5yAioXsrmqXtk0fubjqNeaJap4nmQbxq9uLpr-vF6JxLWTq1IQVWYHVZnGST-BgzLPlbpw7OLMhzpWn3j-XZsNo12Ucr2bC-7DbjocYcBRwAQivy47g7gVV3hTMkzNe3fT_iPKzM5eqNQBANT3cFzxFKbF12ILinC8fXwG5y4GcLsjMjyKsfkDcOB_wdAtt00nnRm6Fic7IUxCt59kYquNYBZCRwPLfVcxdWaQiqkwoH9SLa4X_U1io",
    imageAlt: "Data Science",
  },
  {
    id: "6",
    title: "The Architectural Soul of Modern Typography",
    instructor: "Tobias Frere-Jones",
    rating: 5.0,
    reviews: "420",
    enrolledCount: 420,
    category: "Design",
    difficulty: "beginner",
    duration: "3h 40m",
    description:
      "Explore type systems, rhythm, and hierarchy for modern digital products.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAXtjFcXNjlq-rzoQLjKFQIOgNTyKLMRkgJQO5UbI6IqrADLyXbB66xM1svdwT3LrPaDWrnxqOnUpXHa6mUcpGfVvBXnROUY6ZZyzzX1UAds7qCyFRlWeIeS_q8TSx98TfjWbrPxvtgEMS8Fd9K-0XMo-2YQPsXJzFfy_QjTTsjeaN5WcRjcHiOdZAIyUeXzLLpe4QjvsNzv_-lNbtVZSVjaFqClATBqsBhGnbHNMjPM_VG2U-sUT-_ZLG0ojbTggf-PL-LRGpLZZs",
    imageAlt: "Typography",
  },
  {
    id: "7",
    title: "Collaborative Leadership in Distributed Teams",
    instructor: "Avery Thorne",
    rating: 4.6,
    reviews: "2.1k",
    enrolledCount: 2100,
    category: "Business",
    difficulty: "intermediate",
    duration: "5h 05m",
    description:
      "Lead distributed teams with clearer rituals, trust systems, and outcomes.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0HiWOjdj9TIXoWZDiwIBEJ4-nziPVgTwHbuhj1DC7VkHzNUon6T6pQ37lgNwXLOUbeakF_uz76TRp1CxqMak3PD-Wu7dhCjgZw-igKOGl4odcklJ6YQSgs4VX9UW3-4W582ETywBX_UE21g5QK0_25t2oExuBPluBzIHifqg97_TKQWLRz37GPnaHwMtRLy7ck4fnyVUkicnf-fN9YFkHFa8As4JYxyaWfbSix-nOLfitPXRVAB-Ih8ePh556D63xGOQ5q9fZ3Ps",
    imageAlt: "Leadership",
  },
  {
    id: "8",
    title: "Hyper-Engagement: Content for the Attention Era",
    instructor: "Zoe Sugg",
    rating: 4.8,
    reviews: "1.8k",
    enrolledCount: 1800,
    category: "Marketing",
    difficulty: "intermediate",
    duration: "7h 00m",
    description:
      "Create content systems for modern attention spans without cheap tricks.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABifRQb-ipivvHLd0Yvn7na5l6c77bBYP3FhBAtQv-TaPvtOb1x6FvqqAqZEGAV4-ohxkI5_O9Md-7QSqE57ZdF9IZEHKaQY3bploP8DRNdYHcuqFo86LS2HVdvbz5L6VXgwglBmK295D_K0OaGDAMjTXWBW5KAMtGYrr7ieq3kzZLMkFR5T3c-EuvMqPGUVtXas1PzK5hPo4G4IfMySz1AO08eTvvigxsY5fFdSH4NhDaiimlnBL97qXicD-smX517z-ZJxM1w2o",
    imageAlt: "Social Media",
  },
];

export const categories: Category[] = [
  "All Categories",
  "Design",
  "Development",
  "Marketing",
  "Business",
];

export const sortOptions: SortOption[] = [
  "Recommended",
  "Newest",
  "Most Popular",
];

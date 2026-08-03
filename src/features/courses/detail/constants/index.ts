import type { CourseDetail } from "../types/types";

export const COURSE_DETAIL: CourseDetail = {
  id: "1",
  title: "Advanced UI/UX Systems & Scalability",
  category: "Certification Course",
  rating: 4.9,
  reviews: 2400,
  lastUpdated: "Oct 2023",
  duration: "12 hours",
  description:
    "Master the architectural mindset for the modern designer. Learn to think in systems—creating living, breathing design ecosystems that scale from tiny startups to global enterprises.",
  overview:
    "This course moves beyond simple layout. You will learn to think in systems—creating living, breathing design ecosystems that scale from tiny startups to global enterprises. We explore the deep technical architecture of modern interfaces, from tokenization strategies to complex layout logic.",
  enrolledCount: 12480,
  price: 199,
  courseImage:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  previewVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  learningOutcomes: [
    {
      id: "1",
      title: "Design Token Architecture & Management",
    },
    {
      id: "2",
      title: "Scalable Layout & Grid Logic",
    },
    {
      id: "3",
      title: "Atomic Design Implementation",
    },
    {
      id: "4",
      title: "Documentation & Handoff Excellence",
    },
    {
      id: "5",
      title: "Accessibility in Design Systems",
    },
    {
      id: "6",
      title: "Collaborative Component Governance",
    },
  ],
  modules: [
    {
      id: "1",
      number: 1,
      title: "Foundations & Philosophies",
      lessons: 4,
      duration: "90 mins",
      isExpanded: true,
      lessonItems: [
        {
          id: "m1-l1",
          title: "Introduction to Design System Thinking",
          duration: "18:00",
        },
        {
          id: "m1-l2",
          title: "Design Tokens & Variable Standards",
          duration: "22:00",
        },
        {
          id: "m1-l3",
          title: "Component Atomic Structure",
          duration: "25:00",
        },
        {
          id: "m1-l4",
          title: "Building Scalable Color & Typography Tokens",
          duration: "25:00",
        },
      ],
    },
    {
      id: "2",
      number: 2,
      title: "Grid Systems & Visual Rhythm",
      lessons: 3,
      duration: "140 mins",
      isExpanded: false,
      lessonItems: [
        {
          id: "m2-l1",
          title: "The Psychology of the Grid",
          duration: "15:00",
        },
        {
          id: "m2-l2",
          title: "Responsive Breakpoints Redefined",
          duration: "24:00",
        },
        {
          id: "m2-l3",
          title: "Hard & Soft Grid Logic",
          duration: "18:00",
        },
      ],
    },
    {
      id: "3",
      number: 3,
      title: "Tokenization & Theming",
      lessons: 3,
      duration: "110 mins",
      isExpanded: false,
      lessonItems: [
        {
          id: "m3-l1",
          title: "Material Design 3 Theme Mapping",
          duration: "30:00",
        },
        {
          id: "m3-l2",
          title: "Dynamic Light & Dark Palette Engine",
          duration: "40:00",
        },
        {
          id: "m3-l3",
          title: "Multi-brand Governance & Publishing",
          duration: "40:00",
        },
      ],
    },
  ],
  instructor: {
    id: "1",
    name: "Sarah Drasner",
    title: "SVG & Animation Expert | VP of Developer Experience",
    bio: "Sarah is an award-winning designer, engineer, and author who has helped shape the digital landscape of the web. Known for her work on high-performance animations and scalable component libraries, she brings a unique hybrid perspective of design systems and engineering excellence.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    studentsCount: 150000,
    yearsExperience: 12,
    rating: 4.95,
  },
};

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
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBoPjdXTk5B0jGENe0Rho9oi_RmKydOZG38MSTOAHwRfxoTO17SsHw_IgWcDdffCQ75szOUa84Ly2avn5x54VQWptBhZWjC36JzdbJfaBQceuh0qDincEtA5xpevKFqrijYelUOkBf0xAwyVohHD_ewQwFFm3NUMnMrn7BiqxXH3Kuf6Pr3yjzq8FdKO-ymZ-HNsK0K8-Jr9vIqUnWavLHa5vlI-TQe80Vj7F_AfbU9eIyN1uZlF3OurHsF1RYD9kwCj6MkWZEynSA",
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
      isExpanded: false,
    },
    {
      id: "2",
      number: 2,
      title: "Grid Systems & Visual Rhythm",
      lessons: 6,
      duration: "140 mins",
      isExpanded: true,
      lessonItems: [
        {
          id: "1",
          title: "The Psychology of the Grid",
          duration: "15:00",
        },
        {
          id: "2",
          title: "Responsive Breakpoints Redefined",
          duration: "24:00",
        },
        {
          id: "3",
          title: "Hard & Soft Grid Logic",
          duration: "18:00",
        },
      ],
    },
    {
      id: "3",
      number: 3,
      title: "Tokenization & Theming",
      lessons: 5,
      duration: "110 mins",
      isExpanded: false,
    },
  ],
  instructor: {
    id: "1",
    name: "Sarah Drasner",
    title: "SVG & Animation Expert | VP of Developer Experience",
    bio: "Sarah is an award-winning designer, engineer, and author who has helped shape the digital landscape of the web. Known for her work on high-performance animations and scalable component libraries, she brings a unique hybrid perspective of design systems and engineering excellence.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6CW-2MTMv-hRJDr0Bi3BT80eunV1e_wTx9N-j5jyoNQa88FUo7m4iObJDxflsrd3nKkY4-2BpnCGZdt1XWyYnoF2Qi29QJsX2MFvr10Z7LUSm3rBQzLqPX1p_MOuW0tzJsl86t_encOQHW1i2xaRgbj-ZaHfDJW1oiFviAfznkdi7MG6q8UfX_PMQ9acwiow4WatOQhbB4PKZLMWSe0f-j-dNumVhFU0VJj73WI-PRrGhE78KxddDNrB4ln31PGVRcuOqRY97C5I",
    studentsCount: 150000,
    yearsExperience: 12,
    rating: 4.95,
  },
};

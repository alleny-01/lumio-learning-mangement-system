import {
  compactCourses,
  featuredCourse,
  navLinks,
} from "../constants/constants";
import CourseGrid from "../components/CourseGrid";
import FeatureHighlights from "../components/FeatureHighlights";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="bg-surface text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar links={navLinks} />
      <main className="pt-24">
        <Hero />
        <CourseGrid
          featuredCourse={featuredCourse}
          compactCourses={compactCourses}
        />
        <FeatureHighlights />
      </main>
    </div>
  );
}

export default LandingPage;

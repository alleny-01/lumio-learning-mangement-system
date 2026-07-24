import { CourseHero } from "../components/CourseHero";
import { CourseOverview } from "../components/CourseOverview";
import { CourseSyllabus } from "../components/CourseSyllabus";
import { AIFeatures} from "../components/AIFeatures";
import { InstructorSection } from "../components/InstructorSection";
import { COURSE_DETAIL } from "../constants";

function CourseDetailPage() {
  return (
      <main className="flex-grow">
      <CourseHero course={COURSE_DETAIL} />
      <CourseOverview course={COURSE_DETAIL} />
      <AIFeatures />
      <InstructorSection instructor={COURSE_DETAIL.instructor} />
      <CourseSyllabus modules={COURSE_DETAIL.modules} />
    </main>
  );
}

export default CourseDetailPage;

import { CatalogHeader } from "../components/CatalogHeader";
import CatalogNavbar from "../components/CatalogNavbar";
import { CourseGrid } from "../components/CourseGrid";
import FilterBar from "../components/FilterBar";

export default function CourseCatalogPage() {
  return (
      <div className="bg-surface text-on-background antialiased px-6">
      <CatalogNavbar />
      <main className="pt-20 pb-20 max-w-7xl mx-auto">
        <CatalogHeader />
        <FilterBar />
        <CourseGrid />
        <div className="mt-20 flex flex-col items-center gap-6">
          <button className="px-7 py-2.5 bg-surface-container-lowest border border-outline-variant/30 rounded-xl text-on-surface font-bold text-xs hover:bg-surface-container-low transition-colors shadow-sm">
            Show More Results
          </button>
          <p className="text-on-surface-variant text-xs font-medium">
            Showing 8 of 156 courses available
          </p>
        </div>
      </main>
    </div>  
  );
}

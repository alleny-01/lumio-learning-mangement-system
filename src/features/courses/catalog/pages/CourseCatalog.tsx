import CatalogNavbar from "../components/CatalogNavbar";
import Sidebar from "@/components/layout/Sidebar";
import FilterBar from "../components/FilterBar";
import { CourseGrid } from "../components/CourseGrid";
import { CatalogHeader } from "../components/CatalogHeader";


export default function CourseCatalogPage() {
  return (
    <div className="text-on-background antialiased ">
      <Sidebar />
      <main className="pt-20 pb-2 pl-17 pr-4 mx-auto">
        <CatalogNavbar />
        <CatalogHeader 
        />
        <FilterBar 
        />
        <CourseGrid 
        />
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

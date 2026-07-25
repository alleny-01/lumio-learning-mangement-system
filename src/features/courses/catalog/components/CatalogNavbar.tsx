interface CatalogNavbarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

function CatalogNavbar({ search, onSearchChange }: CatalogNavbarProps) {
  return (
    <header className="mb-6 rounded-sm border border-border/40 bg-surface-container-lowest p-3">
      <label className="sr-only" htmlFor="course-search">
        Search courses
      </label>
      <input
        id="course-search"
        type="search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search courses, instructors, or skills"
        className="h-10 w-full rounded-sm bg-surface-container-low px-4 text-xs font-light outline-none ring-1 ring-transparent transition focus:bg-surface-container-lowest focus:ring-primary/20"
      />
    </header>
  );
}

export default CatalogNavbar;

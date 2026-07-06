import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="flex items-center gap-8 flex-1">
      <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-md w-full max-w-md gap-3">
        <span className="material-symbols-outlined text-outline">
          <CiSearch size={18} />
        </span>
        <input
          className="bg-transparent border-none focus:ring-0 text-xs w-full text-on-surface outline-none placeholder:text-xs p"
          placeholder="Search courses, mentors..."
          type="text"
          autoFocus
        />
      </div>
    </div>
  );
}

export default SearchBar;

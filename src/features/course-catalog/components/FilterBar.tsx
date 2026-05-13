import { CiFilter } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";

function FilterBar() {
  return (
    <div className="flex items-center justify-between gap-3 p-1.5 rounded-xl mb-7">
      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-on-surface/60">
          <CiFilter size={18} />
        </div>
        <select className="appearance-none bg-surface-container-lowest text-on-surface shadow-sm text-[13px] px-9 py-2.5  rounded-lg cursor-pointer focus:outline-none transition-all focus:border-none">
          <option value="all" className="text-xs text-on-surface-variant">
            All Categories
          </option>
          <option value="design" className="text-xs text-on-surface-variant">
            Design
          </option>
          <option
            value="development"
            className="text-xs text-on-surface-variant"
          >
            Development
          </option>
          <option value="marketing" className="text-xs text-on-surface-variant">
            Marketing
          </option>
        </select>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-on-surface/60">
          <IoFilterOutline size={18} />
        </div>
        <select className="appearance-none bg-surface-container-lowest text-on-surface shadow-sm text-[13px] px-9 py-2.5 rounded-lg cursor-pointer focus:outline-none focus:border-none">
          <option
            value="recommended"
            className="text-xs text-on-surface-variant"
          >
            Recommended
          </option>
          <option value="newest" className="text-on-surface-variant">
            Newest
          </option>
          <option value="popular" className="text-on-surface-variant">
            Most Popular
          </option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;

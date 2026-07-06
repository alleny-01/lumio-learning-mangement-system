import { CiFilter } from "react-icons/ci";
import { IoFilterOutline } from "react-icons/io5";
import { categories, sortOptions } from "../constants";

function FilterBar() {
  return (
    <div className="flex items-center justify-between sm:flex-row flex-col gap-3 p-1.5 rounded-xl mb-7">
      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-on-surface/60">
          <CiFilter size={18} />
        </div>
        <select className="appearance-none bg-surface-container-lowest text-on-surface shadow-sm text-[13px] px-9 py-2.5  rounded-md cursor-pointer focus:outline-none transition-all focus:border-none">
          {categories.map((category) => (
            <option key={category} value={category.toLowerCase()} className="text-xs text-on-surface-variant">
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-on-surface/60">
          <IoFilterOutline size={18} />
        </div>
        <select className="appearance-none bg-surface-container-lowest text-on-surface shadow-sm text-[13px] px-9 py-2.5 rounded-md cursor-pointer focus:outline-none focus:border-none">
          {
            sortOptions.map((option) => (
              <option key={option} value={option.toLowerCase()} className="text-xs text-on-surface-variant">
                {option}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default FilterBar;

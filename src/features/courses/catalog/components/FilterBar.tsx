import { categories } from "../constants";

interface FilterBarProps {
  category: string;
  difficulty: string;
  minimumRating: number;
  onCategoryChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onMinimumRatingChange: (value: number) => void;
}

function FilterBar({
  category,
  difficulty,
  minimumRating,
  onCategoryChange,
  onDifficultyChange,
  onMinimumRatingChange,
}: FilterBarProps) {
  return (
    <div className="mb-7 grid gap-3 rounded-sm border border-border/40 bg-surface-container-lowest p-3 sm:grid-cols-3">
      <label className="space-y-1.5 text-[11px] font-light text-on-surface-variant">
        Category
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="h-9 w-full rounded-sm bg-surface-container-low px-3 text-xs text-on-surface outline-none"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-1.5 text-[11px] font-light text-on-surface-variant">
        Difficulty
        <select
          value={difficulty}
          onChange={(event) => onDifficultyChange(event.target.value)}
          className="h-9 w-full rounded-sm bg-surface-container-low px-3 text-xs text-on-surface outline-none"
        >
          <option value="all">All levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>

      <label className="space-y-1.5 text-[11px] font-light text-on-surface-variant">
        Minimum rating
        <select
          value={minimumRating}
          onChange={(event) => onMinimumRatingChange(Number(event.target.value))}
          className="h-9 w-full rounded-sm bg-surface-container-low px-3 text-xs text-on-surface outline-none"
        >
          <option value={0}>Any rating</option>
          <option value={3}>3.0+</option>
          <option value={4}>4.0+</option>
          <option value={4.5}>4.5+</option>
        </select>
      </label>
    </div>
  );
}

export default FilterBar;

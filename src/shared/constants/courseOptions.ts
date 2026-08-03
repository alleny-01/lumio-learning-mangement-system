export const courseCategories = [
  "Design",
  "Development",
  "Marketing",
  "Business",
  "Data",
  "Product",
  "Other",
] as const;

export const catalogCategories = ["All Categories", ...courseCategories] as const;

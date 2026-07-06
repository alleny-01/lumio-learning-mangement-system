export interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  reviews: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
  badgeColor?: "tertiary" | "secondary";
}

export type category = string;
export type sortOption = string;
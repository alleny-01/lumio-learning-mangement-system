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

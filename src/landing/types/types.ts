export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface FeaturedCourse {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
  instructorName: string;
  instructorIcon: string;
  price: string;
}

export interface CompactCourse {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  levelLabel: string;
  levelClassName: string;
  price: string;
}

export interface FooterLinkGroup {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

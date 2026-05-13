import type {
  CompactCourse,
  FeaturedCourse,
  FooterLinkGroup,
  NavLink,
  SocialLink,
} from "../types/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export const featuredCourse: FeaturedCourse = {
  title: "UI/UX Design Masterclass",
  description:
    "Master the art of user-centric design through hands-on projects, from wireframing to high-fidelity prototyping and user testing.",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAd8y29X2suUgw00tGyXeRJ5pRPXR9B1wPYsAHCW3PkdRxh_4U5P1z1P2KGiLmq5MH6j8EQeXFjIZrlL3UujXIsXibHLYI9bf57P2QUQbGno2H67FFAleiOYhghRzCYHOH-zKHsvw6NoiqBMHEvMRMe5b837YJRV5uhBgBspuwtk0Ru9Dv4cGyH2HzLzmMNlnRC9RAik_scQQREwNFygDoHQfaS1f4DwLcCXyNU5bcsat4WnmWQ2TI-DvXw7xDW3r67rdFE72gqfwQ",
  imageAlt:
    "Close-up of a high-end designer workstation with multiple screens showing sleek minimalist interface designs in a soft-lit modern studio",
  tag: "MOST POPULAR",
  instructorName: "Sarah Jenkins, Senior Lead",
  instructorIcon: "brush",
  price: "$149",
};

export const compactCourses: CompactCourse[] = [
  {
    title: "Data Science Essentials",
    description:
      "Learn Python, SQL, and statistical modeling to solve real-world problems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoEKq0_OWS-4rwzV0zBuaaI-2T1e4TVV34nAPFEjVkddoMFHaDnhro0sE7mA5YNfJ6ktEMAJIYpyB8sF3GI7qhItocBx_fml8NhLsKszWtXTDNws8av_HdXF7pxMfCG6aNu4gu7aWcxLJwyAMgg5J8twdPS0ztGVC--EXJwGgBX2nlrhSpU75nnnwTPcV1yRPFk4X6v_4Ix6DyUpgpIOKX1tEi6tCvNFFaRfZkn4I9lqgiwwZ7gYKAxlht8vXW72BDWev5_xgqUnY",
    imageAlt:
      "Abstract visualization of complex data networks with glowing nodes and connecting lines in deep blue and turquoise hues",
    levelLabel: "BEGINNER",
    levelClassName: "text-xs font-bold text-secondary",
    price: "$99",
  },
  {
    title: "AI Mastery & LLMs",
    description:
      "Harness the power of Large Language Models and Generative AI for your workflow.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAml2EMhbyDPcPS-dj87WKdYcuiCPfC1D-L55_af_iFBuP7bLZZprNBthAeLD3SG0T0eVL3AV22DEfmSJZE2Hrs8fcHDxFTLGrBbCD45dIiS5E9hJ-KDmDF9V9SPFiqTbjZKbAjHirjkCbPCrm59javFCTnVPFTQ8Ro0zY0Aphex4jCasjX4g6uolyp2YO_HYYZuLQdvcKL33oiQwP9H8FqZe3fkgm0Dz5x38a8o2O0ycyz-0c0a5wIXPTxkAHLJoqQg5s_8Q779Fw",
    imageAlt:
      "Futuristic robotic hand delicately touching a digital light display, representing advanced artificial intelligence integration",
    levelLabel: "ADVANCED",
    levelClassName:
      "text-xs font-bold text-tertiary-container text-white px-2 py-0.5 rounded-full",
    price: "$199",
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Platform",
    links: [
      { label: "Courses", href: "#" },
      { label: "Mentors", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { icon: "public", href: "#", label: "Website" },
  { icon: "chat", href: "#", label: "Chat" },
  { icon: "share", href: "#", label: "Share" },
];

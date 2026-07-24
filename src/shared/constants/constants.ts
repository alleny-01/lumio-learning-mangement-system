import { createElement } from "react";
import {
  GraduationCap,
  Video,
  Cog,
  LayoutDashboard,
} from "lucide-react";
import type { NavItem } from "../types/types";

export const mainNavItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: createElement(LayoutDashboard, { size: 18, strokeWidth: 0.75 }),
    to: "/dashboard",
  },
  {
    id: "learning",
    label: "My Learning",
    icon: createElement(GraduationCap, { size: 18, strokeWidth: 0.75 }),
    to: "/dashboard",
  },
  {
    id: "courses",
    label: "Courses",
    icon: createElement(Video, { size: 18, strokeWidth: 0.75 }),
    to: "/courses",
  },
  {
    id: "settings",
    label: "Settings",
    icon: createElement(Cog, { size: 18, strokeWidth: 0.75 }),
    to: "/settings",
  },
];

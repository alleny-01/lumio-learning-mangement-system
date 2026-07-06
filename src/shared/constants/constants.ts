import type { NavItem } from "../types/types";
import { createElement } from "react";
import {
  CircleQuestionMark,
  Files,
  GraduationCap,
  Video,
  Cog,
  LogOut,
  NotebookPen,
  LayoutDashboard,
} from "lucide-react";

export const mainNavItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: createElement(LayoutDashboard, { size: 18, strokeWidth: 0.75 }),
    href: "#",
  },
  {
    id: "learning",
    label: "My Learning",
    icon: createElement(GraduationCap, { size: 18, strokeWidth: 0.75 }),
    href: "#",
  },
  {
    id: "courses",
    label: "Courses",
    icon: createElement(Video, { size: 18, strokeWidth: 0.75 }),
    href: "#",
  },
  {
    id: "resources",
    label: "Resources",
    icon: createElement(Files, { size: 18, strokeWidth: 0.75 }),
    href: "#",
  },
   {
    id: "assignments",
    label: "Assignments",
    icon: createElement(NotebookPen, { size: 18, strokeWidth: 0.75 }),
    href: "#",
  },
  {
    id: "help",
    label: "Help",
    icon: createElement(CircleQuestionMark, { size: 18, strokeWidth: 0.75 }),
    href: "#",
  },
  {
    id: "settings",
    label: "Settings",
    icon: createElement(Cog, { size: 18, strokeWidth: 0.75 }),
    href: "#",
  },
];



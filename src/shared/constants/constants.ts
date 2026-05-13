import type { NavItem } from "../types/types";
import { createElement } from "react";
import { TfiHome } from "react-icons/tfi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import {
  PiBookThin,
  PiGraduationCapThin,
  PiVideoCameraLight,
} from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { FcSettings } from "react-icons/fc";

export const mainNavItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: createElement(TfiHome, { size: 18 }),
    href: "#",
  },
  {
    id: "learning",
    label: "My Learning",
    icon: createElement(PiGraduationCapThin, { size: 18 }),
    href: "#",
  },
  {
    id: "courses",
    label: "Courses",
    icon: createElement(PiVideoCameraLight, { size: 18 }),
    href: "#",
  },
  {
    id: "resources",
    label: "Resources",
    icon: createElement(PiBookThin, { size: 18 }),
    href: "#",
  },
  {
    id: "settings",
    label: "Settings",
    icon: createElement(FcSettings, { size: 18 }),
    href: "#",
  },
];

export const bottomNavItems: NavItem[] = [
  {
    id: "help",
    label: "Help",
    icon: createElement(IoIosHelpCircleOutline, { size: 18 }),
    href: "#",
  },
  {
    id: "logout",
    label: "Logout",
    icon: createElement(CiLogout, { size: 18 }),
    href: "#",
  },
];

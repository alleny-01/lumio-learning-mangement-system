import { Globe, Palette, Shield, UserRound } from "lucide-react";
import type { SettingsNavItem } from "../types";

export const settingsNavItems: SettingsNavItem[] = [
  { id: "profile", label: "Profile", icon: UserRound },
  { id: "security", label: "Account & Security", icon: Shield },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "language", label: "Language", icon: Globe },
];

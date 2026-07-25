import type { LucideIcon } from "lucide-react";
import type { AuthProvider, ThemePreference } from "@/shared/types/database";

export type SettingsSectionId = "profile" | "security" | "appearance" | "language";

export interface SettingsNavItem {
  id: SettingsSectionId;
  label: string;
  icon: LucideIcon;
}

export interface ProfileSettingsForm {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  bio: string;
  avatarUrl: string;
  email: string;
  authProvider: AuthProvider;
  themePreference: ThemePreference;
  language: "en";
}

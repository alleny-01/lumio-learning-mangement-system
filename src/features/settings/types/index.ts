import type { LucideIcon } from "lucide-react";

export interface SettingsNavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SettingsActionRow {
  id: string;
  title: string;
  description: string;
  actionLabel: string;
  actionVariant?: "primary" | "default" | "destructive";
  statusLabel?: string;
  isToggle?: boolean;
  isToggled?: boolean;
}

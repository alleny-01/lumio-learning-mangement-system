import {
  Bell,
  CreditCard,
  Globe,
  LockKeyhole,
  Monitor,
  Palette,
  Shield,
  SquarePen,
  UserRound,
} from "lucide-react";
import type { SettingsActionRow, SettingsNavItem } from "../types";

export const settingsNavItems: SettingsNavItem[] = [
  { id: "profile", label: "My Profile", icon: UserRound },
  { id: "security", label: "Security", icon: Shield },
  { id: "teams", label: "Teams", icon: SquarePen },
  { id: "members", label: "Team Member", icon: LockKeyhole },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "data", label: "Data Export", icon: Monitor },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "language", label: "Language", icon: Globe },
];

export const securityRows: SettingsActionRow[] = [
  {
    id: "email",
    title: "Email address",
    description: "The email address associated with your account.",
    actionLabel: "Edit",
    statusLabel: "Unverified",
    actionVariant: "default",
  },
  {
    id: "password",
    title: "Password",
    description: "Set a unique password to protect your account.",
    actionLabel: "Change Password",
    actionVariant: "default",
  },
  {
    id: "2fa",
    title: "2-step verification",
    description:
      "Make your account extra secure. Along with your password, you'll need to enter a code",
    actionLabel: "Toggle",
    isToggle: true,
    isToggled: true,
  },
  {
    id: "restricted",
    title: "Restricted Members",
    description:
      "This will shut down your account. Your account will be reactive when you sign in again.",
    actionLabel: "None",
  },
  {
    id: "deactivate",
    title: "Deactivate my account",
    description:
      "This will shut down your account. Your account will be reactive when you sign in again.",
    actionLabel: "Deactivate",
  },
  {
    id: "delete",
    title: "Delete Account",
    description:
      "This will delete your account. Your account will be permanently deleted from Prodeel.",
    actionLabel: "Delete",
    actionVariant: "destructive",
  },
];

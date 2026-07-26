import { useContext, useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { Skeleton } from "@/components/ui/Skeleton";
import { LMSContext } from "@/contexts/LMSContext";
import { showToast } from "@/components/ui/Toast";
import { updatePassword } from "@/shared/api/auth";
import { getProfile, removeAvatar, updateProfile } from "@/shared/api/profiles";
import { getPublicStorageUrl } from "@/shared/api/resources";
import {
  requestAccountDeletion,
  updateThemePreference,
  uploadAvatar,
} from "@/shared/api/settings";
import type {
  AuthProvider,
  Tables,
  ThemePreference,
} from "@/shared/types/database";
import { SettingsHeader } from "./SettingsHeader";
import { SettingsSidebar } from "./SettingsSidebar";
import { SettingsMobileTabs } from "./SettingsMobileTabs";
import { AccountSecuritySection } from "./AccountSecuritySection";
import { AppearanceSection } from "./AppearanceSection";
import { LanguageSection } from "./LanguageSection";
import { ProfileSection } from "./ProfileSection";
import { settingsNavItems } from "../constants";
import type { ProfileSettingsForm, SettingsSectionId } from "../types";

function stringMetadataValue(
  metadata: Record<string, unknown>,
  key: string,
): string {
  const value = metadata[key];
  return typeof value === "string" ? value : "";
}

function providerFromSession(provider: unknown): AuthProvider {
  return provider === "google" ? "google" : "email";
}

function fallbackProfileFromSession(session: Session): ProfileSettingsForm {
  const metadata = session.user.user_metadata as Record<string, unknown>;
  const firstName =
    stringMetadataValue(metadata, "first_name") ||
    stringMetadataValue(metadata, "given_name");
  const lastName =
    stringMetadataValue(metadata, "last_name") ||
    stringMetadataValue(metadata, "family_name");

  return {
    firstName,
    lastName,
    dateOfBirth: "",
    bio: "",
    avatarUrl: stringMetadataValue(metadata, "avatar_url"),
    email: session.user.email ?? "",
    authProvider: providerFromSession(session.user.app_metadata.provider),
    themePreference: "system",
    language: "en",
  };
}

function formFromProfile(
  profile: Tables<"profiles">,
  fallback: ProfileSettingsForm,
): ProfileSettingsForm {
  return {
    firstName: profile.first_name ?? fallback.firstName,
    lastName: profile.last_name ?? fallback.lastName,
    dateOfBirth: profile.date_of_birth ?? "",
    bio: profile.bio ?? "",
    avatarUrl: profile.avatar_url ?? fallback.avatarUrl,
    email: profile.email || fallback.email,
    authProvider: profile.auth_provider,
    themePreference: profile.theme_preference,
    language: profile.language,
  };
}

function applyThemePreference(theme: ThemePreference) {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.classList.toggle("dark", theme === "dark" || (theme === "system" && prefersDark));
}

export function SettingsShell() {
  const { session, setAuthError } = useContext(LMSContext);
  const [activeSection, setActiveSection] =
    useState<SettingsSectionId>("profile");
  const [profile, setProfile] = useState<ProfileSettingsForm | null>(null);
  const [savedProfile, setSavedProfile] = useState<ProfileSettingsForm | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const userId = session?.user.id;

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      if (!session) return;

      setIsLoading(true);
      const fallback = fallbackProfileFromSession(session);
      const { data, error } = await getProfile(session.user.id);
      const nextProfile = data ? formFromProfile(data, fallback) : fallback;

      if (!isMounted) return;
      if (error && error.code !== "PGRST116") {
        setAuthError(error.message);
      }
      setProfile(nextProfile);
      setSavedProfile(nextProfile);
      applyThemePreference(nextProfile.themePreference);
      setIsLoading(false);
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, [session, setAuthError]);

  useEffect(() => {
    if (!profile) return undefined;
    applyThemePreference(profile.themePreference);

    if (profile.themePreference !== "system") return undefined;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => applyThemePreference("system");
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [profile]);

  const isDirty = useMemo(() => {
    if (!profile || !savedProfile) return false;
    return JSON.stringify(profile) !== JSON.stringify(savedProfile);
  }, [profile, savedProfile]);

  function patchProfile(values: Partial<ProfileSettingsForm>) {
    setProfile((current) => (current ? { ...current, ...values } : current));
  }

  async function saveProfile() {
    if (!profile || !userId) return;

    setIsSaving(true);
    const { data, error } = await updateProfile(userId, {
      first_name: profile.firstName.trim() || null,
      last_name: profile.lastName.trim() || null,
      date_of_birth: profile.dateOfBirth || null,
      bio: profile.bio.trim() || null,
      avatar_url: profile.avatarUrl || null,
      language: profile.language,
    });

    if (error) {
      setAuthError(error.message);
      setIsSaving(false);
      return;
    }

    const nextProfile = data
      ? formFromProfile(data, profile)
      : { ...profile };
    setProfile(nextProfile);
    setSavedProfile(nextProfile);
    setIsSaving(false);
    showToast({
      type: "success",
      title: "Profile saved",
      description: "Your Lumio profile is up to date.",
    });
  }

  async function handleAvatarUpload(file: File) {
    if (!profile || !userId) return;

    setIsUploading(true);
    const extension = file.name.split(".").pop()?.toLowerCase() || "png";
    const path = `${userId}/avatar-${Date.now()}.${extension}`;
    const { error } = await uploadAvatar(path, file);

    if (error) {
      setAuthError(error.message);
      setIsUploading(false);
      return;
    }

    const avatarUrl = getPublicStorageUrl("avatars", path);
    const { data, error: updateError } = await updateProfile(userId, {
      avatar_url: avatarUrl,
    });

    if (updateError) {
      setAuthError(updateError.message);
      setIsUploading(false);
      return;
    }

    const nextProfile = data
      ? formFromProfile(data, { ...profile, avatarUrl })
      : { ...profile, avatarUrl };
    setProfile(nextProfile);
    setSavedProfile(nextProfile);
    setIsUploading(false);
  }

  async function handleAvatarRemove() {
    if (!profile || !userId) return;

    setIsUploading(true);
    const { data, error } = await removeAvatar(userId);

    if (error) {
      setAuthError(error.message);
      setIsUploading(false);
      return;
    }

    const nextProfile = data
      ? formFromProfile(data, { ...profile, avatarUrl: "" })
      : { ...profile, avatarUrl: "" };
    setProfile(nextProfile);
    setSavedProfile(nextProfile);
    setIsUploading(false);
  }

  async function handleThemeChange(theme: ThemePreference) {
    if (!profile || !userId) return;

    const previous = profile.themePreference;
    patchProfile({ themePreference: theme });
    applyThemePreference(theme);
    setIsSaving(true);

    const { data, error } = await updateThemePreference(userId, theme);
    if (error) {
      patchProfile({ themePreference: previous });
      applyThemePreference(previous);
      setAuthError(error.message);
      setIsSaving(false);
      return;
    }

    const nextProfile = data
      ? formFromProfile(data, { ...profile, themePreference: theme })
      : { ...profile, themePreference: theme };
    setProfile(nextProfile);
    setSavedProfile(nextProfile);
    setIsSaving(false);
  }

  async function handlePasswordChange(password: string) {
    setIsSaving(true);
    const { error } = await updatePassword(password);
    setIsSaving(false);

    if (error) {
      setAuthError(error.message);
      return;
    }

    showToast({
      type: "success",
      title: "Password updated",
      description: "Use your new password the next time you sign in.",
    });
  }

  async function handleDeleteAccount() {
    const { error } = await requestAccountDeletion();
    if (error) setAuthError(error.message);
  }

  const content = (() => {
    if (!profile) return null;

    if (activeSection === "profile") {
      return (
        <ProfileSection
          form={profile}
          isDirty={isDirty}
          isSaving={isSaving}
          isUploading={isUploading}
          onChange={patchProfile}
          onDiscard={() => setProfile(savedProfile)}
          onSave={saveProfile}
          onAvatarUpload={handleAvatarUpload}
          onAvatarRemove={handleAvatarRemove}
        />
      );
    }

    if (activeSection === "security") {
      return (
        <AccountSecuritySection
          email={profile.email}
          authProvider={profile.authProvider}
          isSaving={isSaving}
          onPasswordChange={handlePasswordChange}
          onDeleteAccount={handleDeleteAccount}
        />
      );
    }

    if (activeSection === "appearance") {
      return (
        <AppearanceSection
          theme={profile.themePreference}
          isSaving={isSaving}
          onThemeChange={handleThemeChange}
        />
      );
    }

    return <LanguageSection language={profile.language} />;
  })();

  return (
    <div className="min-h-screen bg-surface text-on-surface antialiased">
      <main className="mx-auto max-w-340 px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-4">
        <SettingsHeader />

        <div className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)] md:gap-5">
          <SettingsSidebar
            items={settingsNavItems}
            activeId={activeSection}
            onSelect={setActiveSection}
          />

          <div className="space-y-4">
            <SettingsMobileTabs
              items={settingsNavItems}
              activeId={activeSection}
              onSelect={setActiveSection}
            />
            {isLoading ? (
              <section className="rounded-[22px] border border-border/30 bg-surface-container-lowest px-5 py-5 sm:px-6 sm:py-6">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="mt-3 h-4 w-2/3" />
                <div className="mt-8 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
                  <Skeleton className="size-22 rounded-full" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-28 w-full sm:col-span-2" />
                  </div>
                </div>
              </section>
            ) : (
              content
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

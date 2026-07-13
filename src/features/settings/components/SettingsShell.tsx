import { useMemo, useState } from "react";
import { SettingsHeader } from "./SettingsHeader";
import { SettingsSidebar } from "./SettingsSidebar";
import { SettingsMobileTabs } from "./SettingsMobileTabs";
import { SecuritySection } from "./SecuritySection";
import { settingsNavItems } from "../constants";

export function SettingsShell() {
  const [activeSection, setActiveSection] = useState("security");

  const content = useMemo(() => {
    if (activeSection === "security") return <SecuritySection />;

    return (
      <section className="rounded-[26px] border border-border/30 bg-surface-container-lowest p-6 text-[12px] text-on-surface-variant shadow-[0_10px_30px_-24px_rgba(15,23,42,0.25)]">
        <p className="font-medium text-on-background">{activeSection}</p>
        <p className="mt-1 font-light">
          This section is intentionally left as a visual placeholder for future
          settings content.
        </p>
      </section>
    );
  }, [activeSection]);

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
            {content}
          </div>
        </div>
      </main>
    </div>
  );
}

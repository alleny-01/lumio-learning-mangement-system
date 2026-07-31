import type { SettingsNavItem, SettingsSectionId } from "../types";

interface SettingsSidebarProps {
  items: SettingsNavItem[];
  activeId: SettingsSectionId;
  onSelect: (id: SettingsSectionId) => void;
}

export function SettingsSidebar({
  items,
  activeId,
  onSelect,
}: SettingsSidebarProps) {
  return (
    <aside className="hidden w-55 shrink-0  border border-border/30 bg-surface-container-lowest p-4 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.25)] md:block">
      <nav className="space-y-1.5">
        {items.map((item) => {
          const isActive = item.id === activeId;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-[13px] transition-all duration-200 ${
                isActive
                  ? "bg-primary/10 text-primary shadow-[0_8px_20px_-20px_rgba(53,37,205,0.75)]"
                  : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
              }`}
              aria-pressed={isActive}
            >
              <Icon
                className={`size-4 shrink-0 ${isActive ? "text-primary" : "text-outline"}`}
              />
              <span className="font-light tracking-[-0.01em]">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

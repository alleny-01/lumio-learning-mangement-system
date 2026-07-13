import type { SettingsNavItem } from "../types";

interface SettingsMobileTabsProps {
  items: SettingsNavItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function SettingsMobileTabs({
  items,
  activeId,
  onSelect,
}: SettingsMobileTabsProps) {
  return (
    <nav className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:hidden">
      {items.map((item) => {
        const isActive = item.id === activeId;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[12px] transition-all duration-200 ${
              isActive
                ? "border-primary/20 bg-primary/10 text-primary shadow-sm"
                : item.id === "delete"
                  ? "border-error/15 bg-surface-container-lowest text-error hover:bg-error/5"
                  : "border-border/50 bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
            }`}
            aria-pressed={isActive}
          >
            <Icon className="size-3.5 shrink-0" />
            <span className="font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

import type { SettingsNavItem, SettingsSectionId } from "../types";

interface SettingsMobileTabsProps {
  items: SettingsNavItem[];
  activeId: SettingsSectionId;
  onSelect: (id: SettingsSectionId) => void;
}

export function SettingsMobileTabs({
  items,
  activeId,
  onSelect,
}: SettingsMobileTabsProps) {
  return (
    <nav className="-mx-3 flex max-w-[100vw] gap-2 overflow-x-auto px-3 pb-1 md:hidden">
      {items.map((item) => {
        const isActive = item.id === activeId;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-[12px] transition-all duration-200 ${
              isActive
                ? "bg-primary/10 shadow-sm"
                : "border-border/50 bg-surface-container-lowest  hover:bg-surface-container-low hover:text-on-surface"
            }`}
            aria-pressed={isActive}
          >
            <Icon className="size-3.5 shrink-0" strokeWidth={1}/>
            <span className="whitespace-nowrap font-light">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

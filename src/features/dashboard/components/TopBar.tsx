import { Bell, ChevronDown, Settings2 } from "lucide-react";

export function TopBar() {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex-1" />

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="flex items-center gap-2 rounded-full border border-border/60 bg-surface-container-lowest px-3 py-1.5 shadow-sm transition-colors hover:bg-surface-container-low">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
            alt="Anzhelika Gev"
            className="h-5 w-5 rounded-full object-cover"
          />
          <span className="text-xs font-medium text-on-surface">
            Anzhelika Gev
          </span>
          <ChevronDown className="size-3.5 text-outline" />
        </button>

        <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-surface-container-lowest text-on-surface shadow-sm transition-colors hover:bg-surface-container-low">
          <Settings2 className="size-4" />
        </button>

        <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border/60 bg-surface-container-lowest text-on-surface shadow-sm transition-colors hover:bg-surface-container-low">
          <Bell className="size-4" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-white bg-indigo-500" />
        </button>
      </div>
    </div>
  );
}

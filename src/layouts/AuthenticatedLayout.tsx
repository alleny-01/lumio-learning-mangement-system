import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";

const COLLAPSED_WIDTH = "64px";
const EXPANDED_WIDTH = "256px";

function AuthenticatedLayout(): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sidebarWidth = isCollapsed ? COLLAPSED_WIDTH : EXPANDED_WIDTH;

  return (
    <div
      className="min-h-screen bg-surface text-on-surface [--sidebar-width:256px] md:[--sidebar-width:var(--desktop-sidebar-width)]"
      style={
        {
          "--desktop-sidebar-width": sidebarWidth,
        } as React.CSSProperties
      }
    >
      <Sidebar
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        onToggleCollapsed={() => setIsCollapsed((value) => !value)}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      <div className="min-h-screen transition-[margin] duration-300 ease-out md:ml-[var(--sidebar-width)]">
        <header className="sticky top-0 z-30 flex h-14 items-center border-b border-outline-variant/30 bg-surface/85 px-4 backdrop-blur md:hidden">
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-sm text-on-surface transition-colors hover:bg-surface-container"
            aria-label="Open navigation"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu size={19} strokeWidth={1.4} />
          </button>
          <span className="ml-3 text-[13px] font-medium tracking-wide">
            Lumio
          </span>
        </header>

        <main className="min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AuthenticatedLayout;

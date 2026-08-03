import { Outlet, useLocation } from "react-router-dom";
import { Spinner } from "@/components/ui/Spinner";

function AppLayout() {
  const location = useLocation();

  return (
    <main>
      <div
        key={location.key}
        className="pointer-events-none fixed left-1/2 top-4 z-[100] -translate-x-1/2 rounded-full border border-border/40 bg-surface-container-lowest/90 px-3 py-2 text-primary opacity-0 shadow-[0_10px_30px_-22px_rgba(15,23,42,0.45)] backdrop-blur"
        style={{ animation: "route-settle-spinner 220ms ease-out forwards" }}
      >
        <Spinner className="size-4" />
      </div>
      <Outlet />
    </main>
  );
}

export default AppLayout;

import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Spinner } from "@/components/ui/Spinner";
import { useNavigate } from "react-router-dom";
import { mainNavItems } from "@/shared/constants/constants";
import { LogOut, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase/client";
import { LMSContext } from "@/contexts/LMSContext";
import { Button } from "@/components/ui/Button";

function Sidebar(): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeRoute, setActiveRoute] = useState("dashboard");
  const { setSession, isLoading, setIsLoading } = useContext(LMSContext);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error signing out:", error);
      }
      setSession(null);
      navigate("/");
    } catch (err) {
      console.error("An error occurred during sign out:", err);
    } finally {
      setIsLoading(false);
      setIsLogoutModalOpen(false);
    }
  };

  return (
    <aside
      onClick={() => setIsCollapsed(!isCollapsed)}
      className={`fixed z-999 bg-surface-container-lowest left-0 top-0 h-screen md:flex flex-col transition-all duration-200 ease-in-out  ${
        isCollapsed ? "w-[50px]" : "w-[280px]"
      }`}
    >
      <div
        className={`flex items-center h-10 border-b border-border/50 px-2  flex-shrink-0 ${
          isCollapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!isCollapsed && (
          <div className="flex items-center gap-2 min-w-0 overflow-hidden">
            {/* <div className="w-5 h-5 rounded-[4px] bg-primary text-on-primary flex items-center justify-center font-semibold text-[10px] flex-shrink-0">
              A
            </div> */}
            <span className="text-[13px] font-normal text-on-surface tracking-wide truncate">
              LUMIO
            </span>
          </div>
        )}

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-5 h-5 flex items-center justify-center rounded text-outline hover:text-on-surface hover:bg-surface-container transition-colors flex-shrink-0"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16.5 4A1.5 1.5 0 0 1 18 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 14.5v-9A1.5 1.5 0 0 1 3.5 4zM7 15h9.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7zM3.5 5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6V5z"></path>
          </svg>
        </button>
      </div>

      <nav
        className={`flex flex-col gap-2 py-1 flex-grow overflow-y-auto ${!isCollapsed && "px-2"}  overflow-x-hidden mt-3`}
      >
        {mainNavItems.map((item) => {
          const isActive = activeRoute === item.id;
          return (
            <NavLink
              key={item.id}
              onClick={() => {
                setActiveRoute(item.id);
              }}
              to={`/${item.to}`}
              title={isCollapsed ? item.label : undefined}
              className={({isActive}) => `relative flex items-center gap-2 mx-1 py-[6px] transition-all px-2 duration-200 ease-out group rounded-sm ${
                isActive
                  ? "bg-surface-container text-black"
                  : " hover:text-on-surface hover:bg-surface-container hover:scale-100"
              } ${isCollapsed ? "justify-center" : ""}`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary to-primary rounded-r-full opacity-0 animate-in fade-in slide-in-from-left-2 duration-300" />
              )}
              <span
                className={`material-symbols-outlined flex-shrink-0 text-[18px] transition-all duration-200 ${isActive ? "scale-110" : "group-hover:scale-105"}`}
              >
                {item.icon}
              </span>
              {!isCollapsed && (
                <span
                  className={`text-[12px] font-extralight transition-all duration-200 text-black font-normal tracking-normal whitespace-nowrap`}
                >
                  {item.label}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div
        className={`flex flex-col border-t border-border/50 py-1  ${!isCollapsed && "px-2"}`}
      >
        <div className="flex items-center gap-3">
          <button
            className={cn(
              "group w-full transition-all duration-300",
              isCollapsed
                ? "flex justify-center p-2"
                : "rounded-2xl p-2 hover:bg-surface-container-low",
            )}
          >
            {/* Collapsed */}
            {isCollapsed ? (
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                  alt="Allen Enuma"
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/15 transition-transform duration-300 group-hover:scale-105"
                />

                {/* Online indicator */}
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-surface bg-emerald-500 animate-pulse" />
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                      alt="Allen Enuma"
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/15"
                    />

                    {/* Online indicator */}
                    <span className="absolute bottom-0right-0 h-3 w-3 rounded-full border-2 border-surface bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-left text-[13px] font-medium text-on-surface">
                      Allen Enuma
                    </h3>

                    <p className="truncate text-[11px] text-on-surface-variant">
                      allenenuma@gmail.com
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                        Scholar
                      </span>

                      <span className="flex items-center gap-1 text-[10px] text-emerald-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                <ChevronsUpDown
                  size={16}
                  className="text-on-surface-variant opacity-60 transition group-hover:opacity-100"
                />
              </div>
            )}
          </button>
        </div>

        <button
          onClick={() => setIsLogoutModalOpen(true)}
          className={`flex items-center gap-2 mx-1 px-2 py-[6px] transition-all duration-200 ease-out group rounded-sm hover:bg-surface-container ${
            isCollapsed ? "justify-center" : ""
          }
              `}
        >
          <span
            className={`material-symbols-outlined flex-shrink-0 text-[18px] transition-all duration-200 active:scale-110 group-hover:scale-105`}
          >
            <LogOut size={18} strokeWidth={1} />
          </span>
          {!isCollapsed && (
            <span className="text-[12px] font-ligh tracking-[-0.01em] whitespace-nowrap">
              Log out
            </span>
          )}
        </button>
      </div>

      {isLogoutModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md mx-4 rounded-sm bg-white shadow-2xl border border-gray-100 p-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-sm">
              <LogOut size={28} strokeWidth={1} />
            </div>

            <div className="mt-4 text-center">
              <h2 className="text-xl text-gray-900">Log Out</h2>

              <p className="mt-2 text-sm">Are you sure you want to log out?</p>
            </div>

            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setIsLogoutModalOpen(false)}
                size="lg"
                variant="outline"
                className="flex-1 px-4 py-2.5 text-sm rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </Button>

              <Button
                onClick={signOut}
                size="lg"
                variant="default"
                className="flex-1 px-4 py-2.5 text-sm  text-white bg-primary-container  transition-colors"
              >
                {isLoading ? "Logging you out..." : "Log Out"}
                {isLoading && <Spinner className="ml-2" />}
              </Button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;

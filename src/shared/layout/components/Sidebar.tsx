import React, { useState } from "react";
import { mainNavItems, bottomNavItems } from "../../constants/constants";

function Sidebar(): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeRoute, setActiveRoute] = useState("learning");

  return (
    <aside
      className={`bg-surface-bright border-r border-solid fixed left-0 top-0 h-screen hidden md:flex flex-col z-40 transition-all duration-200 ease-in-out  ${
        isCollapsed ? "w-[50px]" : "w-[250px]"
      }`}
    >
      <div
        className={`flex items-center h-10 border-b border-soild px-2  flex-shrink-0 ${
          isCollapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!isCollapsed && (
          <div className="flex items-center gap-2 min-w-0 overflow-hidden">
            <div className="w-5 h-5 rounded-[4px] bg-primary text-on-primary flex items-center justify-center font-semibold text-[10px] flex-shrink-0">
              A
            </div>
            <span className="text-[12.5px] font-normal text-on-surface tracking-[-0.01em] truncate">
              Allen Enuma
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

      <nav className="flex flex-col gap-2 py-1 flex-grow overflow-y-auto overflow-x-hidden px-2 mt-3">
        {mainNavItems.map((item) => {
          const isActive = activeRoute === item.id;
          return (
            <a
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                setActiveRoute(item.id);
              }}
              href={item.href}
              title={isCollapsed ? item.label : undefined}
              className={`relative flex items-center gap-2 mx-1 px-2 py-[5px] transition-all duration-200 ease-out group ${
                isActive
                  ? "bg-primary-container text-on-primary-container shadow-sm"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container hover:scale-100"
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
                  className={`text-[12px] font-thin transition-all duration-200 ${isActive ? "text-on-primary-container font-medium" : "text-on-surface-variant"} tracking-normal whitespace-nowrap`}
                >
                  {item.label}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      <div className="flex flex-col border-t border-solid py-1 px-2">
        {bottomNavItems.map((item) => {
          const isActive = activeRoute === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              title={isCollapsed ? item.label : undefined}
              onClick={() => setActiveRoute(item.id)}
              className={`flex items-center gap-2 mx-1 px-2 py-[5px] transition-all duration-200 ease-out group ${
                isCollapsed ? "justify-center" : ""
              }  ${
                isActive
                  ? "bg-primary-container text-on-primary-container"
                  : "text-on-surface-variant hover:bg-surface-container hover:scale-100"
              }`}
            >
              <span
                className={`material-symbols-outlined flex-shrink-0 text-[18px] transition-all duration-200 ${isActive ? "scale-110" : "group-hover:scale-105"}`}
              >
                {item.icon}
              </span>
              {!isCollapsed && (
                <span className="text-[12px] font-ligh tracking-[-0.01em] whitespace-nowrap">
                  {item.label}
                </span>
              )}
            </a>
          );
        })}

        {!isCollapsed && (
          <div className="mx-2 mt-2 p-2.5 bg-surface-container-low rounded-[6px] border border-solid">
            <div className="flex items-center justify-between mb-0.5">
              <span className="text-[11px] font-normal text-on-surface tracking-[-0.01em]">
                Pro Plan
              </span>
              <span className="material-symbols-outlined text-outline text-[14px]">
                forest
              </span>
            </div>
            <span className="text-[10px] text-on-surface-variant font-light">
              View details and usage
            </span>
          </div>
        )}

        {!isCollapsed && (
          <div className="mx-2 mt-2 mb-1 bg-surface-container-low rounded-[6px] border border-solid p-3 flex flex-col items-center text-center gap-2">
            <span className="material-symbols-outlined text-outline text-[18px]">
              arrow_upward
            </span>
            <span className="text-[11px] font-light text-on-surface-variant leading-snug tracking-[-0.01em]">
              Ready for more? Upgrade for premium features.
            </span>
            <button className="w-full bg-primary hover:bg-primary text-on-primary py-1.5 rounded-[4px] text-[11px] font-normal transition-colors tracking-[-0.01em]">
              Upgrade to Premium
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;

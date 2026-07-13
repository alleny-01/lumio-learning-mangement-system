import { Pencil, Settings2, ShieldCheck } from "lucide-react";
import { securityRows } from "../constants";

function ToggleSwitch({ enabled }: { enabled: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={enabled}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
        enabled ? "bg-primary" : "bg-surface-container-high"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export function SecuritySection() {
  return (
    <section className="rounded-[26px] border border-border/30 bg-surface-container-lowest px-5 py-5 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.25)] sm:px-6 sm:py-6">
      <div className="flex items-center gap-2 border-b border-border/30 pb-4">
        <ShieldCheck className="size-4 text-primary" />
        <h2 className="text-[15px] font-semibold tracking-[-0.02em] text-on-background">
          Security
        </h2>
      </div>

      <div className="divide-y divide-border/30">
        {securityRows.map((row) => {
          const isRed = row.actionVariant === "destructive";
          return (
            <div
              key={row.id}
              className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <h3 className="text-[14px] font-medium tracking-[-0.01em] text-on-background">
                  {row.title}
                </h3>
                <p className="mt-1 max-w-2xl text-[11px] font-light leading-5 text-on-surface-variant">
                  {row.description}
                </p>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-center">
                {row.isToggle ? (
                  <ToggleSwitch enabled={Boolean(row.isToggled)} />
                ) : row.title === "Email address" ? (
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-[13px] font-medium text-on-background">
                        alex.assenmacher@gmail.com
                      </p>
                      <p className="text-[11px] text-error">Unverified</p>
                    </div>
                    <button className="inline-flex items-center gap-1 rounded-full border border-border/40 bg-surface-container-lowest px-4 py-2 text-[12px] text-on-surface transition-colors hover:bg-surface-container-low">
                      Edit
                      <Pencil className="size-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    className={`inline-flex items-center rounded-full border px-4 py-2 text-[12px] transition-colors ${
                      isRed
                        ? "border-error/15 text-error hover:bg-error/5"
                        : "border-border/40 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low"
                    }`}
                  >
                    {row.actionLabel}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11px] text-on-surface-variant md:hidden">
        <Settings2 className="size-3.5" />
        Swipe left or right to switch settings sections.
      </div>
    </section>
  );
}

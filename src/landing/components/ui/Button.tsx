import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

interface ButtonProps
  extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidthOnMobile?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-primary to-primary-container text-white hover:shadow-lg hover:scale-[1.02] transition-all",
  secondary:
    "bg-surface-container-low text-primary hover:bg-surface-container-high transition-colors",
  ghost:
    "text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 transition-colors",
  dark: "bg-on-background text-white",
};

function Button({
  children,
  variant = "primary",
  className = "",
  fullWidthOnMobile = false,
  ...props
}: ButtonProps) {
  const mobileWidthClass = fullWidthOnMobile ? "w-full sm:w-auto" : "";
  const classes = [mobileWidthClass, variantClasses[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;

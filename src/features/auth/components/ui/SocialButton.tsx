import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface SocialButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  icon: React.ReactNode;
}

function SocialButton({ icon, children, ...props }: SocialButtonProps) {
  return (
    <button
      className="flex items-center justify-center gap-2 py-2.5 px-4 bg-surface-container-low hover:bg-surface-container-high text-on-surface text-sm font-medium rounded-lg transition-colors border border-outline-variant/10 w-full"
      {...props}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default SocialButton;

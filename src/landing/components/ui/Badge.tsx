import type { PropsWithChildren } from "react";

interface BadgeProps extends PropsWithChildren {
  className?: string;
}

function Badge({ children, className = "" }: BadgeProps) {
  return <span className={className}>{children}</span>;
}

export default Badge;

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface AuthButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  }

function AuthButton({ children, ...props }: AuthButtonProps) {
  return (
    <button
      className="w-full py-3 auth-gradient text-on-primary text-[12px]  shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-200 mt-2 bg-primary-container"
      {...props}
    >
      {children}
    </button>
  );
}

export default AuthButton;

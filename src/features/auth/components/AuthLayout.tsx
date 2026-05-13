import type { PropsWithChildren } from "react";

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden bg-surface">
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[100px]" />
      <div className="w-full max-w-[480px] z-10">{children}</div>
    </main>
  );
}

export default AuthLayout;

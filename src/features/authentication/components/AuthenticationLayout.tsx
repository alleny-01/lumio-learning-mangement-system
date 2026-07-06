import type { PropsWithChildren } from "react";

function AuthenticationLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex-grow flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-secondary/5 blur-[100px]" />
      <div className="w-full min-h-screen md:max-w-[600px] z-10 sm:px-9 px-3 py-3">
          {children}
        </div>
    </main>
  );
}

export default AuthenticationLayout;

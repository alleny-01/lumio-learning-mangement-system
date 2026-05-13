import type { PropsWithChildren } from "react";

interface AuthFormProps extends PropsWithChildren {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

function AuthForm({ children, onSubmit }: AuthFormProps) {
  return (
    <div>
      <div className="flex justify-center mb-10">
        <span className="font-headline text-3xl font-extrabold tracking-tighter text-primary-container">
          Lumio
        </span>
      </div>
      <div className="bg-surface-container-lowest p-10 shadow-[0px_12px_32px_rgba(19,27,46,0.11)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1  from-primary to-secondary-container" />
        {children}
      </div>
    </div>
  );
}

export default AuthForm;

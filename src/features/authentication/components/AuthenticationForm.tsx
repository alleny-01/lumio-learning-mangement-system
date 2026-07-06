import type { PropsWithChildren } from "react";

interface AuthFormProps extends PropsWithChildren {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

function AuthenticationForm({ children, onSubmit }: AuthFormProps) {
  return (
    <div className="sm:mt-10 mt-3">
      <div className="bg-surface-container-lowest rounded-sm p-5 shadow-[0px_12px_32px_rgba(19,27,46,0.11)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 from-primary to-secondary-container" />
        {children}
      </div>
    </div>
  );
}

export default AuthenticationForm;

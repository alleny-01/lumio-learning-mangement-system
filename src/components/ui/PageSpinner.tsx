import { Spinner } from "@/components/ui/Spinner";
import { cn } from "@/lib/utils";

interface PageSpinnerProps {
  className?: string;
}

function PageSpinner({ className }: PageSpinnerProps): React.JSX.Element {
  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center bg-surface text-primary",
        className,
      )}
    >
      <Spinner className="size-5" />
    </div>
  );
}

export { PageSpinner };

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import type { ReactElement } from "react";
import { LMSContext } from "@/contexts/LMSContext";
import { Spinner } from "@/components/ui/Spinner";

interface Props {
  children: ReactElement;
}

function RouteSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <Spinner />
    </div>
  );
}

export default function ProtectedRoute({ children }: Props) {
  const auth = useContext(LMSContext);
  if (auth.isAuthLoading) return <RouteSpinner />;
  if (!auth.session) return <Navigate to="/signin" replace />;
  return children;
}

export function PublicOnlyRoute({ children }: Props) {
  const auth = useContext(LMSContext);
  if (auth.isAuthLoading) return <RouteSpinner />;
  if (auth.session) return <Navigate to="/dashboard" replace />;
  return children;
}

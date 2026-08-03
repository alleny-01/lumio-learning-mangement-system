import { Navigate } from "react-router-dom";
import { useContext } from "react";
import type { ReactElement } from "react";
import { LMSContext } from "@/contexts/LMSContext";
import { PageSpinner } from "@/components/ui/PageSpinner";

interface Props {
  children: ReactElement;
}

function RouteSpinner() {
  return <PageSpinner />;
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

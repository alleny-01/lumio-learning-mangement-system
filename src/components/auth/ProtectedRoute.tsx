import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { LMSContext } from "@/contexts/LMSContext";

interface Props {
  children: React.ReactElement;
}

export default function ProtectedRoute({ children }: Props) {
  const { session } = useContext(LMSContext);
  if (!session) return <Navigate to="/" replace />;
  return children;
}

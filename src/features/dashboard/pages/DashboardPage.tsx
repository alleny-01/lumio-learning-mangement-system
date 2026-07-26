import { useContext, useEffect, useState } from "react";
import { LMSContext } from "@/contexts/LMSContext";
import { DashboardShell } from "../components/DashboardShell";
import { DashboardSkeleton } from "../components/DashboardSkeleton";
import {
  createFallbackDashboardData,
  loadDashboardData,
} from "../api/dashboard";
import type { DashboardData } from "../types";

export default function DashboardPage() {
  const { session, setAuthError } = useContext(LMSContext);
  const [data, setData] = useState<DashboardData>(() =>
    createFallbackDashboardData(),
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      if (!session?.user.id) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const dashboardData = await loadDashboardData(session.user.id);
        if (isMounted) setData(dashboardData);
      } catch (error) {
        setAuthError(
          error instanceof Error
            ? error.message
            : "Unable to load dashboard data.",
        );
        if (isMounted) {
          setData(createFallbackDashboardData(session.user.email ?? "Learner"));
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, [session?.user.email, session?.user.id, setAuthError]);

  if (isLoading) return <DashboardSkeleton />;

  return <DashboardShell data={data} />;
}

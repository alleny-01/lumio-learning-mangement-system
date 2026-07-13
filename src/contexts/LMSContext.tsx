import { createContext, useEffect, useState } from "react";
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import type { Session } from "@supabase/supabase-js";
import { showToast } from "@/components/ui/Toast";
import { useNavigate } from "react-router-dom";
import { getCurrentSession, resendVerificationEmail } from "@/shared/api/auth";
import { supabase } from "@/lib/supabase/client";

type ResendVerificationResult =
  | { success: true }
  | { success: false; error: unknown };

interface LMSContextValue {
  isAuthLoading: boolean;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  session: Session | null;
  setSession: Dispatch<SetStateAction<Session | null>>;
  authError: string | null;
  setAuthError: Dispatch<SetStateAction<string | null>>;
  resendVerification: (email?: string) => Promise<ResendVerificationResult>;
}

const noopSetter: Dispatch<SetStateAction<boolean>> = () => undefined;
const noopSessionSetter: Dispatch<SetStateAction<Session | null>> = () =>
  undefined;
const noopAuthErrorSetter: Dispatch<SetStateAction<string | null>> = () =>
  undefined;

export const LMSContext = createContext<LMSContextValue>({
  isAuthLoading: true,
  isLoading: false,
  setIsLoading: noopSetter,
  session: null,
  setSession: noopSessionSetter,
  authError: null,
  setAuthError: noopAuthErrorSetter,
  resendVerification: async () => ({ success: false, error: "no_provider" }),
});

function LMSProvider({ children }: PropsWithChildren) {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function getSession() {
      try {
        const { data, error } = await getCurrentSession();
        if (error) {
          setAuthError(error.message);
          return;
        }
        if (isMounted) setSession(data.session ?? null);
      } catch (err) {
        setAuthError(
          err instanceof Error
            ? err.message
            : "Unable to restore your session.",
        );
      } finally {
        if (isMounted) setIsAuthLoading(false);
      }
    }
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session ?? null);
        if (event === "SIGNED_OUT") {
          navigate("/");
        }
      },
    );

    return () => {
      isMounted = false;
      listener?.subscription.unsubscribe();
    };
  }, [navigate]);

  // show toast on auth error
  useEffect(() => {
    if (authError) {
      showToast({
        type: "error",
        title: "Authentication error",
        description: authError,
      });
    }
  }, [authError]);


  // Resend verification email
  const resendVerification = async (
    email?: string,
  ): Promise<ResendVerificationResult> => {
    const target =
      email || localStorage.getItem("lumio_sign_up_email");
    if (!target) return { success: false, error: "no_email" };
    try {
      const { error } = await resendVerificationEmail(String(target));
      if (error) return { success: false, error };
      return { success: true };
    } catch (err) {
      return { success: false, error: err };
    }
  };

  return (
    <LMSContext.Provider
      value={{ isAuthLoading, isLoading, setIsLoading, session, setSession, authError, resendVerification,
        setAuthError,
      }}
    >
      {children}
    </LMSContext.Provider>
  );
}

export default LMSProvider;

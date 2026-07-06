import { createContext } from "react";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { showToast } from "@/components/ui/Toast";
import { useNavigate } from "react-router-dom";

export const LMSContext = createContext<any>(null);

function LMSProvider({ children }: any) {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    async function getSession() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.error("Error fetching session:", error);
          return;
        }
        if (data.session) setSession(data.session);
      } catch (err) {
        console.error("Unexpected error fetching session:", err);
      }
    }
    getSession();

    // subscribe to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session ?? null);
        if (event === "SIGNED_OUT") {
          navigate("/");
        }
      },
    );

    return () => {
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
  const resendVerification = async (email?: string) => {
    const target =
      email || localStorage.getItem("lumio_sign_up_email");
    if (!target) return { success: false, error: "no_email" };
    try {
      const { error } = await supabase.auth.resend({
        type: "signup",
        email: String(target),
      });
      if (error) return { success: false, error };
      return { success: true };
    } catch (err) {
      return { success: false, error: err };
    }
  };

  return (
    <LMSContext.Provider
      value={{ isLoading, setIsLoading, session, authError, resendVerification,
        setAuthError,
      }}
    >
      {children}
    </LMSContext.Provider>
  );
}

export default LMSProvider;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase/client";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const finishSignIn = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(
        window.location.href,
      );

      if (error) {
        console.error(error);
        navigate("/", { replace: true });
        return;
      }

      navigate("/courses", { replace: true });
    };

    finishSignIn();
  }, [navigate]);

  return <div>Signing you in...</div>;
}

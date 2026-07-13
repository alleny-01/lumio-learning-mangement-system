import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { exchangeAuthCodeForSession } from "@/shared/api/auth";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const finishSignIn = async () => {
      const code = new URLSearchParams(window.location.search).get("code");
      if (!code) {
        navigate("/signin", { replace: true });
        return;
      }

      const { error } = await exchangeAuthCodeForSession(code);

      if (error) {
        navigate("/signin", { replace: true });
        return;
      }

      navigate("/dashboard", { replace: true });
    };

    finishSignIn();
  }, [navigate]);

  return <div>Signing you in...</div>;
}

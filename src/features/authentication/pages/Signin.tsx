import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Spinner } from "@/components/ui/Spinner";
import { LMSContext } from "@/contexts/LMSContext";
import { supabase } from "@/lib/supabase/client";
import Input from "@/features/authentication/ui/Input";
import SocialButton from "@/features/authentication/ui/SocialButton";
import AuthenticationLayout from "../components/AuthenticationLayout";
import AuthenticationForm from "../components/AuthenticationForm";
import AuthenticationHeader from "../components/AuthenticationHeader";

function SigninPage(): React.JSX.Element {
  const navigate = useNavigate();
  const { isLoading, setIsLoading, session, setSession, setAuthError } =
    useContext(LMSContext);
  const [signInEmail, setSignInEmail] = useState<string>("");
  const [signInPassword, setSignInPassword] = useState<string>("");

  useEffect(() => {
    if (session) navigate("/dashboard");
  }, [session, navigate]);

  // Helper: persist signup email so EmailConfirmation page can read it after refresh
  const persistSignUpEmail = (email: string) => {
    try {
      localStorage.setItem("lumio_sign_up_email", email);
    } catch (e) {
      // ignore
    }
  };

  // Sign in
  const signIn = async (email: string, password: string) => {
    if (isLoading) return { success: false, error: "busy" };
    if (!email || !password) {
      return { success: false, error: "validation" };
    }

    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toLowerCase(),
        password: password,
      });

      if (error) {
        console.error("Error signing in:", error);
        setAuthError(error.message);
        return { success: false, error };
      }

      const user = data.user;
      if (user && !(user?.email_confirmed_at || user?.confirmed_at)) {
        // redirect to confirmation page
        persistSignUpEmail(signInEmail.toLowerCase());
        navigate("/email-confirmation");
        return { success: false, error: "unverified" };
      }

      setSession(data.session ?? null);

      setTimeout(() => {
        navigate("/dashboard");
      }, 5000);

      return { success: true, data };
    } catch (err: any) {
      console.error("an error occured:", err);
      setAuthError(
        err.message || "An unexpected error occurred during sign-in.",
      );
      return { success: false, error: err };
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error("Google sign in failed:", error.message);
      setAuthError(error.message);
      throw error;
    }
  };

  return (
    <AuthenticationLayout>
      <AuthenticationForm>
        {/* Hero Section */}
        <div className="relative mb-8">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full text-black px-4 py-2 backdrop-blur-sm ">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm uppercase text-muted-foreground font-normal tracking-wider">
                Sign in to lumio
              </span>
            </div>
          </div>
          <div className="mt-6">
            <AuthenticationHeader
            title="Welcome back to Lumio 👋"
            subtitle="Enter your details to sign in to your account and continue your learning journey ."
          />
          </div>
        </div>

        {/* Authentication Card */}
        <div className="rounded-sm bg-card/50 shadow-md p-8 ">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              signIn(signInEmail, signInPassword);
            }}
          >
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="name@company.com"
              value={signInEmail}
              onChange={(e) => setSignInEmail(e.target.value)}
              autoFocus
            />

            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              forgotPasswordLink
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
              showPasswordToggle
            />

            <Button
              variant="default"
              size="lg"
              type="submit"
              disabled={isLoading}
              className="w-full py-5 flex items-center justify-center gap-3 rounded-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-md focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {isLoading && <Spinner />}
              <span>
                {isLoading ? "Signing you in..." : "Continue with email"}
              </span>
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-medium">
              <span className="bg-card px-4 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="flex items-center justify-center">
            {" "}
            <SocialButton
              icon={<FcGoogle size={20} />}
              onClick={() => handleGoogleSignIn()}
            >
              Google
            </SocialButton>{" "}
          </div>

          {/* Trust Indicators */}
          <p className="text-center mt-4 text-[8.3px] sm:text-[10px] tracking-widest text-muted-foreground">
            Protected with industry-standard encryption
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center space-y-3">
          <p className="text-xs text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link
              className="font-medium text-primary hover:underline underline-offset-4 transition-all"
              to="/signup"
            >
              Create an account
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">
            Need help?{" "}
            <a
              href="/support"
              className="hover:underline underline-offset-4 transition-all"
            >
              Contact Support
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            © 2026 Lumio Educational Systems. All rights reserved.
          </p>
        </div>
      </AuthenticationForm>
    </AuthenticationLayout>
  );
}

export default SigninPage;

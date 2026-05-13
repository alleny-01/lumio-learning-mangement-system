import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import AuthHeader from "../components/AuthHeader";
import AuthLayout from "../components/AuthLayout";
import AuthButton from "../components/ui/AuthButton";
import InputField from "../components/ui/InputField";
import SocialButton from "../components/ui/SocialButton";

function SigninPage() {
  const {
    signIn,
    signInEmail,
    setSignInEmail,
    signInPassword,
    setSignInPassword,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = async (e: any) => {
    e.prevent.Default();

    if(!signInEmail || !signInPassword) return;

    try {
      const { success, data , error } = await signIn();

      if (success) {
        console.log("Sign in successful:", data);
      }

    } catch (error) {
      console.error("An error occurred during sign in:", error);
    }
  };

  return (
    <AuthLayout>
      <AuthForm>
        <AuthHeader
          title="Welcome back"
          subtitle="Please enter your details to sign in to your digital atelier."
        />
        <form className="space-y-5" onSubmit={handleSignIn}>
          <InputField id="email" label="Email" type="email" placeholder="name@company.com" icon={<CiMail size={20} />} value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)}
          />
          <InputField id="password" label="Password" type="password" placeholder="••••••••" icon={<CiLock size={20} />} forgotPasswordLink value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)}
          />
          <AuthButton type="submit">Sign In</AuthButton>
        </form>
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant/30" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-surface-container-lowest text-on-surface-variant font-medium uppercase tracking-widest">
              Or continue with
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <SocialButton icon={<FcGoogle size={20} />}>Google</SocialButton>
        </div>
        <p className="mt-10 text-center text-xs text-on-surface-variant">
          Don&apos;t have an account?{" "}
          <a
            className="font-semibold text-primary-container hover:underline underline-offset-4 decoration-2 decoration-primary/30 transition-all"
            href="#"
          >
            Create an account
          </a>
        </p>
      </AuthForm>
    </AuthLayout>
  );
}

export default SigninPage;

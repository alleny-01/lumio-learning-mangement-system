import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthForm from "../components/AuthForm";
import AuthHeader from "../components/AuthHeader";
import AuthLayout from "../components/AuthLayout";
import AuthButton from "../components/ui/AuthButton";
import InputField from "../components/ui/InputField";
import SocialButton from "../components/ui/SocialButton";

function SignupPage() {
  const navigate = useNavigate();
  
  const {
    signUp,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
  } = useContext(AuthContext);

  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    if(!signUpEmail || !signUpPassword || !firstName || !lastName) return;

    try {
      const { success, data, error } = await signUp();

      if (success) {
        console.log("Sign up successful:", data);
        navigate("/");
      }
    } catch (error) {
      console.error("An error occurred during sign up:", error);
    }
  };

  return (
    <AuthLayout>
      <AuthForm>
        <AuthHeader
          title="Create your account"
          subtitle="Enter the Digital Atelier and start your mastery."
        />
        <form action="#" className="space-y-5" onSubmit={handleSignUp}>
          <div className="flex gap-4 items-center justify-center">
            <InputField id="first-name" label="First Name" type="text" placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField id="last-name" label="Last Name" type="text" placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <InputField id="email" label="Email Address" type="email" placeholder="johndoe@gmail.com" value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <InputField id="password" label="Create Password" type="password" placeholder="••••••••" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <InputField id=" confirm password" label="Confirm Password" type="password" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="flex items-start gap-3 py-2">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-3 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-low"
              />
            </div>
            <div className="text-xs leading-relaxed">
              <label
                htmlFor="terms"
                className="font-body text-on-surface-variant"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-primary-container font-medi9um hover:underline underline-offset-4 transition-all"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-primary-container font-medium hover:underline underline-offset-4 transition-all"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="pt-2">
            <AuthButton type="submit">
              <span className="flex items-center justify-center gap-2 text-[13px]">
                <span>Create Account</span>
                {/* <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span> */}
              </span>
            </AuthButton>
          </div>
        </form>
        <div className="relative my-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full bg-outline-variant/30 h-[1px]" />
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest font-label font-medium">
            <span className="bg-surface-container-lowest px-4 text-on-surface-variant">
              Or continue with
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <SocialButton icon={<FcGoogle size={20} />}>Google</SocialButton>
        </div>
        <div className="mt-10 text-center text-xs">
          <p className="font-body  text-on-surface-variant">
            Already an initiate?{" "}
            <a
              href="#"
              className="text-primary-container font-bold hover:underline underline-offset-4 transition-all ml-1"
            >
              Sign In
            </a>
          </p>
        </div>
      </AuthForm>
    </AuthLayout>
  );
}

export default SignupPage;

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react"; 
import Input from "../ui/Input";
import AuthenticationLayout from "../components/AuthenticationLayout";
import AuthenticationHeader from "../components/AuthenticationHeader";
import AuthenticationForm from "../components/AuthenticationForm";

const ForgotPassword = () : React.JSX.Element => {
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState<string>("");

  return (
    <AuthenticationLayout>
      <AuthenticationForm>
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <Mail className="w-5 h-5 text-primary" strokeWidth={1}/>
          </div>

          <AuthenticationHeader
            title="Forgot your password?"
            subtitle="No worries. Enter the email associated with your account and we'll send you a secure password reset link."
          />
        </div>

        <div className="space-y-4">
          <Input id="email" label="Email Address"
            type="email"
            placeholder="name@company.com"
            autoFocus
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
          />

          <div className="rounded-lg border bg-muted/40 p-3">
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              We'll send a password reset link to your inbox. If you don't see
              it, check your spam or junk folder.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <Button variant="outline" size="sm" className="w-full py-5">
            Send Reset Link
          </Button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            Remember your password?
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-1 text-xs font-medium mt-2 hover:underline mt-5"
          >
            &larr; Back to Sign In
          </Link>
        </div>
      </AuthenticationForm>
    </AuthenticationLayout>
  );
};

export default ForgotPassword;

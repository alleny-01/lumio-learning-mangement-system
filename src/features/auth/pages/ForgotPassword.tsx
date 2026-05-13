import { CiMail } from "react-icons/ci";
import AuthLayout from "../components/AuthLayout";
import AuthHeader from "../components/AuthHeader";
import AuthForm from "../components/AuthForm";
import InputField from "../components/ui/InputField";
import AuthButton from "../components/ui/AuthButton";

function ForgotPassword() {
  return (
    <AuthLayout>
      <AuthForm>
        <AuthHeader
          title="Reset your password"
          subtitle="Enter your email address and we will send you a link to reset your password"
        />
        <InputField id="Email" label="Email Address" type="email" placeholder="name@company.com" icon={
          <CiMail size={20} />
        }
        />
        <div className="mt-6">
            <AuthButton >Send Reset Link</AuthButton>
        </div>
        
        <a
          href="#"
          className="text-xs no-underline font-medium text-primary-container text-center block pt-12"
        >
          Back to Sign in
        </a>
      </AuthForm>
    </AuthLayout>
  );
}

export default ForgotPassword;

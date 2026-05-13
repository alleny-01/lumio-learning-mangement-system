import type { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: string | React.ReactNode;
  id: string;
  error?: string;
  forgotPasswordLink? : boolean;
  value? : string
  onChange? : (e : any) => void
}

function InputField({
  label,
  icon,
  id,
  error,
  value,
  forgotPasswordLink = false,
  onChange,
  ...props
}: InputFieldProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center px-1">
        <label
          className="text-xs  tracking-wide text-on-surface-variant"
          htmlFor={id}
        >
          {label}
        </label>
        {forgotPasswordLink && (
          <a
            className="text-xs font-medium text-primary-container transition-colors"
            href="#"
          >
            Forgot password?
          </a>
        )}
      </div>
      <div className="relative group">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-outline text-[0px]">
              {icon}
            </span>
          </div>
        )}
        <input
          className={`w-full ${
            icon ? "pl-11" : "pl-4"
          } pr-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-0 focus:bg-surface-container-lowest transition-all duration-200 outline-none placeholder:text-outline/60 placeholder: text-xs text-sm ring-1 ring-transparent focus:ring-1 focus:ring-primary/30`}
          id={id}
          value = {value}
          onChange={onChange}
          {...props}
        />
        {error && <p className="text-error text-xs mt-1">{error}</p>}
      </div>
    </div>
  );
}

export default InputField;

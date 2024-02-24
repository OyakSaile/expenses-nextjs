import { InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="space-y-3 flex flex-col">
        {label && <label id={rest.id}>{label}</label>}
        <input
          ref={ref}
          {...rest}
          className={twMerge(
            "rounded-md p-4 w-full text-md border bg-gray-400/10 focus:border-primary focus:outline-primary",
            rest.className
          )}
        ></input>

        {error && <span className="text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

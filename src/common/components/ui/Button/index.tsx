import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          "text-primary bg-black w-full p-4 shadow-2xl rounded-md hover:bg-black/80 transition-all text-xl",
          props.className
        )}
        {...props}
      ></button>
    );
  }
);

Button.displayName = "Button";

import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variation?: "primary" | "secondary";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variation = "primary", size = "lg", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          "w-full p-4 shadow-2xl rounded-md transition-all text-xl",
          props.className,
          size === "sm" && "text-sm p-2",
          size === "md" && "text-base p-3",
          size === "lg" && "text-xl p-4",
          variation === "primary" && "text-white bg-black hover:bg-black/80 ",
          variation === "secondary" && "bg-white hover:bg-gray-600 text-black"
        )}
        {...props}
      ></button>
    );
  }
);

Button.displayName = "Button";

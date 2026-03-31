"use client";

import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?:React.ReactNode;
  variant?: ButtonVariant;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black disabled:opacity-50 disabled:pointer-events-none ring-offset-white";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-black text-white hover:bg-zinc-800 active:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200",
  secondary:
    "bg-white text-black border border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-800",
  ghost:
    "bg-transparent text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children,icon, ...props }, ref) => {
    

    return (
      <button
        ref={ref}
        className={`${baseClasses}  px-4 py-2 ${className}`}
        {...props}
      >
        {children}
        {icon && icon} 
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;


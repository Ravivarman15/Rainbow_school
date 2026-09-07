import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "rainbow" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variantStyles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow-md",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md",
    rainbow:
      "bg-gradient-to-r from-indigo-600 via-indigo-700 to-emerald-600 text-white shadow-md hover:shadow-lg hover:brightness-105 border border-indigo-400/30",
    outline:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 shadow-xs",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900",
    gold: "bg-amber-600 text-white hover:bg-amber-700 shadow-sm hover:shadow-md",
  };

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-md",
    md: "px-5 py-2.5 text-sm rounded-lg",
    lg: "px-6 py-3 text-base rounded-xl font-semibold",
  };

  const combinedClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "verified" | "rainbow" | "outline" | "warning";
  size?: "sm" | "md" | "lg";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}) => {
  const variantStyles = {
    primary: "bg-indigo-50 text-indigo-700 border-indigo-200",
    secondary: "bg-slate-100 text-slate-700 border-slate-200",
    verified: "bg-emerald-50 text-emerald-800 border-emerald-300 font-medium",
    rainbow: "bg-gradient-to-r from-indigo-50 via-emerald-50 to-amber-50 text-slate-800 border-indigo-200/60 shadow-sm",
    outline: "bg-transparent text-slate-700 border-slate-300",
    warning: "bg-amber-50 text-amber-800 border-amber-300",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
    lg: "px-3.5 py-1.5 text-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

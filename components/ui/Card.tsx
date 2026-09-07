import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glass?: boolean;
  rainbowBorder?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  hoverEffect = false,
  glass = false,
  rainbowBorder = false,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300",
        glass && "bg-white/85 backdrop-blur-md border-slate-200/60 shadow-glass",
        hoverEffect && "hover:-translate-y-1 hover:shadow-card-hover hover:border-indigo-200",
        rainbowBorder && "relative overflow-hidden before:absolute before:inset-0 before:p-[1.5px] before:rounded-2xl before:bg-gradient-to-r before:from-indigo-500/30 before:via-emerald-500/30 before:to-amber-500/30 before:-z-10",
        !glass && "shadow-card",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

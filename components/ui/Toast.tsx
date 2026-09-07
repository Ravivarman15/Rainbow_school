"use client";

import React from "react";
import { CheckCircle2, AlertCircle, X, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ToastProps {
  show: boolean;
  type?: "success" | "error" | "info";
  title: string;
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  show,
  type = "success",
  title,
  message,
  onClose,
}) => {
  if (!show) return null;

  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-emerald-600" />,
    error: <AlertCircle className="h-5 w-5 text-rose-600" />,
    info: <Info className="h-5 w-5 text-indigo-600" />,
  };

  const bgStyles = {
    success: "border-emerald-200 bg-emerald-50 text-emerald-950",
    error: "border-rose-200 bg-rose-50 text-rose-950",
    info: "border-indigo-200 bg-indigo-50 text-indigo-950",
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-bounce-short">
      <div
        className={cn(
          "flex items-start gap-3 rounded-xl border p-4 shadow-xl backdrop-blur-md",
          bgStyles[type]
        )}
      >
        <div className="mt-0.5 shrink-0">{icons[type]}</div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
          <p className="mt-1 text-xs sm:text-sm text-slate-700">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="shrink-0 rounded-lg p-1 text-slate-500 hover:bg-black/5 hover:text-slate-700"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

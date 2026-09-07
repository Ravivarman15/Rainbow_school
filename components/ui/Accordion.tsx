"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  category?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  category,
  defaultOpen = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-slate-200 py-4 transition-colors">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left font-medium text-slate-900 transition-colors hover:text-indigo-600 focus:outline-none"
      >
        <div className="flex flex-col gap-1 pr-2">
          {category && (
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              {category}
            </span>
          )}
          <span className="text-base sm:text-lg font-semibold text-slate-800">{title}</span>
        </div>
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-300",
            isOpen && "rotate-180 bg-indigo-50 text-indigo-600"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden text-sm sm:text-base leading-relaxed text-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={cn("divide-y divide-slate-200/80 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", className)}>{children}</div>;
};

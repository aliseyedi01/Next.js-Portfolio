import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative">
        {/* Add a relative container */}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ltr:pl-7 rtl:pr-7",
            className,
          )}
          ref={ref}
          {...props}
        />
        {icon && (
          <span className="absolute top-[10px] transform text-blue-800 ltr:left-2 rtl:right-2 dark:text-indigo-300">
            {icon}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };

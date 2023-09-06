import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative rtl:font-iranSans">
        <textarea
          className={cn(
            "flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ltr:pl-7 rtl:pr-7",
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
Textarea.displayName = "Textarea";

export { Textarea };

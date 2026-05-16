import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 glow-hover":
              variant === "default",
            "border border-purple-500/50 bg-transparent text-white hover:bg-purple-500/10":
              variant === "outline",
            "bg-transparent text-white hover:bg-white/5": variant === "ghost",
            "h-10 px-4 py-2": size === "default",
            "h-8 px-3 text-sm": size === "sm",
            "h-12 px-6 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full placeholder:text-[#666] outline-none rounded-3xl border-input bg-gray-200 focus:bg-zinc-200 px-6 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-p-s file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

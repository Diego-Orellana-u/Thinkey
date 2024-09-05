import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[3rem] tablet-l:h-[3.3rem] font-normal rounded-xl border border-[#999]/30 w-full placeholder:text-[#666]/50 outline-none bg-gray-200/50 focus:bg-zinc-200/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-p-s file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

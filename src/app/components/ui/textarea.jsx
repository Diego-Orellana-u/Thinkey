import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] font-normal tablet-l:min-h-[7rem] w-full rounded-[8px] border-[#999]/10 placeholder:text-[#666] bg-gray-200/70 focus:bg-zinc-200/50 border px-4 py-2 text-sm ring-offset-background focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };

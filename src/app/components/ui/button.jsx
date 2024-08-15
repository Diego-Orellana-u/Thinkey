import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-[14px] desktop-s:text-p-l font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        link: "py-[26px] tablet-xl:py-[21px] desktop-s:py-[26px] text-p-s desktop-s:text-p-l",
        linkHover:
          "py-[26px] tablet-xl:py-[21px] desktop-s:py-7 text-p-s desktop-s:text-p-l w-full max-w-fit px-16 rounded-[50px] h-[50px] font-medium bg-buttons-bg text-buttons-text flex items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-secondary-buttons-bg before:duration-700 duration-700 before:ease-out hover:bg-secondary-buttons-bg hover:text-black-heading-color hover:before:h-56 hover:before:w-56 ",
        header: "desktop-s:py-[24px] text-p-s",
      },
      size: {
        default: "h-10 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

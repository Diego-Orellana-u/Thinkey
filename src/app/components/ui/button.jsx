import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-[50px] flex items-center text-[18px] desktop-s:text-p-l font-medium disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        link: "text-p-s desktop-s:text-p-l",
        linkHoverBlue: "bg-buttons-bg text-buttons-text",
        hover:
          "h-[50px] text-p-l px-10 bg-buttons-bg border-buttons-bg text-buttons-text flex items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-secondary-buttons-bg before:duration-700 duration-1000 before:ease-out hover:bg-secondary-buttons-bg hover:text-black-heading-color hover:before:h-56 hover:before:w-56",
        testLarge:
          "bg-main-100 text-white-body-color hover:bg-secondary-100 transition-all border border-btns-border shadow-[3px_3px_0_0_#9d5b5d] flex items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-secondary-100 before:duration-700 duration-1000 before:ease-out hover:bg-secondary-100 hover:text-black-heading-color hover:before:h-56 hover:before:w-56",
        testSmall:
          "bg-btns-test text-black-heading-color hover:bg-accent-900 transition-all duration-200 border border-btns-border shadow-[3px_0_0_0_rgba(103,43,48,1)]",
      },
      size: {
        default: "h-12 px-7",
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

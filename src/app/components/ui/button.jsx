import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-[50px] flex items-center text-p-s desktop-s:text-p-l font-medium",
  {
    variants: {
      variant: {
        link: "text-p-s desktop-s:text-p-l",
        linkHoverBlue: "bg-buttons-bg text-buttons-text",
        linkHoverGreen:
          "text-p-s desktop-s:text-p-l font-medium bg-secondary-buttons-bg text-black-body-color flex items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-buttons-bg before:duration-700 duration-700 before:ease-out hover:bg-buttons-bg hover:text-white-body-color hover:before:h-56 hover:before:w-56 ",
        header: "desktop-s:py-[24px] text-p-s",
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

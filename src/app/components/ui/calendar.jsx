"use client";
import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { es } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  return (
    <DayPicker
      locale={es}
      showOutsideDays={showOutsideDays}
      className={cn("p-3 ", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 border border-gray-100/30 hover:bg-gray-100/5 rounded-[5px] justify-center p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected])]:rounded-[5px] [&:has([aria-selected].day-outside)]:bg-btns-test/30 [&:has([aria-selected])]:bg-btns-test/70 first:[&:has([aria-selected])]:rounded-[5px] last:[&:has([aria-selected])]:rounded-[5px] focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "calendar" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 justify-center hover:bg-gray-100/10 hover:rounded-[5px] "
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-gray-100/20 text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };

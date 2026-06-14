"use client"

import * as React from "react"
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react"
import {
  DayPicker,
  type ChevronProps,
  type ClassNames,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

const calendarClassNames = {
  months: "flex flex-col gap-4 sm:flex-row",
  month: "space-y-4",
  month_caption: "relative flex items-center justify-center pt-1",
  caption_label: "text-sm font-medium",
  nav: "absolute inset-x-1 top-1 flex items-center justify-between",
  button_previous: cn(
    buttonVariants({ variant: "outline" }),
    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
  ),
  button_next: cn(
    buttonVariants({ variant: "outline" }),
    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
  ),
  month_grid: "w-full border-collapse",
  weekdays: "flex",
  weekday:
    "w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground",
  week: "mt-2 flex w-full",
  day: "relative h-9 w-9 p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].outside)]:bg-accent/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
  day_button: cn(
    buttonVariants({ variant: "ghost" }),
    "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
  ),
  range_end: "range-end",
  selected:
    "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
  today: "bg-accent text-accent-foreground",
  outside:
    "outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
  disabled: "text-muted-foreground opacity-50",
  range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
  hidden: "invisible",
} satisfies Partial<ClassNames>

function CalendarChevron({
  className,
  orientation,
  size: _size,
  disabled: _disabled,
  ...props
}: ChevronProps) {
  const Icon =
    orientation === "left"
      ? ChevronLeft
      : orientation === "right"
        ? ChevronRight
        : orientation === "up"
          ? ChevronUp
          : ChevronDown

  return (
    <Icon
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
      {...props}
    />
  )
}

function Calendar({
  className,
  classNames,
  components,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        ...calendarClassNames,
        ...classNames,
      }}
      components={{
        Chevron: CalendarChevron,
        ...components,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

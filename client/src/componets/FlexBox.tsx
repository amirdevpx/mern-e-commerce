import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../libs/utils";

const flexBoxVariats = cva("flex", {
  variants: {
    justify: {
      default: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
    items: {
      dafault: "items-center",
      start: "items-center",
      end: "items-end",
    },
    flex: {
      default: "flex-row",
      col: "flex-col",
      "col-reverse": "flex-col-reverse",
      "row-reverse": "flex-row-reverse",
    },
    wrap: {
      default: "flex-nowrap",
      wrap: "wrap",
    },
    gap: {
      default: "gap-4",
      two: "gap-2",
      six: "gap-6",
      eight: "gap-8",
      ten: "gap-10",
      none: "gap-0"
    },
  },
  defaultVariants: {
    justify: "default",
    items: "dafault",
    wrap: "default",
    flex: "default",
    gap: "default",
  },
});

interface FlexBoxProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexBoxVariats> {
  children?: React.ReactNode;
}

function FlexBox({
  children,
  className,
  justify,
  items,
  wrap,
  flex,
  gap,
  ...props
}: FlexBoxProps) {
  return (
    <div
      {...props}
      className={cn(flexBoxVariats({justify, items, wrap, flex, gap, className }))}
    >
      {children}
    </div>
  );
}

export default FlexBox;

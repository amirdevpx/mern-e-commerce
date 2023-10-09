import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../libs/utils";

const boxVariants = cva("w-full", {
  variants: {},
  defaultVariants: {},
});

interface BoxProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  children?: React.ReactNode;
}

const Box = ({ children, className, ...props }: BoxProps) => {
  return (
    <div {...props} className={cn(boxVariants({ className }))}>
      {children}
    </div>
  );
};

export default Box;

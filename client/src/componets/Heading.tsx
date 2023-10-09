import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../libs/utils";

const headingVariants = cva("font-semibold", {
  variants: {
    level: {
      h1: "text-4xl",
      h2: "text-3xl",
      default: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
    },
  },
  defaultVariants: {
    level: "default",
  },
});

interface HeadingProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  children?: React.ReactNode;
}

const Heading = ({ children, className, level, ...props }: HeadingProps) => {
  return React.createElement(level || "h3", {
    className: cn(headingVariants({ level, className })),
    ...props,
    children,
  });
};

export default Heading;

import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../libs/utils";

const typographyVariants = cva("", {
  variants: {
    element: {
      default: "paragraph",
      span: "span",
      idiomatic: "idiomatic ",
    },
    clamp: {
      default: "",
      yes: "overflow-hidden -webkit-box -webkit-box-vertical",
    },
    clampLine: {
      default: "",
      one: "-webkit-line-1",
      two: "-webkit-line-2",
      three: "-webkit-line-3",
    },
  },
  defaultVariants: {
    element: "default",
    clamp: "default",
    clampLine: "default",
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  children?: React.ReactNode;
}

const Typography = ({
  children,
  className,
  element,
  clamp,
  clampLine,
  ...props
}: TypographyProps) => {
  return React.createElement(element || "p", {
    className: cn(typographyVariants({ element, clamp, clampLine, className })),
    ...props,
    children,
  });
};

export default Typography;

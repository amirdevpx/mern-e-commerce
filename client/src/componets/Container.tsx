import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../libs/utils";

const containerVariants = cva("container mx-auto px-4", {
  variants: {},
  defaultVariants: {},
});

interface ContainerProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children?: React.ReactNode;
}

const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <React.Fragment>
      <div {...props} className={cn(containerVariants({ className }))}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Container;

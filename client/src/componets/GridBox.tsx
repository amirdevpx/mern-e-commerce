import React from "react";
import { cn } from "~/libs/utils";

interface GridBoxProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

const GridBox = ({ children, className, ...props }: GridBoxProps) => {
  return (
    <div
      {...props}
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 items-start gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GridBox;

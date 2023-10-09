import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../libs/utils";

const inputVariants = cva(
  "w-full py-1.5 px-3 border border-muted-lighter text-muted-normal rounded-md",
  {
    variants: {},
    defaultVariants: {},
  }
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = ({ className, ...props }: InputProps) => {
  return <input {...props} className={cn(inputVariants({ className }))} />;
};

export default Input;

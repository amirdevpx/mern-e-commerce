import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../libs/utils";
import Box from "./Box";

const buttonVariants = cva(
  "inline-flex p-1.5 items-center gap-2 text-dark border border-muted-normal rounded-md bg-light hover:bg-muted-light",
  {
    variants: {
      variant: {
        // button primary
        default:
          "text-light bg-primary-normal border-primary-normal hover:bg-primary-darker hover:border-primary-darker",
        "primary-outline":
          "border-primary-normal text-primary-normal hover:bg-primary-light",
        "primary-ghost":
          "border-light hover:border-primary-light hover:bg-primary-light",

        // button muted
        muted:
          "text-light bg-muted-normal border-muted-normal hover:bg-muted-darker hover:border-muted-darker",
        "muted-outline":
          "border-muted-normal text-muted-normal hover:bg-muted-light",
        "muted-ghost":
          "border-light hover:border-muted-light hover:bg-muted-light",
      },
      transition: {
        default: "transition-all",
      },
    },
    defaultVariants: {
      variant: "default",
      transition: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode;
  loading?: boolean;
}

function Button({
  children,
  className,
  loading,
  variant,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant, className }))}>
      {children}
    </button>
  );
}
export default Button;

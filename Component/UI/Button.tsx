"use client";

import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}
// primary = action
//secondary = cancel
// outline = more 

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-md font-medium transition duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border border-gray-400 text-gray-900 hover:bg-gray-100"
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const classes = twMerge(clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  ));

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

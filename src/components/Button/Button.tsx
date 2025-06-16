import React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const defaultClasses = "px-6 py-3 text-lg rounded-lg transition";

type Variant = "primary" | "disabled" | "outline";

const variants: Record<Variant, string> = {
  primary: "bg-red-600 text-white hover:bg-red-700 cursor-pointer",
  disabled: "bg-gray-300 text-gray-500 cursor-not-allowed",
  outline: "border border-red-600 text-red-600 hover:bg-red-50 cursor-pointer",
};

export const Button: React.FC<ButtonProps & { variant?: Variant }> = ({
  children,
  className = "",
  variant = "primary",
  ...rest
}) => {
  const variantClasses = variants[variant];
  return (
    <button
      className={`${defaultClasses} ${variantClasses} ${className}`}
      disabled={variant === "disabled"}
      {...rest}
    >
      {children}
    </button>
  );
};

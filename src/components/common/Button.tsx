import React from "react";
import { fn } from "../../utils/fn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={fn(
        "w-full rounded-full bg-gradient-to-r from-ctaGradientFrom to-ctaGradientTo py-4 font-bold text-white transition hover:opacity-75",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

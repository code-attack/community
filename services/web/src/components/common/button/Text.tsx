import { ButtonHTMLAttributes, ReactNode } from "react";
import { typograpy } from "../text";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  className?: string;
  Icon?: JSX.Element;
}

export const Text = ({
  children,
  className = "",
  type = "submit",
  Icon,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={twMerge(
        `flex items-center rounded-md justify-center gap-3 h-12 w-full hover:bg-gray-50 active:bg-gray-100 ${typograpy.title3}`,
        className
      )}
    >
      {Icon && Icon}
      {children}
    </button>
  );
};

import { ButtonHTMLAttributes, ReactNode } from "react";
import { typograpy } from "../text";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Contain = ({ children, className = "", onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `h-12 w-full bg-emerald-400 text-white rounded-md hover:opacity-95 active:opacity-90 ${typograpy.title3}`,
        className
      )}
    >
      {children}
    </button>
  );
};

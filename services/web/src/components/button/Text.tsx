import { ButtonHTMLAttributes, ReactNode } from "react";
import { typograpy } from "../Text";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  Icon?: JSX.Element;
}

export const Text = ({ children, className = "", Icon, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center rounded-md justify-center gap-3 h-12 w-full hover:bg-gray-50 active:bg-gray-100 ${typograpy.title3} ${className}`}
    >
      {Icon && Icon}
      {children}
    </button>
  );
};

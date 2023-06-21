import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Block = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`bg-white rounded-2xl p-12 flex relative mt-6 ${className}`}
    >
      {children}
    </div>
  );
};

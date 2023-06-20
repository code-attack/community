import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Button = ({ children }: Props) => {
  return <button className=" w-full bg-slate-200">{children}</button>;
};

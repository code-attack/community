import { ReactNode } from "react";
import { fontObject, keyOfFont } from "./constants";

interface PropsType {
  className?: string;
  size?: keyOfFont;
  children?: ReactNode;
}

export const Text = ({ className, size = "body3", children }: PropsType) => {
  return <div className={`${className} ${fontObject[size]}`}>{children}</div>;
};

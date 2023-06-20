import { ReactNode, createElement } from "react";
import { fontObject, keyOfFont } from "./constants";

interface PropsType {
  as?: "div" | "p" | "span" | "li";
  className?: string;
  size?: keyOfFont;
  children?: ReactNode;
}

export const Text = ({
  as = "div",
  className = "",
  size = "body3",
  children,
}: PropsType) => {
  const textClassName = `${className} ${fontObject[size]}`;
  return createElement(as, { className: textClassName, children });
};

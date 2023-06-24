import { ReactNode, createElement } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  isLoading: boolean;
  className?: string;
  skeletonClassName?: string;
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const Skeleton = ({
  isLoading,
  className,
  as = "div",
  skeletonClassName = ` animate-pulse`,
  children,
}: Props) => {
  return createElement(as, {
    className: twMerge(className, skeletonClassName),
    children: !isLoading && children,
  });
};

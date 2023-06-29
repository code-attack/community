import { ReactNode, createElement } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  isLoading?: boolean;
  className?: string;
  skeletonClassName?: string;
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const Skeleton = ({
  isLoading,
  className,
  as = "div",
  skeletonClassName = ` animate-pulse bg-slate-300`,
  children,
}: Props) => {
  return createElement(as, {
    className: twMerge(className, isLoading && skeletonClassName),
    children: !isLoading && children,
  });
};

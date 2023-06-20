import { ReactNode, createElement } from "react";
import { typograpy, KeyOfFont } from "./constants";

interface Props {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}

const ComponentBind = (
  typograpySize: string,
  { className, ...props }: Props
) => <SigleText className={`${className} ${typograpySize}`} {...props} />;

export const Text = Object.entries(typograpy).reduce(
  (arr, [key, value]) => ({
    ...arr,
    [key]: (props: Props) => ComponentBind(value, props),
  }),
  {} as { [key in KeyOfFont]: ({ as, className }: Props) => any }
);

const SigleText = ({ as = "div", className = "", children }: Props) => {
  return createElement(as, { className, children });
};

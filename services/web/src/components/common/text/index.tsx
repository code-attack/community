import { ReactNode, createElement } from "react";

export const typograpy = {
  heading1: `font-semiBold text-[48px]`,
  heading2: `font-semiBold text-[36px]`,
  heading3: `font-semiBold text-[28px]`,
  heading4: `font-semiBold text-[17px]`,
  heading5: `font-medium text-[14px]`,
  heading6: `font-regular text-[13px]`,
  title1: `font-semiBold text-[23px]`,
  title2: `font-medium text-[19px]`,
  title3: `font-semiBold text-[16px]`,
  title4: `font-medium text-[15px]`,
  title5: `font-semiBold text-[14px]`,
  body1: `font-regular text-[16px]`,
  body2: `font-regular text-[14px]`,
  body3: `font-regular text-[13px]`,
  body4: `font-regular text-[12px]`,
  body5: `font-regular text-[10px]`,
};

export type KeyOfFont = keyof typeof typograpy;

interface Props {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
}

const ComponentBind = (
  typograpySize: string,
  { className, ...props }: Props
) => <SingleText className={`${className} ${typograpySize}`} {...props} />;

export const Text = Object.entries(typograpy).reduce(
  (arr, [key, value]) => ({
    ...arr,
    [key]: (props: Props) => ComponentBind(value, props),
  }),
  {} as { [key in KeyOfFont]: ({ as, className }: Props) => any }
);

const SingleText = ({ as = "div", className = "", children }: Props) => {
  return createElement(as, { className, children });
};

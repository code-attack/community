/* 
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
*/

export const fontObject = {
  heading1: `font-semiBold text-[48px]`,
  heading2: `font-semiBold text-[36px]`,
  heading3: `font-semiBold text-[24px]`,
  heading4: `font-bold text-[17px]`,
  heading5: `font-medium text-[14px]`,
  heading6: `font-regular text-[13px]`,
  title1: `font-semiBold text-[23px]`,
  title2: `font-medium text-[19px]`,
  title3: `font-regular text-[16px]`,
  title4: `font-medium text-[15px]`,
  title5: `font-semiBold text-[14px]`,
  body1: `font-regular text-[16px]`,
  body2: `font-regular text-[14px]`,
  body3: `font-regular text-[13px]`,
  body4: `font-regular text-[12px]`,
  body5: `font-regular text-[10px]`,
};

export type keyOfFont = keyof typeof fontObject;

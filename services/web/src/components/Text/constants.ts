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
  heading1: `font-[600] text-[48px]`,
  heading2: `font-[600] text-[36px]`,
  heading3: `font-[600] text-[24px]`,
  heading4: `font-[700] text-[17px]`,
  heading5: `font-[500] text-[14px]`,
  heading6: `font-[400] text-[13px]`,
  title1: `font-[600] text-[23px]`,
  title2: `font-[500] text-[19px]`,
  title3: `font-[400] text-[16px]`,
  title4: `font-[500] text-[15px]`,
  title5: `font-[600] text-[14px]`,
  body1: `font-[400] text-[16px]`,
  body2: `font-[400] text-[14px]`,
  body3: `font-[400] text-[13px]`,
  body4: `font-[400] text-[12px]`,
  body5: `font-[400] text-[10px]`,
};

export type keyOfFont = keyof typeof fontObject;

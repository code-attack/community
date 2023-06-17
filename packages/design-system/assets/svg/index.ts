export * from "./Search";
export * from "./Blocking";
export * from "./Error";

export interface SvgPropType {
  className?: string;
  size?: number;
  onClick?: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

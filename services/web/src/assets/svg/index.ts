export * from "./Open";
export * from "./Close";
export * from "./Okay";
export * from "./Write";

export interface SvgPropsType {
  onClick?: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
  size?: number;
  className?: string;
}

export * from "./Arrow";

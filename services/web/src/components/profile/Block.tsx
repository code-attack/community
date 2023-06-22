import { Svg } from "@/assets";
import { ReactNode } from "react";
import { Icon } from "../common/button/Icon";

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

export const Block = ({ children, className = "", onClick }: Props) => {
  return (
    <div className={`bg-white rounded-2xl p-12 relative mt-6 ${className}`}>
      {children}
      <Icon
        className="right-12 top-12 absolute"
        Icon={<Svg.Write onClick={onClick} />}
      />
    </div>
  );
};

import { SvgPropsType } from ".";

interface Props extends SvgPropsType {
  direction?: "left" | "top" | "right" | "bottom";
}

const rotate = {
  left: "rotate-[0deg]",
  top: "rotate-[90deg]",
  right: "rotate-[180deg]",
  bottom: "rotate-[270deg]",
};

export const Arrow = ({
  onClick,
  className,
  size = 16,
  direction = "left",
}: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    onClick={onClick}
    className={`cursor-pointer ${rotate[direction]} ${className}`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 7.66658C14 7.48251 13.8507 7.33324 13.6667 7.33324H4.27599L7.56892 4.0403C7.69912 3.91012 7.69912 3.69907 7.56892 3.5689L7.09772 3.09763C6.96752 2.96746 6.75646 2.96746 6.62629 3.09763L1.95969 7.76424C1.82952 7.89438 1.82952 8.10544 1.95969 8.23564L6.62629 12.9022C6.75646 13.0324 6.96752 13.0324 7.09772 12.9022L7.56892 12.431C7.69912 12.3008 7.69912 12.0897 7.56892 11.9596L4.27599 8.66658H13.6667C13.8507 8.66658 14 8.51738 14 8.33324V7.66658Z"
      fill="black"
    />
  </svg>
);

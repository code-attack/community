import { SvgPropsType } from ".";

export const Okay = ({ size = 12, className, onClick }: SvgPropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    onClick={onClick}
    className={className}
  >
    <path
      d="M4.50008 8.08492L2.41508 5.99992L1.70508 6.70492L4.50008 9.49992L10.5001 3.49992L9.79508 2.79492L4.50008 8.08492Z"
      fill="#34D399"
    />
  </svg>
);

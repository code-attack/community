interface Props {
  Icon: JSX.Element;
  className?: string;
}

export const Icon = ({ Icon, className = "" }: Props) => {
  return (
    <button
      className={`rounded-full hover:bg-gray-100 active:bg-gray-200 ${className}`}
    >
      {Icon}
    </button>
  );
};

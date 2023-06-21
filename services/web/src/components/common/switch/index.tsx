import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  role: "menti" | "mento";
}

export const Switch = ({ role, onClick }: Props) => {
  const isMento = role === "mento";

  return (
    <button
      onClick={onClick}
      className={`w-12 h-7 rounded-full flex items-center cursor-pointer px-1 ${
        isMento ? "bg-emerald-400" : "bg-gray-400"
      }`}
    >
      <div
        className={`flex justify-end transition-all ${
          isMento ? "w-full" : "w-5"
        }`}
      >
        <div className="w-5 h-5 rounded-full bg-white" />
      </div>
    </button>
  );
};

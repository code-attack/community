"use client";

import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { Text } from "../text";
import { Svg } from "@/assets";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string[];
  error?: (keyof typeof errorType)[];
}

const errorType = {
  success: "text-green-400 fill:green-400",
  unCheck: "text-gray-500 fill:gray-500",
  error: "text-red-500 fill:red-500",
};

export const Basic = ({
  type,
  value,
  name,
  placeholder,
  hint,
  label,
  error,
  onChange,
}: Props) => {
  const [close, setClose] = useState<boolean>(true);
  const openEye = () => setClose(true);
  const closeEye = () => setClose(false);

  const isPassword = type === "password";
  return (
    <div>
      <Text.body3 className=" ml-[6px] mb-[6px]">{label}</Text.body3>
      <div className="relative">
        <input
          className={`pl-3 ${
            isPassword ? "pr-12" : "pr-3"
          } w-full h-12 outline-none border-[1px] box-border border-gray200 rounded-[4px] focus:shadow-[0px_0px_0px_2px_rgba(209,250,229,1)]`}
          type={close ? type : "text"}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
        <button className="absolute top-3 right-4 cursor-pointer">
          {isPassword &&
            (close ? (
              <Svg.Close onClick={closeEye} />
            ) : (
              <Svg.Open onClick={openEye} />
            ))}
        </button>
      </div>
      <div className="px-1">
        {error &&
          hint?.map((text, idx) => {
            return (
              <div
                className={`flex items-center gap-1 ${errorType[error[idx]]}`}
              >
                <Svg.Okay />
                <Text.body5>{text}</Text.body5>
              </div>
            );
          })}
      </div>
    </div>
  );
};

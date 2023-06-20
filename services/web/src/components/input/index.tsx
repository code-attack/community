"use client";

import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { Text } from "../Text";
import { Svg } from "@/assets";

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string[];
  error?: boolean[];
}

export const Input = ({
  type,
  value,
  name,
  placeholder,
  hint,
  label,
  error,
  onChange,
}: PropsType) => {
  const [close, setClose] = useState<boolean>(true);
  const openEye = () => setClose(true);
  const closeEye = () => setClose(false);

  const isPassword = type === "password";
  return (
    <div>
      <Text.body3 className=" ml-1 mb-1">{label}</Text.body3>
      <div className="relative">
        <input
          className={`pl-3 ${
            isPassword ? "pr-12" : "pr-3"
          } w-full h-12 outline-none border-[1px] box-border border-gray200 rounded-[4px] focus:border-blue-500`}
          type={close ? type : "text"}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
        <div className="absolute top-3 right-4">
          {isPassword &&
            (close ? (
              <Svg.Open onClick={closeEye} />
            ) : (
              <Svg.Close onClick={openEye} />
            ))}
        </div>
      </div>
      <div className="px-1">
        {hint?.map((text) => (
          <div className="flex items-center gap-1">
            <Svg.Okay />
            <Text.body5>{text}</Text.body5>
          </div>
        ))}
      </div>
    </div>
  );
};

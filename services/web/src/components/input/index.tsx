"use client";

import { Close, Open } from "@/assets/svg";
import { ChangeEvent, useState } from "react";
import { Text } from "../Text";

interface PropsType {
  value: string;
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

  type?: "text" | "password";

  label?: string;
  hint?: string[];
  error?: boolean[];
}

export const Input = ({ type }: PropsType) => {
  const [close, setClose] = useState<boolean>(false);
  const reverseClose = () => setClose(!close);
  return (
    <div>
      <Text.body3 className=" ml-1 mb-1">라벨입니다</Text.body3>
      <div className="relative">
        <input
          className=" w-full h-12 outline-none border-[1px] box-border border-gray200 rounded-[4px]"
          type={close ? type : "text"}
        />
        <div className="absolute top-3 right-4">
          {close ? <Close /> : <Open />}
        </div>
      </div>
    </div>
  );
};

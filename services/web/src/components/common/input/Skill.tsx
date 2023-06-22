"use client";

import { ChangeEvent, useState } from "react";
import { Input } from ".";
import OutsideClickHandler from "react-outside-click-handler";
import { Text, typograpy } from "../text";

interface SkillChangeType {
  value: string[];
  name: string;
}

interface Props {
  value: string[];
  placeholder: string;
  onChange: ({ value, name }: SkillChangeType) => void;
  name: string;
  label?: string;
}

const exam = ["react", "typescript"];

export const Skill = ({ value, placeholder, onChange, name, label }: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const onKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const [dropdown, setDropdown] = useState<boolean>(false);
  const openDropdown = () => setDropdown(true);
  const closeDropdown = () => setDropdown(false);

  const skillFilterValue = exam.filter(
    (skill) => skill.includes(keyword) && !value.includes(skill)
  );

  const onClickSkill = (skill: string) => {
    onChange({ value: value.concat(skill), name });
    setKeyword("");
    closeDropdown();
  };
  const removeSkill = (idx: number) => {
    const temp = [...value];
    console.log(temp);
    temp.splice(idx, 1);

    onChange({ value: temp, name });
  };

  return (
    <div className="relative">
      <Input.Basic
        value={keyword}
        label={label}
        onChange={onKeywordChange}
        placeholder={placeholder}
        onFocus={openDropdown}
      />
      <div className="flex flex-wrap gap-3 mt-4">
        {value.map((text, idx) => (
          <Text.body1
            onClick={() => removeSkill(idx)}
            className=" bg-slate-100 hover:bg-slate-200 cursor-pointer px-6 py-2 rounded-full"
          >
            {text}
          </Text.body1>
        ))}
      </div>
      {dropdown && !!skillFilterValue.length && (
        <div
          className={`absolute ${
            label ? "top-[90px]" : "top-[60px]"
          } w-full z-10`}
        >
          <OutsideClickHandler onOutsideClick={closeDropdown}>
            <div className=" bg-white border-[1px] rounded-md shadow-md p-2 flex flex-col gap-2">
              {skillFilterValue.map((skill) => (
                <div
                  onClick={() => onClickSkill(skill)}
                  className={`${typograpy.title3} hover:bg-slate-100 px-4 py-3 rounded-md flex cursor-pointer`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </OutsideClickHandler>
        </div>
      )}
    </div>
  );
};

"use client";

import OutsideClickHandler from "react-outside-click-handler";
import { stringToDate } from "../../../hooks/useCalender";
import { DayCalender } from "./DayCalender";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface PropsType {
  label?: string;
  name: string;
  value: string | number | undefined;
  placeholder?: string;
  onSubmitAtInput: (value: { value: number; name: string }) => void;
  className?: string;
}

export const DateInput = ({
  label,
  onSubmitAtInput,
  value,
  name,
  placeholder = "날짜를 입력해 주세요",
  className,
}: PropsType) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const openDropdown = () => setDropdown(true);
  const closeDropdown = () => setDropdown(false);
  const checkValue = typeof value === "string" ? undefined : value;

  const CalenderDateValue = () => {
    if (checkValue) {
      const { year, month, day } = stringToDate(checkValue);
      const date = [year + "년", month + "월", day + "일"];

      return date.join(" ");
    }
  };

  const submitOnInput = (value: string) => {
    const date = new Date(value);
    onSubmitAtInput({ value: date.getTime(), name });
  };

  return (
    <OutsideClickHandler display="flex" onOutsideClick={closeDropdown}>
      <div className="relative w-full">
        <div className="text-body2">{label}</div>
        <div
          className={twMerge(
            `cursor-pointer relative bg-gray-100 rounded-sm  w-full h-[46px] flex items-center pr-1 pl-5`,
            className
          )}
          onClick={openDropdown}
        >
          <input
            className=" cursor-pointer text-body6"
            value={CalenderDateValue()}
            placeholder={placeholder}
            disabled
          />
        </div>
        {dropdown && (
          <div className="w-[345px] rounded-[4px] border-[1px] bg-gray-50 absolute z-10 top-[60px] right-0">
            <DayCalender
              initialValue={checkValue}
              closeDropdown={closeDropdown}
              onSubmitAtInput={submitOnInput}
            />
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

// const DropdownRelative = styled.div`
//   position: relative;
// `;

// const _Wrapper = styled.div`
//   cursor: pointer;
//   position: relative;
//   border: 1px solid ${({ theme }) => theme.color.gray500};
//   border-radius: ${({ theme }) => theme.borderRadius.small};
//   width: 345px;
//   height: 58px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 4px 0 12px;
// `;

// const _TextValue = styled.input`
//   cursor: pointer;
//   background-color: transparent;
//   ${({ theme }) =>
//     css`
//       ${theme.font.body1};
//       ::placeholder {
//         color: ${theme.color.gray300};
//       }
//     `};
// `;

// const _SvgWrapper = styled.div`
//   padding: 8px;
//   border-radius: ${({ theme }) => theme.borderRadius.circle};
//   :hover {
//     background-color: ${({ theme }) => theme.color.gray100};
//   }
//   :active {
//     background-color: ${({ theme }) => theme.color.gray200};
//   }
// `;

// const _CalenderWrapper = styled.div`
//   width: 100%;
//   border-radius: 16px;
//   background-color: ${({ theme }) => theme.color.primary25};
//   position: absolute;
//   top: 91px;
//   left: 0;
// `;

// const _Label = styled(Text)`
//   position: absolute;
//   top: -27px;
// `;

"use client";

import { Svg } from "@/assets";
import {
  DateValueType,
  stringToDate,
  useCalender,
} from "../../../hooks/useCalender";
import { Button } from "../button";
import { typograpy } from "../text";

interface PropsType {
  initialValue: string | number | undefined;
  closeDropdown: () => void;
  onSubmitAtInput: (value: string) => void;
}

const weekClassName = "w-10 h-10 m-1 flex items-center justify-center";

export const DayCalender = ({
  initialValue,
  closeDropdown,
  onSubmitAtInput,
}: PropsType) => {
  const {
    date,
    onSaveClickedDay,
    isCurrentDay,
    startDay,
    dayArray,
    weekArray,
    plusDate,
    minusDate,
  } = useCalender({ initialValue: initialValue || undefined });

  const setChangeAtInput = () => {
    onSubmitAtInput(date);
    closeDropdown();
  };

  const { year, month } = stringToDate(date);
  return (
    <>
      <div className="h-[64px] flex items-center px-4 justify-between ">
        <div className="flex items-center gap-[18px]">
          <Svg.Arrow direction="left" onClick={minusDate("month")} />
          {month}월
          <Svg.Arrow direction="right" onClick={plusDate("month")} />
        </div>
        <div className="flex items-center gap-[18px]">
          <Svg.Arrow direction="left" onClick={minusDate("year")} />
          {year}년
          <Svg.Arrow direction="right" onClick={plusDate("year")} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-auto h-[336px] flex-wrap">
          {weekArray.map((day) => (
            <div className={weekClassName} key={day}>
              {day}
            </div>
          ))}
          {Array(startDay)
            .fill(0)
            .map((_, idx) => (
              <div key={idx + "space"} className={weekClassName} />
            ))}
          {Array(dayArray)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx + "realShowDay"}
                className={`cursor-pointer rounded-full ${
                  isCurrentDay(idx + 1) && "bg-gray300 text-gray50"
                } hover:bg-gray200  hover:text-gray50 ${weekClassName}`}
                onClick={() => onSaveClickedDay(idx + 1)}
              >
                {idx + 1}
              </div>
            ))}
        </div>
      </div>

      <div className="flex h-14 items-center flex-row-reverse px-3">
        <Button.Text
          className={`${typograpy.body1} p-[5px_10px] w-fit h-fit`}
          onClick={setChangeAtInput}
        >
          확인
        </Button.Text>
        <Button.Text
          className={`${typograpy.body1} p-[5px_10px] w-fit h-fit`}
          onClick={closeDropdown}
        >
          취소
        </Button.Text>
      </div>
    </>
  );
};

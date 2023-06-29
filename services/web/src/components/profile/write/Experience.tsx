import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { useProfile } from "@/hooks/useProfile";
import { WriteType, initial } from ".";
import { Dispatch, SetStateAction } from "react";
import { Text } from "@/components/common/text";

interface Props {
  type: WriteType;
  state: any;
  setState: Dispatch<SetStateAction<any>>;
}

export const Experience = ({ type, state, setState }: Props) => {
  const {
    form,
    onInputArrayChange,
    onArrayOrChangeInArray,
    addArray,
    removeArray,
  } = useProfile(state, type, initial[type]);

  const onSubmit = () => setState(form);

  return (
    <div className="flex flex-col gap-4 ">
      <Text.title1>업무 경험</Text.title1>
      <Button.Contain onClick={addArray}>추가하기</Button.Contain>
      {(form.workExperience as any[]).map(
        ({ name, field, startDate, endDate }, idx) => (
          <div>
            <Button.Contain onClick={removeArray(idx)}>삭제</Button.Contain>
            <Input.Basic
              label="회사 이름"
              value={name}
              onChange={onInputArrayChange(idx)}
              name="name"
            />
            <Input.Skill
              label="분야"
              value={field}
              onChange={onArrayOrChangeInArray(idx)}
              placeholder="분야"
              name="field"
            />
            <div className="flex">
              <Input.DateInput
                label="시작날짜"
                value={startDate}
                onSubmitAtInput={onArrayOrChangeInArray(idx)}
                name="startDate"
                dropdownLocation="center"
              />
              <Input.DateInput
                label="끝난날짜"
                value={endDate}
                onSubmitAtInput={onArrayOrChangeInArray(idx)}
                name="endDate"
                dropdownLocation="center"
              />
            </div>
          </div>
        )
      )}
      <Button.Contain onClick={onSubmit}>저장하기</Button.Contain>
    </div>
  );
};

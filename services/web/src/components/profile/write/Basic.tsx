import { Input } from "@/components/common/input";
import { WriteType, initial } from ".";
import { Dispatch, SetStateAction } from "react";
import { useProfile } from "@/hooks/useProfile";
import { Button } from "@/components/common/button";
import { Text } from "@/components/common/text";
import { useMutation } from "@tanstack/react-query";
import { updateIntroduce } from "@/hooks/queries/user";

interface Props {
  type: WriteType;
  state: any;
  setState: Dispatch<SetStateAction<any>>;
}

export const Basic = ({ type, state, setState }: Props) => {
  const {
    form,
    onChange,
    arrayOrDateChange,
    onInputArrayChange,
    onArrayOrChangeInArray,
    addArray,
    removeArray,
  } = useProfile(state, type, initial[type]);
  const { introduce } = form;
  const requestIntroduce = {
    ...introduce,
    tag: JSON.stringify(introduce.tag),
    technology: JSON.stringify(introduce.technology),
  };
  const { mutate } = updateIntroduce(requestIntroduce);
  const onSubmit = () => {
    setState(form);
    mutate();
  };

  return (
    <div className="flex flex-col gap-4">
      <Text.title1>기본 정보</Text.title1>
      <Input.Basic
        label="자기소개"
        value={introduce.content}
        onChange={onChange}
        name="content"
      />
      <Input.Skill
        label="기술스택"
        value={introduce.technology}
        onChange={arrayOrDateChange}
        placeholder=""
        name="technology"
      />
      <Input.Skill
        label="태그"
        value={introduce.tag}
        onChange={arrayOrDateChange}
        placeholder=""
        name="tag"
      />
      <Button.Contain onClick={onSubmit}>저장하기</Button.Contain>
    </div>
  );
};

import { Input } from "@/components/common/input";
import { useProfile } from "@/hooks/useProfile";
import { WriteType, initial } from ".";
import { Dispatch, SetStateAction } from "react";
import { Button } from "@/components/common/button";
import { Text } from "@/components/common/text";

interface Props {
  type: WriteType;
  state: any;
  setState: Dispatch<SetStateAction<any>>;
}

export const Profile = ({ type, state, setState }: Props) => {
  const { form, onChange, arrayOrDateChange } = useProfile(
    state,
    type,
    initial[type]
  );

  const onSubmit = () => setState(form);

  return (
    <div className="flex flex-col gap-4">
      <Text.title1>기존 정보</Text.title1>
      <Input.Upload
        label="프로필 사진"
        value={form.profile.profile_img}
        onChange={() => {}}
        preview={""}
      />
      <Input.Basic
        label="이름"
        value={form.profile.name}
        onChange={onChange}
        name="name"
      />
      <Input.DateInput
        label="생년월일"
        value={form.profile.birthDay}
        onSubmitAtInput={arrayOrDateChange}
        name="birth"
        dropdownLocation="center"
      />
      <Button.Contain onClick={onSubmit}>저장하기</Button.Contain>
    </div>
  );
};

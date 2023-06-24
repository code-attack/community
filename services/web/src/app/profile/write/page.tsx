"use client";

import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import Link from "next/link";
import { Svg } from "@/assets";
import Image from "next/image";
import { Footer } from "@/components/common/footer";
import { Profile } from "@/components/profile";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { query } from "@/hooks";
import { User } from "@package/api-types";
import OutsideClickHandler from "react-outside-click-handler";
import { useProfile } from "@/hooks/useProfile";
import { MillsecondToDate } from "@/hooks/useCalender";

type WriteType = "profile" | "basic" | "experience";

export default () => {
  const { data } = query.user.getUser();

  return (
    <div className="bg-gray-50">
      <Header />
      {data && <Main {...data.data} />}
      <Footer />
    </div>
  );
};

const initial = {
  basic: {
    tag: [],
    technology: [],
    introduce: "",
  },
  profile: {
    name: "",
    profile_img: "",
    birthDay: undefined,
  },
  experience: {
    name: "",
    field: [],
    startDay: undefined,
    endDay: undefined,
  },
};

const Main = ({
  name,
  profile_img,
  tag,
  technology,
  workExperience,
  introduce,
}: User.MyProfileRes) => {
  const [form, setForm] = useState({
    basic: initial.basic,
    profile: initial.profile,
    experience: [initial.experience],
    workExperience: [],
    introduce: { content: "" },
  });
  const { basic, profile, experience } = form;

  const [type, setType] = useState<WriteType>("profile");

  const [modal, setModal] = useState<boolean>(false);
  const openModal = (type: WriteType) => {
    setType(type);
    setModal(true);
  };
  const closeModal = () => modal && setModal(false);

  return (
    <main className="m-auto w-[1016px]">
      <Link href={"/"}>
        <Button.Text Icon={<Svg.Arrow />} className="w-28 my-10">
          홈으로
        </Button.Text>
      </Link>
      <Text.heading3>프로필 작성</Text.heading3>
      <Profile.Block
        onClick={() => openModal("profile")}
        className="flex gap-8"
      >
        <Image
          src={form.profile.profile_img || "/auth.png"}
          alt="profile"
          width={104}
          height={104}
          className="rounded-full w-[104px] h-[104px]"
        />
        <div className="flex flex-col gap-3">
          <Text.heading3>
            {form.profile.name || "이름이 아직 없네요..."}
          </Text.heading3>
          <Input.DateInput
            label="생년월일"
            value={form.profile.birthDay}
            onSubmitAtInput={() => {}}
            name=""
          />
        </div>
      </Profile.Block>
      <Profile.Block onClick={() => openModal("basic")}>
        <Text.heading3 className="mb-4">기본정보</Text.heading3>
        <div>
          <Text.title2 className="text-gray-400">자기소개</Text.title2>
          <Text.body1>
            {basic.introduce || "자기소개를 적어주세요..."}
          </Text.body1>
        </div>
        <div>
          <Text.title2 className="text-gray-400">태그</Text.title2>
          <Text.body1>
            {!!basic.tag.length
              ? basic.tag.map((text) => <div>{text}</div>)
              : "태그 내용을 적어주세요..."}
          </Text.body1>
        </div>
        <div>
          <Text.title2 className="text-gray-400">기술스택</Text.title2>
          <Text.body1>
            {!!basic.technology?.length
              ? basic.technology?.map((text) => <div>{text}</div>)
              : "기술 스택을 입력해 주세요..."}
          </Text.body1>
        </div>
      </Profile.Block>
      <Profile.Block onClick={() => openModal("experience")}>
        <Text.heading3 className="mb-4">업무 경험</Text.heading3>
        {form.experience.map(({ name, field, startDay, endDay }) => (
          <div className="pl-12 relative pb-4">
            <div className="border-l-2 border-gray-100 h-[calc(100%-10px)] w-[2px] top-5 left-[7px] absolute" />
            <div>
              <Text.title2 className="text-gray-400 before:w-4 before:h-4 before:border-4 before:border-gray200 before:rounded-full before:absolute before:left-0 before:top-2">
                {name || "회사 이름을 작성해주세요..."}
              </Text.title2>
              <Text.body1>
                {MillsecondToDate(startDay as any) || "날짜가 아직 없어요..."} ~{" "}
                {MillsecondToDate(endDay as any) || "날짜가 아직 없어요..."}
              </Text.body1>
              <Text.body1>
                {field || "회사에서의 분야를 작성해 주세요"}
              </Text.body1>
            </div>
          </div>
        ))}
      </Profile.Block>
      <OutsideClickHandler onOutsideClick={closeModal}>
        <WriteModal modal={modal} type={type} state={form} setState={setForm} />
      </OutsideClickHandler>
    </main>
  );
};

interface WriteModalProps {
  modal: boolean;
  type: WriteType;
  children?: ReactNode;
  state: any;
  setState: Dispatch<SetStateAction<any>>;
}

const WriteModal = ({ modal, type, state, setState }: WriteModalProps) => {
  const {
    form,
    onChange,
    arrayOrDateChange,
    onInputArrayChange,
    onArrayOrChangeInArray,
    addArray,
    removeArray,
  } = useProfile(state, type, initial[type]);
  const onSubmit = () => setState(form);
  return (
    <div
      className={`${
        modal ? "right-10" : "-right-[540px]"
      } top-0 z-50 box-border my-10  h-[90%] w-[500px] py-10 px-12  fixed transition-all  bg-white rounded-md shadow-2xl overflow-y-auto overflow-x-visible`}
    >
      {
        {
          profile: (
            <div className="flex flex-col gap-4">
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
                name="birthDay"
                dropdownLocation="center"
              />
              <Button.Contain onClick={onSubmit}>저장하기</Button.Contain>
            </div>
          ),
          basic: (
            <div className="flex flex-col gap-4">
              <Input.Basic
                label="자기소개"
                value={form.basic.introduce}
                onChange={onChange}
                name="introduce"
              />
              <Input.Skill
                label="기술스택"
                value={form.basic.technology}
                onChange={arrayOrDateChange}
                placeholder=""
                name="technology"
              />
              <Input.Skill
                label="태그"
                value={form.basic.tag}
                onChange={arrayOrDateChange}
                placeholder=""
                name="tag"
              />
              <Button.Contain onClick={onSubmit}>저장하기</Button.Contain>
            </div>
          ),
          experience: (
            <div className="flex flex-col gap-4 ">
              <Button.Contain onClick={addArray}>추가하기</Button.Contain>
              {(form.experience as any[]).map(
                ({ name, field, startDay, endDay }, idx) => (
                  <div>
                    <Button.Contain onClick={removeArray(idx)}>
                      삭제
                    </Button.Contain>
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
                        value={startDay}
                        onSubmitAtInput={onArrayOrChangeInArray(idx)}
                        name="startDay"
                        dropdownLocation="center"
                      />
                      <Input.DateInput
                        label="끝난날짜"
                        value={endDay}
                        onSubmitAtInput={onArrayOrChangeInArray(idx)}
                        name="endDay"
                        dropdownLocation="center"
                      />
                    </div>
                  </div>
                )
              )}
              <Button.Contain onClick={onSubmit}>저장하기</Button.Contain>
            </div>
          ),
        }[type]
      }
    </div>
  );
};

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
import { WriteModal, WriteType, initial } from "@/components/profile/write";

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

const Main = (data: User.MyProfileRes) => {
  const apiProfile = {
    name: data.name,
    birth: data.birth || "",
    profile_img: data.profile_img,
  };
  const apiIntroduce = data.introduce && {
    ...data.introduce,
    tag: JSON.parse(data.introduce.tag) as string[],
    technology: JSON.parse(data.introduce.technology) as string[],
  };
  const [form, setForm] = useState({
    introduce: apiIntroduce || initial.introduce,
    profile: apiProfile,
    workExperience: data.workExperience || [],
  });
  const { introduce, profile, workExperience } = form;

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
        isCanUpdate={false}
      >
        <Image
          src={form.profile.profile_img || "/auth.png"}
          alt="profile"
          width={104}
          height={104}
          className="rounded-full w-[104px] h-[104px]"
        />
        <div className="flex flex-col gap-3">
          <Text.heading3>{form.profile.name}</Text.heading3>
          <Text.body1>{MillsecondToDate(form.profile.birth as any)}</Text.body1>
        </div>
      </Profile.Block>
      <Profile.Block
        onClick={() => openModal("introduce")}
        className="flex flex-col gap-5"
      >
        <Text.heading3 className="mb-4">기본 정보</Text.heading3>
        <div>
          <Text.title2 className="text-gray-400">자기소개</Text.title2>
          <Text.body1>
            {introduce.content || "자기소개를 적어주세요..."}
          </Text.body1>
        </div>
        <div>
          <Text.title2 className="text-gray-400">태그</Text.title2>
          <Text.body1>
            {!!introduce.tag.length
              ? introduce.tag.map((text) => <div>{text}</div>)
              : "태그 내용을 적어주세요..."}
          </Text.body1>
        </div>
        <div>
          <Text.title2 className="text-gray-400">기술스택</Text.title2>
          <Text.body1>
            {!!introduce.technology?.length
              ? introduce.technology?.map((text) => <div>{text}</div>)
              : "기술 스택을 입력해 주세요..."}
          </Text.body1>
        </div>
      </Profile.Block>
      <Profile.Block onClick={() => openModal("workExperience")}>
        <Text.heading3 className="mb-4">업무 경험</Text.heading3>
        {workExperience.map(({ name, field, startDate, endDate }, idx) => (
          <div className="pl-12 relative pb-4">
            {workExperience.length !== idx + 1 && (
              <div className="border-l-2 border-gray-100 h-[calc(100%-10px)] w-[2px] top-5 left-[7px] absolute " />
            )}
            <div>
              <Text.title2 className="text-gray-400 before:w-4 before:h-4 before:border-4 before:border-gray200 before:rounded-full before:absolute before:left-0 before:top-2">
                {name || "회사 이름을 작성해주세요..."}
              </Text.title2>
              <Text.body1>
                {MillsecondToDate(startDate as any) || "날짜가 아직 없어요..."}{" "}
                ~ {MillsecondToDate(endDate as any) || "날짜가 아직 없어요..."}
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

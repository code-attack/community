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
import { DateInput } from "@/components/common/date";
import { useState } from "react";
import { query } from "@/hooks";
import { User } from "@package/api-types";

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

const Main = ({
  name,
  profile_img,
  tag,
  technology,
  workExperience,
  introduce,
}: User.MyProfileRes) => {
  const [date, setDate] = useState<number | undefined>(undefined);

  return (
    <main className="m-auto w-[1016px]">
      {/* <Profile.Patch /> */}
      <Link href={"/"}>
        <Button.Text Icon={<Svg.Arrow />} className="w-28 my-10">
          홈으로
        </Button.Text>
      </Link>
      <Text.heading3>프로필 작성</Text.heading3>
      <Profile.Block>
        <Image
          src={profile_img || "/auth.png"}
          alt="profile"
          width={104}
          height={104}
          className="rounded-full"
        />
        <Text.heading3>{name}</Text.heading3>
      </Profile.Block>
      <Profile.Block>
        <Text.heading3 className="mb-4">기본정보</Text.heading3>
        <div>
          <Text.title2 className="text-gray-400">자기소개</Text.title2>
          <Text.body1>{introduce.content}</Text.body1>
        </div>
        <div>
          <Text.title2 className="text-gray-400">태그</Text.title2>
          <Text.body1>{introduce.content}</Text.body1>
        </div>
        <div>
          <Text.title2 className="text-gray-400">기술스택</Text.title2>
          <Text.body1>{introduce.content}</Text.body1>
          <Input.Skill value={[]} placeholder="" onChange={() => {}} name="" />
        </div>
      </Profile.Block>
      <Profile.Block>
        <Text.heading3 className="mb-4">업무 경험</Text.heading3>
        {workExperience.map((work) => (
          <div className="pl-12 relative pb-4">
            <div className="border-l-2 border-gray-100 h-[calc(100%-10px)] w-[2px] top-5 left-[7px] absolute" />
            <div>
              <Text.title2 className="text-gray-400 before:w-4 before:h-4 before:border-4 before:border-gray200 before:rounded-full before:absolute before:left-0 before:top-2">
                {work.name}
              </Text.title2>
              <Text.body1>
                {work.startDate} ~ {work.endDate && work.endDate}
              </Text.body1>
              <Text.body1>{work.field}</Text.body1>
            </div>
          </div>
        ))}
      </Profile.Block>
    </main>
  );
};

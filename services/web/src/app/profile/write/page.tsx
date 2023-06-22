"use client";

import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import { TextArea } from "@/components/common/input/TextArea";
import Link from "next/link";
import { Svg } from "@/assets";
import Image from "next/image";
import { Footer } from "@/components/common/footer";
import { Profile } from "@/components/profile";
import { DateInput } from "@/components/common/date";
import { useState } from "react";

export default () => {
  const [date, setDate] = useState<number | undefined>(undefined);
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="m-auto w-[1016px]">
        <Profile.Patch />
        <Link href={"/"}>
          <Button.Text Icon={<Svg.Arrow />} className="w-28 my-10">
            홈으로
          </Button.Text>
        </Link>
        <Text.heading3>프로필 작성</Text.heading3>
        <Profile.Block>
          <Image
            src={"/auth.png"}
            alt="profile"
            width={104}
            height={104}
            className="rounded-full"
          />
          <Text.heading3 className="ml-10">조상현</Text.heading3>
        </Profile.Block>
        <Profile.Block>
          <Text.heading3>기본정보</Text.heading3>
          <Text.body1>태그, 기술스택</Text.body1>
          <div>
            <Input.TextArea label="자기소개" />
          </div>
        </Profile.Block>
        <Profile.Block>
          <Text.heading3>업무 경험</Text.heading3>
          <div>
            <Input.Basic label="회사명" />
          </div>
          <div>
            <Input.TextArea label="직무" />
          </div>
          <div className="flex justify-between">
            <Text.body1>근무기간</Text.body1>
            <DateInput
              className="w-96"
              value={date}
              onSubmitAtInput={({ value }) => setDate(value)}
              name=""
            />
            <DateInput
              className="w-96"
              value={date}
              onSubmitAtInput={({ value }) => setDate(value)}
              name=""
            />
          </div>
        </Profile.Block>
      </main>
      <Footer />
    </div>
  );
};

import { Arrow } from "@/assets/svg";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import { TextArea } from "@/components/common/input/TextArea";
import Link from "next/link";

export default () => {
  return (
    <>
      <Header />
      <main className="m-auto w-[1016px]">
        <Button.Text Icon={<Arrow />}>홈으로</Button.Text>
        <div>
          <div>
            <Text.heading3>프로필 작성</Text.heading3>
            <Text.title2 className="text-gray-500">기본 정보</Text.title2>
            <Input.Upload label="프로필 사진" preview={""} />
            <TextArea label="자기소개" />
            <Text.title2 className="text-gray-500">경력</Text.title2>
            <TextArea label="회사 이름" />
          </div>
        </div>
      </main>
    </>
  );
};

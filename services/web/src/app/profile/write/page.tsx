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

export default () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <main className="m-auto w-[1016px]">
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
          <button className="right-12 absolute">
            <Svg.Write />
          </button>
        </Profile.Block>
        <Profile.Block>
          <Text.heading3 className="ml-10">기본정보</Text.heading3>
          <Text.body1>태그, 기술스택, 자기소개 </Text.body1>
        </Profile.Block>
        <Profile.Block>
          <Text.heading3 className="ml-10">업무 경험</Text.heading3>
          <Text.body1>회사명, 근무기간, 직무</Text.body1>
        </Profile.Block>
      </main>
      <Footer />
    </div>
  );
};

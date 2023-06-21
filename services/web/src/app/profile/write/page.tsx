import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import { TextArea } from "@/components/common/input/TextArea";
import Link from "next/link";
import { Svg } from "@/assets";
import Image from "next/image";
import { Footer } from "@/components/common/footer";

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
        <div className="bg-white rounded-2xl p-12 flex relative">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

import { Svg } from "@/assets";
import { Button, Input, Switch } from "@/components";
import { Text } from "@/components/Text";
import Image from "next/image";
import Link from "next/link";

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2 flex justify-center">
        <div className="w-96 m-auto">
          <Link href={"/"}>
            <Button.Text Icon={<Svg.Arrow />} className="w-28">
              홈으로
            </Button.Text>
          </Link>
          <Text.heading3 as="p">sign-up</Text.heading3>
          <div className="flex flex-col gap-4">
            <Input />
            <Input />
            <Input />
          </div>
          <div>
            <Text.body1 as="span">멘토이신가요?</Text.body1>
            <Switch />
          </div>
          <Button.Contain>회원가입</Button.Contain>
          <Link href={"/auth/sign-in"}>
            <Button.Text>로그인</Button.Text>
          </Link>
        </div>
      </div>
      <div className="h-screen w-1/2 relative">
        <Image className="object-cover" fill src="/auth.png" alt="wqd" />
      </div>
    </div>
  );
};

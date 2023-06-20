import { Button, Input, Switch } from "@/components";
import Image from "next/image";

export default () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Button>홈으로</Button>
        <p>sign-up</p>
        <Input />
        <Input />
        <div>
          <span>멘토이신가요?</span>
          <Switch />
        </div>
        <Button>회원가입</Button>
        <Button>로그인</Button>
      </div>

      <div className="h-screen w-1/2 relative">
        <Image className="object-cover" fill src="/auth.png" alt="wqd" />
      </div>
    </div>
  );
};

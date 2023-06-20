"use client";

import { Svg } from "@/assets";
import { Button, Input, Switch } from "@/components";
import { Text } from "@/components/Text";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Auth } from "@package/api-types";

export default () => {
  const [signInState, setSignInState] = useState<Auth.SignInReq>({
    account_id: "",
    password: "",
  });

  return (
    <div className="flex">
      <div className="w-1/2 flex justify-center px-4 tb:flex-1">
        <div className="w-96 m-auto">
          <Link href={"/"}>
            <Button.Text Icon={<Svg.Arrow />} className="w-28">
              홈으로
            </Button.Text>
          </Link>
          <Text.heading3 as="p">로그인</Text.heading3>
          <div className="flex flex-col gap-4 my-14">
            <Input
              onChange={() => {}}
              name="account_id"
              value={signInState.account_id}
              placeholder="example@email.com"
            />
            <Input
              onChange={() => {}}
              name="password"
              value={signInState.password}
              placeholder="••••••••"
            />
          </div>
          <Button.Contain>로그인</Button.Contain>
          <Link href={"/auth/sign-up"}>
            <Button.Text className="mt-2">회원가입</Button.Text>
          </Link>
        </div>
      </div>
      <div className="h-screen w-1/2 relative tb:hidden">
        <Image className="object-cover" fill src="/auth.png" alt="wqd" />
      </div>
    </div>
  );
};

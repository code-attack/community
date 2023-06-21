"use client";

import { Svg } from "@/assets";
import { Button } from "@/components/common/button";
import { Input } from "@/components/common/input";
import { Text } from "@/components/common/text";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Auth } from "@package/api-types";
import { useForm } from "@/hooks/useForm";
import { query } from "@/hooks";

export default () => {
  const { form, onChange, setForm } = useForm<Auth.SignInReq>({
    account_id: "",
    password: "",
  });

  const { mutate } = query.auth.useSignIn(form);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="flex">
      <form
        onSubmit={signIn}
        className="w-1/2 flex justify-center px-4 tb:flex-1"
      >
        <div className="w-96 m-auto">
          <Link href={"/"}>
            <Button.Text Icon={<Svg.Arrow />} className="w-28">
              홈으로
            </Button.Text>
          </Link>
          <Text.heading3 as="p">로그인</Text.heading3>
          <div className="flex flex-col gap-5 my-14">
            <Input.Basic
              label="아이디"
              onChange={onChange}
              name="account_id"
              value={form.account_id}
              placeholder="example@email.com"
            />
            <Input.Basic
              label="비밀번호"
              onChange={onChange}
              name="password"
              value={form.password}
              placeholder="••••••••"
            />
          </div>
          <Button.Contain>로그인</Button.Contain>
          <Link href={"/auth/sign-up"}>
            <Button.Text className="mt-2">회원가입</Button.Text>
          </Link>
        </div>
      </form>
      <div className="h-screen w-1/2 relative tb:hidden">
        <Image className="object-cover" fill src="/auth.png" alt="wqd" />
      </div>
    </div>
  );
};

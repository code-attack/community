"use client";

import { Svg } from "@/assets";
import { Button, Input, Switch } from "@/components";
import { Text } from "@/components/Text";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { Auth } from "@package/api-types";
import { useForm } from "@/hooks/useForm";
import { query } from "@/hooks/queries";

export default () => {
  const { form, onChange, setForm } = useForm<Auth.SignUpReq>({
    account_id: "",
    password: "",
    name: "",
    role: "menti",
  });

  const { mutate } = query.useSignUp(form);

  const signUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="flex">
      <form
        onSubmit={signUp}
        className="w-1/2 flex justify-center px-4 tb:flex-1"
      >
        <div className="w-96 m-auto">
          <Link href={"/"}>
            <Button.Text Icon={<Svg.Arrow />} className="w-28">
              홈으로
            </Button.Text>
          </Link>
          <Text.heading3 as="p">회원가입</Text.heading3>
          <div className="flex flex-col gap-4 mt-14">
            <Input
              onChange={onChange}
              name="account_id"
              value={form.account_id}
              placeholder="example@email.com"
            />
            <Input
              onChange={onChange}
              name="password"
              type="password"
              value={form.password}
              placeholder="••••••••"
            />
            <Input
              onChange={onChange}
              name="name"
              value={form.name}
              placeholder="홍길동"
            />
          </div>
          <div className="flex justify-between my-12">
            <Text.body1 as="span">멘토이신가요?</Text.body1>
            <Switch
              onClick={() => {
                setForm({
                  ...form,
                  role: form.role === "menti" ? "mento" : "menti",
                });
              }}
              role={form.role}
              className="items-center"
            />
          </div>
          <Button.Contain>회원가입</Button.Contain>
          <Link href={"/auth/sign-in"}>
            <Button.Text className="mt-2">로그인</Button.Text>
          </Link>
        </div>
      </form>
      <div className="h-screen w-1/2 relative tb:hidden">
        <Image className="object-cover" fill src="/auth.png" alt="wqd" />
      </div>
    </div>
  );
};

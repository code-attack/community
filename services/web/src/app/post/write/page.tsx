"use client";

import { Button } from "@/components/common/button";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Input } from "@/components/common/input";
import { Text } from "@/components/common/text";
import { query } from "@/hooks";
import { useForm } from "@/hooks/useForm";
import { Post } from "@package/api-types";
import { ChangeEvent, FormEvent, useState } from "react";

export default () => {
  const { form, onChange, setForm } = useForm<Post.CreateReq>({
    title: "",
    content: "",
    thumbnail: "",
  });

  const [preview, setPreview] = useState<string | null | ArrayBuffer>("");

  const { mutate } = query.post.create(form);

  const onUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const thumbnail = e.target.files[0];

    setForm({
      ...form,
      thumbnail,
    });

    const reader = new FileReader();
    reader.readAsDataURL(thumbnail);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <>
      <Header />
      <main className="m-auto w-[1192px] px-4">
        <Text.title1 className="mt-32 mb-8">글 작성</Text.title1>
        <form onSubmit={onSubmit}>
          <Input.Basic
            onChange={onChange}
            name="title"
            label="제목"
            placeholder="김치전 맛있게 만드는법"
          />
          <Input.TextArea
            onChange={onChange}
            name="content"
            label="내용"
            placeholder="오정수 먹방영상"
          />
          <Input.Upload
            label="썸네일"
            preview={preview}
            onChange={onUploadImage}
          />
          <Button.Contain>작성하기</Button.Contain>
        </form>
      </main>
      <Footer />
    </>
  );
};

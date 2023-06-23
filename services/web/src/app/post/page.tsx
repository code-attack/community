"use client";

import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import Image from "next/image";
import { Footer } from "@/components/common/footer";
import { Card } from "@/components/common/card";
import { query } from "@/hooks";
import { Post } from "@package/api-types";

export default () => {
  const { data } = query.post.useGet();
  return (
    <>
      <Header />
      {data?.data && data.data.post.map((post) => <Main {...post} />)}
      <Footer />
    </>
  );
};

const Main = ({ thumbnail, user, title, content, createdAt }: Post.ReadRes) => {
  return (
    <main className="m-auto w-[1192px] px-4">
      <Text.title1 className="mt-32 mb-8">포스팅</Text.title1>
      <div className="flex flex-wrap gap-6 gap-y-7"></div>
      <Card.Basic
        {...{
          thumbnail: thumbnail,
          name: user.name,
          date: createdAt,
          title: title,
          content: content,
          profile: user.profile_img,
        }}
      />
    </main>
  );
};

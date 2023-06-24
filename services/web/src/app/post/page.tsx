"use client";

import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import Image from "next/image";
import { Footer } from "@/components/common/footer";
import { Card } from "@/components/common/card";
import { query } from "@/hooks";
import { Post } from "@package/api-types";

export default () => {
  const { data, isLoading } = query.post.useGet();
  return (
    <>
      <Header />

      <main className="m-auto w-[1192px] px-4">
        <Text.title1 className="mt-32 mb-8">포스팅</Text.title1>
        <div className="flex gap-8 flex-wrap">
          {isLoading &&
            Array(6)
              .fill(0)
              .map(() => (
                <Card.Basic
                  isLoading={isLoading}
                  thumbnail=""
                  name=""
                  date=""
                  title=""
                  content=""
                  profile=""
                />
              ))}
          {data?.data && data.data.post.map((post) => <Main {...post} />)}
        </div>
      </main>
      <Footer />
    </>
  );
};

interface Props extends Post.ReadRes {
  isLoading?: boolean;
}
const Main = ({ thumbnail, user, title, content, createdAt }: Props) => {
  return (
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
  );
};

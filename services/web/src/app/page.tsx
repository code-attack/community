"use client";

import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import Image from "next/image";
import { Footer } from "@/components/common/footer";
import { Card } from "@/components/common/card";
import { query } from "@/hooks";

export default function Home() {
  const { data } = query.user.getUserProfile();
  return (
    <>
      <Header />
      <main className="m-auto w-[1192px] px-4">
        <Text.title1 className="mt-32 mb-8">멘토 찾기</Text.title1>
        <div className="flex flex-wrap gap-6 gap-y-7">
          {data &&
            data.data.map((profile) => (
              <Card.Profile
                id={profile.id}
                profile={profile.profile_img}
                name={profile.name}
              />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

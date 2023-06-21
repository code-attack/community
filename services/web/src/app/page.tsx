"use client";

import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import Image from "next/image";
import { Footer } from "@/components/common/footer";
import { DateInput } from "@/components/common/date";
import { Card } from "@/components/common/card";

export default function Home() {
  return (
    <>
      <Header />
      <main className="m-auto w-[1192px] px-4">
        <Text.title1>멘토 찾기</Text.title1>
        <div className="flex flex-wrap gap-6 gap-y-7">
          <Card.Profile
            id="1"
            profile="https://api.surfit.io/v1/directory/avatar/1812591446?t=1686917042"
          />
          <Card.Profile
            id="1"
            profile="https://api.surfit.io/v1/directory/avatar/1812591446?t=1686917042"
          />
          <Card.Profile
            id="1"
            profile="https://api.surfit.io/v1/directory/avatar/1812591446?t=1686917042"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

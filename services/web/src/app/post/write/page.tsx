"use client";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Text } from "@/components/common/text";

export default () => {
  return (
    <>
      <Header />
      <main className="m-auto w-[1192px] px-4">
        <Text.title1 className="mt-32 mb-8">글 작성</Text.title1>
      </main>
      <Footer />
    </>
  );
};

"use client";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Text } from "@/components/common/text";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import path from "path";

export default () => {
  const pathname = useRouter();

  return (
    <div>
      <Header />
      <main className="m-auto w-[1192px] px-4">
        <Text.title1 className="mt-32 mb-8">프로필 상세보기</Text.title1>
        <div className="flex flex-wrap gap-6 gap-y-7"></div>
      </main>
      <Footer />
    </div>
  );
};

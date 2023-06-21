"use client";

import { Text } from "@/components/common/text";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import path from "path";

export default () => {
  const pathname = useRouter();

  console.log(pathname);

  return (
    <div>
      <Text.heading2>프로필 상세보기</Text.heading2>
    </div>
  );
};

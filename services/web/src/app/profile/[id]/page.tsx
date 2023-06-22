"use client";

import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Text } from "@/components/common/text";
import { query } from "@/hooks";
import { User } from "@package/api-types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import path from "path";

interface Props {
  params: {
    id: string;
  };
}

export default ({ params }: Props) => {
  const { data } = query.user.getUserProfileById(params.id);

  return (
    <div>
      <Header />
      {data?.data && <Main {...data.data} />}
      <Footer />
    </div>
  );
};

const Main = ({ name }: User.ReadProfileRes) => {
  return (
    <main className="m-auto w-[1192px] px-4">
      <Text.title1 className="mt-32 mb-8">프로필 상세보기</Text.title1>
      <div className="flex flex-wrap gap-6 gap-y-7">
        <Text.heading4>{name}</Text.heading4>
      </div>
    </main>
  );
};

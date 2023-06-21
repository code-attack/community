import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import Image from "next/image";
import { Footer } from "@/components/common/footer";

export default () => {
  return (
    <>
      <Header />
      <main className="m-auto w-[1192px] px-4">
        <Text.title1>포스팅</Text.title1>
        <div className="flex flex-wrap gap-6 gap-y-7"></div>
      </main>
      <Footer />
    </>
  );
};

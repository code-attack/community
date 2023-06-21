import { Text } from "@/components/common/text";
import { Header } from "@/components/common/header";
import Image from "next/image";
import { Footer } from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="m-auto w-[1192px] px-4">
        <Text.title1>멘토 찾기</Text.title1>
        <div className="flex flex-wrap gap-6 gap-y-7">
          <article className="w-80 bg-slate-400 h-40"></article>
          <article className="w-80 bg-slate-400 h-40"></article>
          <article className="w-80 bg-slate-400 h-40"></article>
          <article className="w-80 bg-slate-400 h-40"></article>
        </div>
      </main>
      <Footer />
    </>
  );
}

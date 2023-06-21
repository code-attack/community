import { Text } from "@/components/common/text";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <header className="fixed right-0 left-0 bg-white z-10">
        <div className="h-20 px-4 w-[1192px] m-auto flex items-center justify-between">
          <Link className="flex items-center" href={"/"}>
            <div className="bg-slate-400 w-7 h-7"></div>
            <Text.title2 className="pl-3">Mentos</Text.title2>
          </Link>
          <Link href={"/auth/sign-in"}>
            <Text.title3>로그인 / 회원가입</Text.title3>
          </Link>
        </div>
      </header>
      <div className="pt-20" />
    </>
  );
};

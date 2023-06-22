import { Text } from "@/components/common/text";
import { clearAuthToken, getAuthToken } from "@/hooks/localstorage/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Button } from "../button";
import { LinkButtonList, headerLink } from "./constants";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const Header = () => {
  const isLogin = getAuthToken();

  const [isTop, setTop] = useState<boolean>(false);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      const isTop = (e.target as any).documentElement.scrollTop;
      setTop(isTop);
    });
  }, []);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const openDropdown = () => setDropdown(true);
  const closeDropdown = () => setDropdown(false);

  const { push } = useRouter();

  const logout = () => {
    clearAuthToken();
    push("/auth/sign-in");
  };
  return (
    <>
      <header
        className={`fixed right-0 left-0 bg-white z-10 transition-all ${
          isTop && "shadow-md"
        }`}
      >
        <div
          className={` transition-all ${
            isTop ? "h-16" : "h-20"
          } px-4 max-w-[1192px] m-auto flex items-center justify-between`}
        >
          <Link className="flex items-center" href={"/"}>
            <div className="bg-slate-400 w-7 h-7"></div>
            <Text.title2 className="pl-3">Mentos</Text.title2>
          </Link>
          {isLogin ? (
            <div className="relative">
              <Image
                className="rounded-full object-cover cursor-pointer"
                src={
                  "https://api.surfit.io/v1/directory/avatar/1812591446?t=1686917042"
                }
                width={48}
                height={48}
                onClick={openDropdown}
                alt="profile"
              />
              {dropdown && (
                <div className=" top-14 right-0 w-40 absolute">
                  <OutsideClickHandler onOutsideClick={closeDropdown}>
                    <div className="bg-white shadow-2xl rounded-md p-3">
                      <LinkButtonList links={headerLink} />
                      <Button.Text onClick={logout}>로그아웃</Button.Text>
                    </div>
                  </OutsideClickHandler>
                </div>
              )}
            </div>
          ) : (
            <Link href={"/auth/sign-in"}>
              <Text.title3>로그인 / 회원가입</Text.title3>
            </Link>
          )}
        </div>
      </header>
      <div className="pt-20" />
    </>
  );
};

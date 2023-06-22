import { Text } from "@/components/common/text";
import { clearAuthToken, getAuthToken } from "@/hooks/localstorage/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Button } from "../button";
import { LinkButtonList, headerLink } from "./constants";
import { useRouter } from "next/navigation";

const dummy =
  "https://plus.unsplash.com/premium_photo-1679731958509-d2c9c2182383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60";

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
          } px-4 w-[1192px] m-auto flex items-center justify-between`}
        >
          <Link className="flex items-center" href={"/"}>
            <div className="bg-slate-400 w-7 h-7"></div>
            <Text.title2 className="pl-3">Mentos</Text.title2>
          </Link>
          {isLogin ? (
            <div className="relative">
              <img
                className=" w-12 h-12 rounded-full object-cover"
                src={dummy}
                onClick={openDropdown}
              />
              {dropdown && (
                <div className=" top-14 right-0 w-40 absolute">
                  <OutsideClickHandler onOutsideClick={closeDropdown}>
                    <div className="bg-white shadow-md rounded-md p-3">
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

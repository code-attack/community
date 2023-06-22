import Link from "next/link";
import { Button } from "../button";

interface NavigatesType {
  link: string;
  name: string;
}

export const headerLink: NavigatesType[] = [
  { name: "프로필 작성", link: "" },
  { name: "게시글 작성", link: "" },
  { name: "채팅방 보기", link: "" },
];

interface LinkButtonListType {
  links: NavigatesType[];
}

export const LinkButtonList = ({ links }: LinkButtonListType) => {
  return (
    <>
      {links.map(({ name, link }) => (
        <Link href={link}>
          <Button.Text>{name}</Button.Text>
        </Link>
      ))}
    </>
  );
};

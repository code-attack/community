import Image from "next/image";
import { Text } from "../text";

interface Props {
  thumbnail: string;
  name: string;
  date: string;
  title: string;
  content: string;
  profile: string;
}

export const Basic = ({
  thumbnail,
  name,
  date,
  title,
  content,
  profile,
}: Props) => {
  return (
    <article className="w-80">
      <div className="relative">
        <Image fill src={thumbnail} alt="thumbnail" />
      </div>
      <Image src={profile} width={28} height={28} alt="profile" />
      <p>
        <span>{name}</span>
        <span></span>
        <span>{date}</span>
      </p>
      <Text.title2>{title}</Text.title2>
      <Text.body1 className="bg-gray-500">{title}</Text.body1>
    </article>
  );
};

import Image from "next/image";
import Link from "next/link";
import { Text } from "../text";

interface Props {
  id: number;
  profile: string | null;
  name: string;
}

export const Profile = ({ id, profile, name }: Props) => {
  return (
    <Link href={`/profile/${id}`}>
      <article className="w-[270px]">
        <Image
          className="rounded-full"
          src={
            profile ||
            "https://api.surfit.io/v1/directory/avatar/1812591446?t=1686917042"
          }
          alt="profile"
          width={270}
          height={270}
        />
        <Text.heading3>{name}</Text.heading3>
        <Text.body1 className="text-gray-500">
          공동창업자/개발자/HR @두잇
        </Text.body1>
      </article>
    </Link>
  );
};

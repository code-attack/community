import Image from "next/image";
import Link from "next/link";
import { Text } from "../text";

interface Props {
  id: string;
  profile: string;
}

export const Profile = ({ id, profile }: Props) => {
  return (
    <Link href={`/profile/${id}`}>
      <article className="w-[270px]">
        <Image
          className="rounded-full"
          src={profile}
          alt="profile"
          width={270}
          height={270}
        />
        <Text.heading3>조상현</Text.heading3>
        <Text.body1 className="text-gray-500">
          공동창업자/개발자/HR @두잇
        </Text.body1>
      </article>
    </Link>
  );
};

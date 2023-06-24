import Image from "next/image";
import { Text } from "../text";
import { Skeleton } from "./Skeleton";

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
    <Skeleton className="relative w-80 h-[382px] flex flex-col gap-[17px]">
      <div className="relative h-[180px]">
        <Image fill src="/auth.png" alt="thumbnail" />
      </div>
      <div className="absolute top-[160px] bg-white right-[33px] p-1.5 justify-center w-[40px] h-[40px] rounded-full">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image src="/auth.png" alt="profile" fill />
        </div>
      </div>
      <div className="flex flex-col gap-y-[6px] ">
        <p className="flex gap-[10px]">
          <span className="text-gray-500">{name}</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400">{date}</span>
        </p>
        <Text.title2>{title}</Text.title2>
        <Text.body1 className="text-gray-800 break-all text-ellipsis">
          {content}
        </Text.body1>
      </div>
    </Skeleton>
  );
};

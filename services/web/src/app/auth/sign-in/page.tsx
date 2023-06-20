import { Input } from "@/components";
import Image from "next/image";

export default () => {
  return (
    <h1>
      <p>sign-in</p>
      <Input />
      <Input />

      <Image src="/auth.png" alt="wqd" />
    </h1>
  );
};

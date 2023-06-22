import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      {children}
      <div className="h-screen w-1/2 relative tb:hidden">
        <Image
          className="object-cover"
          fill
          src="/auth.png"
          alt="advertisement"
        />
      </div>
    </div>
  );
};

export default AuthLayout;

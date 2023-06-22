import "../styles/globals.css";
import { pretendard } from "@/assets/font";
import { Providers } from "@/helpers/query/provider";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

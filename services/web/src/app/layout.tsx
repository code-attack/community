import "./globals.css";
import { pretendard } from "@/assets/font";
import { Providers } from "@/helpers/query/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

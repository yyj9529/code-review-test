import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Physical: Asia - 팬페이지",
  description: "넷플릭스 리얼리티 프로그램 Physical: Asia 공식 팬페이지. 아시아 8개국 최강 엘리트들의 국가 대항전",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

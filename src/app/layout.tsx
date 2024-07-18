import "./globals.css";
import type { Metadata } from "next";
import { Flowers, Footer, Header, MusicPlayer } from "@/components";
import { forum } from "@/constants";

export const metadata: Metadata = {
  title: "Свадьба Никиты и Татьяны",
  description: "Сайт-приглашение на свадьбу Никита и Татьяны Симоновых",
};

type RootLayoutProps = { children: Readonly<React.ReactNode>, };

export default function RootLayout({ children, }: RootLayoutProps) {
  return (
    <html lang="ru" className="overflow-x-hidden">
      <body className={`relative overflow-hidden ${forum.className} body flex flex-col min-h-dvh text-accent`}>
        <Header />
        {children}
        <Flowers />
        <MusicPlayer />
      </body>
    </html >
  );
}

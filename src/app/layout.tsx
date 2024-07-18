import "./globals.css";
import type { Metadata } from "next";
import { Flowers, Footer, Header, MusicPlayer } from "@/components";
import { forum } from "@/constants";

export const metadata: Metadata = {
  title: "Свадьба Никиты и Татьяны",
  description: "Сайт-приглашение на свадьбу Никита и Татьяны Симоновых",
  openGraph: {
    type: 'website',
    url: 'https://glans-site.vercel.app/', // Замените на URL вашего сайта
    title: 'Свадьба Никиты и Татьяны',
    description: 'Сайт-приглашение на свадьбу Никита и Татьяны Симоновых',
    images: {
      url: '/images/wedding.jpg',
      width: 1200,
      height: 630,
      alt: 'Свадьба Никиты и Татьяны',
    },
  },
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

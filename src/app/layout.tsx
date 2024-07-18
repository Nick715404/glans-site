import "./globals.css";
import type { Metadata } from "next";
import { Flowers, Footer, Header, MusicPlayer } from "@/components";
import { forum } from "@/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://glans-site-9l6jmoykj-nikita-simonovs-projects.vercel.app"),
  title: "Свадьба Никиты и Татьяны",
  description: "Сайт-приглашение на свадьбу Никита и Татьяны Симоновых",
  openGraph: {
    type: 'website',
    url: 'https://glans-site-9l6jmoykj-nikita-simonovs-projects.vercel.app',
    title: 'Свадьба Никиты и Татьяны',
    description: 'Сайт-приглашение на свадьбу Никита и Татьяны Симоновых',
    images: [
      {
        url: '/images/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Свадьба Никиты и Татьяны',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle', // Замените на ваш Twitter handle, если есть
    title: 'Свадьба Никиты и Татьяны',
    description: 'Сайт-приглашение на свадьбу Никита и Татьяны Симоновых',
    images: {
      url: '/images/opengraph-image.png',
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

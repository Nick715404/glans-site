import { Cinzel, Forum, Montserrat } from "next/font/google"

export const mainInfo = {
  guestsTime: "11:30",
  startOfWedding: "12:00",
  startOfBanket: "14:00",
};

export const forum = Forum({
  subsets: ["cyrillic"],
  weight: '400',
  display: 'swap',
})

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: '400',
  display: 'swap',
})
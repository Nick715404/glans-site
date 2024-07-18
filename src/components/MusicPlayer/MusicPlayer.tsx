'use client';

import { useMusicPlayer } from "./useMusicPlayer";
import Image from "next/image";

type MusicPlayerProps = {}

export const MusicPlayer = (props: MusicPlayerProps) => {
  const { isPlaying, togglePlayPause, audioRef, buttonRef, animation } = useMusicPlayer();

  return (
    <div className={`${animation} fixed top-[27%] left-[28%] border-[0.5px] border-[#AB93B9] border-solid rounded-full z-30 2xl:top-[30%] 2xl:left-[23%] md:left-[1.2rem] md:top-[11.5rem]`}>
      <audio ref={audioRef} src="/audios/perfect.mp3" />
      <button
        ref={buttonRef}
        className="h-[100px] w-[100px] rounded-full flex items-center justify-center bg-[#AB93B933] m-[10px] md:h-[60px] md:w-[60px] md:m-[5px]"
        onClick={togglePlayPause}>
        <Image width={44} height={44} src={isPlaying ? "/images/svg/note-off.svg" : "/images/svg/note.svg"} alt="Кнопка проигрывания музыки" className="md:w-[24px] md:h-[24px]" />
      </button>
    </div>
  )
}
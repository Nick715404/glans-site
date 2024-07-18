'use clietn';

import { useEffect, useRef, useState } from "react";

export const useMusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [animation, setAnimation] = useState<string>("");
  const animtate = isPlaying ? "" : "";

  useEffect(() => {
    setAnimation("animate-bounce");
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current!.pause();
    } else {
      audioRef.current!.play();
      setAnimation("");
    }
    setIsPlaying(!isPlaying);
  };

  return { buttonRef, togglePlayPause, isPlaying, audioRef, animation }
}
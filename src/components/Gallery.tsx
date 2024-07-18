import Image from "next/image";
import Link from "next/link";
import { MotionBox } from "./MotionBox";

export const Gallery = () => {
  return (
    <section className="flex flex-col items-center mb-48">
      <h2 className="text-[50px] leading-[100%] mb-[50px] md:mb-[40px] md:text-[30px]">
        Фотографии <br /> можно будет <br /> скачать здесь
      </h2>
      <MotionBox delay={0.2} className="relative w-[250px] aspect-square bg-white rounded-full flex items-center justify-center md:w-[140px]">
        <Image width={117} height={117} className="md:w-[65px] md:h-[65px]" src="/images/svg/camera.svg" alt="Иконка для ссылки на фотографии" />
        <Link className="absolute top-0 left-0 w-full h-full" href=""></Link>
      </MotionBox>
    </section>
  );
};
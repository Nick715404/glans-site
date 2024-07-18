import Image from "next/image";
import { MotionBox } from "./MotionBox";
import { cinzel } from "@/constants";

export const Header = () => {
  return (
    <header className="pt-16 md:pt-[40px]">
      <div className="container flex items-center justify-center flex-col">

        <MotionBox className="relative flex items-center justify-center w-[226px] h-[123px] mb-28 md:w-[136px] md:h-[74px] md:mb-[70px]">
          <Image className="absolute w-[226px] md:w-[136px]" priority width={226} height={123} style={{ height: 'auto' }} src="/images/png/stars-circle.svg" alt="Дата свадьбы" />
          <span className={`block font-brld-reg mt-[10px] text-4xl md:text-xl ${cinzel.className}`}>17/08/24</span>
        </MotionBox>

        <div className="relative mb-24 md:mb-16">
          <MotionBox delay={0.2} className="flex flex-col justify-center items-center text-center text-10xl leading-normal md:text-[50px]">
            <Image
              style={{ height: 'auto' }}
              className="md:w-[193px] h-auto mb-5"
              width={386}
              height={45}
              src="/images/svg/tatyana.svg"
              alt="Татьяна"
            />
            <Image
              style={{ height: 'auto' }}
              className="md:w-[190px] h-auto mb-4"
              width={367}
              height={45}
              src="/images/svg/ampersant.svg"
              alt="Амперсант или '&'"
            />
            <Image
              style={{ height: 'auto' }}
              className="md:w-[180px] h-auto"
              width={361}
              height={45}
              src="/images/svg/nikita.svg"
              alt="Никита"
            />
          </MotionBox>
        </div>

        <div className="text-center text-4xl mb-44 md:text-lg md:mb-[50px] leading-[100%]">
          <p>Скоро наступит очень <br /> трепетный и важный <br /> для нас день</p>
        </div>

      </div>
    </header>
  );
};
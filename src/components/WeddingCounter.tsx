import { Countdown } from "./Counter/Counter";

export const WeddingCounter = () => {
  const targetDate = '2024-08-17T12:00:00';
  return (
    <section className="mb-48 md:mb-[92px]">
      <div className="text-center">
        <h2 className="text-[50px] mb-[38px] leading-[100%] md:text-[30px] md:mb-[27px]">До свадьбы <br /> осталось</h2>
        <Countdown targetDate={targetDate} />
      </div>
    </section>
  );
};
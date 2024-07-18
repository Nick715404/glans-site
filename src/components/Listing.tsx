import { cinzel, mainInfo } from "@/constants";
import Image from "next/image";
import { MotionBox } from "./MotionBox";

export const Listing = () => {
  return (
    <MotionBox delay={0.2} className="mb-36">
      <ul>
        <li className="list-item">
          <div className="list-title">
            <Image className="md:w-[24px] h-auto" width={33} height={33} src="/images/svg/star.svg" alt="Иконка зведочки" />
            <p>Церемония венчания состоится:</p>
          </div>
          <span className="list-descritption"><span className={cinzel.className}>17</span> августа <span className={cinzel.className}>2024</span></span>
        </li>

        <li className="list-item">
          <div className="list-title">
            <Image className="md:w-[24px] h-auto" width={33} height={33} src="/images/svg/star.svg" alt="Иконка зведочки" />
            <p>Адрес и время венчания:</p>
          </div>
          <div className="flex flex-row gap-[20px] md:flex-col md:gap-0">
            <span className="list-descritption">ул. Красноармейская <span className={cinzel.className}>57</span></span>
            <div className="flex flex-col items-end md:items-start md:ml-[32px] list-children">
              <span className="list-children-item">Сбор гостей в <span className={cinzel.className}>{mainInfo.guestsTime}</span></span>
              <span className="list-children-item">
                Начало в <span className={cinzel.className}>{mainInfo.startOfWedding}</span>
              </span>
            </div>
          </div>
        </li>

      </ul>
    </MotionBox>
  )
}
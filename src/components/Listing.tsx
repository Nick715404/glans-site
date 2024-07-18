import { cinzel, mainInfo } from "@/constants";
import Image from "next/image";

export const Listing = () => {
  return (
    <div className="mb-36">
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
          <div className="flex flex-col">
            <span className="list-descritption">ул. Красноармейская <span className={cinzel.className}>57</span></span>
            <div className="flex flex-col items-end -mt-[31px] md:-mt-[0] md:items-start md:ml-[32px] list-children">
              <span className="list-children-item">Сбор гостей в <span className={cinzel.className}>{mainInfo.guestsTime}</span></span>
              <span className="list-children-item">
                Начало в <span className={cinzel.className}>{mainInfo.startOfWedding}</span>
              </span>
            </div>
          </div>
        </li>

        <li className="list-item">
          <div className="list-title">
            <Image className="md:w-[24px] h-auto" width={33} height={33} src="/images/svg/star.svg" alt="Иконка зведочки" />
            <p>Банкет по адресу:</p>
          </div>
          <span className="list-descritption">
            ул.Темирязева <span className={cinzel.className}>28</span>, ресторан “Sicillia”
          </span>
          <div className="flex flex-col items-end list-children md:items-start ml-[32px]">
            <span className="list-children-item">Начало в <span className={cinzel.className}>{mainInfo.startOfBanket}</span></span>
          </div>
        </li>

      </ul>
    </div>
  )
}
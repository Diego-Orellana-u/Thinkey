import Image from "next/image";
import Link from "next/link";
import { heroInfo } from "../../data/heroInfo";

import { buttonVariants } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative pt-5 desktop-s:pt-10 desktop-l:pt-8 tablet-xl:pb-20">
      <Image
        className="w-full absolute top-[-96px] -z-20 h-[130%] tablet-xl:hidden"
        src="/hero-bg.webp"
        width={320}
        height={700}
        alt=""
        priority={true}
      />

      <Image
        className="w-full absolute top-[-96px] -z-20 h-[130%] hidden tablet-xl:block"
        src="/desktop-bg.png"
        width={1440}
        height={680}
        alt=""
        priority={true}
      />

      <div className="wrapper flex flex-col">
        <div className="mb-2 max-[899px]:block hidden">
          <span className="text-[14px]">EVENTOS CIENTIFICOS Y EDUCATIVOS</span>
        </div>
        <div className="max-[899px]:block hidden drop-shadow-2xl mb-6">
          <Image
            src={heroInfo.img}
            width={1920}
            height={1280}
            className="rounded-[10px] box-shadow-hero object-cover max-h-[430px]"
            alt=""
            priority={true}
          />
        </div>
        <div className="flex tablet-xl:gap-8 desktop-s:gap-12 desktop-l:gap-18">
          <div className="flex desktop-s:mt-6 flex-col gap-6 tablet-l:gap-7 tablet-xl:w-[70%] tablet-xl:gap-4">
            <div className="min-[600px]:mb-2 tablet-xl:block hidden tablet-xl:mb-0">
              <span className="text-[14px] desktop-l:text-p-s desktop-s:pl-[3px] font-medium text-[#424142]">
                EVENTOS Y EXPERIENCIAS CIENTIFICAS/EDUCATIVAS
              </span>
            </div>
            <span className="text-h1-s min-[345px]:text-h2-s tablet-s:text-[3rem] tablet-s:leading-[57px] tablet-xl:text-[2.25rem] desktop-s:text-[3rem] desktop-s:leading-[58px] desktop-l:text-h1-xl desktop-l:leading-[75px] desktop-l:mb-3 leading-[42px] font-bold pt-1 tablet-s:pt-5 tablet-xl:pt-0">
              {heroInfo.title}
            </span>
            <p className="text-p-l text-[#424142] tablet-l:mb-2 desktop-l:mb-6 desktop-l:w-[470px]">
              {heroInfo.desc}
            </p>
            <div className="tablet-l:flex gap-8 hidden desktop-l:w-[80%]">
              <Link
                href={heroInfo.mainBtnLink}
                className={`${buttonVariants({
                  variant: "link",
                })} w-full rounded-[50px] bg-[#EA624A] border-[#EA624A] border-2 text-white font-normal`}
              >
                {heroInfo.mainBtnText}
              </Link>
              <Link
                href={heroInfo.secondBtnLink}
                className={`${buttonVariants({
                  variant: "link",
                })} w-full rounded-[50px] bg-transparent border-[#16171D] border-2 text-[#424142] font-medium text-p-s`}
              >
                {heroInfo.secondBtnText}
              </Link>
            </div>
          </div>

          <div className="tablet-xl:block hidden min-h-[700px]:pt-10 drop-shadow-2xl mb-3 tablet-xl:mb-0 tablet-xl:w-[75%]">
            <Image
              src={heroInfo.img}
              width={1920}
              height={1280}
              className="rounded-[10px] box-shadow-hero object-cover max-h-[430px] h-full"
              alt=""
              priority={true}
            />
          </div>
        </div>
      </div>

      <div className="px-5 mobile-l:px-7 pt-8 max-[767px]:block hidden">
        <Link
          href={heroInfo.mainBtnLink}
          className={`${buttonVariants({
            variant: "link",
          })} w-full rounded-[50px] bg-[#EA624A] text-white font-normal`}
        >
          {heroInfo.mainBtnText}
        </Link>
      </div>
    </div>
  );
}

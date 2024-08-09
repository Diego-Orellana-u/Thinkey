import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Hero({ heroInfo }) {
  return (
    <section className="hero h-full pt-5 desktop-s:pt-16 desktop-l:pt-24 tablet-xl:pb-20 desktop-s:pb-24 ">
      <div class="blob-cont">
        <div className="blurblob top-0 desktop-s:-right-16 desktop-l:right-[10%] desktop-s:top-12">
          <div class="yellow blob"></div>
          <div class="red blob"></div>
          <div class="green blob"></div>
        </div>
      </div>

      <div class="hidden desktop-s:flex blob-cont-two">
        <div className="blurblob-two top-0 desktop-s:left-0">
          <div class="red-two blob"></div>
        </div>
      </div>
      <div
        className={`wrapper ${
          !heroInfo.img && "pt-16 desktop-s:pt-0"
        } flex flex-col`}
      >
        <div
          className={`${
            !heroInfo.img
              ? "desktop-s:max-w-[50%]"
              : "tablet-xl:flex flex-row-reverse tablet-xl:gap-8 desktop-s:gap-12 desktop-l:gap-18"
          }`}
        >
          {heroInfo.img && (
            <div className="drop-shadow-2xl tablet-xl:self-center mb-6 tablet-xl:mb-0 tablet-xl:min-h-[700px]:pt-10 tablet-xl:w-[75%]">
              <Image
                src={heroInfo.img}
                width={1920}
                height={1280}
                className="rounded-[10px] box-shadow-hero object-cover max-h-[430px] h-full"
                alt=""
                priority={true}
              />
            </div>
          )}

          <div
            className={`desktop-s:mt-6 tablet-xl:w-[81%] ${
              !heroInfo.img
                ? "desktop-s:w-[100%] desktop-l:w-9/12 text-center desktop-s:text-left"
                : "desktop-l:w-9/12"
            } text-black-body-color`}
          >
            <h1 className="text-[14px] desktop-l:text-p-s desktop-s:pl-[3px] min-[600px]:mb-2 tablet-xl:mb-0">
              EVENTOS Y EXPERIENCIAS CIENTIFICAS
            </h1>
            <div className="flex flex-col gap-6 tablet-l:gap-7 tablet-xl:gap-4">
              <span className="text-black-heading-color desktop-s:max-w-[500px] text-h1-s min-[345px]:text-h2-s tablet-s:text-[3rem] tablet-s:leading-[57px] tablet-xl:text-[2.25rem] desktop-s:text-[3rem] desktop-s:leading-[58px] desktop-l:text-h1-xl desktop-l:leading-[63px] desktop-l:mb-3 leading-[42px] font-bold pt-1 tablet-s:pt-5 tablet-xl:pt-0">
                {heroInfo.title}
              </span>
              <p className="text-p-l tablet-l:mb-2 desktop-s:max-w-[500px]">
                {heroInfo.desc}
              </p>
              <div className="flex gap-8 justify-center desktop-s:justify-start desktop-l:w-[80%]">
                {heroInfo.mainBtnLink && (
                  <Link
                    href={heroInfo.mainBtnLink}
                    className={`${buttonVariants({
                      variant: "link",
                    })} w-full max-w-fit px-16 rounded-[50px] h-[50px] relative font-medium bg-buttons-bg text-buttons-text flex items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-secondary-buttons-bg before:duration-700 duration-700 before:ease-out hover:bg-secondary-buttons-bg hover:text-black-heading-color hover:before:h-56 hover:before:w-56 ${
                      !heroInfo.secondBtnLink &&
                      "desktop-s:max-w-fit desktop-s:px-16"
                    }`}
                  >
                    <span className="z-10">{heroInfo.mainBtnText}</span>
                  </Link>
                )}

                {heroInfo.secondBtnLink && (
                  <Link
                    href={heroInfo.secondBtnLink}
                    className={`${buttonVariants({
                      variant: "link",
                    })} hidden tablet-l:flex w-full rounded-[50px] bg-transparent border-black-heading-color border-2 text-black-body-color font-medium text-p-s`}
                  >
                    {heroInfo.secondBtnText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            stitchTiles="stitch"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </section>
  );
}
